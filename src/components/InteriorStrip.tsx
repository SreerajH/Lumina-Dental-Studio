"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const panels = [
  { label: "Reception", src: "/images/reception.jpg" },
  { label: "Treatment suite", src: "/images/treatment-suite.jpg" },
  { label: "Sterilization lab", src: "/images/sterilization-lab.jpg" },
];

export default function InteriorStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y0 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const offsets = [y0, y1, y2];

  return (
    <section className="overflow-hidden bg-gleam/50 py-24">
      <div ref={ref} className="mx-auto grid max-w-6xl gap-5 px-5 sm:grid-cols-3 md:px-8">
        {panels.map((p, i) => (
          <motion.figure
            key={p.label}
            style={reduced ? undefined : { y: offsets[i] }}
            initial={{ opacity: 0, y: reduced ? 0 : 36, scale: reduced ? 1 : 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 0.61, 0.36, 1] }}
            className="group overflow-hidden rounded-2xl border border-gleam bg-enamel shadow-card"
          >
            <div className="aspect-[10/7] overflow-hidden">
              <Image
                src={p.src}
                alt={`${p.label} at Nacre Dental Studio`}
                width={736}
                height={515}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
            </div>
            <figcaption className="px-5 py-3 text-[11px] font-semibold uppercase tracking-label text-glacier-deep">
              {p.label}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
