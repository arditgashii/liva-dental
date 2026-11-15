"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { about } from "@/lib/config";
import SplitHeading from "@/components/ui/SplitHeading";
import RevealImage from "@/components/ui/RevealImage";
import { useT } from "@/lib/language";

export default function About() {
  const t = useT();
  return (
    <section id="about" className="bg-white py-20 lg:py-32">
      <div className="container-gutter grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1fr] lg:gap-10">
        {/* Image composition */}
        <div className="relative mx-auto aspect-[478/601] w-full max-w-[478px] lg:mx-0">
          <RevealImage className="absolute inset-0 h-full w-full" parallax={20}>
            <Image
              src="/images/about-main.webp"
              alt="Bright, warm dental clinic reception area with plants and natural light"
              fill
              sizes="(min-width:1024px) 40vw, 90vw"
              className="rounded-[10px] object-cover shadow-soft"
            />
          </RevealImage>

          <motion.div
            initial={{ opacity: 0, x: -24, y: -24 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="absolute -left-6 -top-6 w-[42%] overflow-hidden rounded-[10px] bg-white p-2 shadow-soft sm:-left-8 sm:-top-8"
          >
            <div className="relative aspect-[195/255] w-full overflow-hidden rounded-[6px]">
              <Image
                src="/images/about-small-1.webp"
                alt="Cozy dental clinic waiting area with warm wood furniture"
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24, y: 24 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            className="absolute -bottom-6 -right-4 w-[42%] overflow-hidden rounded-[10px] bg-white p-2 shadow-soft sm:-bottom-10 sm:-right-8"
          >
            <div className="relative aspect-[195/245] w-full overflow-hidden rounded-[6px]">
              <Image
                src="/images/about-small-2.webp"
                alt="Close-up of modern dental treatment chair and equipment"
                fill
                sizes="18vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Text content */}
        <div>
          <SplitHeading
            text={t(about.heading)}
            className="font-heading text-[clamp(1.75rem,1.2rem+2.4vw,2.25rem)] font-semibold leading-[1.28] text-ink-2"
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 max-w-[482px] text-lg leading-[28px] tracking-[0.5px] text-body/80"
          >
            {t(about.body)}
          </motion.p>

          <ul className="mt-10 flex flex-col gap-9">
            {about.features.map((feature, i) => (
              <motion.li
                key={feature.title.en}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
                className="flex gap-5"
              >
                <span className="mt-0.5 flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded-full bg-brand-blue-pale">
                  <Check size={16} strokeWidth={3} className="text-brand-blue" />
                </span>
                <span>
                  <span className="block font-heading text-xl font-medium text-ink-2 sm:text-2xl">{t(feature.title)}</span>
                  <span className="mt-1 block max-w-[427px] text-lg leading-[28px] tracking-[0.5px] text-body/80">
                    {t(feature.body)}
                  </span>
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
