"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Icon, paths } from "@/components/icons";
import { useToast } from "@/components/toast";
import { enquiryTypes, site } from "@/lib/site";

type Status = "idle" | "sending" | "sent";

const inputClass =
  "w-full px-4 py-3 rounded-lg bg-alabaster border border-forest/15 text-charcoal placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-brass focus:ring-2 focus:ring-brass/20 transition-all";
const labelClass = "block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EnquiryForm() {
  const toast = useToast();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const fullName = (data.fullName ?? "").trim();
    const email = (data.email ?? "").trim();
    const message = (data.message ?? "").trim();
    const enquiryType = data.enquiryType || enquiryTypes[0];

    if (!fullName || !EMAIL_RE.test(email) || !message) {
      setError("Please complete all required fields with valid contact information before submitting.");
      return;
    }

    setError(null);
    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, fullName, email, message, enquiryType }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setSuccessMessage(
        `Thank you, ${fullName}. Your ${enquiryType.toLowerCase()} has been recorded for Bell Oak Holdings Ltd. A member of our London office will respond to ${email} shortly.`,
      );
      setStatus("sent");
      form.reset();
      toast("Corporate enquiry submitted successfully.");
    } catch {
      setStatus("idle");
      setError(`Sorry, we couldn't send your enquiry just now. Please try again or call us on ${site.phone.display}.`);
    }
  }

  return (
    <div className="bg-white rounded-2xl p-7 sm:p-10 border border-forest/10 shadow-institutional">
      <h3 className="font-serif text-2xl font-semibold text-forest">Corporate Enquiry Form</h3>
      <p className="mt-1.5 text-sm text-slatebody">
        Complete the form below and a representative from our investment or asset management team will respond promptly.
      </p>

      {status === "sent" && (
        <div className="mt-6 p-5 rounded-xl bg-forest text-white border border-brass/40" role="status" aria-live="polite">
          <div className="flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-full bg-brass text-forest-dark flex items-center justify-center shrink-0 mt-0.5">
              <Icon d={paths.check} strokeWidth={2.2} className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-semibold text-brass-light">Enquiry Received</h4>
              <p className="mt-1 text-sm text-slate-200 leading-relaxed">{successMessage}</p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-3 text-xs font-semibold uppercase tracking-wider text-brass-light underline hover:text-white"
              >
                Submit Another Enquiry
              </button>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="mt-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm" role="alert">
          {error}
        </div>
      )}

      {status !== "sent" && (
        <form className="mt-7 space-y-5" noValidate onSubmit={onSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="fullName" className={labelClass}>
                Full Name <span className="text-brass-dark">*</span>
              </label>
              <input type="text" id="fullName" name="fullName" required autoComplete="name" placeholder="e.g. Alistair Sterling" className={inputClass} />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                Email Address <span className="text-brass-dark">*</span>
              </label>
              <input type="email" id="email" name="email" required autoComplete="email" placeholder="name@company.co.uk" className={inputClass} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone Number
              </label>
              <input type="tel" id="phone" name="phone" autoComplete="tel" placeholder="+44 (0) 20 7946 0000" className={inputClass} />
            </div>
            <div>
              <label htmlFor="enquiryType" className={labelClass}>
                Enquiry Type <span className="text-brass-dark">*</span>
              </label>
              <select id="enquiryType" name="enquiryType" required className={inputClass} defaultValue={enquiryTypes[0]}>
                {enquiryTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>
              Message <span className="text-brass-dark">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Please provide brief details regarding your enquiry or proposed opportunity..."
              className={`${inputClass} resize-y`}
            />
          </div>

          {/* Honeypot for bots: hidden from people and screen readers. */}
          <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
            <label htmlFor="website">Leave this field empty</label>
            <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs text-slatebody">
              All enquiries are treated in strict commercial confidence. See our{" "}
              <Link href="/privacy" className="underline hover:text-forest">
                privacy notice
              </Link>
              .
            </p>
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-forest text-white font-semibold text-sm tracking-wide hover:bg-forest-light transition-all shadow-sm hover:shadow cursor-pointer disabled:opacity-70 disabled:cursor-wait"
            >
              {status === "sending" ? "Sending…" : "Submit Enquiry"}
              <Icon d={paths.arrowRightLong} strokeWidth={2} className="w-4 h-4 ml-2 text-brass" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
