"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, StaggerGroup, StaggerItem } from "./ui/Reveal";
import { CheckIcon, SparkleIcon } from "./ui/Icons";

const PROCESS = [
  {
    step: "01",
    title: "Diagnostic & wash",
    body: "Two-bucket decontamination, iron-fallout removal, paint thickness mapped panel-by-panel.",
  },
  {
    step: "02",
    title: "Paint correction",
    body: "Multi-stage machine polish removes swirls, oxidation and sun-affected dullness — true 95%+ defect removal.",
  },
  {
    step: "03",
    title: "Protection layer",
    body: "Ceramic coating, PPF or premium wax — matched to your driving and how long you'll keep the car.",
  },
  {
    step: "04",
    title: "Interior detail",
    body: "Steam, extract, condition. Leather, fabric, plastics and glass — everything restored, not just wiped.",
  },
  {
    step: "05",
    title: "Final inspection",
    body: "Sam personally checks the car under inspection lights before it leaves the bay. No exceptions.",
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="relative section-pad">
      <div className="divider-etched absolute inset-x-0 top-0" />

      {/* Atmospheric backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(159,180,217,0.08),transparent)]" />
      </div>

      <div className="container-pad mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[12px] font-medium tracking-wide text-chrome-300">
                <SparkleIcon className="h-3.5 w-3.5" />
                The NYN standard
              </div>
              <h2 className="mt-5 font-display text-[clamp(2rem,4.4vw,3.4rem)] font-bold leading-[1.05] tracking-[-0.025em] text-white">
                Detail-obsessed.<br />
                <span className="text-chrome-shine">Process-driven.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[15.5px] leading-relaxed text-chrome-300">
              Dull, sun-affected paint? Swirl marks under the showroom lights?
              We bring tired paint back to mirror-finish before any film or
              coating goes on — because protection only counts on a surface
              that&apos;s already perfect.
            </p>
          </Reveal>
        </div>

        {/* Before / After showcase */}
        <Reveal delay={0.15}>
          <div className="mt-12 sm:mt-16">
            <BeforeAfter />
          </div>
        </Reveal>

        {/* Process timeline */}
        <div className="mt-16 sm:mt-24">
          <Reveal>
            <div className="mb-10 flex items-baseline justify-between">
              <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">
                The NYN process
              </h3>
              <span className="text-[12px] uppercase tracking-[0.22em] text-chrome-400">
                Five steps · zero shortcuts
              </span>
            </div>
          </Reveal>

          <StaggerGroup
            className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-5"
            staggerChildren={0.08}
            amount={0.1}
          >
            {PROCESS.map((p) => (
              <StaggerItem key={p.step} className="bg-ink-900">
                <div className="flex h-full flex-col gap-3 p-6 transition-colors duration-300 hover:bg-ink-800/80 sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-[11px] font-semibold tracking-[0.25em] text-chrome-400">
                      STEP {p.step}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-ice" />
                  </div>
                  <h4 className="font-display text-[17px] font-semibold leading-tight text-white">
                    {p.title}
                  </h4>
                  <p className="text-[13.5px] leading-relaxed text-chrome-300">
                    {p.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        {/* Owner / Sam panel */}
        <Reveal>
          <div className="mt-16 sm:mt-20 grid items-center gap-8 overflow-hidden rounded-3xl glass-elevated p-6 sm:p-10 lg:grid-cols-[1fr_1.4fr]">
            <SamVisual />
            <div>
              <div className="font-display text-[11px] uppercase tracking-[0.28em] text-chrome-400">
                The owner
              </div>
              <h3 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-[28px]">
                Hand-finished by Sam — the owner who answers your messages and
                checks every car before it leaves.
              </h3>
              <p className="mt-4 text-[14.5px] leading-relaxed text-chrome-300">
                NYN Detailing isn&apos;t a chain. It&apos;s Sam&apos;s bay, his
                standards, and his name on every job. You&apos;ll talk to him,
                you&apos;ll get straight answers, and you&apos;ll know exactly
                what&apos;s being done to your car — and why.
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {[
                  "Direct line to Sam — no call centres",
                  "Detail-obsessed, hand-finished work",
                  "Premium-only films & coatings",
                  "5.0★ Google rated by every client",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/[0.06] ring-1 ring-white/10">
                      <CheckIcon className="h-3 w-3 text-accent-ice" />
                    </span>
                    <span className="text-[13.5px] text-chrome-100">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- visuals ---------- */

function BeforeAfter() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const splitX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduce ? ["50%", "50%", "50%"] : ["25%", "55%", "75%"]
  );
  const clipPath = useTransform(splitX, (v) => `inset(0 0 0 ${v})`);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900"
    >
      <div className="relative aspect-[16/8] sm:aspect-[16/6.5]">
        {/* Before (dull, faded) */}
        <PaintPanel state="before" />
        {/* After (mirror, vivid) */}
        <motion.div
          style={{ clipPath }}
          className="absolute inset-0"
        >
          <PaintPanel state="after" />
        </motion.div>

        {/* Split line */}
        <motion.div
          style={{ left: splitX }}
          className="absolute inset-y-0 z-10 w-px bg-white/40 shadow-[0_0_40px_rgba(216,225,238,0.5)]"
        >
          <div className="absolute -left-1.5 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-ink-900/90 backdrop-blur">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 6l-6 6 6 6M16 6l6 6-6 6" />
            </svg>
          </div>
        </motion.div>

        {/* Labels */}
        <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-ink-900/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-chrome-300 backdrop-blur">
          Before
        </div>
        <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-ink-900/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-white backdrop-blur">
          After · NYN finish
        </div>
      </div>
    </div>
  );
}

function PaintPanel({ state }: { state: "before" | "after" }) {
  if (state === "before") {
    return (
      <svg
        viewBox="0 0 1200 480"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <linearGradient id="bf-paint" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B3F4B" />
            <stop offset="50%" stopColor="#262B3B" />
            <stop offset="100%" stopColor="#161922" />
          </linearGradient>
          <pattern id="swirls" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="15" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
            <circle cx="10" cy="10" r="7" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="1200" height="480" fill="url(#bf-paint)" />
        <rect width="1200" height="480" fill="url(#swirls)" opacity="0.6" />
        {/* Scratches */}
        <g stroke="rgba(255,255,255,0.06)" strokeWidth="1">
          <line x1="120" y1="80" x2="380" y2="120" />
          <line x1="200" y1="200" x2="500" y2="240" />
          <line x1="50" y1="320" x2="450" y2="380" />
          <line x1="180" y1="420" x2="500" y2="450" />
        </g>
        {/* Sun fade patches */}
        <ellipse cx="200" cy="240" rx="180" ry="50" fill="rgba(82,87,102,0.5)" />
        <ellipse cx="400" cy="180" rx="150" ry="40" fill="rgba(82,87,102,0.4)" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 1200 480"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="af-paint" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0A0B0F" />
          <stop offset="40%" stopColor="#1E2230" />
          <stop offset="100%" stopColor="#06070A" />
        </linearGradient>
        <radialGradient id="af-reflection" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="rgba(216,225,238,0.5)" />
          <stop offset="50%" stopColor="rgba(216,225,238,0.1)" />
          <stop offset="100%" stopColor="rgba(216,225,238,0)" />
        </radialGradient>
        <linearGradient id="af-shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.5)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>
      <rect width="1200" height="480" fill="url(#af-paint)" />
      <ellipse cx="800" cy="160" rx="500" ry="160" fill="url(#af-reflection)" />
      {/* Reflected highlights */}
      <rect x="200" y="100" width="800" height="6" fill="url(#af-shine)" opacity="0.6" />
      <rect x="100" y="220" width="900" height="4" fill="url(#af-shine)" opacity="0.4" />
      <rect x="300" y="340" width="700" height="3" fill="url(#af-shine)" opacity="0.3" />
      {/* Reflected building shapes — fake skyline reflection */}
      <g fill="rgba(255,255,255,0.05)">
        <rect x="400" y="120" width="40" height="80" />
        <rect x="460" y="100" width="60" height="100" />
        <rect x="540" y="130" width="35" height="70" />
        <rect x="600" y="110" width="80" height="90" />
        <rect x="700" y="125" width="45" height="75" />
      </g>
    </svg>
  );
}

function SamVisual() {
  return (
    <div className="relative aspect-square w-full max-w-[360px] overflow-hidden rounded-2xl border border-white/10 bg-ink-800">
      <div className="absolute inset-0 grid-bg opacity-30" />
      {/* Spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_30%,rgba(216,225,238,0.18),transparent_70%)]" />
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="sam-chrome" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F7F8FA" />
            <stop offset="50%" stopColor="#C9CDD6" />
            <stop offset="100%" stopColor="#7C8290" />
          </linearGradient>
        </defs>
        {/* Stylized initial S */}
        <text
          x="50%"
          y="60%"
          textAnchor="middle"
          fontSize="280"
          fontWeight="800"
          fill="url(#sam-chrome)"
          fontFamily="Sora, sans-serif"
          letterSpacing="-15"
        >
          S
        </text>
        {/* Etched ring */}
        <circle
          cx="200"
          cy="200"
          r="170"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />
        <circle
          cx="200"
          cy="200"
          r="155"
          fill="none"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="0.5"
        />
        {/* Label */}
        <g transform="translate(200 340)">
          <text
            textAnchor="middle"
            fill="#9CA0AC"
            fontSize="11"
            letterSpacing="6"
            fontFamily="ui-monospace, monospace"
          >
            SAM · OWNER · NYN
          </text>
        </g>
      </svg>
    </div>
  );
}
