"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useLang } from "@/lib/i18n";
import type { Project } from "@/lib/content";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from "./icons";

interface ProjectLightboxProps {
  project: Project | null;
  onClose: () => void;
}

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export function ProjectLightbox({ project, onClose }: ProjectLightboxProps) {
  const { t } = useLang();
  const [index, setIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const screens = project?.screenshots ?? [];
  const count = screens.length;
  const current = screens[index];
  const isPitch = project?.accent === "pitch";

  useEffect(() => {
    if (!project || count === 0) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isZoomed) {
          setIsZoomed(false);
        } else {
          onClose();
        }
      } else if (e.key === "ArrowRight") {
        setIsZoomed(false);
        setIndex((i) => (i + 1) % count);
      } else if (e.key === "ArrowLeft") {
        setIsZoomed(false);
        setIndex((i) => (i - 1 + count) % count);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project, count, onClose, isZoomed]);

  useEffect(() => {
    if (!project) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [project]);

  const accentRing = isPitch ? "focus-visible:ring-pitch" : "focus-visible:ring-data";
  const accentHover = isPitch ? "hover:border-pitch/60 hover:text-pitch" : "hover:border-data/60 hover:text-data";
  const accentText = isPitch ? "text-pitch" : "text-data";
  const accentActive = isPitch ? "border-pitch bg-pitch" : "border-data bg-data";

  return (
    <AnimatePresence>
      {project && current && (
        <motion.div
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label={project.name}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/85 p-2 sm:p-6 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25 }}
            className="flex max-h-[96vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-line bg-panel shadow-[0_40px_120px_-30px_rgb(var(--glow)/0.5)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3.5">
              <span className={`truncate font-mono text-sm font-semibold ${accentText}`}>
                {project.name}
              </span>
              <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setIsZoomed((z) => !z)}
                  aria-label={isZoomed ? t("projects.zoomOut") : t("projects.zoomIn")}
                  title={isZoomed ? t("projects.zoomOut") : t("projects.zoomIn")}
                  className={`flex h-8 cursor-pointer items-center gap-1.5 rounded-md border border-line px-2.5 text-xs font-mono outline-none transition-colors hover:border-line2 ${
                    isZoomed
                      ? "border-pitch bg-pitch/10 text-pitch font-semibold"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {isZoomed ? (
                    <ZoomOutIcon className="h-3.5 w-3.5" />
                  ) : (
                    <ZoomInIcon className="h-3.5 w-3.5" />
                  )}
                  <span className="hidden sm:inline">
                    {isZoomed ? t("projects.zoomOut") : t("projects.zoomIn")}
                  </span>
                </button>

                <span className="font-mono text-xs text-muted">
                  {index + 1} / {count}
                </span>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label={t("projects.close")}
                  className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border border-line text-muted outline-none transition-colors hover:border-line2 hover:text-foreground focus-visible:ring-2 focus-visible:ring-line2"
                >
                  <CloseIcon className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Main Image Area with Zoom capability */}
            <div
              className={`relative flex-1 bg-grid-data ${
                isZoomed ? "overflow-auto" : "overflow-hidden"
              }`}
            >
              <div
                onClick={() => setIsZoomed((z) => !z)}
                title={isZoomed ? t("projects.zoomOut") : t("projects.zoomIn")}
                className={`relative h-[50vh] min-h-[350px] sm:h-[64vh] sm:min-h-[500px] w-full transition-all duration-300 ${
                  isZoomed
                    ? "cursor-zoom-out min-w-[175%] min-h-[175%]"
                    : "cursor-zoom-in"
                }`}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.src}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={current.src}
                      alt={current.caption || project.name}
                      fill
                      sizes="(max-width: 1200px) 100vw, 1200px"
                      className="object-contain"
                      unoptimized
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {count > 1 && !isZoomed && (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      setIsZoomed(false);
                      setIndex((i) => (i - 1 + count) % count);
                    }}
                    aria-label={t("projects.prev")}
                    className={`absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-line bg-panel/90 text-foreground shadow-lg outline-none backdrop-blur transition-colors ${accentHover} ${accentRing} focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
                  >
                    <ChevronLeftIcon className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsZoomed(false);
                      setIndex((i) => (i + 1) % count);
                    }}
                    aria-label={t("projects.next")}
                    className={`absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-line bg-panel/90 text-foreground shadow-lg outline-none backdrop-blur transition-colors ${accentHover} ${accentRing} focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
                  >
                    <ChevronRightIcon className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {/* Captions and Navigation Dots */}
            <div className="border-t border-line px-5 py-3.5">
              <div className="mb-2 flex justify-center gap-1.5">
                {screens.map((s, i) => (
                  <button
                    key={s.src}
                    type="button"
                    onClick={() => {
                      setIsZoomed(false);
                      setIndex(i);
                    }}
                    aria-label={`${t("projects.goto")} ${i + 1}`}
                    className={`h-1.5 cursor-pointer rounded-full outline-none transition-all focus-visible:ring-2 ${
                      i === index ? `w-6 ${accentActive}` : "w-1.5 bg-line hover:bg-muted"
                    }`}
                  />
                ))}
              </div>
              <p className="text-center font-mono text-xs leading-relaxed text-muted">
                <span className={`font-semibold ${accentText}`}>
                  {String(index + 1).padStart(2, "0")} —
                </span>{" "}
                {current.caption}
              </p>
            </div>

            {/* Thumbnail Carousel */}
            {count > 1 && (
              <div className="flex gap-2 overflow-x-auto border-t border-line px-5 py-3">
                {screens.map((s, i) => (
                  <button
                    key={s.src}
                    type="button"
                    onClick={() => {
                      setIsZoomed(false);
                      setIndex(i);
                    }}
                    aria-label={`${t("projects.goto")} ${i + 1}`}
                    className={`relative h-14 w-20 shrink-0 cursor-pointer overflow-hidden rounded-md border outline-none transition-all focus-visible:ring-2 ${accentRing} ${
                      i === index
                        ? "border-line2 opacity-100 ring-2 ring-pitch/40"
                        : "border-line opacity-40 hover:opacity-80"
                    }`}
                  >
                    <Image
                      src={s.src}
                      alt=""
                      fill
                      sizes="80px"
                      className="object-cover"
                      unoptimized
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}