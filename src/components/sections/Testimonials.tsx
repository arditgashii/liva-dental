"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/config";
import SplitHeading from "@/components/ui/SplitHeading";
import { useT } from "@/lib/language";

export default function Testimonials() {
  const t = useT();
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    queueMicrotask(onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-brand-panel py-20 lg:py-32">
      <div className="container-gutter">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[auto_1fr]">
          <SplitHeading
            text={t(testimonials.heading)}
            className="font-heading text-[clamp(1.75rem,1.1rem+2.9vw,2.5rem)] font-semibold leading-[1.15] text-ink-2"
          />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:max-w-[480px] lg:justify-self-end"
          >
            <p className="text-sm font-semibold uppercase tracking-[1px] text-brand-orange">{t(testimonials.tag)}</p>
            <p className="mt-3 text-base leading-7 text-body/80">{t(testimonials.tagDesc)}</p>
          </motion.div>
        </div>

        <div className="mt-14 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
                className="min-w-0 shrink-0 grow-0 basis-[88%] sm:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)]"
              >
                <div className="flex h-full flex-col rounded-[20px] bg-card-mist p-8 transition-shadow duration-300 hover:shadow-soft">
                  <div className="flex items-center gap-4">
                    <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full bg-white">
                      <Image src={item.image} alt={item.name} fill sizes="72px" className="object-cover" />
                    </div>
                    <span>
                      <span className="block font-heading text-lg font-semibold text-ink-2">{item.name}</span>
                      <span className="block text-sm text-body/70">{t(item.role)}</span>
                    </span>
                  </div>
                  <div className="mt-5 flex gap-1 text-brand-orange">
                    {Array.from({ length: item.rating }).map((_, s) => (
                      <Star key={s} size={16} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="mt-5 italic leading-7 text-body/75">&ldquo;{t(item.quote)}&rdquo;</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2 lg:hidden">
          {testimonials.items.map((item, i) => (
            <button
              key={item.name}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2 rounded-full transition-all ${selected === i ? "w-6 bg-brand-blue" : "w-2 bg-ink/15"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
