"use client";

import { motion, useReducedMotion } from "framer-motion";
import CardSwap, { Card } from "@/components/reactbits/CardSwap";
import Reveal from "@/components/Reveal";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import TreatmentIcon from "@/components/TreatmentIcon";
import { Eyebrow } from "@/components/SmileLine";
import { featuredTreatments, allTreatments, waLink } from "@/lib/clinic";

export default function Treatments() {
  const reduced = useReducedMotion();
  return (
    <section id="treatments" className="overflow-x-clip bg-gleam/50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Eyebrow>Treatments</Eyebrow>
            <ScrollFloat
              stagger={0.02}
              ease="back.inOut(1.6)"
              containerClassName="my-4"
              textClassName="font-display text-[clamp(1.9rem,4vw,2.8rem)] font-medium leading-[1.2] tracking-[-0.02em] text-ink"
            >
              Everything your smile needs, under one roof.
            </ScrollFloat>
            <Reveal delay={0.1}>
              <p className="max-w-md text-slate-soft">
                From a six-month checkup to a full smile makeover, every treatment
                happens here, with the same doctors, the same gentle protocols and
                prices you see before you sit down.
              </p>
            </Reveal>
          </div>

          <div className="relative hidden h-[440px] sm:block" aria-hidden="true">
            <CardSwap
              width={380}
              height={250}
              cardDistance={50}
              verticalDistance={60}
              delay={4000}
              pauseOnHover
              easing="elastic"
            >
              {featuredTreatments.map((t) => (
                <Card key={t.name} className="p-7 shadow-card">
                  <TreatmentIcon icon={t.icon} />
                  <h3 className="mt-4 font-display text-xl font-medium text-ink">{t.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-soft">{t.blurb}</p>
                  <span className="mt-4 inline-block rounded-full bg-gleam px-3 py-1 text-[11px] font-semibold uppercase tracking-label text-glacier-deep">
                    From consultation
                  </span>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allTreatments.map((t, i) => (
            <motion.a
              key={t.name}
              href={waLink(`Hi, I'd like to book a consultation for ${t.name} at Nacre Dental`)}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: reduced ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
              className="group rounded-2xl border border-gleam bg-enamel p-6 shadow-card transition-shadow hover:shadow-lift"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-gleam/70 p-2.5">
                  <TreatmentIcon icon={t.icon} size={24} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-medium text-ink group-hover:text-glacier-deep">
                    {t.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-soft">{t.blurb}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
