import Link from "next/link";
import { Icon, paths } from "@/components/icons";
import { site } from "@/lib/site";

function SkylineArt() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-brass/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-24 w-[500px] h-[500px] rounded-full bg-forest-muted/40 blur-3xl" />
      <svg className="absolute inset-0 w-full h-full opacity-[0.14]" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <line x1="160" y1="0" x2="160" y2="800" stroke="#B89558" strokeWidth="0.75" />
        <line x1="520" y1="0" x2="520" y2="800" stroke="#B89558" strokeWidth="0.5" strokeDasharray="4 6" />
        <line x1="920" y1="0" x2="920" y2="800" stroke="#B89558" strokeWidth="0.5" strokeDasharray="4 6" />
        <line x1="1280" y1="0" x2="1280" y2="800" stroke="#B89558" strokeWidth="0.75" />
        <line x1="0" y1="680" x2="1440" y2="680" stroke="#B89558" strokeWidth="0.75" />
        <g transform="translate(860, 120)" stroke="#B89558" strokeWidth="1">
          <polygon points="240,560 275,140 310,560" fill="none" />
          <line x1="275" y1="90" x2="275" y2="140" />
          <line x1="258" y1="340" x2="292" y2="340" />
          <line x1="250" y1="450" x2="300" y2="450" />
          <rect x="340" y="240" width="120" height="320" />
          <line x1="340" y1="300" x2="460" y2="300" />
          <line x1="340" y1="360" x2="460" y2="360" />
          <line x1="340" y1="420" x2="460" y2="420" />
          <line x1="340" y1="480" x2="460" y2="480" />
          <line x1="380" y1="240" x2="380" y2="560" />
          <line x1="420" y1="240" x2="420" y2="560" />
          <rect x="90" y="340" width="130" height="220" />
          <path d="M115 560 V430 A40 40 0 0 1 195 430 V560" />
          <circle cx="155" cy="380" r="14" />
        </g>
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative bg-forest text-white overflow-hidden" aria-labelledby="hero-heading">
      <SkylineArt />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-brass/30 backdrop-blur-sm mb-7">
            <span className="w-2 h-2 rounded-full bg-brass" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-brass-light">
              {site.name} &bull; United Kingdom
            </span>
          </div>

          <h1 id="hero-heading" className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.14]">
            Strategic Real Estate Investment &amp; Asset Growth
          </h1>

          <p className="mt-4 sm:mt-5 font-serif italic text-xl sm:text-2xl lg:text-[26px] text-brass-light font-normal">
            Building Long-Term Value Through Property Investment
          </p>

          <p className="mt-6 text-base sm:text-lg text-slate-200 leading-relaxed max-w-3xl font-light">
            Bell Oak Holdings Ltd is a UK-based real estate investment company focused on acquiring, managing, and developing
            property assets that generate sustainable growth and long-term value. We identify opportunities across residential,
            commercial, and mixed-use sectors, delivering disciplined investment strategies backed by market insight and prudent
            risk management.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-brass text-forest-dark font-semibold text-sm sm:text-base tracking-wide hover:bg-brass-light transition-all shadow-md"
            >
              Contact Us
              <Icon d={paths.arrowRight} strokeWidth={2} className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/#about"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-white/5 text-white border border-white/25 font-medium text-sm sm:text-base tracking-wide hover:bg-white/10 hover:border-brass/60 transition-all"
            >
              Learn More
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-white/10 border border-brass/30 flex items-center justify-center shrink-0 mt-0.5">
                <Icon d={paths.pin} className="w-4 h-4 text-brass" />
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-widest text-brass-light font-semibold">Registered Office</span>
                <span className="text-sm text-slate-200">71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</span>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-white/10 border border-brass/30 flex items-center justify-center shrink-0 mt-0.5">
                <Icon d={paths.phone} className="w-4 h-4 text-brass" />
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-widest text-brass-light font-semibold">Direct Telephone</span>
                <a href={site.phone.href} className="text-sm text-slate-200 hover:text-brass-light transition-colors font-medium">
                  {site.phone.display}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
