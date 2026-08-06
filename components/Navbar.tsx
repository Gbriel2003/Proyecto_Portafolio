"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { profile } from "@/lib/config";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { BoltIcon } from "./icons";

const links = [
  { id: "about", key: "nav.about" },
  { id: "education", key: "nav.education" },
  { id: "skills", key: "nav.skills" },
  { id: "projects", key: "nav.projects" },
  { id: "contact", key: "nav.contact" },
] as const;

export function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 z-50 flex flex-col items-center transition-all duration-500 ${
        scrolled ? "top-4 sm:top-6 px-4" : "top-0 px-4 sm:px-8"
      }`}
    >
      <nav
        className={`flex items-center justify-center gap-2 sm:gap-4 transition-all duration-500 ${
          scrolled
            ? "w-[95%] md:w-auto rounded-full border border-line px-4 sm:px-6 py-2.5 shadow-[0_10px_40px_-10px_rgb(var(--glow)/0.15)] bg-panel/95 backdrop-blur-xl ring-1 ring-pitch/10"
            : "w-full max-w-[110rem] py-5 border border-transparent bg-transparent"
        }`}
      >

        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="whitespace-nowrap rounded text-sm font-medium text-muted transition-all outline-none hover:text-pitch hover:scale-105 focus-visible:ring-2 focus-visible:ring-pitch focus-visible:text-pitch"
            >
              {t(l.key)}
            </a>
          ))}
          <div className="ml-2 pl-4 border-l border-line flex items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>

        <div className="flex w-full items-center justify-between md:hidden">
          <button
            type="button"
            aria-label={t("nav.menu")}
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-line bg-panel outline-none focus-visible:ring-2 focus-visible:ring-pitch"
          >
            <span
              className={`h-0.5 w-4 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`h-0.5 w-4 bg-foreground transition-transform ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 w-4 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>

      {open ? (
        <div className="mt-2 w-full max-w-4xl overflow-hidden rounded-2xl border border-line bg-panel/95 shadow-[0_10px_40px_-10px_rgb(var(--glow)/0.15)] backdrop-blur-xl ring-1 ring-pitch/10 md:hidden">
          <div className="flex flex-col py-2">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="px-5 py-3.5 text-sm font-semibold text-muted outline-none transition-colors hover:bg-panel2 hover:text-pitch focus-visible:bg-panel2 focus-visible:text-pitch"
              >
                {t(l.key)}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
