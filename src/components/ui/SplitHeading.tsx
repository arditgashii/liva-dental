"use client";

import { motion } from "motion/react";
import type { ElementType } from "react";

type Props = {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
};

const wrapVariants = { hidden: {}, visible: {} };
const textVariants = { hidden: { y: "110%" }, visible: { y: "0%" } };

/**
 * Word-level reveal: each word sits in an overflow-hidden clipper and
 * slides up into place, staggered, when it enters the viewport.
 *
 * whileInView must be tracked on the CLIPPER itself, not an ancestor of it
 * , motion's IntersectionObserver never reports an intersection for a
 * target nested inside a clipping ancestor. The inner text span has no
 * trigger props of its own; it inherits the "visible" state from the
 * tracked parent via motion's variant propagation.
 */
export default function SplitHeading({ text, as: Tag = "h2", className = "", delay = 0 }: Props) {
  const words = text.split(" ");

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="word-reveal-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={wrapVariants}
        >
          <motion.span
            className="inline-block"
            variants={textVariants}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * 0.045,
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </motion.span>
      ))}
    </Tag>
  );
}
