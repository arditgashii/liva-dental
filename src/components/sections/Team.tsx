"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { team } from "@/lib/config";
import SplitHeading from "@/components/ui/SplitHeading";
import { useT } from "@/lib/language";

export default function Team() {
  const t = useT();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: false,
    containScroll: "trimSnaps",
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    queueMicrotask(onSelect);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="team" className="bg-white py-20 lg:py-28">
      <div className="container-gutter">
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-[auto_1fr_auto]">
          <SplitHeading
            text={t(team.heading)}
            className="font-heading text-[clamp(1.75rem,1.1rem+2.9vw,2.5rem)] font-semibold leading-[1.15] text-ink"
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[460px] text-base leading-7 text-body/75 lg:justify-self-center"
          >
            {t(team.body)}
          </motion.p>
          <Link
            href="#contact"
            className="text-sm font-semibold text-brand-blue underline-offset-4 hover:underline lg:justify-self-end lg:whitespace-nowrap"
          >
            {t(team.link)}
          </Link>
        </div>

        <div className="relative mt-12">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex touch-pan-y gap-6">
              {team.members.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                  className="min-w-0 shrink-0 grow-0 basis-[72%] sm:basis-[calc(45%-0.75rem)] lg:basis-[calc(23%-1.125rem)]"
                >
                  <div className="group relative aspect-[320/470] overflow-hidden rounded-[20px] bg-card-mist">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 1023px) 72vw, 23vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span>
                      <span className="block font-heading text-base font-semibold text-brand-orange">{member.name}</span>
                      <span className="block text-sm text-body/70">{t(member.role)}</span>
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-3">
            <button
              type="button"
              aria-label="Previous team member"
              disabled={!canPrev}
              onClick={() => emblaApi?.scrollPrev()}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/10 text-ink transition-colors hover:bg-brand-blue hover:text-white disabled:opacity-30"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next team member"
              disabled={!canNext}
              onClick={() => emblaApi?.scrollNext()}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/10 text-ink transition-colors hover:bg-brand-blue hover:text-white disabled:opacity-30"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
