"use client";

import { ArrowRight, ClockIcon, MailIcon, PhoneIcon, PinIcon } from "./ui/Icons";
import { Reveal } from "./ui/Reveal";

const HOURS = [
  { day: "Mon — Fri", time: "7:30am — 5:30pm" },
  { day: "Saturday", time: "8:00am — 2:00pm" },
  { day: "Sunday", time: "By appointment" },
];

const ADDRESS = "2/10 Judds Ct, Slacks Creek QLD 4127";
const MAPS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  ADDRESS
)}`;
// Keyless Google Maps embed — satellite imagery (t=k) centered on the bay.
const MAPS_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(
  ADDRESS
)}&t=k&z=18&ie=UTF8&iwloc=&output=embed`;

export function Location() {
  return (
    <section id="location" className="relative section-pad">
      <div className="divider-etched absolute inset-x-0 top-0" />

      <div className="container-pad mx-auto max-w-7xl">
        <div className="grid gap-6 overflow-hidden rounded-3xl glass-elevated lg:grid-cols-[1.1fr_1fr]">
          {/* Map */}
          <Reveal>
            <div className="relative h-[360px] overflow-hidden lg:h-full">
              <MapVisual />
              <div className="pointer-events-none absolute inset-x-5 bottom-5 flex justify-end">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-chrome pointer-events-auto"
                >
                  Get directions
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Info */}
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-7 p-7 sm:p-10">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[12px] font-medium tracking-wide text-chrome-300">
                  <PinIcon className="h-3.5 w-3.5" />
                  Visit the bay
                </div>
                <h2 className="mt-5 font-display text-[clamp(1.8rem,3.6vw,2.6rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
                  Slacks Creek — minutes from the M1.
                </h2>
                <p className="mt-3 text-[14.5px] leading-relaxed text-chrome-300">
                  Climate-controlled, dust-controlled bay. Easy access from
                  Brisbane city, Logan, Springwood and the Gold Coast.
                </p>
              </div>

              <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.08]">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-ink-900 px-5 py-4 transition-colors hover:bg-ink-800/80 cursor-pointer"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-chrome-100">
                    <PinIcon className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <div className="text-[11.5px] font-medium uppercase tracking-[0.2em] text-chrome-400">
                      Address
                    </div>
                    <div className="text-[14.5px] font-semibold text-white">
                      {ADDRESS}
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-chrome-300" />
                </a>

                <a
                  href="tel:+61"
                  className="flex items-center gap-4 bg-ink-900 px-5 py-4 transition-colors hover:bg-ink-800/80 cursor-pointer"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-chrome-100">
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <div className="text-[11.5px] font-medium uppercase tracking-[0.2em] text-chrome-400">
                      Phone
                    </div>
                    <div className="text-[14.5px] font-semibold text-white">
                      Call Sam directly
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-chrome-300" />
                </a>

                <a
                  href="mailto:hello@nyn-detailing.com.au"
                  className="flex items-center gap-4 bg-ink-900 px-5 py-4 transition-colors hover:bg-ink-800/80 cursor-pointer"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-chrome-100">
                    <MailIcon className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <div className="text-[11.5px] font-medium uppercase tracking-[0.2em] text-chrome-400">
                      Email
                    </div>
                    <div className="text-[14.5px] font-semibold text-white">
                      hello@nyn-detailing.com.au
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-chrome-300" />
                </a>
              </div>

              <div>
                <div className="mb-3 flex items-center gap-2 text-[11.5px] font-medium uppercase tracking-[0.22em] text-chrome-400">
                  <ClockIcon className="h-3.5 w-3.5" />
                  Bay hours
                </div>
                <ul className="space-y-2">
                  {HOURS.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between border-b border-white/10 pb-2 last:border-b-0 last:pb-0"
                    >
                      <span className="text-[14px] text-chrome-100">{h.day}</span>
                      <span className="font-display text-[14px] font-medium text-white">
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function MapVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-ink-950">
      {/* Embedded Google Maps satellite view, dark-filtered to match the theme */}
      <iframe
        title="NYN Detailing — 2/10 Judds Ct, Slacks Creek QLD 4127 (satellite map)"
        src={MAPS_EMBED}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full border-0 map-dark"
      />

      {/* Cool brand tint — sits over the imagery, lets attribution show through */}
      <div className="pointer-events-none absolute inset-0 bg-[#0A1018] mix-blend-color opacity-50" />

      {/* Depth: blue glow + edge vignette so the map melts into the dark card */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_45%,rgba(159,180,217,0.16),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_40px_rgba(6,7,10,0.85)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-ink-950/70 to-transparent" />

      {/* Branded location pin overlay */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative grid place-items-center">
          <span className="absolute h-16 w-16 rounded-full bg-accent-glow/20 animate-ping" />
          <span className="absolute h-10 w-10 rounded-full bg-accent-glow/15" />
          <span className="relative grid h-8 w-8 place-items-center rounded-full bg-white text-ink-950 shadow-[0_8px_24px_rgba(0,0,0,0.6)]">
            <PinIcon className="h-4 w-4" />
          </span>
        </div>
        <div className="mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/15 bg-ink-950/85 px-3 py-1 text-[10.5px] font-semibold tracking-[0.18em] text-chrome-100 backdrop-blur">
          NYN DETAILING
        </div>
      </div>
    </div>
  );
}
