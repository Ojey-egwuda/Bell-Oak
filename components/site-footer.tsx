import Link from "next/link";
import { Emblem } from "@/components/icons";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-forest-dark text-white border-t border-brass/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
          <div className="max-w-xl">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-forest flex items-center justify-center border border-brass/40">
                <Emblem className="w-5 h-5 text-brass" />
              </div>
              <div>
                <span className="font-serif text-xl font-semibold text-white block leading-none">{site.name}</span>
                <span className="text-xs uppercase tracking-[0.18em] text-brass-light block mt-1">
                  Real Estate Investment &amp; Asset Management
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-300 leading-relaxed">
              Investing in property with a focus on long-term value creation and responsible asset stewardship.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-300">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-brass-light transition-colors">
                {item.mobileLabel}
              </Link>
            ))}
            <Link href="/privacy" className="hover:text-brass-light transition-colors">
              Privacy Notice
            </Link>
          </nav>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All Rights Reserved. Registered in {site.registeredIn}, company no.{" "}
            {site.companyNumber}.
          </p>
          <p>
            {site.address.oneLine} &bull; Tel: {site.phone.display}
          </p>
        </div>
      </div>
    </footer>
  );
}
