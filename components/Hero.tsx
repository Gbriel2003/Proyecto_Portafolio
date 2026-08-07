"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { profile } from "@/lib/config";
import { GithubIcon, LinkedinIcon, MailIcon, ArrowIcon, MapPinIcon } from "./icons";

function useTypewriter(words: string[], typeMs = 65, deleteMs = 35, holdMs = 1800) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length];
    let delay = deleting ? deleteMs : typeMs;

    if (!deleting && text === word) {
      delay = holdMs;
    } else if (deleting && text === "") {
      delay = 250;
    }

    const timeout = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeMs, deleteMs, holdMs]);

  return text;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  const { t, lang } = useLang();
  const roles = profile.roles[lang];
  const typed = useTypewriter(roles);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-24">
      <div className="bg-grid absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_20%,rgb(var(--glow)/0.05),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_70%,rgb(var(--glow)/0.03),transparent)]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 hidden h-128 w-lg animate-spin-slow rounded-full border border-line lg:block">
        <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-pitch" />
      </div>
      <div className="pointer-events-none absolute -right-24 top-1/3 hidden h-64 w-64 rounded-full border border-line lg:block" />

      <div className="container-x relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.12, delayChildren: 0.15 }}
          >
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-pitch/30 bg-pitch/5 px-4 py-1.5 shadow-[0_0_15px_rgb(var(--glow)/0.1)] backdrop-blur-sm"
            >
              <MapPinIcon className="h-4 w-4 text-pitch" />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-foreground/90">
                {t("hero.badge")}
              </span>
            </motion.div>

            <motion.p variants={fadeUp} className="mb-2 font-mono text-sm text-muted">
              {t("hero.greeting")}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-sans text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            >
              {profile.name}
              <span className="text-pitch text-glow">.</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="mt-4 flex h-10 items-center font-sans text-xl font-semibold text-data sm:text-2xl">
              <span>{typed}</span>
              <span className="ml-1 h-7 w-0.75 animate-blink bg-data" />
            </motion.div>

            <motion.p variants={fadeUp} className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {t("hero.intro")}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-pitch px-7 py-3.5 text-sm font-semibold text-background outline-none transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_-5px_rgb(var(--glow)/0.4)] focus-visible:ring-2 focus-visible:ring-pitch focus-visible:ring-offset-2 focus-visible:ring-offset-panel"
              >
                {t("hero.ctaProjects")}
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-panel px-7 py-3.5 text-sm font-semibold text-foreground outline-none transition-all hover:scale-[1.02] hover:border-data/80 hover:text-data hover:shadow-[0_0_30px_-5px_rgb(var(--glow)/0.2)] focus-visible:ring-2 focus-visible:ring-data"
              >
                {t("hero.ctaContact")}
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-9 flex items-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-panel text-muted outline-none transition-colors hover:border-pitch/60 hover:text-pitch focus-visible:ring-2 focus-visible:ring-pitch"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-panel text-muted outline-none transition-colors hover:border-data/60 hover:text-data focus-visible:ring-2 focus-visible:ring-data"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <button
                onClick={copyEmail}
                type="button"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-panel text-muted outline-none transition-colors hover:border-pitch/60 hover:text-pitch focus-visible:ring-2 focus-visible:ring-pitch"
              >
                <MailIcon className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32, rotate: -1 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="relative hidden sm:block"
          >
            <div className="relative rounded-2xl border border-data/20 bg-panel/80 shadow-[0_30px_90px_-20px_rgb(var(--glow)/0.15)] backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-line px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-danger/70" />
                  <span className="h-3 w-3 rounded-full bg-pitch/70" />
                  <span className="h-3 w-3 rounded-full bg-data/70" />
                </div>
                <span className="font-mono text-xs text-muted">{t("hero.termTitle")}</span>
              </div>

              <div className="space-y-2.5 px-5 py-5 font-mono text-[13px] leading-relaxed">
                <p>
                  <span className="text-pitch">➜ ~</span>{" "}
                  <span className="text-foreground">whoami</span>
                </p>
                <p className="text-muted">{t("hero.termWhoami")}</p>
                <p>
                  <span className="text-pitch">➜ ~</span>{" "}
                  <span className="text-foreground">cat stack.txt</span>
                </p>
                <p className="text-data">{t("hero.termStack")}</p>
                <p>
                  <span className="text-pitch">➜ ~</span>{" "}
                  <span className="text-foreground">./fetch --match live</span>
                </p>
                <p className="text-muted">{t("hero.termFetch")}</p>
                <p>
                  <span className="text-pitch">➜ ~</span>{" "}
                  <span className="text-foreground">./stream --stats realtime</span>
                </p>
                <p className="text-pitch">{t("hero.termStream")}</p>
                <p>
                  <span className="text-pitch">➜ ~</span>{" "}
                  <span className="text-foreground">npm run deploy</span>
                </p>
                <p className="text-pitch">{t("hero.termDeploy")}</p>
                <p className="flex items-center">
                  <span className="text-pitch">➜ ~</span>
                  <span className="ml-2 inline-block h-4 w-0.5 animate-blink bg-pitch" />
                </p>
              </div>

              <div className="flex items-center justify-between rounded-b-xl border-t border-line bg-panel2 px-5 py-3">
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
                  SYSTEM STATUS
                </span>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-pitch" />
                  <span className="font-mono text-[11px] text-pitch">ALL SYSTEMS GO</span>
                </div>
              </div>

              <span className="pointer-events-none absolute -left-3 -top-3 h-6 w-6 border-l-2 border-t-2 border-pitch" />
              <span className="pointer-events-none absolute -bottom-3 -right-3 h-6 w-6 border-b-2 border-r-2 border-data" />
            </div>

            <div className="animate-float absolute -left-14 top-8 hidden rounded-lg border border-line bg-panel px-3.5 py-2.5 lg:block" style={{ animationDelay: "0.5s" }}>
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">STACK</p>
              <p className="font-mono text-base font-bold text-pitch">FastAPI + React</p>
            </div>
            <div className="animate-float absolute -right-8 bottom-10 hidden rounded-lg border border-line bg-panel px-3.5 py-2.5 lg:block" style={{ animationDelay: "1.6s" }}>
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">CONTAINER</p>
              <p className="font-mono text-base font-bold text-data">Dockerized</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted lg:flex">
        <span className="font-mono text-[11px] uppercase tracking-[0.3em]">{t("hero.scroll")}</span>
        <span className="h-10 w-px animate-live bg-linear-to-b from-pitch to-transparent" />
      </div>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2.5 rounded-full border border-pitch/30 bg-panel/90 px-5 py-2.5 shadow-[0_10px_40px_-10px_rgb(var(--glow)/0.3)] backdrop-blur-md"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-pitch/20 text-xs font-bold text-pitch">✓</span>
            <span className="font-sans text-sm font-medium text-foreground">¡Correo copiado!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
