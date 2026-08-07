"use client";

import { motion } from "framer-motion";
import { 
  SiReact, SiTypescript, SiTailwindcss,
  SiFastapi, SiNodedotjs, SiPostgresql, SiRedis,
  SiDocker, SiGit, SiFlutter
} from "react-icons/si";
import { TbPlugConnected } from "react-icons/tb";
import { PythonIcon, AwsIcon, NextjsIcon } from "./icons";

const allSkills = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: NextjsIcon, color: "var(--color-foreground)" }, 
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Python", Icon: PythonIcon, color: "" },
  { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Redis", Icon: SiRedis, color: "#DC382D" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "AWS", Icon: AwsIcon, color: "" },
  { name: "WebSockets", Icon: TbPlugConnected, color: "var(--color-foreground)" }, 
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "Flutter", Icon: SiFlutter, color: "#54C5F8" },
];

// Duplicate the array to ensure seamless infinite marquee scrolling
const marqueeSkills = [...allSkills, ...allSkills, ...allSkills, ...allSkills];

export function Skills() {
  return (
    <section id="skills" className="relative flex min-h-150 flex-col items-center justify-center overflow-hidden py-24">
      {/* Network Map Background */}
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-background)_80%)]" />

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
              // HABILIDADES
            </span>
            <div className="hidden h-px w-8 bg-pitch/50 sm:block" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl"
          >
            Habilidades Técnicas: Mi Stack
          </motion.h2>
        </div>
      </div>

      {/* Carousel Full Width */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full overflow-hidden bg-white/5 backdrop-blur-2xl shadow-[0_0_50px_-12px_rgb(var(--glow)/0.3)] z-10"
      >
        {/* Subtle luminous vertical borders at the edges of the screen */}
        <div className="absolute inset-y-0 left-0 w-0.5 bg-linear-to-b from-transparent via-pitch/70 to-transparent z-20" />
        <div className="absolute inset-y-0 right-0 w-0.5 bg-linear-to-b from-transparent via-pitch/70 to-transparent z-20" />

          {/* Marquee Content */}
          <div className="marquee-mask flex flex-col gap-10 py-16">
            
            {/* Row 1: Flows Right to Left */}
            <div className="flex w-max animate-marquee gap-14 pl-14 hover:[animation-play-state:paused]">
              {marqueeSkills.map((tech, idx) => (
                <div key={`r1-${idx}`} className="group flex flex-col items-center gap-4 transition-transform hover:scale-110 cursor-default">
                  <tech.Icon className="h-14 w-14 drop-shadow-md transition-all group-hover:drop-shadow-[0_0_15px_currentColor]" style={{ color: tech.color }} />
                  <span className="font-mono text-xs font-medium tracking-wide text-muted transition-colors group-hover:text-foreground">{tech.name}</span>
                </div>
              ))}
            </div>

            {/* Row 2: Flows Left to Right */}
            <div className="flex w-max animate-marquee gap-14 pl-14 hover:[animation-play-state:paused]" style={{ animationDirection: "reverse" }}>
              {marqueeSkills.slice().reverse().map((tech, idx) => (
                <div key={`r2-${idx}`} className="group flex flex-col items-center gap-4 transition-transform hover:scale-110 cursor-default">
                  <tech.Icon className="h-14 w-14 drop-shadow-md transition-all group-hover:drop-shadow-[0_0_15px_currentColor]" style={{ color: tech.color }} />
                  <span className="font-mono text-xs font-medium tracking-wide text-muted transition-colors group-hover:text-foreground">{tech.name}</span>
                </div>
              ))}
            </div>

          </div>
        </motion.div>
    </section>
  );
}
