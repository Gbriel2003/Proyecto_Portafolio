"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { profile } from "@/lib/config";
import { Section } from "./Section";
import { GithubIcon, LinkedinIcon, MailIcon, ArrowIcon } from "./icons";

export function Contact() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      `${name} · ${email}`
    )}&body=${encodeURIComponent(message)}`;
    setSent(true);
  };

  return (
    <Section id="contact" tag={t("contact.tag")} title={t("contact.title")} subtitle={t("contact.subtitle")}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="font-mono text-sm text-muted">{t("contact.social")}:</p>
          <div className="mt-4 space-y-3">
            <button
              onClick={copyEmail}
              type="button"
              className="flex w-full items-center gap-3 rounded-lg border border-line bg-panel px-4 py-3 text-left outline-none transition-colors hover:border-data/60 focus-visible:ring-2 focus-visible:ring-data"
            >
              <MailIcon className="h-5 w-5 shrink-0 text-data" />
              <span className="font-mono text-sm text-foreground">{profile.email}</span>
            </button>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-line bg-panel px-4 py-3 outline-none transition-colors hover:border-pitch/60 focus-visible:ring-2 focus-visible:ring-pitch"
            >
              <GithubIcon className="h-5 w-5 shrink-0 text-pitch" />
              <span className="font-mono text-sm text-foreground">{profile.github.replace("https://", "")}</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-line bg-panel px-4 py-3 outline-none transition-colors hover:border-data/60 focus-visible:ring-2 focus-visible:ring-data"
            >
              <LinkedinIcon className="h-5 w-5 shrink-0 text-data" />
              <span className="font-mono text-sm text-foreground">{profile.linkedin.replace("https://www.", "").replace("https://", "")}</span>
            </a>
          </div>

          <div className="mt-8 rounded-xl border border-pitch/25 bg-pitch/5 p-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-pitch">{t("footer.remote")}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{profile.location}</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          {sent ? (
            <div className="flex h-full min-h-72 flex-col items-center justify-center rounded-xl border border-pitch/40 bg-panel p-10 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-pitch bg-pitch/10 text-2xl text-pitch">
                ✓
              </span>
              <h3 className="mt-5 font-sans text-2xl font-bold text-foreground">{t("contact.thanks")}</h3>
              <p className="mt-2 max-w-sm text-sm text-muted">{t("contact.thanksDesc")}</p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="space-y-5 rounded-xl border border-line bg-panel p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted">
                    {t("contact.name")}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    placeholder={t("contact.namePh")}
                    className="w-full rounded-lg border border-line bg-panel2 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-pitch/60"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted">
                    {t("contact.email")}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    placeholder={t("contact.emailPh")}
                    className="w-full rounded-lg border border-line bg-panel2 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-pitch/60"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted">
                  {t("contact.message")}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  placeholder={t("contact.messagePh")}
                  className="w-full resize-none rounded-lg border border-line bg-panel2 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-pitch/60"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-pitch px-6 py-3.5 font-sans text-sm font-bold text-background outline-none transition-all hover:shadow-[0_0_35px_-5px_rgb(var(--glow)/0.3)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pitch sm:w-auto"
              >
                {t("contact.send")}
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </motion.div>
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
    </Section>
  );
}
