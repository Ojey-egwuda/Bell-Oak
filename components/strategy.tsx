import Link from "next/link";
import { SectionLabel } from "@/components/section-label";

const pillars = [
  { n: "I.", text: "Acquiring quality assets in strong locations" },
  { n: "II.", text: "Enhancing value through active management" },
  { n: "III.", text: "Maintaining diversified property exposure" },
  { n: "IV.", text: "Focusing on sustainable income generation" },
  { n: "V.", text: "Delivering long-term capital appreciation" },
];

export function Strategy() {
  return (
    <section id="strategy" className="relative py-20 sm:py-28 bg-forest text-white overflow-hidden" aria-labelledby="strategy-heading">
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <div className="max-w-7xl mx-auto h-full border-x border-brass" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionLabel tone="light">Capital Allocation Framework</SectionLabel>
          <h2 id="strategy-heading" className="font-serif text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Investment Strategy
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-brass-light font-serif italic">Our investment philosophy is centred on:</p>
        </div>

        <ol className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {pillars.map((p, i) => (
            <li
              key={p.n}
              className={`rounded-xl bg-forest-light/80 border border-brass/25 p-6 flex flex-col justify-between hover:border-brass transition-colors ${
                i === pillars.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <span className="inline-block font-serif text-2xl font-semibold text-brass mb-4" aria-hidden="true">
                  {p.n}
                </span>
                <p className="text-white font-medium text-base leading-snug">{p.text}</p>
              </div>
              <div className="mt-6 h-[2px] w-8 bg-brass/50" aria-hidden="true" />
            </li>
          ))}
        </ol>

        <div className="mt-12 p-7 sm:p-9 rounded-2xl bg-forest-dark/70 border border-brass/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-4xl">
            By combining strategic acquisition with efficient management, we seek to build resilient portfolios capable of performing
            throughout market cycles.
          </p>
          <Link
            href="/#contact"
            className="shrink-0 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-brass text-forest-dark font-semibold text-sm tracking-wide hover:bg-brass-light transition-colors"
          >
            Discuss Opportunities
          </Link>
        </div>
      </div>
    </section>
  );
}
