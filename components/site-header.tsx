"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Emblem, Icon, paths } from "@/components/icons";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header id="navbar" className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-forest/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link href="/#top" className="flex items-center gap-3.5 group" aria-label={`${site.name} home`}>
            <div className="w-11 h-11 rounded-lg bg-forest flex items-center justify-center border border-brass/40 shadow-sm group-hover:border-brass transition-colors">
              <Emblem className="w-6 h-6 text-brass" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-semibold tracking-tight text-forest leading-none">{site.name}</span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-brass-dark font-medium mt-1">{site.tagline}</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-charcoal hover:text-brass-dark transition-colors py-2">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-forest text-white text-sm font-medium tracking-wide hover:bg-forest-light border border-forest transition-all shadow-sm hover:shadow"
            >
              Enquire Now
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center p-3 rounded-lg text-forest hover:bg-forest/5 focus:outline-none focus:ring-2 focus:ring-brass"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <Icon d={open ? paths.close : paths.menu} className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="lg:hidden bg-white border-b border-forest/10 px-4 pt-2 pb-6 space-y-1 shadow-lg">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-lg text-base font-medium text-charcoal hover:bg-alabaster hover:text-forest"
            >
              {item.mobileLabel}
            </Link>
          ))}
          <div className="pt-3 px-4">
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-lg bg-forest text-white text-sm font-semibold tracking-wide hover:bg-forest-light transition-colors"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
