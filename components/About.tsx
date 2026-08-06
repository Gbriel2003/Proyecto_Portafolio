"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { profile } from "@/lib/config";
import { DownloadIcon } from "./icons";

export function About() {
  const { t, lang } = useLang();
  const [imgError, setImgError] = useState(false);

  const rows = [
    { k: t("about.cardPos"), v: t("about.cardPosValue") },
    { k: t("about.cardUni"), v: t("about.cardUniValue") },
    { k: t("about.cardSide"), v: t("about.cardSideValue") },
    { k: t("about.cardRemote"), v: t("about.cardRemoteValue") },
    { k: t("about.cardStack"), v: t("about.cardStackValue") },
    { k: t("about.cardEst"), v: t("about.cardEstValue") },
  ];

  return (
    <section id="about" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="bg-grid-data absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="container-x relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 font-mono text-sm uppercase tracking-[0.3em] text-pitch">{"// "}{t("about.tag")}</p>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {t("about.title")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">{t("about.p1")}</p>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{t("about.p2")}</p>
            <a
              href={profile.resume}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg border border-pitch/50 bg-panel px-5 py-3 text-sm font-semibold text-pitch transition-all hover:bg-pitch hover:text-background"
            >
              <DownloadIcon className="h-4 w-4" />
              {t("about.cta")}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-xl border border-line bg-panel shadow-[0_30px_80px_-30px_rgb(var(--glow)/0.1)]">
              <div className="flex items-center justify-center border-b border-line px-5 py-4">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  {t("about.statsLabel")}
                </span>
              </div>

              {/* Card Header with Photo Avatar Support */}
              <div className="flex flex-col sm:flex-row items-center gap-6 border-b border-line p-8">
                <div className="relative h-32 w-32 sm:h-40 sm:w-40 shrink-0 overflow-hidden rounded-3xl border-2 border-pitch bg-panel2 shadow-[0_0_50px_rgb(var(--glow)/0.4)] ring-4 ring-pitch/20">
                  {!imgError ? (
                    <Image
                      src={profile.avatar}
                      alt={profile.name}
                      onError={() => setImgError(true)}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 128px, 160px"
                      priority
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-panel2 to-panel text-pitch">
                      <span className="font-sans text-4xl sm:text-5xl font-bold">{profile.firstName.charAt(0)}</span>
                      <span className="font-mono text-[10px] sm:text-xs text-muted mt-2">UNIMAR</span>
                    </div>
                  )}
                </div>

                <div className="text-center sm:text-left mt-2 sm:mt-0">
                  <p className="font-sans text-2xl font-bold text-foreground sm:text-3xl">{profile.name}</p>
                  <p className="font-mono text-sm font-semibold text-pitch mt-1.5">{profile.title[lang]}</p>
                  <p className="font-mono text-xs text-data mt-1.5">{profile.education[lang]}</p>
                </div>
              </div>

              <div className="space-y-0 px-5 py-2 font-sans text-sm">
                {rows.map((r) => (
                  <div
                    key={r.k}
                    className="flex items-baseline justify-between gap-4 border-b border-line/50 py-3.5 last:border-0"
                  >
                    <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-muted">{r.k}</span>
                    <span className="text-right font-medium text-foreground">{r.v}</span>
                  </div>
                ))}
              </div>

              <div className="px-5 pb-5 pt-2">
                <div className="mb-2 flex items-center justify-between font-mono text-xs text-muted">
                  <span>systems & fullstack score</span>
                  <span className="text-pitch">98 / 100</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-panel2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "98%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-pitchsoft via-pitch to-data"
                  />
                </div>
              </div>

              <span className="pointer-events-none absolute -left-3 -top-3 h-6 w-6 border-l-2 border-t-2 border-data" />
              <span className="pointer-events-none absolute -bottom-3 -right-3 h-6 w-6 border-b-2 border-r-2 border-pitch" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

