"use client";

import { motion } from "framer-motion";
import { GoogleLogo, ShieldIcon, SparkleIcon, StarIcon, WrapIcon } from "./ui/Icons";
import { Reveal, StaggerGroup, StaggerItem } from "./ui/Reveal";

const STATS = [
  {
    Icon: WrapIcon,
    value: "500+",
    label: "Vehicles transformed",
  },
  {
    Icon: ShieldIcon,
    value: "10+ yr",
    label: "Premium-film warranty",
  },
  {
    Icon: SparkleIcon,
    value: "100%",
    label: "Hand-finished work",
  },
];

export function TrustBar() {
  return (
    <section className="relative -mt-2 sm:mt-0 pb-10 sm:pb-16">
      <div className="container-pad mx-auto max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass-elevated">
            {/* subtle inner glow */}
            <div className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-[radial-gradient(60%_60%_at_50%_100%,rgba(159,180,217,0.18),transparent)]" />

            <div className="relative grid items-center gap-8 px-6 py-8 sm:px-10 sm:py-9 lg:grid-cols-[auto_1fr_auto] lg:gap-12">
              {/* Google rating */}
              <div className="flex items-center gap-5">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white shadow-elevated sm:h-16 sm:w-16">
                  <GoogleLogo className="h-7 w-7 sm:h-9 sm:w-9" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-3xl font-bold text-white sm:text-4xl">
                      5.0
                    </span>
                    <span className="text-[12px] font-medium text-chrome-400">
                      / 5.0
                    </span>
                  </div>
                  <div className="mt-1 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.15 + i * 0.08,
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <StarIcon className="h-4 w-4 text-amber-300 sm:h-[18px] sm:w-[18px]" />
                      </motion.span>
                    ))}
                  </div>
                  <div className="mt-1 text-[12.5px] text-chrome-300">
                    Google Verified · Slacks Creek QLD
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden h-16 w-px self-center bg-white/10 lg:block" />

              {/* Stats */}
              <StaggerGroup
                className="grid grid-cols-3 gap-4 sm:gap-8"
                staggerChildren={0.08}
              >
                {STATS.map((s) => (
                  <StaggerItem key={s.label}>
                    <div className="flex items-center gap-3">
                      <div className="hidden h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-chrome-100 sm:grid">
                        <s.Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-display text-lg font-semibold text-white sm:text-xl">
                          {s.value}
                        </div>
                        <div className="text-[11.5px] text-chrome-400 sm:text-[12px]">
                          {s.label}
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>

              {/* CTA */}
              <a
                href="#quote"
                className="btn-chrome w-full justify-center lg:w-auto"
              >
                Start Your Quote
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
