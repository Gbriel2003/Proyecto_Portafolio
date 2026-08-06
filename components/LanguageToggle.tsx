"use client";

import { useLang } from "@/lib/i18n";

export function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center gap-1 rounded-full border border-line bg-panel p-1">
      {(["en", "es"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          aria-label={`Change language to ${l === "en" ? "English" : "Spanish"}`}
          className={`rounded-full px-2.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider outline-none transition-colors focus-visible:ring-2 focus-visible:ring-pitch focus-visible:ring-inset ${
            lang === l ? "bg-pitch text-background" : "text-muted hover:text-foreground"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
