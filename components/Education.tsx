"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { education } from "@/lib/content";
import { Section } from "./Section";

export function Education() {
  const { t, lang } = useLang();
  const items = education[lang];

  return (
    <Section id="education" tag={t("education.tag")} title={t("education.title")} subtitle={t("education.subtitle")}>
      <div className="relative ml-3 border-l border-line pl-8 sm:ml-1">
        {items.map((item, i) => (
          <motion.div
            key={item.institution}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative pb-12 last:pb-0"
          >
            <span className="absolute -left-10.25 flex h-5 w-5 items-center justify-center rounded-full border border-pitch/50 bg-background">
              <span className="h-2 w-2 rounded-full bg-pitch" />
            </span>

            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6">
              {item.logo && (
                <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-line bg-white shadow-[0_0_30px_rgb(var(--glow)/0.15)] sm:h-24 sm:w-24">
                  <Image src={item.logo} alt={item.institution} fill className="object-contain p-3" unoptimized />
                </div>
              )}
              
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="rounded border border-data/30 bg-data/10 px-2.5 py-1 font-mono text-xs font-semibold text-data">
                    {item.period}
                  </span>
                  <span className="font-mono text-sm text-muted">{item.institution}</span>
                </div>
                
                <h3 className="mt-3 font-sans text-xl font-bold text-foreground sm:text-2xl">{item.role}</h3>

                <ul className="mt-4 space-y-2.5">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-1.5 shrink-0 font-mono text-pitch">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
