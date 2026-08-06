"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/i18n";
import { stats } from "@/lib/content";
import { Section } from "./Section";

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1400;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(Math.round(eased * value));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString()}
      <span className="text-pitch">{suffix}</span>
    </span>
  );
}

export function Stats() {
  const { t } = useLang();

  return (
    <Section id="stats" tag={t("stats.tag")} title={t("stats.title")}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.labelKey}
            className="group relative overflow-hidden rounded-xl border border-line bg-panel px-6 py-8"
          >
            <span className="absolute right-0 top-0 h-20 w-20 translate-x-1/3 -translate-y-1/3 rounded-full bg-pitch/10 blur-2xl" />
            <p className="font-sans text-4xl font-bold text-foreground sm:text-5xl">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {t(stat.labelKey as never)}
            </p>
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-pitch to-data transition-all duration-500 group-hover:w-full" />
          </div>
        ))}
      </div>
    </Section>
  );
}
