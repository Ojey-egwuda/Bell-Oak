import { Icon, paths } from "@/components/icons";
import { SectionLabel } from "@/components/section-label";

const pillars = [
  { title: "Market Expertise", icon: paths.globe, body: "Deep understanding of UK property markets and investment trends." },
  { title: "Disciplined Investment Approach", icon: paths.clipboard, body: "Rigorous due diligence and data-driven decision making." },
  { title: "Long-Term Focus", icon: paths.clock, body: "Building sustainable value rather than pursuing short-term gains." },
  {
    title: "Professional Standards",
    icon: paths.badge,
    body: "Commitment to transparency, accountability, and excellence in property management.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-white border-b border-forest/10" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <SectionLabel centered>Institutional Advantage</SectionLabel>
          <h2 id="why-heading" className="font-serif text-3xl sm:text-4xl font-semibold text-forest tracking-tight">
            Why Choose Bell Oak Holdings
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slatebody leading-relaxed">
            Our reputation is built upon rigorous analytical discipline, transparent governance, and enduring stewardship of capital.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((p) => (
            <div key={p.title} className="p-7 rounded-2xl bg-alabaster border border-forest/10 hover:border-brass transition-colors">
              <div className="w-11 h-11 rounded-lg bg-white border border-forest/10 text-brass-dark flex items-center justify-center shadow-sm mb-6">
                <Icon d={p.icon} className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-forest">{p.title}</h3>
              <p className="mt-3 text-sm sm:text-base text-slatebody leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
