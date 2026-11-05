"use client";

import { useEffect, useRef, useState } from "react";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import { Eyebrow } from "@/components/SmileLine";
import { stats } from "@/lib/clinic";

function CountUp({ value, suffix, display }: { value: number; suffix: string; display?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [text, setText] = useState(display ?? "0");
  const started = useRef(false);

  useEffect(() => {
    if (display) return;
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(value.toLocaleString("en-IN"));
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const dur = 1400;
        const t0 = performance.now();
        const step = (now: number) => {
          const p = Math.min((now - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setText(Math.round(value * eased).toLocaleString("en-IN"));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        io.disconnect();
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, display]);

  return (
    <span ref={ref}>
      {text}
      {suffix}
    </span>
  );
}

export default function WhyUs() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Eyebrow>Why Nacre</Eyebrow>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {stats.map((s, i) => (
            <AnimatedContent
              key={s.label}
              direction="vertical"
              distance={60}
              duration={0.9}
              threshold={0.2}
              delay={i * 0.15}
            >
              <div className="rounded-2xl border border-gleam bg-enamel p-8 shadow-card">
                <p className="font-display text-[clamp(2.4rem,4vw,3.4rem)] font-medium tracking-[-0.02em] text-ink">
                  <CountUp value={s.value} suffix={s.suffix} display={s.display} />
                </p>
                <p className="mt-1 text-slate-soft">{s.label}</p>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
