import { Icon, paths } from "@/components/icons";
import { SectionLabel } from "@/components/section-label";

const principles = [
  { n: "01", title: "Strategic Investment Decisions", icon: paths.chart },
  { n: "02", title: "Long-Term Asset Growth", icon: paths.trend },
  { n: "03", title: "Responsible Risk Management", icon: paths.shield },
  { n: "04", title: "Professional Property Management", icon: paths.building },
  { n: "05", title: "Sustainable Value Creation", icon: paths.coin },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-b border-forest/10" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <SectionLabel>Corporate Profile</SectionLabel>
            <h2 id="about-heading" className="font-serif text-3xl sm:text-4xl font-semibold text-forest tracking-tight">
              About Us
            </h2>
            <div className="mt-6 space-y-5 text-base sm:text-[17px] text-slatebody leading-relaxed">
              <p>
                At <strong className="font-semibold text-forest">Bell Oak Holdings Ltd</strong>, we believe property remains one of
                the most resilient and rewarding asset classes. Our approach combines careful market analysis, strategic
                acquisitions, and active asset management to maximize investment performance.
              </p>
              <p>
                Whether investing in income-generating properties or identifying value-add opportunities, we focus on creating
                strong returns while maintaining high standards of governance and professionalism.
              </p>
            </div>

            <div className="mt-8 p-6 rounded-xl bg-alabaster border border-forest/10 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-forest text-brass flex items-center justify-center shrink-0">
                <Icon d={paths.building} strokeWidth={1.75} className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-forest">UK Multi-Sector Focus</h3>
                <p className="mt-1 text-sm text-slatebody leading-relaxed">
                  Disciplined capital allocation across residential, commercial, and mixed-use real estate assets throughout key UK
                  markets.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-alabaster rounded-2xl p-6 sm:p-9 border border-forest/10 shadow-institutional">
              <div className="flex items-center justify-between border-b border-forest/10 pb-5 mb-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brass-dark">Governance &amp; Ethos</span>
                  <h3 className="font-serif text-2xl font-semibold text-forest mt-1">Our Core Principles</h3>
                </div>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-forest/5 text-forest border border-forest/10">5 Pillars</span>
              </div>

              <ol className="space-y-3.5">
                {principles.map((p) => (
                  <li
                    key={p.n}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-forest/10 hover:border-brass transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brass-subtle text-forest flex items-center justify-center shrink-0 group-hover:bg-forest group-hover:text-brass transition-colors">
                      <Icon d={p.icon} className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-brass-dark">{p.n}</span>
                      <h4 className="font-semibold text-forest text-base">{p.title}</h4>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
