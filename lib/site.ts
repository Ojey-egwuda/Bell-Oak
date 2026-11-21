// Company details used across the site. Update here, not in the components.
export const site = {
  name: "Bell Oak Holdings Ltd",
  shortName: "Bell Oak Holdings",
  tagline: "Real Estate Investment",
  description:
    "Bell Oak Holdings Ltd is a UK-based real estate investment company focused on acquiring, managing, and developing property assets that generate sustainable growth and long-term value.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.belloakholdings.co.uk",
  companyNumber: "17464434",
  registeredIn: "England and Wales",
  email: "enquiries@belloakholdings.co.uk",
  privacyEmail: "privacy@belloakholdings.co.uk",
  phone: { display: "01865 641961", href: "tel:+441865641961" },
  address: {
    lines: ["71-75 Shelton Street", "Covent Garden", "London WC2H 9JQ", "United Kingdom"],
    street: "71-75 Shelton Street",
    locality: "London",
    district: "Covent Garden",
    postcode: "WC2H 9JQ",
    country: "GB",
    oneLine: "71-75 Shelton Street, Covent Garden, London WC2H 9JQ, United Kingdom",
  },
} as const;

export const nav = [
  { href: "/#about", label: "About", mobileLabel: "About Us" },
  { href: "/#services", label: "Services", mobileLabel: "Our Services" },
  { href: "/#why-us", label: "Why Us", mobileLabel: "Why Choose Us" },
  { href: "/#strategy", label: "Strategy", mobileLabel: "Investment Strategy" },
  { href: "/#contact", label: "Contact", mobileLabel: "Contact Us" },
] as const;

export const enquiryTypes = [
  "Investment Enquiry",
  "Partnership Opportunity",
  "Asset Management",
  "General Information",
] as const;
