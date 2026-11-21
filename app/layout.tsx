import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ToastProvider } from "@/components/toast";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Strategic Real Estate Investment & Asset Growth`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: site.name,
    title: `${site.name} | Strategic Real Estate Investment & Asset Growth`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#102A22",
};

const organisationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  legalName: site.name,
  url: site.url,
  telephone: "+44 1865 641961",
  identifier: { "@type": "PropertyValue", propertyID: "Companies House", value: site.companyNumber },
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.street}, ${site.address.district}`,
    addressLocality: site.address.locality,
    postalCode: site.address.postcode,
    addressCountry: site.address.country,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <body className="bg-alabaster text-charcoal font-sans antialiased selection:bg-brass selection:text-white overflow-x-hidden">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-forest focus:text-white"
        >
          Skip to content
        </a>
        <ToastProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </ToastProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationJsonLd) }} />
      </body>
    </html>
  );
}
