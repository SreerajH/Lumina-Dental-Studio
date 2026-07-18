"use client";

import { motion } from "framer-motion";

// Signature brand element: a stylized smile arc that draws itself in on load
// and subtly widens when the hero CTA is hovered.
export function SmileLine({ widened = false, className = "" }: { widened?: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 240 56"
      fill="none"
      aria-hidden="true"
      className={`smile-line ${className}`}
    >
      <motion.path
        initial={false}
        animate={{ d: widened ? "M12 18 Q120 66 228 18" : "M20 16 Q120 60 220 16" }}
        transition={{ type: "spring", stiffness: 120, damping: 16 }}
        stroke="#7FB8C9"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Tiny 24px arc mark used beside each section eyebrow, echoing the hero arc.
export function SmileMark() {
  return (
    <svg width="24" height="12" viewBox="0 0 24 12" fill="none" aria-hidden="true">
      <path
        d="M3 3 Q12 11 21 3"
        stroke="#7FB8C9"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5">
      <SmileMark />
      <span className="eyebrow">{children}</span>
    </div>
  );
}
