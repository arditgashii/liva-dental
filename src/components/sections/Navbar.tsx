"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";
import { CONTACT, nav } from "@/lib/config";
import Button from "@/components/ui/Button";
import { useLanguage, useT } from "@/lib/language";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  return (
    <div className={`flex items-center gap-1 text-sm font-medium ${className}`}>
      <button type="button" aria-pressed={lang === "en"} onClick={() => setLang("en")} className={lang === "en" ? "text-brand-blue" : "text-ink/50"}>
        EN
      </button>
      <span aria-hidden>|</span>
      <button type="button" aria-pressed={lang === "sq"} onClick={() => setLang("sq")} className={lang === "sq" ? "text-brand-blue" : "text-ink/50"}>
        SQ
      </button>
    </div>
  );
}

export default function Navbar() {
  const t = useT();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 20);
    if (latest > prev && latest > 160) setHidden(true);
    else setHidden(false);
  });

  useEffect(() => {
    if (menuOpen) {
      document.documentElement.classList.add("no-scroll");
    } else {
      document.documentElement.classList.remove("no-scroll");
    }
    return () => document.documentElement.classList.remove("no-scroll");
  }, [menuOpen]);

  useEffect(() => {
    if (hoverIdx === null) {
      queueMicrotask(() => setIndicator(null));
      return;
    }
    const el = linkRefs.current[hoverIdx];
    if (!el) return;
    setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
  }, [hoverIdx]);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-white/80 shadow-[0_8px_30px_rgba(18,18,18,0.06)] backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <nav className="container-gutter flex h-[72px] items-center justify-between lg:h-[100px]">
          <Link href="#home" className="inline-flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/logo-dark.svg" alt={nav.logo} className="h-10 w-auto" />
          </Link>

          <ul
            className="relative hidden items-center gap-10 lg:flex"
            onMouseLeave={() => setHoverIdx(null)}
          >
            <AnimatePresence>
              {indicator && (
                <motion.span
                  className="absolute -bottom-1 h-[2px] rounded-full bg-brand-blue"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, left: indicator.left, width: indicator.width }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </AnimatePresence>
            {nav.links.map((link, i) => (
              <li key={link.href}>
                <Link
                  ref={(el) => {
                    linkRefs.current[i] = el;
                  }}
                  href={link.href}
                  onMouseEnter={() => setHoverIdx(i)}
                  className={`text-sm font-medium tracking-wide transition-colors ${
                    scrolled ? "text-ink/80 hover:text-brand-blue" : "text-ink/80 hover:text-brand-blue"
                  }`}
                >
                  {t(link.label)}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-5 lg:flex">
            <LanguageToggle />
            <Link href={CONTACT.phoneHref} className={`text-base font-medium ${scrolled ? "text-ink" : "text-ink"}`}>
              {t(nav.login)}
            </Link>
            <Link
              href="#contact"
              className="rounded-[10px] bg-brand-blue-pale-2 px-6 py-2.5 text-base font-medium text-[#528eaa] transition-transform hover:scale-[1.04]"
            >
              {t(nav.signUp)}
            </Link>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-ink lg:hidden"
          >
            <Menu size={26} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] flex h-dvh flex-col bg-brand-navy px-6 pt-6 pb-10 text-white lg:hidden"
          >
            <div className="flex items-center justify-between">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/logo-light.svg" alt={nav.logo} className="h-9 w-auto" />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10"
              >
                <X size={24} />
              </button>
            </div>

            <ul className="mt-16 flex flex-1 flex-col gap-2">
              {nav.links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block border-b border-white/10 py-5 font-heading text-3xl font-semibold"
                  >
                    {t(link.label)}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col gap-4"
            >
              <LanguageToggle className="text-white/80" />
              <Link href={CONTACT.phoneHref} onClick={() => setMenuOpen(false)} className="text-lg font-medium text-white/80">
                {t(nav.login)}
              </Link>
              <Button href="#contact" variant="solid" className="w-full justify-center" onClick={() => setMenuOpen(false)}>
                {t(nav.signUp)}
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
