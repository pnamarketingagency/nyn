"use client";

import { motion } from "framer-motion";
import { GoogleLogo, StarIcon } from "./ui/Icons";
import { Reveal, StaggerGroup, StaggerItem } from "./ui/Reveal";

const REVIEWS = [
  {
    name: "Kayla P.",
    initial: "K",
    role: "Verified Google review",
    accent: "from-rose-300/30 to-amber-200/20",
    quote:
      "Absolutely incredible service! My car looked brand new. Sam and his team have amazing attention to detail — friendly, helpful AND efficient!",
    highlight: "Brand new.",
  },
  {
    name: "Dianna",
    initial: "D",
    role: "Verified Google review",
    accent: "from-accent-glow/30 to-accent-ice/20",
    quote:
      "Sam did a fantastic job. The dull sun-affected paint work looks excellent again. He's very detail-oriented and creative.",
    highlight: "Dull paint, brought back to life.",
  },
  {
    name: "Marque One",
    initial: "M",
    role: "Verified Google review · Motor industry",
    accent: "from-chrome-200/30 to-chrome-400/20",
    quote:
      "Dropped my car off in quite a state. Came back looking brand new. Best detailing company I've ever used in 20 years in the motor industry.",
    highlight: "Best in 20 years.",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="relative section-pad">
      <div className="divider-etched absolute inset-x-0 top-0" />

      <div className="container-pad mx-auto max-w-7xl">
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[12px] font-medium tracking-wide text-chrome-300">
                <GoogleLogo className="h-3.5 w-3.5" />
                5.0 — Google Verified
              </div>
              <h2 className="mt-5 font-display text-[clamp(2rem,4.4vw,3.4rem)] font-bold leading-[1.05] tracking-[-0.025em] text-white">
                Real reviews. <br />
                <span className="text-chrome-shine">Real Brisbane drivers.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-[15.5px] leading-relaxed text-chrome-300">
              Every NYN client is a 5-star Google review waiting to happen. Below
              are three of the stories we&apos;re proudest of — straight from
              Google, untouched.
            </p>
          </Reveal>
        </div>

        <StaggerGroup
          className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-3 lg:gap-6"
          staggerChildren={0.12}
          amount={0.15}
        >
          {REVIEWS.map((r) => (
            <StaggerItem key={r.name}>
              <ReviewCard review={r} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Aggregate strip */}
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl glass px-6 py-5 sm:mt-16 sm:flex-row sm:gap-8 sm:px-8">
            <div className="flex items-center gap-4">
              <GoogleLogo className="h-7 w-7" />
              <div>
                <div className="text-[14px] font-semibold text-white">
                  Rated 5.0 / 5.0 on Google
                </div>
                <div className="text-[12px] text-chrome-400">
                  Across vehicle wrapping, PPF, tint &amp; detailing
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-5 w-5 text-amber-300" />
              ))}
            </div>
            <a href="#quote" className="btn-chrome">
              Join the 5-star list
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: (typeof REVIEWS)[number] }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-ink-800/60 to-ink-900/80 p-6 sm:p-7"
    >
      {/* Accent glow */}
      <div
        className={`pointer-events-none absolute -top-20 left-1/2 h-40 w-[80%] -translate-x-1/2 rounded-full bg-gradient-to-b ${review.accent} blur-2xl opacity-50 transition-opacity duration-500 group-hover:opacity-80`}
      />

      <div className="relative flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-full bg-chrome-gradient font-display text-lg font-bold text-ink-950 shadow-chrome">
            {review.initial}
          </div>
          <div>
            <div className="text-[14px] font-semibold text-white">
              {review.name}
            </div>
            <div className="text-[11.5px] text-chrome-400">{review.role}</div>
          </div>
        </div>
        <GoogleLogo className="h-5 w-5 opacity-90" />
      </div>

      <div className="mt-5 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} className="h-4 w-4 text-amber-300" />
        ))}
      </div>

      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-chrome-100">
        <span className="font-display text-4xl leading-none text-chrome-500/60">
          “
        </span>
        {review.quote}
      </blockquote>

      <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4">
        <span className="font-display text-[12.5px] font-semibold text-white">
          {review.highlight}
        </span>
        <span className="ml-auto text-[11px] uppercase tracking-[0.22em] text-chrome-400">
          Google · 5.0
        </span>
      </div>
    </motion.article>
  );
}
