"use client";

import { createContext, useContext, useEffect, useState, useSyncExternalStore } from "react";
import type { ReactNode } from "react";
import { translations, type TKey, type Lang } from "./translations";

const STORAGE_KEY = "lang";

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TKey) => string;
}

const LangContext = createContext<LangContextValue | null>(null);

const listeners = new Set<() => void>();

function subscribeLang(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function getLangSnapshot(): Lang {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "es" || stored === "en") return stored;
    return navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
  } catch {
    return "es";
  }
}

function getServerLangSnapshot(): Lang {
  return "es";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const currentLang = useSyncExternalStore(
    subscribeLang,
    getLangSnapshot,
    getServerLangSnapshot
  );
  const [overrideLang, setOverrideLang] = useState<Lang | null>(null);
  const lang = overrideLang ?? currentLang;

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setOverrideLang(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
      listeners.forEach((listener) => listener());
    } catch {
      // storage unavailable
    }
  };

  const t = (key: TKey) => translations[lang]?.[key] ?? translations["es"][key] ?? key;

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
