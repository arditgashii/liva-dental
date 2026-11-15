"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";

export type Lang = "en" | "sq";
export type Text = { en: string; sq: string };

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
}>({ lang: "en", setLang: () => {} });

const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getSnapshot(): Lang {
  const saved = window.localStorage.getItem("lang");
  return saved === "en" || saved === "sq" ? saved : "en";
}

function getServerSnapshot(): Lang {
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    window.localStorage.setItem("lang", l);
    listeners.forEach((fn) => fn());
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

/** Resolve a {en, sq} pair (or plain string) in the current language. */
export function useT() {
  const { lang } = useLanguage();
  return function t(value: Text | string): string {
    if (typeof value === "string") return value;
    return value[lang];
  };
}
