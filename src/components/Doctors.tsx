"use client";

import ScrollReveal from "@/components/reactbits/ScrollReveal";
import Reveal from "@/components/Reveal";
import { Eyebrow } from "@/components/SmileLine";
import { doctors } from "@/lib/clinic";

function Portrait({ seed }: { seed: number }) {
  // Neutral placeholder portrait: soft porcelain background, abstract bust, 4:5.
  const tint = seed === 0 ? "#7FB8C9" : "#2E6E80";
  return (
    <svg viewBox="0 0 200 250" className="h-auto w-full rounded-xl bg-porcelain" aria-hidden="true">
      <rect width="200" height="250" fill="#F8F7F4" />
      <circle cx="100" cy="95" r="42" fill="#E4EEF1" />
      <circle cx="100" cy="95" r="42" fill="none" stroke={tint} strokeOpacity="0.35" strokeWidth="1.5" />
      <path
        d="M30 250 C30 190 70 165 100 165 C130 165 170 190 170 250 Z"
        fill="#E4EEF1"
        stroke={tint}
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
      <path d="M78 118 Q100 132 122 118" stroke={tint} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export default function Doctors() {
  return (
    <section id="doctors" className="bg-gleam/50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Eyebrow>Doctors</Eyebrow>

        <ScrollReveal
          baseOpacity={0.08}
          blurStrength={6}
          baseRotation={2}
          containerClassName="my-6 max-w-3xl"
          textClassName="!font-display !text-[clamp(1.6rem,3vw,2.4rem)] !leading-[1.35] !tracking-[-0.02em] text-ink !font-medium"
        >
          Two specialists, one philosophy: explain everything, rush nothing, and never let a patient feel pain they were not warned about.
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {doctors.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.15}>
              <div className="grid h-full grid-cols-[130px,1fr] items-center gap-6 rounded-2xl border border-gleam bg-enamel p-6 shadow-card sm:grid-cols-[160px,1fr]">
                <Portrait seed={i} />
                <div>
                  <h3 className="font-display text-xl font-medium text-ink">{d.name}</h3>
                  <p className="mt-0.5 text-sm font-semibold text-glacier-deep">{d.credentials}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-soft">
                    &ldquo;{d.philosophy}&rdquo;
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
