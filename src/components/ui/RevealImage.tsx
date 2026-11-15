"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  parallax?: number;
  delay?: number;
};

/**
 * Clip-path reveal on scroll-into-view, with an optional subtle vertical
 * parallax drift tied to scroll progress.
 */
export default function RevealImage({ children, className = "", parallax = 0, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [parallax, -parallax]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
      whileInView={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
    >
      <motion.div className="relative h-full w-full" style={parallax ? { y } : undefined}>
        {children}
      </motion.div>
    </motion.div>
  );
}
