import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/section-label";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: `How ${site.name} uses the personal information you send us.`,
};

// DRAFT: have this reviewed before launch. Items in [square brackets] need the company's details.
export default function PrivacyPage() {
  return (
    <main id="top" className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel>Legal</SectionLabel>
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-forest tracking-tight">Privacy Notice</h1>
        <p className="mt-3 text-sm text-slatebody">Last updated: [DATE]</p>

        <div className="mt-10 space-y-8 text-base sm:text-[17px] text-slatebody leading-relaxed [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-forest [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">
          <section>
            <h2>Who we are</h2>
            <p>
              {site.name} (company number {site.companyNumber}, registered in {site.registeredIn}) is the data controller for the
              personal information described in this notice. Our registered office is {site.address.oneLine}. You can contact us on{" "}
              <a className="underline text-forest" href={site.phone.href}>
                {site.phone.display}
              </a>{" "}
              or at [EMAIL ADDRESS]. Our ICO registration number is [ICO NUMBER].
            </p>
          </section>

          <section>
            <h2>What we collect</h2>
            <p>When you use our enquiry form we collect your name, email address, phone number if you give it, the type of enquiry and your message.</p>
          </section>

          <section>
            <h2>Why we use it</h2>
            <p>
              We use these details only to reply to your enquiry and, where you go on to work with us, to manage that relationship. Our
              lawful basis is our legitimate interest in responding to people who contact us, or taking steps at your request before
              entering into a contract.
            </p>
          </section>

          <section>
            <h2>Who we share it with</h2>
            <p>
              We do not sell your information. We use a small number of service providers to run this website and deliver email, who
              process it on our behalf: [HOSTING PROVIDER] and [EMAIL PROVIDER]. Where they process data outside the UK, appropriate
              safeguards are in place.
            </p>
          </section>

          <section>
            <h2>How long we keep it</h2>
            <p>We keep enquiries for [12 months] unless they lead to an ongoing relationship, in which case we keep them for as long as needed for that purpose and our legal obligations.</p>
          </section>

          <section>
            <h2>Your rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>ask for a copy of the information we hold about you</li>
              <li>ask us to correct or delete it</li>
              <li>object to or restrict how we use it</li>
            </ul>
            <p className="mt-3">
              To use any of these rights, contact us using the details above. If you are unhappy with how we handle your information you
              can complain to the Information Commissioner&apos;s Office at{" "}
              <a className="underline text-forest" href="https://ico.org.uk/make-a-complaint/" rel="noopener noreferrer" target="_blank">
                ico.org.uk
              </a>
              .
            </p>
          </section>

          <section>
            <h2>Cookies</h2>
            <p>This website does not use cookies for advertising or tracking.</p>
          </section>
        </div>

        <p className="mt-12">
          <Link href="/" className="text-sm font-semibold text-forest underline hover:text-brass-dark">
            Back to the home page
          </Link>
        </p>
      </div>
    </main>
  );
}
