"use client";

import AnimatedContent from "@/components/reactbits/AnimatedContent";
import { Eyebrow } from "@/components/SmileLine";
import { reviews, clinic } from "@/lib/clinic";

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#C9A96A" aria-hidden="true">
          <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Eyebrow>Reviews</Eyebrow>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <AnimatedContent
              key={r.name}
              direction="vertical"
              distance={60}
              duration={0.9}
              threshold={0.2}
              delay={i * 0.15}
            >
              <figure className="flex h-full flex-col rounded-2xl border border-gleam bg-enamel p-7 shadow-card">
                <Stars />
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink">
                  &ldquo;{r.text}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-sm font-semibold text-slate-soft">{r.name}</figcaption>
              </figure>
            </AnimatedContent>
          ))}
        </div>
        <p className="mt-10 text-sm text-slate-soft">
          Rated {clinic.rating.score} by {clinic.rating.count}+ patients.{" "}
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-glacier-deep underline-offset-4 hover:underline"
          >
            Read all reviews on Google
          </a>
        </p>
      </div>
    </section>
  );
}
