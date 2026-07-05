"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { SVGProps } from "react";
import {
  ArrowRight,
  CheckIcon,
  ShieldIcon,
  SparkleIcon,
  WrapIcon,
} from "./ui/Icons";
import { Reveal } from "./ui/Reveal";

type ServiceSection = {
  heading: string;
  description: string;
  bullets: string[];
};

type Service = {
  id: string;
  eyebrow: string;
  title: string;
  tagline: string;
  description?: string;
  bullets?: string[];
  sections?: ServiceSection[];
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  Visual: () => JSX.Element;
  accent: string;
};

const SERVICES: Service[] = [
  {
    id: "detail",
    eyebrow: "01 · Detailing & Paint Correction",
    title: "Detailing",
    tagline: "Bring tired paint back to mirror finish.",
    description:
      "Multi-stage machine polishing, swirl &amp; oxidation removal, deep interior detailing and full decontamination. The foundation under every wrap, film and coating we install — finished by hand under inspection lights by Sam.",
    bullets: [
      "Multi-stage paint correction",
      "Swirl, scratch &amp; oxidation removal",
      "Interior steam, extract &amp; condition",
      "Pre-coating prep — done properly",
    ],
    Icon: SparkleIcon,
    Visual: DetailVisual,
    accent: "from-chrome-100 to-chrome-300",
  },
  {
    id: "protection",
    eyebrow: "02 · Paint Protection · Ceramic & PPF",
    title: "Protection",
    tagline: "Two ways to lock in showroom paint.",
    sections: [
      {
        heading: "Ceramic Paint Protection",
        description:
          "A premium liquid coating that chemically bonds to your paint — sealing it with serious hydrophobicity, a deep gloss enhancement and lasting UV &amp; environmental protection.",
        bullets: [
          "Extreme hydrophobicity — water sheets straight off",
          "Deep gloss enhancement &amp; slickness",
          "UV &amp; environmental protection",
        ],
      },
      {
        heading: "PPF Paint Protection Film",
        description:
          "Our toughest protection — a self-healing film that shrugs off scratches, scuffs and scrapes while staying water-repellent across the highest-impact panels.",
        bullets: [
          "Toughest defence vs scratches, scuffs &amp; scrapes",
          "Water-repellent, self-healing top coat",
          "Full-front, full-body &amp; track packages",
        ],
      },
    ],
    Icon: ShieldIcon,
    Visual: ProtectionVisual,
    accent: "from-accent-glow to-accent-ice",
  },
  {
    id: "wrap",
    eyebrow: "03 · Vehicle Wrapping",
    title: "Wrapping",
    tagline: "Transform the look. Protect the paint underneath.",
    description:
      "Full vehicle colour changes in satin, gloss and specialty finishes, blackout kits, plus headlight &amp; tail light tinting — all installed in a dust-controlled bay using premium HEXIS films.",
    bullets: [
      "Full colour changes &amp; accent wraps",
      "Premium HEXIS films",
      "Blackout kits &amp; de-chrome",
      "Headlight &amp; tail light tinting",
    ],
    Icon: WrapIcon,
    Visual: WrapVisual,
    accent: "from-chrome-200 to-chrome-400",
  },
];

