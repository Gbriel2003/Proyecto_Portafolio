"use client";

import { useLang } from "@/lib/i18n";
import { tickerItems } from "@/lib/content";

export function MatchTicker() {
  const { lang } = useLang();
  const items = tickerItems[lang];
  const doubled = [...items, ...items];

  return (
    <div className="relative z-30 -mt-px border-y border-line bg-panel/80 backdrop-blur">
      <div className="flex items-center">
        <div className="z-10 flex shrink-0 items-center gap-2 border-r border-line bg-panel px-4 py-2.5">
          <span className="h-2 w-2 animate-live rounded-full bg-danger" />
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-danger">
            {lang === "en" ? "Live feed" : "En vivo"}
          </span>
        </div>
        <div className="marquee-mask relative flex-1 overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-8 py-2.5 hover:[animation-play-state:paused]">
            {doubled.map((item, i) => (
              <div key={i} className="flex shrink-0 items-center gap-3 font-mono text-xs">
                <span className="text-muted">{item.home}</span>
                <span className="font-bold text-foreground">{item.score}</span>
                <span className="text-muted">{item.away}</span>
                <span className="rounded border border-line bg-panel2 px-1.5 py-0.5 text-[10px] text-data">
                  {item.minute}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
