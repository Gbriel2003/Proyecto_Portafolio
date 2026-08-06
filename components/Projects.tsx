"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { projects } from "@/lib/content";
import type { Project } from "@/lib/content";
import { profile } from "@/lib/config";
import { Section } from "./Section";
import { ExternalIcon, CodeIcon, ArrowIcon } from "./icons";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useLang();
  const isSports = project.category === "sports";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="card-hover group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-panel"
    >
      <div
        className={`relative flex h-36 items-center justify-center overflow-hidden border-b border-line ${
          isSports ? "bg-grid" : "bg-grid-data"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent,rgb(0_0_0/0.7))]" />
        <span
          className={`font-mono text-4xl font-bold ${
            isSports ? "text-pitch/30 text-glow" : "text-data/30 text-glow-data"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="absolute left-4 top-4 flex items-center gap-2 rounded border border-line bg-panel/80 px-2 py-1 font-mono text-[10px] uppercase tracking-widest backdrop-blur">
          <span className={`h-1.5 w-1.5 rounded-full ${isSports ? "bg-pitch" : "bg-data"}`} />
          <span className={isSports ? "text-pitch" : "text-data"}>
            {isSports ? t("projects.sportsBadge") : t("projects.fullstackBadge")}
          </span>
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <h3 className="font-sans text-xl font-bold text-foreground transition-colors group-hover:text-data sm:text-2xl">
          {project.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded border border-line bg-panel2 px-2.5 py-1 font-mono text-[11px] text-muted transition-colors ${
                isSports ? "group-hover:border-pitch/40 group-hover:text-pitch/80" : "group-hover:border-data/40 group-hover:text-data/80"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-5 border-t border-line pt-4">
          <a
            href={project.demo}
            onClick={(e) => {
              if (project.demo === "#") e.preventDefault();
            }}
            target={project.demo.startsWith("http") ? "_blank" : undefined}
            rel={project.demo.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-foreground outline-none transition-colors hover:text-data focus-visible:ring-2 focus-visible:ring-data focus-visible:ring-offset-2 focus-visible:ring-offset-panel rounded"
          >
            <ExternalIcon className="h-4 w-4" />
            {t("projects.demo")}
          </a>
          <a
            href={project.repo}
            onClick={(e) => {
              if (project.repo === "#") e.preventDefault();
            }}
            target={project.repo.startsWith("http") ? "_blank" : undefined}
            rel={project.repo.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-foreground outline-none transition-colors hover:text-pitch focus-visible:ring-2 focus-visible:ring-pitch focus-visible:ring-offset-2 focus-visible:ring-offset-panel rounded"
          >
            <CodeIcon className="h-4 w-4" />
            {t("projects.code")}
          </a>
          <ArrowIcon className="ml-auto h-4 w-4 text-muted transition-all group-hover:translate-x-1 group-hover:text-foreground" />
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const { t, lang } = useLang();

  return (
    <Section id="projects" tag={t("projects.tag")} title={t("projects.title")} subtitle={t("projects.subtitle")}>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects[lang].map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-line bg-panel px-5 py-3 font-mono text-sm text-foreground outline-none transition-colors hover:border-pitch/60 hover:text-pitch focus-visible:ring-2 focus-visible:ring-pitch"
        >
          {t("projects.viewAll")}
          <ArrowIcon className="h-4 w-4" />
        </a>
      </div>
    </Section>
  );
}