export function Services() {
  return (
    <section id="services" className="relative section-pad">
      {/* Top divider */}
      <div className="divider-etched absolute inset-x-0 top-0" />

      <div className="container-pad mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-14 sm:mb-20 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[12px] font-medium tracking-wide text-chrome-300">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-ice" />
                Three premium services
              </div>
              <h2 className="mt-5 font-display text-[clamp(2rem,4.4vw,3.4rem)] font-bold leading-[1.05] tracking-[-0.025em] text-white">
                Built around the work
                <br />
                <span className="text-chrome-shine">that protects and elevates.</span>
              </h2>
            </div>
            <p className="max-w-md text-[15.5px] leading-relaxed text-chrome-300">
              Every detail, coating, film and wrap is hand-installed by Sam and
              the NYN team in our climate-controlled bay. No shortcuts — just
              detail-obsessed work that lasts.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>

        {/* Secondary services strip */}
        <Reveal delay={0.15}>
          <div className="mt-10 sm:mt-14 flex flex-col items-start gap-4 rounded-2xl glass px-6 py-5 sm:flex-row sm:items-center sm:gap-6 sm:px-7">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/[0.04] text-chrome-100 ring-1 ring-white/10">
                <TintMiniIcon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-[15px] font-semibold text-white">
                  Also offering: Window Tinting
                </div>
                <div className="mt-0.5 text-[12.5px] text-chrome-400">
                  Premium carbon &amp; ceramic films · Up to 99% UV/IR rejection ·
                  QLD legal-VLT compliant · Lifetime no-bubble warranty
                </div>
              </div>
            </div>
            <a
              href="#quote"
              className="btn-outline ml-auto whitespace-nowrap text-[13.5px]"
            >
              Quote Tinting
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: reduce ? 0 : 0.8,
        delay: reduce ? 0 : index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-ink-800/60 to-ink-900/60 transition-all duration-500 hover:border-white/20 hover:shadow-elevated"
    >
      {/* Top visual */}
      <div className="relative aspect-[4/3] overflow-hidden bg-ink-900">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_30%,rgba(159,180,217,0.18),transparent)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
        <div className="absolute inset-0">
          <service.Visual />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-ink-900" />

        {/* Eyebrow badge */}
        <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink-900/70 px-3 py-1 backdrop-blur-sm">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-chrome-300">
            {service.eyebrow}
          </span>
        </div>

        {/* Icon */}
        <div className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-ink-900/70 text-white backdrop-blur-sm">
          <service.Icon className="h-5 w-5" />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-3xl font-bold tracking-[-0.02em] text-white sm:text-4xl">
          {service.title}
        </h3>
        <p
          className="mt-2 text-[15px] text-chrome-300"
          dangerouslySetInnerHTML={{ __html: service.tagline }}
        />

        {service.sections ? (
          <div className="mt-5 space-y-4">
            {service.sections.map((sec) => (
              <div
                key={sec.heading}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5"
              >
                <h4 className="flex items-center gap-2 font-display text-[15.5px] font-semibold tracking-tight text-white">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-ice" />
                  {sec.heading}
                </h4>
                <p
                  className="mt-2 text-[13.5px] leading-relaxed text-chrome-300"
                  dangerouslySetInnerHTML={{ __html: sec.description }}
                />
                <ul className="mt-3 space-y-2">
                  {sec.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/[0.06] ring-1 ring-white/10">
                        <CheckIcon className="h-3 w-3 text-accent-ice" />
                      </span>
                      <span
                        className="text-[13.5px] text-chrome-100"
                        dangerouslySetInnerHTML={{ __html: b }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <>
            {service.description && (
              <p
                className="mt-5 text-[14.5px] leading-relaxed text-chrome-300"
                dangerouslySetInnerHTML={{ __html: service.description }}
              />
            )}
            {service.bullets && (
              <ul className="mt-6 space-y-2.5">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/[0.06] ring-1 ring-white/10">
                      <CheckIcon className="h-3 w-3 text-accent-ice" />
                    </span>
                    <span
                      className="text-[14px] text-chrome-100"
                      dangerouslySetInnerHTML={{ __html: b }}
                    />
                  </li>
                ))}
              </ul>
            )}
          </>
        )}

        <a
          href="#quote"
          className="mt-7 inline-flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-[14px] font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] cursor-pointer"
        >
          <span>Quote {service.title}</span>
          <span className="grid h-7 w-7 place-items-center rounded-full bg-white/[0.06] transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </a>
      </div>
    </motion.article>
  );
}

/* ---------- Service visuals ---------- */

function DetailVisual() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="dt-dull" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3B3F4B" />
          <stop offset="100%" stopColor="#1E2230" />
        </linearGradient>
        <linearGradient id="dt-mirror" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0A0B0F" />
          <stop offset="50%" stopColor="#1E2230" />
          <stop offset="100%" stopColor="#06070A" />
        </linearGradient>
        <radialGradient id="dt-reflect" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="rgba(216,225,238,0.5)" />
          <stop offset="60%" stopColor="rgba(216,225,238,0.05)" />
          <stop offset="100%" stopColor="rgba(216,225,238,0)" />
        </radialGradient>
        <linearGradient id="dt-shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.7)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <pattern id="dt-swirls" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
          <circle cx="18" cy="18" r="13" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
          <circle cx="8" cy="8" r="5" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
        </pattern>
      </defs>

      {/* Left half — dull, swirled paint */}
      <g>
        <rect x="0" y="40" width="200" height="220" fill="url(#dt-dull)" />
        <rect x="0" y="40" width="200" height="220" fill="url(#dt-swirls)" />
      </g>

      {/* Right half — corrected, mirror finish */}
      <g>
        <rect x="200" y="40" width="200" height="220" fill="url(#dt-mirror)" />
        <ellipse cx="320" cy="100" rx="140" ry="80" fill="url(#dt-reflect)" />
        <rect x="220" y="80" width="170" height="4" fill="url(#dt-shine)" opacity="0.55" />
        <rect x="210" y="150" width="180" height="3" fill="url(#dt-shine)" opacity="0.4" />
        <rect x="240" y="200" width="140" height="2" fill="url(#dt-shine)" opacity="0.3" />
        {/* faint skyline reflection */}
        <g fill="rgba(255,255,255,0.05)">
          <rect x="260" y="90" width="18" height="36" />
          <rect x="284" y="80" width="22" height="46" />
          <rect x="312" y="92" width="14" height="34" />
          <rect x="332" y="84" width="28" height="42" />
        </g>
      </g>

      {/* Center polishing pad — bridging the two halves */}
      <g transform="translate(200 170)">
        {/* Pad shadow on dull side */}
        <ellipse cx="0" cy="46" rx="58" ry="8" fill="#000" opacity="0.55" />
        {/* Pad body */}
        <circle r="44" fill="url(#dt-mirror)" stroke="rgba(255,255,255,0.18)" />
        <circle r="44" fill="url(#dt-reflect)" opacity="0.7" />
        {/* Foam pad ring */}
        <circle r="40" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />
        <circle r="32" fill="rgba(216,225,238,0.55)" />
        <circle r="32" fill="rgba(255,255,255,0)" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" />
        <circle r="22" fill="rgba(247,248,250,0.85)" />
        {/* Spinning swirl marks */}
        <g stroke="rgba(255,255,255,0.4)" strokeWidth="0.6" fill="none">
          <path d="M-18 0 A18 18 0 0 1 18 0">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0"
              to="360"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>
          <path d="M-12 0 A12 12 0 0 1 12 0">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0"
              to="-360"
              dur="5s"
              repeatCount="indefinite"
            />
          </path>
        </g>
        {/* Handle */}
        <rect x="-8" y="-72" width="16" height="32" rx="4" fill="#262B3B" stroke="rgba(255,255,255,0.18)" />
        <circle cx="0" cy="-72" r="10" fill="#3B3F4B" stroke="rgba(255,255,255,0.18)" />
      </g>

      {/* Split divider */}
      <line x1="200" y1="40" x2="200" y2="260" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5" strokeDasharray="3 4" />

      {/* Before / After labels */}
      <g>
        <text x="20" y="62" fill="#7C8290" fontSize="10" letterSpacing="3" fontFamily="ui-monospace, monospace">
          DULL
        </text>
        <text x="380" y="62" fill="#EAECF1" fontSize="10" letterSpacing="3" fontFamily="ui-monospace, monospace" textAnchor="end">
          MIRROR
        </text>
      </g>
    </svg>
  );
}

