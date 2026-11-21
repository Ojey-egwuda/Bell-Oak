import type { Enquiry } from "@/lib/enquiry";
import { site } from "@/lib/site";

// Branded notification email sent to the company when someone submits the enquiry form.
// Email clients ignore <style> blocks and modern CSS, so everything is table-based with inline styles.

const colours = {
  forest: "#102A22",
  forestLight: "#183C31",
  brass: "#B89558",
  brassLight: "#CEAE75",
  brassSubtle: "#F4EFE6",
  alabaster: "#FAF9F6",
  charcoal: "#1E293B",
  slate: "#475569",
  border: "#E5E1D8",
};

const typeDetails: Record<Enquiry["enquiryType"], { emoji: string; label: string }> = {
  "Investment Enquiry": { emoji: "📈", label: "investment enquiry" },
  "Partnership Opportunity": { emoji: "🤝", label: "partnership opportunity" },
  "Asset Management": { emoji: "🏢", label: "asset management enquiry" },
  "General Information": { emoji: "💬", label: "general enquiry" },
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

function formatReceived(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/London",
  }).format(date);
}

export function buildEnquiryEmail(enquiry: Enquiry, receivedAt = new Date()) {
  const { emoji, label } = typeDetails[enquiry.enquiryType];
  const firstName = enquiry.fullName.split(/\s+/)[0] || enquiry.fullName;
  const received = formatReceived(receivedAt);

  const subject = `${emoji} New ${label} from ${enquiry.fullName}`;

  const name = escapeHtml(enquiry.fullName);
  const email = escapeHtml(enquiry.email);
  const phone = enquiry.phone ? escapeHtml(enquiry.phone) : "";
  const message = escapeHtml(enquiry.message).replace(/\r?\n/g, "<br>");
  const replySubject = encodeURIComponent(`Re: Your enquiry to ${site.name}`);

  const row = (icon: string, labelText: string, value: string) => `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid ${colours.border};width:110px;vertical-align:top;font-size:13px;color:${colours.slate};">${icon}&nbsp; ${labelText}</td>
      <td style="padding:14px 0;border-bottom:1px solid ${colours.border};vertical-align:top;font-size:15px;color:${colours.charcoal};font-weight:600;">${value}</td>
    </tr>`;

  const html = `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:0;background:${colours.alabaster};font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
<div style="display:none;max-height:0;overflow:hidden;">${escapeHtml(enquiry.message.slice(0, 120))}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${colours.alabaster};padding:32px 12px;">
<tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#FFFFFF;border:1px solid ${colours.border};border-radius:16px;overflow:hidden;">

  <tr><td style="background:${colours.forest};padding:28px 32px;">
    <p style="margin:0;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:${colours.brassLight};font-weight:600;">${escapeHtml(site.name)} &middot; Website enquiry</p>
    <h1 style="margin:10px 0 0;font-family:Georgia,'Times New Roman',serif;font-size:24px;line-height:1.3;color:#FFFFFF;font-weight:600;">${emoji} New ${label}</h1>
    <p style="margin:8px 0 0;font-size:14px;color:#CBD5E1;">Received ${escapeHtml(received)}</p>
  </td></tr>

  <tr><td style="height:4px;background:${colours.brass};line-height:4px;font-size:0;">&nbsp;</td></tr>

  <tr><td style="padding:28px 32px 8px;">
    <span style="display:inline-block;padding:6px 12px;border-radius:999px;background:${colours.brassSubtle};border:1px solid ${colours.brass};color:${colours.forest};font-size:12px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;">${emoji} ${escapeHtml(enquiry.enquiryType)}</span>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:16px;">
      ${row("👤", "Name", name)}
      ${row("✉️", "Email", `<a href="mailto:${email}" style="color:${colours.forest};text-decoration:underline;">${email}</a>`)}
      ${row("📞", "Phone", phone ? `<a href="${telHref(enquiry.phone)}" style="color:${colours.forest};text-decoration:underline;">${phone}</a>` : `<span style="color:${colours.slate};font-weight:400;">Not given</span>`)}
    </table>
  </td></tr>

  <tr><td style="padding:20px 32px 8px;">
    <p style="margin:0 0 10px;font-size:13px;color:${colours.slate};">💬&nbsp; Message</p>
    <div style="background:${colours.brassSubtle};border:1px solid ${colours.border};border-radius:10px;padding:16px 18px;font-size:15px;line-height:1.6;color:${colours.charcoal};">${message}</div>
  </td></tr>

  <tr><td style="padding:24px 32px 32px;">
    <table role="presentation" cellpadding="0" cellspacing="0"><tr>
      <td style="border-radius:8px;background:${colours.forest};">
        <a href="mailto:${email}?subject=${replySubject}" style="display:inline-block;padding:13px 22px;font-size:14px;font-weight:700;color:#FFFFFF;text-decoration:none;">↩️&nbsp; Reply to ${escapeHtml(firstName)}</a>
      </td>
      ${
        phone
          ? `<td style="width:12px;"></td>
      <td style="border-radius:8px;border:1px solid ${colours.brass};">
        <a href="${telHref(enquiry.phone)}" style="display:inline-block;padding:12px 22px;font-size:14px;font-weight:700;color:${colours.forest};text-decoration:none;">📞&nbsp; Call ${escapeHtml(firstName)}</a>
      </td>`
          : ""
      }
    </tr></table>
  </td></tr>

  <tr><td style="background:${colours.alabaster};border-top:1px solid ${colours.border};padding:18px 32px;">
    <p style="margin:0;font-size:12px;line-height:1.6;color:${colours.slate};">Sent from the enquiry form on <a href="${site.url}" style="color:${colours.forest};">${escapeHtml(site.url.replace(/^https?:\/\//, ""))}</a>. Replying to this email goes straight to ${name}.</p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;

  const text = [
    `${emoji} New ${label} from the ${site.name} website`,
    `Received ${received}`,
    "",
    `Name: ${enquiry.fullName}`,
    `Email: ${enquiry.email}`,
    `Phone: ${enquiry.phone || "Not given"}`,
    `Enquiry type: ${enquiry.enquiryType}`,
    "",
    "Message:",
    enquiry.message,
    "",
    `Reply to this email to respond to ${enquiry.fullName} directly.`,
  ].join("\n");

  return { subject, html, text };
}
