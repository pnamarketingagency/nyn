"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  DropletIcon,
  GoogleLogo,
  PinIcon,
  ShieldIcon,
  SparkleIcon,
  StarIcon,
  TintIcon,
  WrapIcon,
} from "./ui/Icons";
import type { SVGProps } from "react";
import Image from "next/image";

type IconType = (props: SVGProps<SVGSVGElement>) => JSX.Element;

const easeOut = [0.22, 1, 0.36, 1] as const;

const SERVICE_CHIPS = [
  {
    label: "Detailing & Paint Correction",
    sub: "Mirror-finish · hand-polished · under inspection lights",
    Icon: SparkleIcon,
  },
  {
    label: "Paint Protection · Ceramic & PPF",
    sub: "Hydrophobic ceramic · self-healing film · lifetime warranty",
    Icon: ShieldIcon,
  },
  {
    label: "Vehicle Wrapping",
    sub: "HEXIS films · colour change · blackout kits · light tints",
    Icon: WrapIcon,
  },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-24"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Grid */}
        <div className="absolute inset-0 grid-bg mask-fade-y opacity-60" />

        {/* Top chrome glow */}
        <div className="absolute -top-40 left-1/2 h-[640px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(159,180,217,0.18)_0%,rgba(159,180,217,0.06)_30%,transparent_65%)]" />

        {/* Side accents */}
        <div className="absolute right-[-10%] top-[10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(216,225,238,0.08)_0%,transparent_70%)]" />
        <div className="absolute left-[-10%] bottom-[5%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle_at_center,rgba(159,180,217,0.06)_0%,transparent_70%)]" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-ink-950/60 to-ink-950" />
      </div>

      <div className="container-pad mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT — copy */}
          <div className="relative">
            {/* Eyebrow */}
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: reduce ? 0 : 0.6, ease: easeOut }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 backdrop-blur-sm"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-glow opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-ice" />
              </span>
              <PinIcon className="h-3.5 w-3.5 text-chrome-300" />
              <span className="text-[12.5px] font-medium tracking-wide text-chrome-200">
                Slacks Creek · Brisbane
              </span>
              <span className="h-3 w-px bg-white/10" />
              <span className="text-[12.5px] font-medium text-chrome-200">
                Booking June–July
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ y: 28, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: reduce ? 0 : 0.8,
                delay: reduce ? 0 : 0.1,
                ease: easeOut,
              }}
              className="font-display text-[clamp(2.6rem,6.2vw,5.25rem)] font-bold leading-[0.98] tracking-[-0.035em] text-white mt-6"
            >
              <span className="block">Detailed.</span>
              <span className="block text-chrome-shine">Protected. Wrapped.</span>
              <span className="block text-chrome-300 text-[clamp(1.4rem,2.6vw,2.1rem)] font-medium tracking-[-0.02em] mt-3 sm:mt-4">
                Detail-obsessed in Brisbane.
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: reduce ? 0 : 0.7,
                delay: reduce ? 0 : 0.25,
                ease: easeOut,
              }}
              className="mt-7 max-w-xl text-[17px] leading-relaxed text-chrome-300 sm:text-[18.5px]"
            >
              Premium <span className="text-white">detailing &amp; paint
              correction</span>, <span className="text-white">ceramic &amp; PPF
              paint protection</span> and <span className="text-white">vehicle
              wrapping</span> — finished by hand by Sam &amp; the NYN team.
              Showroom-grade results. A finish that turns heads.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: reduce ? 0 : 0.7,
                delay: reduce ? 0 : 0.35,
                ease: easeOut,
              }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a href="#quote" className="btn-chrome">
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#services" className="btn-outline">
                Explore Services
              </a>
              <div className="hidden sm:flex items-center gap-2 pl-2 text-[13px] text-chrome-400">
                <svg
                  className="h-4 w-4 text-accent-ice"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 6v6l4 2" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
                Replies in under 1 hour
              </div>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: reduce ? 0 : 0.7,
                delay: reduce ? 0 : 0.5,
                ease: easeOut,
              }}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-5"
            >
              <div className="flex items-center gap-3">
                <GoogleLogo className="h-5 w-5" />
                <div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="h-3.5 w-3.5 text-amber-300" />
                    ))}
                    <span className="ml-1 text-[13px] font-semibold text-white">
                      5.0
                    </span>
                  </div>
                  <div className="text-[11.5px] text-chrome-400">
                    Google Reviews
                  </div>
                </div>
              </div>

              <div className="h-9 w-px bg-white/10" />

              <div>
                <div className="text-[15px] font-semibold text-white">
                  Hand-finished
                </div>
                <div className="text-[11.5px] text-chrome-400">
                  Every panel, every car
                </div>
              </div>

              <div className="h-9 w-px bg-white/10" />

              <div>
                <div className="text-[15px] font-semibold text-white">
                  Lifetime film warranty*
                </div>
                <div className="text-[11.5px] text-chrome-400">
                  On premium PPF
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: reduce ? 0 : 1.1,
              delay: reduce ? 0 : 0.2,
              ease: easeOut,
            }}
            className="relative mx-auto w-full max-w-[560px] lg:max-w-none"
          >
            <HeroVisual />
          </motion.div>
        </div>

        {/* Service chips strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduce ? 0 : 0.8,
            delay: reduce ? 0 : 0.7,
            ease: easeOut,
          }}
          className="mt-14 sm:mt-20"
        >
          <div className="glass rounded-2xl px-3 py-3 sm:px-5 sm:py-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-1">
              {SERVICE_CHIPS.map((chip, i) => (
                <div key={chip.label} className="flex items-center gap-3 px-2 py-1.5 sm:px-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.04] text-chrome-100 ring-1 ring-white/10">
                    <chip.Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[14px] font-semibold text-white">
                      {chip.label}
                    </div>
                    <div className="truncate text-[11.5px] text-chrome-400">
                      {chip.sub}
                    </div>
                  </div>
                  {i < SERVICE_CHIPS.length - 1 && (
                    <div className="hidden h-10 w-px bg-white/10 sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HeroVisual() {
  const reduce = useReducedMotion();
  return (
    <div className="relative aspect-[5/6] w-full sm:aspect-[6/5] lg:aspect-square">
      {/* Outer glow ring */}
      <motion.div
        animate={
          reduce
            ? undefined
            : { rotate: 360 }
        }
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 grid place-items-center"
      >
        <div className="h-[88%] w-[88%] rounded-full border border-white/[0.05]" />
      </motion.div>
      <motion.div
        animate={reduce ? undefined : { rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 grid place-items-center"
      >
        <div className="h-[72%] w-[72%] rounded-full border border-white/[0.04]" />
      </motion.div>

      {/* Soft glow behind the logo */}
      <div className="pointer-events-none absolute inset-0 grid place-items-center">
        <div className="h-[55%] w-[55%] rounded-full bg-[radial-gradient(circle_at_center,rgba(159,180,217,0.22)_0%,rgba(159,180,217,0.06)_45%,transparent_70%)] blur-xl" />
      </div>

      {/* Central logo */}
      <div className="absolute inset-0 grid place-items-center">
        <motion.div
          animate={reduce ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="relative aspect-square w-[clamp(150px,30vw,300px)] drop-shadow-[0_20px_45px_rgba(0,0,0,0.55)]"
        >
          <Image
            src="/nyn-logo.png"
            alt="NYN Detailing"
            fill
            priority
            sizes="(max-width: 1024px) 30vw, 300px"
            className="select-none object-contain"
          />
        </motion.div>
      </div>

      {/* Floating service callouts — woven zigzag on mobile, framed on desktop */}
      <FloatingCallout
        className="left-[0%] top-[1%] sm:top-[5%]"
        label="Detail"
        sub="Mirror polish · interiors · engine bays · wheels · streak-free glass"
        Icon={SparkleIcon}
        delay={0.6}
      />
      <FloatingCallout
        className="right-[0%] top-[21%] sm:top-[16%]"
        label="Ceramic"
        sub="Hydrophobic · gloss enhancement · UV & environmental"
        Icon={DropletIcon}
        delay={0.85}
      />
      <FloatingCallout
        className="left-[0%] top-[41%] sm:top-[47%]"
        label="PPF"
        sub="Beats scratches, scuffs & scrapes · water-repellent · self-healing"
        Icon={ShieldIcon}
        delay={1.1}
      />
      <FloatingCallout
        className="right-[0%] top-[62%] sm:top-auto sm:bottom-[14%]"
        label="Wrap"
        sub="HEXIS films · colour change · blackout kits"
        Icon={WrapIcon}
        delay={1.35}
      />
      <FloatingCallout
        className="left-[0%] top-[82%] sm:left-[7%] sm:top-auto sm:bottom-[3%]"
        label="Tint"
        sub="Any shade · carbon & ceramic films"
        Icon={TintIcon}
        delay={1.6}
      />
    </div>
  );
}

function FloatingCallout({
  className,
  label,
  sub,
  Icon,
  delay = 0,
}: {
  className?: string;
  label: string;
  sub: string;
  Icon: IconType;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: reduce ? 0 : 0.7,
        delay: reduce ? 0 : delay,
        ease: easeOut,
      }}
      className={`absolute w-[148px] sm:w-[188px] ${className ?? ""}`}
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
        className="rounded-2xl border border-white/15 bg-ink-800/90 px-3.5 py-3 backdrop-blur-xl shadow-elevated ring-1 ring-inset ring-white/[0.06]"
      >
        {/* Top accent line */}
        <div className="mb-2.5 h-px w-8 bg-gradient-to-r from-accent-ice to-transparent" />
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-white/[0.06] text-chrome-50 ring-1 ring-white/10">
            <Icon className="h-4 w-4" />
          </span>
          <div className="font-display text-[15.5px] font-bold leading-none tracking-tight text-white">
            {label}
          </div>
        </div>
        <div className="mt-2 text-[11px] leading-snug text-chrome-300">
          {sub}
        </div>
      </motion.div>
    </motion.div>
  );
}
