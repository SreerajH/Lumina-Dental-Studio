"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import DotField from "@/components/reactbits/DotField";
import BlurText from "@/components/reactbits/BlurText";
import ShinyText from "@/components/reactbits/ShinyText";
import StarBorder from "@/components/reactbits/StarBorder";
import { SmileLine } from "@/components/SmileLine";
import { clinic, waLink } from "@/lib/clinic";

export default function Hero() {
  const [ctaHovered, setCtaHovered] = useState(false);
  const reduced = useReducedMotion();

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <DotField
          dotRadius={1.5}
          dotSpacing={16}
          bulgeStrength={40}
          gradientFrom="rgba(127,184,201,0.30)"
          gradientTo="rgba(228,238,241,0.20)"
          glowColor="transparent"
          glowRadius={0}
          sparkle={false}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-20 pt-32 md:px-8 lg:grid-cols-[1fr,auto]">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-gleam bg-enamel/70 px-4 py-1.5 backdrop-blur-sm">
            <ShinyText
              text="Now accepting new patients"
              color="#5C6E76"
              shineColor="#7FB8C9"
              speed={3}
              className="text-[13px] font-medium"
            />
          </div>

          <h1 className="sr-only">{clinic.tagline}</h1>
          <div aria-hidden="true">
            <BlurText
              text={clinic.tagline}
              animateBy="words"
              direction="top"
              delay={120}
              className="font-display text-[clamp(2.6rem,6vw,4.5rem)] font-medium leading-[1.08] tracking-[-0.02em] text-ink"
            />
          </div>

          <SmileLine widened={ctaHovered} className="mt-2 h-10 w-44 md:w-56" />

          <p className="mt-6 max-w-xl text-lg text-slate-soft">
            Modern, gentle, judgement-free dental care for the whole family.
            Digital X-rays, painless procedures, transparent pricing.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <span
              onMouseEnter={() => setCtaHovered(true)}
              onMouseLeave={() => setCtaHovered(false)}
            >
              <StarBorder
                as="a"
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                color="#7FB8C9"
                speed="5s"
                thickness={2}
                innerClassName="font-semibold"
              >
                Book on WhatsApp
              </StarBorder>
            </span>
            <a
              href="#treatments"
              className="text-sm font-semibold text-glacier-deep underline-offset-4 transition-colors hover:text-ink hover:underline"
            >
              See treatments
            </a>
          </div>

          <p className="mt-10 text-sm text-slate-soft">
            <span className="font-semibold text-ink">{clinic.rating.score}</span> rating
            <span className="mx-2 text-glacier">·</span>
            {clinic.rating.count}+ Google reviews
            <span className="mx-2 text-glacier">·</span>
            Open 7 days
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: reduced ? 0 : 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          className="hidden justify-self-end lg:block"
        >
          <motion.div
            animate={reduced ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="overflow-hidden rounded-[28px] border border-gleam bg-enamel p-2 shadow-lift"
          >
            <video
              src="/video/clinic-reel.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="A look inside Lumina Dental Studio"
              className="aspect-[9/16] w-[280px] rounded-[20px] object-cover xl:w-[310px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
