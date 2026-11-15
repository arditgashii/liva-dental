"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { hero } from "@/lib/config";
import Button from "@/components/ui/Button";
import MagneticButton from "@/components/ui/MagneticButton";
import SplitHeading from "@/components/ui/SplitHeading";
import RevealImage from "@/components/ui/RevealImage";
import { useT } from "@/lib/language";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay },
});

export default function Hero() {
  const t = useT();
  return (
    <section id="home" className="relative overflow-clip bg-brand-panel pt-[88px] lg:pt-0">
      <div className="container-gutter grid grid-cols-1 items-center gap-10 py-14 lg:grid-cols-[1fr_1fr] lg:gap-0 lg:py-0">
        {/* Text column */}
        <div className="relative z-10 max-w-[596px] lg:py-[180px]">
          <motion.div {...fadeUp(0)} className="mb-5 flex items-center gap-2">
            <Image src="/icons/icon-check-circle.svg" alt="" width={18} height={18} />
            <span className="text-sm font-semibold tracking-[1px] text-brand-blue/80">{t(hero.eyebrow)}</span>
          </motion.div>

          <SplitHeading
            text={t(hero.heading)}
            className="font-heading text-[clamp(2rem,1.1rem+4.2vw,3.4375rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink"
          />

          <motion.p {...fadeUp(0.15)} className="mt-6 max-w-[520px] text-base leading-[26px] tracking-[0.3px] text-body/80">
            {t(hero.body)}
          </motion.p>

          <motion.div {...fadeUp(0.25)} className="mt-9 flex flex-wrap items-center gap-8">
            <Button href="#contact">{t(hero.ctaPrimary)}</Button>

            <MagneticButton
              aria-label={t(hero.ctaSecondary)}
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              className="group flex items-center gap-3 text-base font-medium text-body/80"
            >
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue transition-transform duration-300 group-hover:scale-110">
                <Image src="/icons/icon-play.svg" alt="" width={16} height={16} className="translate-x-px" />
              </span>
              {t(hero.ctaSecondary)}
            </MagneticButton>
          </motion.div>
        </div>

        {/* Visual column */}
        <div className="relative isolate -mx-5 sm:mx-0">
          <div className="relative h-[320px] sm:h-[420px] lg:h-[801px] lg:rounded-bl-[clamp(70px,24vw,350px)] bg-brand-blue-light rounded-[24px] lg:rounded-tl-none lg:rounded-tr-none lg:rounded-br-none">
            <RevealImage
              className="absolute inset-0 h-full w-full overflow-hidden rounded-[24px] lg:rounded-bl-[clamp(70px,24vw,350px)] lg:rounded-tl-none lg:rounded-tr-none lg:rounded-br-none"
              parallax={30}
            >
              <Image
                src={hero.image.src}
                alt={t(hero.image.alt)}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </RevealImage>

            {/* Qualified Work Team badge */}
            <motion.div
              {...fadeUp(0.5)}
              className="absolute right-4 top-6 hidden items-center gap-3 rounded-[20px] bg-white px-5 py-4 shadow-soft sm:flex lg:right-[3%] lg:top-[35%]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-orange/15">
                <Image src="/icons/icon-setting.svg" alt="" width={21} height={22} />
              </span>
              <span>
                <span className="block font-heading text-lg font-semibold leading-tight text-ink-3">{hero.badgeTeam.title}</span>
                <span className="block text-sm text-body/70">{t(hero.badgeTeam.subtitle)}</span>
              </span>
            </motion.div>

            {/* Shield icon badge */}
            <motion.div
              {...fadeUp(0.35)}
              className="absolute left-4 top-6 flex h-16 w-16 items-center justify-center rounded-[20px] bg-white shadow-soft sm:h-[88px] sm:w-[88px] lg:left-[6%] lg:top-[25%]"
            >
              <Image src="/icons/icon-shield-done.svg" alt="" width={34} height={40} />
            </motion.div>
          </div>

          {/* Best Cleaning Service floating card */}
          <motion.div
            {...fadeUp(0.6)}
            className="relative z-10 mx-auto -mt-10 flex w-[85%] max-w-[302px] items-center gap-4 rounded-[24px] bg-white p-6 shadow-soft sm:-mt-14 lg:absolute lg:left-[-14%] lg:bottom-[18%] lg:mt-0 lg:w-[302px]"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-orange/15">
              <Image src="/icons/icon-activity.svg" alt="" width={28} height={28} />
            </span>
            <span>
              <span className="block font-heading text-3xl font-semibold leading-none text-ink-3">{hero.badgeShield.title}</span>
              <span className="mt-2 block text-sm text-body/70">{t(hero.badgeShield.subtitle)}</span>
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
