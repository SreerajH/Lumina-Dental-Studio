import StarBorder from "@/components/reactbits/StarBorder";
import Reveal from "@/components/Reveal";
import { Eyebrow } from "@/components/SmileLine";
import { clinic, waLink } from "@/lib/clinic";

export default function Visit() {
  return (
    <section id="visit" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Eyebrow>Visit Us</Eyebrow>
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <Reveal className="map-frame overflow-hidden rounded-2xl border border-gleam shadow-card">
            <iframe
              src={clinic.mapsEmbed}
              title="Nacre Dental Studio on Google Maps"
              className="h-full min-h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>

          <Reveal delay={0.15} className="flex flex-col justify-center">
            <h3 className="font-display text-2xl font-medium tracking-[-0.02em] text-ink">
              {clinic.fullName}
            </h3>
            <p className="mt-3 max-w-sm text-slate-soft">{clinic.address.line}</p>

            <dl className="mt-8 space-y-4 text-[15px]">
              <div className="flex gap-4">
                <dt className="w-20 shrink-0 font-semibold text-ink">Hours</dt>
                <dd className="text-slate-soft">{clinic.hours.label}</dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-20 shrink-0 font-semibold text-ink">Phone</dt>
                <dd>
                  <a href={`tel:${clinic.phoneHref}`} className="text-glacier-deep hover:underline">
                    {clinic.phone}
                  </a>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-20 shrink-0 font-semibold text-ink">Rating</dt>
                <dd className="text-slate-soft">
                  {clinic.rating.score} on Google, {clinic.rating.count}+ reviews
                </dd>
              </div>
            </dl>

            <div className="mt-10">
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
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
