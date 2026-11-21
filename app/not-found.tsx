import Link from "next/link";

export default function NotFound() {
  return (
    <main id="top" className="py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-forest tracking-tight">Page not found</h1>
        <p className="mt-4 text-slatebody">The page you were looking for doesn&apos;t exist or has moved.</p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-forest text-white font-semibold text-sm tracking-wide hover:bg-forest-light transition-all"
        >
          Back to the home page
        </Link>
      </div>
    </main>
  );
}
