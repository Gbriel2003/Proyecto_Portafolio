"use client";

import { motion } from "framer-motion";
import {
  SiReact, SiTypescript, SiTailwindcss,
  SiFastapi, SiPostgresql, SiSqlite,
  SiDocker, SiGit, SiExpo, SiNodedotjs
} from "react-icons/si";
import { TbBrandReactNative, TbBrain } from "react-icons/tb";
import { PythonIcon, AwsIcon, NextjsIcon } from "./icons";
import { useLang } from "@/lib/i18n";
import { skillGroups } from "@/lib/content";

const allSkills = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "React Native", Icon: TbBrandReactNative, color: "#61DAFB" },
  { name: "Next.js", Icon: NextjsIcon, color: "var(--color-foreground)" },
  { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Python", Icon: PythonIcon, color: "" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "AWS", Icon: AwsIcon, color: "" },
  { name: "Expo", Icon: SiExpo, color: "var(--color-foreground)" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "SQLite", Icon: SiSqlite, color: "#003B57" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Inteligencia Artificial", Icon: TbBrain, color: "#14F195" },
];

// Duplicate the array to ensure seamless infinite marquee scrolling
const marqueeSkills = [...allSkills, ...allSkills, ...allSkills, ...allSkills];

export function Skills() {
  const { t } = useLang();

  return (
    <section id="skills" className="relative flex flex-col items-center justify-center overflow-hidden py-24">
      {/* Network Map Background */}
      <div className="bg-grid absolute inset-0 opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-background)_80%)] pointer-events-none" />

      <div className="container-x relative z-10 mx-auto w-full max-w-6xl">
        {/* Console Header */}
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 flex items-center gap-3"
          >
            <div className="hidden h-px w-8 bg-pitch/50 sm:block" />
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-pitch uppercase">
              {"// "}{t("skills.tag")}
            </span>
            <div className="hidden h-px w-8 bg-pitch/50 sm:block" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl"
          >
            {t("skills.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 max-w-2xl text-sm sm:text-base text-muted"
          >
            {t("skills.subtitle")}
          </motion.p>
        </div>
      </div>

      {/* Carousel Full Width */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full overflow-hidden bg-white/5 backdrop-blur-2xl shadow-[0_0_50px_-12px_rgb(var(--glow)/0.3)] z-10 mb-12"
      >
        {/* Subtle luminous vertical borders at the edges of the screen */}
        <div className="absolute inset-y-0 left-0 w-0.5 bg-linear-to-b from-transparent via-pitch/70 to-transparent z-20" />
        <div className="absolute inset-y-0 right-0 w-0.5 bg-linear-to-b from-transparent via-pitch/70 to-transparent z-20" />

        {/* Marquee Content */}
        <div className="marquee-mask flex flex-col gap-10 py-14">
          {/* Row 1: Flows Right to Left */}
          <div className="flex w-max animate-marquee gap-14 pl-14 hover:[animation-play-state:paused]">
            {marqueeSkills.map((tech, idx) => (
              <div key={`r1-${idx}`} className="group flex flex-col items-center gap-3 transition-transform hover:scale-110 cursor-default">
                <tech.Icon aria-hidden="true" focusable="false" className="h-12 w-12 sm:h-14 sm:w-14 drop-shadow-md transition-all group-hover:drop-shadow-[0_0_15px_currentColor]" style={{ color: tech.color }} />
                <span className="font-mono text-xs font-medium tracking-wide text-muted transition-colors group-hover:text-foreground">{tech.name}</span>
              </div>
            ))}
          </div>

          {/* Row 2: Flows Left to Right */}
          <div className="flex w-max animate-marquee gap-14 pl-14 hover:[animation-play-state:paused]" style={{ animationDirection: "reverse" }}>
            {marqueeSkills.slice().reverse().map((tech, idx) => (
              <div key={`r2-${idx}`} className="group flex flex-col items-center gap-3 transition-transform hover:scale-110 cursor-default">
                <tech.Icon aria-hidden="true" focusable="false" className="h-12 w-12 sm:h-14 sm:w-14 drop-shadow-md transition-all group-hover:drop-shadow-[0_0_15px_currentColor]" style={{ color: tech.color }} />
                <span className="font-mono text-xs font-medium tracking-wide text-muted transition-colors group-hover:text-foreground">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Categorized Technical Architecture Groups */}
      <div className="container-x relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.labelKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-surface/40 p-6 backdrop-blur-xl transition-all duration-300 hover:border-pitch/40 hover:bg-surface/60 hover:shadow-[0_0_30px_-10px_rgba(20,241,149,0.15)]"
            >
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-widest text-pitch uppercase font-semibold">
                    0{idx + 1} {"//"} DOMAIN
                  </span>
                  <div className="h-1.5 w-1.5 rounded-full bg-pitch/70 group-hover:animate-ping" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {t(group.labelKey)}
                </h3>
                <p className="mt-1.5 text-xs text-muted leading-relaxed">
                  {t(group.descKey)}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {group.items.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] font-medium text-foreground/90 transition-colors hover:border-pitch/50 hover:bg-pitch/10 hover:text-pitch"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
