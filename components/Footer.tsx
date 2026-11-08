"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useLang } from "@/lib/i18n";
import { profile } from "@/lib/config";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";
import type { LegalTab } from "./LegalModal";

const LegalModal = dynamic(
  () => import("./LegalModal").then((mod) => mod.LegalModal),
  { ssr: false }
);

export function Footer() {
  const { t } = useLang();
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [activeLegalTab, setActiveLegalTab] = useState<LegalTab>("notice");

  const openLegal = (tab: LegalTab) => {
    setActiveLegalTab(tab);
    setLegalModalOpen(true);
  };

  return (
    <footer className="border-t border-line bg-panel/40">
      <div className="container-x flex flex-col items-center gap-6 py-12 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-pitch/40 bg-panel font-mono text-sm font-bold text-pitch">
            G
          </span>
          <div>
            <p className="font-sans text-sm font-bold text-foreground">{profile.name}</p>
            <p className="font-mono text-[11px] text-muted uppercase tracking-wider">Isla de Margarita, Nueva Esparta - Venezuela</p>
          </div>
        </div>

        {/* Legal Quick Links (RGPD / ePrivacy compliance) */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-muted">
          <button
            type="button"
            onClick={() => openLegal("notice")}
            className="transition-colors hover:text-pitch focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-pitch rounded"
          >
            {t("footer.legal")}
          </button>
          <span>·</span>
          <button
            type="button"
            onClick={() => openLegal("privacy")}
            className="transition-colors hover:text-pitch focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-pitch rounded"
          >
            {t("footer.privacy")}
          </button>
          <span>·</span>
          <button
            type="button"
            onClick={() => openLegal("cookies")}
            className="transition-colors hover:text-pitch focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-pitch rounded"
          >
            {t("footer.cookies")}
          </button>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub — ${profile.name} ${t("projects.newTab")}`}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-panel text-muted transition-colors hover:border-pitch/60 hover:text-pitch focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pitch"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn — ${profile.name} ${t("projects.newTab")}`}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-panel text-muted transition-colors hover:border-data/60 hover:text-data focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-data"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label={`Email — ${profile.email}`}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-panel text-muted transition-colors hover:border-pitch/60 hover:text-pitch focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pitch"
          >
            <MailIcon className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-line/60">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 sm:flex-row">
          <p className="font-mono text-[11px] text-muted">
            © {new Date().getFullYear()} {profile.name}. {t("footer.rights")}
          </p>
          <p className="font-mono text-[11px] text-muted uppercase tracking-wider">
            {t("footer.built")}
          </p>
        </div>
      </div>

      <LegalModal
        isOpen={legalModalOpen}
        initialTab={activeLegalTab}
        onClose={() => setLegalModalOpen(false)}
      />
    </footer>
  );
}