function ProtectionVisual() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="pr-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D6DAE3" />
          <stop offset="100%" stopColor="#525766" />
        </linearGradient>
        <radialGradient id="pr-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(216,225,238,0.5)" />
          <stop offset="60%" stopColor="rgba(159,180,217,0.15)" />
          <stop offset="100%" stopColor="rgba(216,225,238,0)" />
        </radialGradient>
        <radialGradient id="pr-bead" cx="35%" cy="35%" r="60%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.85)" />
          <stop offset="60%" stopColor="rgba(255,255,255,0.15)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        <linearGradient id="pr-ring" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(216,225,238,0.7)" />
          <stop offset="100%" stopColor="rgba(216,225,238,0.1)" />
        </linearGradient>
      </defs>

      {/* Outer ambient glow */}
      <circle cx="200" cy="150" r="130" fill="url(#pr-glow)" />

      {/* Outer ring — ceramic layer */}
      <g transform="translate(200 150)">
        <circle r="118" fill="none" stroke="url(#pr-ring)" strokeWidth="1" strokeDasharray="2 6" />
        <circle r="105" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      </g>

      {/* Shield (PPF) inside */}
      <g transform="translate(200 150)">
        <path
          d="M0 -82 L62 -55 L62 8 Q62 62 0 86 Q-62 62 -62 8 L-62 -55 Z"
          fill="url(#pr-body)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
        />
        <path
          d="M0 -75 L55 -50 L55 6 Q55 56 0 78 Q-55 56 -55 6 L-55 -50 Z"
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="0.5"
        />
        {/* Check */}
        <path
          d="M-22 2 L-6 18 L26 -18"
          stroke="#06070A"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Shield shine */}
        <path
          d="M-46 -68 L-18 -78 L-13 -45 L-41 -36 Z"
          fill="rgba(255,255,255,0.3)"
        />
      </g>

      {/* Ceramic + PPF labels orbiting */}
      <g transform="translate(82 70)">
        <rect x="-32" y="-12" width="64" height="22" rx="11" fill="#06070A" stroke="rgba(255,255,255,0.25)" />
        <text textAnchor="middle" y="4" fill="#EAECF1" fontSize="10.5" fontWeight="600" letterSpacing="2">
          CERAMIC
        </text>
      </g>
      <g transform="translate(322 70)">
        <rect x="-22" y="-12" width="44" height="22" rx="11" fill="#06070A" stroke="rgba(255,255,255,0.25)" />
        <text textAnchor="middle" y="4" fill="#EAECF1" fontSize="10.5" fontWeight="600" letterSpacing="2">
          PPF
        </text>
      </g>

      {/* Water beads — hydrophobic ceramic look */}
      <g>
        <circle cx="64" cy="180" r="11" fill="url(#pr-bead)" stroke="rgba(255,255,255,0.4)">
          <animate attributeName="cy" values="180;172;180" dur="4.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="346" cy="170" r="14" fill="url(#pr-bead)" stroke="rgba(255,255,255,0.35)">
          <animate attributeName="cy" values="170;160;170" dur="5.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="80" cy="240" r="7" fill="url(#pr-bead)" stroke="rgba(255,255,255,0.4)">
          <animate attributeName="cy" values="240;233;240" dur="3.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="318" cy="248" r="9" fill="url(#pr-bead)" stroke="rgba(255,255,255,0.4)">
          <animate attributeName="cy" values="248;240;248" dur="4.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="40" cy="120" r="5" fill="url(#pr-bead)" stroke="rgba(255,255,255,0.35)" />
        <circle cx="360" cy="120" r="4" fill="url(#pr-bead)" stroke="rgba(255,255,255,0.35)" />
      </g>

      {/* Bottom marker */}
      <g transform="translate(200 270)">
        <text
          textAnchor="middle"
          fill="#7C8290"
          fontSize="10"
          letterSpacing="3"
          fontFamily="ui-monospace, monospace"
        >
          HYDROPHOBIC · SELF-HEALING · UV-STABLE
        </text>
      </g>
    </svg>
  );
}

function WrapVisual() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="wrap-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8EBF0" />
          <stop offset="50%" stopColor="#929AAA" />
          <stop offset="100%" stopColor="#3B3F4B" />
        </linearGradient>
        <linearGradient id="wrap-peel" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#262B3B" />
          <stop offset="100%" stopColor="#0A0B0F" />
        </linearGradient>
        <linearGradient id="wrap-shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.5)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>

      {/* Floor reflection */}
      <ellipse cx="200" cy="240" rx="160" ry="14" fill="#000" opacity="0.5" />

      {/* Car silhouette */}
      <g>
        {/* Lower body */}
        <path
          d="M60 180 L90 145 Q120 130 175 128 L255 128 Q295 130 320 150 L350 180 L350 215 Q340 230 320 230 L80 230 Q60 230 60 215 Z"
          fill="url(#wrap-body)"
        />
        {/* Roof */}
        <path
          d="M125 130 Q145 95 180 92 L240 92 Q278 96 295 130 Z"
          fill="#262B3B"
          opacity="0.9"
        />
        {/* Windows */}
        <path
          d="M138 128 Q156 102 182 100 L210 100 L210 128 Z"
          fill="#0A0B0F"
        />
        <path
          d="M215 128 L215 100 L238 100 Q272 102 285 128 Z"
          fill="#0A0B0F"
        />
        {/* Door line */}
        <line
          x1="205"
          y1="128"
          x2="205"
          y2="225"
          stroke="#0A0B0F"
          strokeWidth="1"
          opacity="0.4"
        />
        {/* Handle */}
        <rect
          x="170"
          y="170"
          width="20"
          height="3"
          rx="1.5"
          fill="#0A0B0F"
          opacity="0.5"
        />
        <rect
          x="225"
          y="170"
          width="20"
          height="3"
          rx="1.5"
          fill="#0A0B0F"
          opacity="0.5"
        />
        {/* Wheels */}
        <circle cx="115" cy="225" r="22" fill="#0A0B0F" />
        <circle cx="115" cy="225" r="12" fill="#262B3B" />
        <circle cx="115" cy="225" r="4" fill="#7C8290" />
        <circle cx="295" cy="225" r="22" fill="#0A0B0F" />
        <circle cx="295" cy="225" r="12" fill="#262B3B" />
        <circle cx="295" cy="225" r="4" fill="#7C8290" />
      </g>

      {/* Peeling wrap effect on the right */}
      <g>
        <path
          d="M285 130 Q320 110 350 95 Q360 130 350 165 Q325 175 300 165 Z"
          fill="url(#wrap-peel)"
          opacity="0.85"
        />
        <path
          d="M285 130 Q320 110 350 95"
          stroke="#7C8290"
          strokeWidth="0.5"
          fill="none"
        />
      </g>

      {/* Shine across body */}
      <rect
        x="60"
        y="120"
        width="290"
        height="6"
        fill="url(#wrap-shine)"
        opacity="0.7"
      >
        <animate
          attributeName="x"
          values="-100;400;-100"
          dur="6s"
          repeatCount="indefinite"
        />
      </rect>

      {/* Floating squares (the wrap "patches") */}
      <g opacity="0.7">
        <rect x="30" y="50" width="36" height="22" rx="3" fill="#3B3F4B" />
        <rect x="30" y="50" width="36" height="22" rx="3" fill="url(#wrap-shine)" />
        <rect x="340" y="40" width="40" height="24" rx="3" fill="#3B3F4B" />
      </g>
    </svg>
  );
}

function TintMiniIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3.5" y="5" width="17" height="14" rx="2.5" />
      <path d="M3.5 12 Q12 9 20.5 12" />
      <circle cx="18.5" cy="6.5" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
