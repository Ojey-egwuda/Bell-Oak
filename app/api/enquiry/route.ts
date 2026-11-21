import { NextResponse } from "next/server";
import { enquirySchema, type Enquiry } from "@/lib/enquiry";
import { site } from "@/lib/site";

// Simple per-instance rate limit: 5 enquiries per IP per 10 minutes.
// Good enough for a brochure site; use a shared store (e.g. Upstash) if traffic grows.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

async function sendEmail(enquiry: Enquiry) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL;
  const from = process.env.ENQUIRY_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[enquiry] Email not configured. Enquiry received:", { ...enquiry, website: undefined });
      return true;
    }
    console.error("[enquiry] RESEND_API_KEY, ENQUIRY_TO_EMAIL and ENQUIRY_FROM_EMAIL must be set in production.");
    return false;
  }

  const text = [
    `New ${enquiry.enquiryType.toLowerCase()} from the ${site.name} website`,
    "",
    `Name: ${enquiry.fullName}`,
    `Email: ${enquiry.email}`,
    `Phone: ${enquiry.phone || "Not given"}`,
    `Enquiry type: ${enquiry.enquiryType}`,
    "",
    "Message:",
    enquiry.message,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: to.split(",").map((s) => s.trim()),
      reply_to: enquiry.email,
      subject: `Website enquiry: ${enquiry.enquiryType} from ${enquiry.fullName}`,
      text,
    }),
  });

  if (!res.ok) {
    console.error("[enquiry] Email provider error", res.status, await res.text().catch(() => ""));
    return false;
  }
  return true;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "Too many enquiries. Please try again later." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    // A filled honeypot means a bot: pretend it worked so it doesn't retry.
    const honeypot = typeof body === "object" && body && "website" in body && (body as { website?: string }).website;
    if (honeypot) return NextResponse.json({ ok: true });
    return NextResponse.json({ ok: false, error: "Please check the form and try again." }, { status: 400 });
  }

  const sent = await sendEmail(parsed.data);
  if (!sent) {
    return NextResponse.json({ ok: false, error: "We couldn't send your enquiry." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
