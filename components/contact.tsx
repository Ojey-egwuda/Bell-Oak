import { CopyDetailsButton } from "@/components/copy-details-button";
import { EnquiryForm } from "@/components/enquiry-form";
import { Icon, paths } from "@/components/icons";
import { SectionLabel } from "@/components/section-label";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-alabaster" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <SectionLabel>Corporate Communications</SectionLabel>
              <h2 id="contact-heading" className="font-serif text-3xl sm:text-4xl font-semibold text-forest tracking-tight">
                Contact Us
              </h2>
              <p className="mt-4 text-base text-slatebody leading-relaxed">
                For investment enquiries, partnership opportunities, or general information, please contact us using the details
                below or the enquiry form.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-forest/10 shadow-institutional space-y-6">
              <div>
                <h3 className="font-serif text-xl font-semibold text-forest">{site.name}</h3>
                <p className="text-xs uppercase tracking-[0.18em] text-brass-dark font-semibold mt-1">Registered Office</p>
              </div>

              <div className="space-y-5 pt-2 border-t border-forest/10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brass-subtle text-forest flex items-center justify-center shrink-0 mt-0.5">
                    <Icon d={paths.pin} className="w-5 h-5" />
                  </div>
                  <address className="not-italic text-sm sm:text-base text-charcoal leading-relaxed">
                    {site.address.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brass-subtle text-forest flex items-center justify-center shrink-0">
                    <Icon d={paths.phone} className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-slatebody font-medium">Telephone</span>
                    <a href={site.phone.href} className="text-base sm:text-lg font-semibold text-forest hover:text-brass-dark transition-colors">
                      {site.phone.display}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-forest/10">
                <CopyDetailsButton />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
