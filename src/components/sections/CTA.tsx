"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { CONTACT, cta } from "@/lib/config";
import Button from "@/components/ui/Button";
import SplitHeading from "@/components/ui/SplitHeading";
import { useT } from "@/lib/language";

export default function CTA() {
  const t = useT();
  return (
    <section id="contact" className="relative overflow-hidden bg-brand-panel py-20 lg:py-0 lg:min-h-[544px]">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[70%] opacity-90 sm:w-[55%]" aria-hidden>
        <svg viewBox="0 0 600 544" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
          <path
            fill="#80C1EF"
            d="M430 0C520 40 600 120 580 220C565 290 470 300 460 380C450 460 560 470 560 544H900V0H430Z"
          />
          <path
            fill="#80C1EF"
            fillOpacity="0.55"
            d="M330 0C280 70 180 110 190 200C198 270 300 280 300 360C300 440 190 470 210 544H900V0H330Z"
          />
        </svg>
      </div>

      <div className="container-gutter relative flex min-h-[320px] items-center py-16 lg:min-h-[544px] lg:py-0">
        <div className="max-w-[585px]">
          <SplitHeading
            text={t(cta.heading)}
            className="font-heading text-[clamp(1.75rem,1.1rem+3vw,2.75rem)] font-semibold leading-[1.15] text-ink-2"
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-[436px] text-base leading-7 text-body/80"
          >
            {t(cta.body)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-8"
          >
            <Button href={CONTACT.phoneHref}>{t(cta.ctaPrimary)}</Button>
            <a href={CONTACT.phoneHref} className="group flex items-center gap-3 text-base font-medium text-body/80">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue transition-transform duration-300 group-hover:scale-110">
                <Image src="/icons/icon-play.svg" alt="" width={16} height={16} className="translate-x-px" />
              </span>
              {t(cta.ctaSecondary)}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
