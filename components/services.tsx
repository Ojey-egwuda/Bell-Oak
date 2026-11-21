import { Icon, paths } from "@/components/icons";
import { SectionLabel } from "@/components/section-label";

const services = [
  {
    n: "01",
    title: "Property Investment",
    icon: paths.towers,
    body: "Acquisition and management of residential, commercial, and mixed-use real estate assets with a focus on long-term growth and capital preservation.",
    tag: <>Residential &bull; Commercial &bull; Mixed-Use</>,
  },
  {
    n: "02",
    title: "Asset Management",
    icon: paths.report,
    body: "Active oversight of property portfolios to enhance operational performance, occupancy levels, and asset value.",
    tag: <>Portfolio &amp; Occupancy Optimisation</>,
  },
  {
    n: "03",
    title: "Property Development",
    icon: paths.layout,
    body: "Identifying opportunities to improve and reposition assets to unlock additional value and maximize returns.",
    tag: <>Asset Repositioning &amp; Value-Add</>,
  },
  {
    n: "04",
    title: "Investment Partnerships",
    icon: paths.people,
    body: "Working with investors, stakeholders, and strategic partners on carefully selected property opportunities.",
    tag: <>Aligned Co-Investment Structures</>,
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-alabaster border-b border-forest/10" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionLabel>Core Capabilities</SectionLabel>
          <h2 id="services-heading" className="font-serif text-3xl sm:text-4xl font-semibold text-forest tracking-tight">
            Our Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slatebody leading-relaxed">
            Comprehensive real estate investment, operational oversight, and development capabilities structured to protect capital
            and enhance asset performance.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((s) => (
            <article
              key={s.n}
              className="group bg-white rounded-2xl p-8 sm:p-10 border border-forest/10 shadow-institutional hover:shadow-institutional-hover hover:border-brass/70 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-forest text-brass flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon d={s.icon} strokeWidth={1.75} className="w-6 h-6" />
                  </div>
                  <span className="font-serif text-sm text-brass-dark font-medium">{s.n}</span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-forest group-hover:text-brass-dark transition-colors">{s.title}</h3>
                <p className="mt-3.5 text-slatebody text-base leading-relaxed">{s.body}</p>
              </div>
              <div className="mt-8 pt-5 border-t border-forest/10 flex items-center justify-between text-xs uppercase tracking-wider font-semibold text-forest/70">
                <span>{s.tag}</span>
                <span className="w-2 h-2 rounded-full bg-brass" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
