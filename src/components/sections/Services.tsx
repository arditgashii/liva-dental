"use client";

import { motion } from "motion/react";
import { Smile, ShieldCheck, Toothbrush, HeartPulse, type LucideIcon } from "lucide-react";
import { services } from "@/lib/config";
import SplitHeading from "@/components/ui/SplitHeading";
import { useT } from "@/lib/language";

const ICONS: Record<string, LucideIcon> = { smile: Smile, shield: ShieldCheck, tooth: Toothbrush, heart: HeartPulse };

export default function Services() {
  const t = useT();
  return (
    <section id="services" className="bg-brand-panel py-20 lg:py-32">
      <div className="container-gutter">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[auto_1fr]">
          <SplitHeading
            text={t(services.heading)}
            className="font-heading text-[clamp(1.75rem,1.1rem+2.9vw,2.5rem)] font-semibold leading-[1.15] text-ink"
          />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:max-w-[580px] lg:justify-self-end"
          >
            <p className="text-sm font-semibold uppercase tracking-[1px] text-brand-orange">{t(services.tag)}</p>
            <p className="mt-3 text-base leading-7 text-body/80">{t(services.tagDesc)}</p>
          </motion.div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.items.map((item, i) => {
            const Icon = ICONS[item.icon];
            const highlighted = i === 0;
            return (
              <motion.div
                key={item.title.en}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className={`group rounded-[20px] p-4 transition-shadow duration-300 ${
                  highlighted ? "bg-white shadow-soft hover:shadow-xl" : "hover:bg-white/60"
                }`}
              >
                <span className="flex h-[70px] w-[70px] items-center justify-center rounded-2xl border border-brand-blue-light/60 text-brand-blue-light transition-colors duration-300 group-hover:border-brand-blue group-hover:bg-brand-blue group-hover:text-white">
                  {Icon && <Icon size={30} strokeWidth={1.6} />}
                </span>
                <h3 className="mt-6 font-heading text-xl font-semibold text-ink-2">{t(item.title)}</h3>
                <p className="mt-3 max-w-[260px] text-[15px] leading-6 text-body/70">{t(item.body)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
