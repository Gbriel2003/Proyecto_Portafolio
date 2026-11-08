"use client";

import { useLang } from "@/lib/i18n";

export function SkipLink() {
  const { t } = useLang();

  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:border focus:border-pitch focus:bg-panel focus:px-4 focus:py-2.5 focus:font-mono focus:text-xs focus:font-bold focus:text-pitch focus:shadow-[0_0_25px_-5px_rgba(20,241,149,0.5)] focus:outline-none"
    >
      {t("nav.skip")}
    </a>
  );
}

