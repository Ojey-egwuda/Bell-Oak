"use client";

import { useEffect, useRef, useState } from "react";
import { Icon, paths } from "@/components/icons";
import { useToast } from "@/components/toast";
import { site } from "@/lib/site";

const officeText = [site.name, `Registered Office: ${site.address.oneLine}`, `Telephone: ${site.phone.display}`].join("\n");

export function CopyDetailsButton() {
  const toast = useToast();
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(officeText);
      setCopied(true);
      toast("Registered office details copied to clipboard.");
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 3000);
    } catch {
      toast(`${site.address.street}, ${site.address.locality} ${site.address.postcode} | Tel: ${site.phone.display}`);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-forest hover:text-brass-dark transition-colors py-1.5"
    >
      <Icon d={paths.copy} className="w-4 h-4" />
      <span>{copied ? "Office Details Copied" : "Copy Registered Office Details"}</span>
    </button>
  );
}
