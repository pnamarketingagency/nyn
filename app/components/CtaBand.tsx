"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, GoogleLogo, StarIcon } from "./ui/Icons";
import { Reveal } from "./ui/Reveal";

export function CtaBand() {
  const reduce = useReducedMotion();
  return (
    <section className="relative section-pad">
      <div className="container-pad mx-auto max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-ink-800 to-ink-900 px-6 py-14 sm:px-12 sm:py-20">
            {/* Background chrome glow */}
            <motion.div
              animate={reduce ? undefined : { rotate: 360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute -inset-32 -z-10 grid place-items-center"
            >
              <div className="h-full w-full rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(159,180,217,0.18),transparent_70%)]" />
            </motion.div>
            <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[12px] font-medium tracking-wide text-chrome-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-ice" />
                  Limited bays · Booking June–July
                </div>
                <h2 className="mt-5 font-display text-[clamp(2rem,4.6vw,3.6rem)] font-bold leading-[1.02] tracking-[-0.025em] text-white">
                  Ready to make
                  <br />
                  <span className="text-chrome-shine">your car turn heads?</span>
                </h2>
                <p className="mt-5 max-w-lg text-[15.5px] leading-relaxed text-chrome-300">
                  Free, no-pressure quote in under a minute. Sam usually replies
                  within the hour with a clear price and an honest timeline.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href="#quote" className="btn-chrome">
                    Get a Free Quote
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="tel:+61" className="btn-outline">
                    Call Sam
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-ink-900/60 p-6 backdrop-blur sm:p-8">
                <div className="flex items-center gap-3">
                  <GoogleLogo className="h-7 w-7" />
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-2xl font-bold text-white">
                        5.0
                      </span>
                      <span className="text-[11.5px] text-chrome-400">
                        / 5.0 on Google
                      </span>
                    </div>
                    <div className="mt-0.5 flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon key={i} className="h-3.5 w-3.5 text-amber-300" />
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="mt-5 text-[14.5px] leading-relaxed text-chrome-100">
                  “Sam and his team have amazing attention to detail… friendly,
                  helpful AND efficient!”
                </blockquote>
                <div className="mt-3 text-[12px] text-chrome-400">
                  — Kayla P. · Google verified
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
