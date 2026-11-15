"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { pricing } from "@/lib/config";
import SplitHeading from "@/components/ui/SplitHeading";
import CountUp from "@/components/ui/CountUp";
import Button from "@/components/ui/Button";
import { useT } from "@/lib/language";

export default function Pricing() {
  const t = useT();
  return (
    <section id="pricing" className="bg-white py-20 lg:py-32">
      <div className="container-gutter">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[auto_1fr]">
          <SplitHeading
            text={t(pricing.heading)}
            className="font-heading text-[clamp(1.75rem,1.1rem+2.9vw,2.5rem)] font-semibold leading-[1.15] text-ink-2"
          />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:max-w-[480px] lg:justify-self-end"
          >
            <p className="text-sm font-semibold uppercase tracking-[1px] text-brand-orange">{t(pricing.tag)}</p>
            <p className="mt-3 text-base leading-7 text-body/80">{t(pricing.tagDesc)}</p>
          </motion.div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pricing.plans.map((plan, i) => (
            <motion.div
              key={plan.label.en}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className={`flex flex-col rounded-[20px] p-9 transition-shadow duration-300 ${
                plan.highlighted ? "bg-brand-blue-pale shadow-soft hover:shadow-xl" : "bg-card-gray hover:shadow-soft"
              }`}
            >
              <p className="font-heading text-[2.75rem] font-bold leading-none text-brand-blue">
                $<CountUp to={Number(plan.price)} />
                {plan.highlighted && <span className="ml-1 align-middle text-base font-normal text-body/60">{t(pricing.suffix)}</span>}
              </p>
              <h3 className="mt-7 font-heading text-xl font-semibold text-ink-2">{t(plan.label)}</h3>
              <p className="mt-3 text-[15px] leading-6 text-body/70">{t(plan.body)}</p>

              <ul className="mt-8 flex flex-col gap-4">
                {plan.items.map((item) => (
                  <li key={item.en} className="flex items-center gap-3 text-[15px] text-ink-2/90">
                    <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-brand-blue/15">
                      <Check size={11} strokeWidth={3} className="text-brand-blue" />
                    </span>
                    {t(item)}
                  </li>
                ))}
              </ul>

              {plan.highlighted && (
                <Button href="#contact" className="mt-9 w-full justify-center">
                  {t(pricing.cta)}
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
