"use client";

import { useLang } from "@/lib/i18n";
import { profile } from "@/lib/config";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";

export function Footer() {
  const { t } = useLang();

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

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-panel text-muted transition-colors hover:border-pitch/60 hover:text-pitch"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-panel text-muted transition-colors hover:border-data/60 hover:text-data"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-panel text-muted transition-colors hover:border-pitch/60 hover:text-pitch"
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
    </footer>
  );
}
