export function SectionLabel({
  children,
  tone = "dark",
  centered = false,
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
  centered?: boolean;
}) {
  const color = tone === "light" ? "text-brass-light" : "text-brass-dark";
  return (
    <div className={`inline-flex items-center ${centered ? "justify-center" : ""} gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${color} mb-3`}>
      <span className="w-6 h-[1.5px] bg-brass" aria-hidden="true" />
      {children}
      {centered && <span className="w-6 h-[1.5px] bg-brass" aria-hidden="true" />}
    </div>
  );
}
