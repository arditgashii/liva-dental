import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
  type?: "button" | "submit";
};

/**
 * Pill button with a fill-sweep hover (circle scales from center) and an
 * arrow that slides in from the left on hover. Colors are set by the
 * variant via CSS custom properties consumed in globals via group-hover.
 */
export default function Button({ href, onClick, children, variant = "solid", className = "", type = "button" }: Props) {
  const base =
    "group relative isolate inline-flex min-h-11 items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300";

  const styles =
    variant === "solid"
      ? "bg-brand-yellow text-[#404040] hover:text-ink"
      : "bg-brand-blue text-white hover:text-white";

  const sweep = variant === "solid" ? "bg-ink" : "bg-brand-blue-light";

  const content = (
    <>
      <span
        aria-hidden
        className={`absolute inset-0 -z-10 scale-x-0 rounded-full ${sweep} origin-left transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-x-100 motion-reduce:hidden`}
      />
      <span className="relative">{children}</span>
      <ArrowRight
        aria-hidden
        size={16}
        className="relative -ml-1 w-0 shrink-0 opacity-0 transition-all duration-300 group-hover:ml-0 group-hover:w-4 group-hover:opacity-100"
      />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${base} ${styles} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${styles} ${className}`}>
      {content}
    </button>
  );
}
