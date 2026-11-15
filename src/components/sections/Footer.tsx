"use client";

import { motion } from "motion/react";
import { footer, nav } from "@/lib/config";
import { useT } from "@/lib/language";

export default function Footer() {
  const t = useT();
  return (
    <footer className="bg-white">
      <div className="container-gutter grid grid-cols-2 gap-10 py-16 sm:grid-cols-4 lg:py-20">
        {footer.columns.map((col, i) => (
          <motion.div
            key={col.title.en}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <h3 className="font-heading text-lg font-semibold text-brand-orange">{t(col.title)}</h3>
            <ul className="mt-5 flex flex-col gap-4">
              {col.links.map((link) => (
                <li key={link.label.en}>
                  <a href={link.href} className="text-sm text-body/75 transition-colors hover:text-brand-blue">
                    {t(link.label)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="col-span-2 sm:col-span-1"
        >
          <h3 className="font-heading text-lg font-semibold text-brand-orange">{t(footer.about.title)}</h3>
          <p className="mt-5 max-w-[240px] text-sm leading-6 text-body/75">{t(footer.about.body)}</p>
          <p className="mt-4 text-sm text-body/75">{footer.about.phone}</p>
          <p className="text-sm text-body/75">{footer.about.email}</p>
        </motion.div>
      </div>

      <div className="bg-brand-navy">
        <div className="container-gutter flex flex-col items-center gap-2 py-7 text-sm text-white/90 sm:flex-row sm:justify-between">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo-light.svg" alt={nav.logo} className="h-8 w-auto" />
          <span className="text-center">
            <span className="block text-xs text-white/60">{t(footer.concept)}</span>
            <span>{t(footer.copyright)}</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
