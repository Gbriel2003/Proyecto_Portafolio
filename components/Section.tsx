"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  tag: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function Section({ id, tag, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-center justify-center text-center"
        >
          <div className="flex items-center gap-3">
            <div className="hidden h-px w-8 bg-pitch/50 sm:block" />
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-pitch">{"// "}{tag}</p>
            <div className="hidden h-px w-8 bg-pitch/50 sm:block" />
          </div>
          <h2 className="mt-4 font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {subtitle ? <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">{subtitle}</p> : null}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
