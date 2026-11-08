"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { projects } from "@/lib/content";
import type { Project } from "@/lib/content";
import { profile } from "@/lib/config";
import { Section } from "./Section";
import { ProjectLightbox } from "./ProjectLightbox";
import { ExternalIcon, CodeIcon, ArrowIcon, ZoomIcon, ExpandIcon } from "./icons";

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const { t } = useLang();
  const isSports = project.category === "sports";
  const isMobile = project.category === "mobile";
  const cover = project.screenshots[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="card-hover group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-panel"
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`${t("projects.viewScreenshots")} — ${project.name}`}
        className={`relative flex h-56 sm:h-64 cursor-pointer items-center justify-center overflow-hidden border-b border-line outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-panel ${isSports || isMobile
            ? "bg-grid focus-visible:ring-pitch"
            : "bg-grid-data focus-visible:ring-data"
          }`}
      >
        {cover ? (
          <>
            <Image
              src={cover.src}
              alt={project.name}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent,rgb(0_0_0/0.45))]" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-background/50 backdrop-blur-[2px]">
              <span className="flex items-center gap-2 rounded-full border border-pitch/50 bg-panel/95 px-4 py-2 font-mono text-xs font-semibold text-foreground shadow-2xl backdrop-blur">
                <ExpandIcon className="h-3.5 w-3.5 text-pitch" />
                {t("projects.clickToExpand")}
              </span>
            </div>
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent,rgb(0_0_0/0.7))]" />
            <span
              className={`font-mono text-4xl font-bold ${isSports || isMobile ? "text-pitch/30 text-glow" : "text-data/30 text-glow-data"
                }`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </>
        )}

        <span className="absolute left-4 top-4 flex items-center gap-2 rounded border border-line bg-panel/80 px-2 py-1 font-mono text-[10px] uppercase tracking-widest backdrop-blur">
          <span
            className={`h-1.5 w-1.5 rounded-full ${isSports || isMobile ? "bg-pitch" : "bg-data"
              }`}
          />
          <span
            className={
              isSports || isMobile ? "text-pitch" : "text-data"
            }
          >
            {isSports
              ? t("projects.sportsBadge")
              : isMobile
                ? t("projects.mobileBadge")
                : t("projects.fullstackBadge")}
          </span>
        </span>

        {project.screenshots.length > 0 && (
          <span
            className={`absolute right-4 top-4 flex items-center gap-1.5 rounded border border-line bg-panel/80 px-2 py-1 font-mono text-[10px] uppercase tracking-widest backdrop-blur ${isSports || isMobile ? "text-pitch" : "text-data"
              }`}
          >
            <ZoomIcon className="h-3 w-3" />
            {project.screenshots.length}
          </span>
        )}
      </button>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <h3 className="font-sans text-xl font-bold text-foreground transition-colors group-hover:text-data sm:text-2xl">
            {project.name}
          </h3>
          <p className="mt-2.5 text-sm leading-relaxed text-muted sm:text-base">
            {project.description}
          </p>

              {/* Key Highlights / Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="mt-3.5 flex flex-wrap gap-2">
                  {project.metrics.map((m, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 rounded-md border border-line bg-panel2/60 px-2.5 py-1 font-mono text-[11px] font-medium text-foreground/80"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-pitch shrink-0" />
                      {m}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-line/40">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                        }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-5 border-t border-line pt-4">
          {project.demo.startsWith("http") ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t("projects.demo")} — ${project.name} ${t("projects.newTab")}`}
                className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-foreground outline-none transition-colors hover:text-data focus-visible:ring-2 focus-visible:ring-data focus-visible:ring-offset-2 focus-visible:ring-offset-panel rounded"
            >
                <ExternalIcon className="h-4 w-4" />
                {t("projects.demo")}
              </a>
              ) : (
              <span
                className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-muted/70 cursor-default"
                title={t("projects.internalDemoTooltip")}
                aria-label={t("projects.internalDemoTooltip")}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-pitch/60" />
                {t("projects.internalDemo")}
              </span>
          )}

              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t("projects.code")} — ${project.name} ${t("projects.newTab")}`}
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
  const {t, lang} = useLang();
        const [activeProject, setActiveProject] = useState<Project | null>(null);

        return (
        <Section id="projects" tag={t("projects.tag")} title={t("projects.title")} subtitle={t("projects.subtitle")}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects[lang].map((p, i) => (
              <ProjectCard key={p.name} project={p} index={i} onOpen={() => setActiveProject(p)} />
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
          <ProjectLightbox
            key={activeProject ? activeProject.name : "closed"}
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        </Section>
        );
}