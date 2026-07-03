"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { MinusIcon, PlusIcon } from "./ui/Icons";
import { Reveal } from "./ui/Reveal";

const FAQS = [
  {
    q: "How long does a full vehicle wrap or PPF install take?",
    a: "Full vehicle wraps typically run 3–5 days, full-body PPF 4–6 days. Smaller jobs like accent wraps, full-front PPF or tinting are usually 1 day. Sam will give you a firm timeline with your quote.",
  },
  {
    q: "Do you use premium films?",
    a: "Yes — premium only. We work with Avery Dennison and 3M for wraps, leading self-healing TPU films for PPF, and carbon / ceramic films for tinting. We don't use cheap films, and we won't quote ones we wouldn't put on our own cars.",
  },
  {
    q: "Is your window tint QLD-legal?",
    a: "Every install meets QLD VLT regulations. We'll talk you through the legal limits for front and rear glass and recommend the best film for heat and glare without breaking compliance.",
  },
  {
    q: "What does the lifetime film warranty cover?",
    a: "On eligible premium films we offer a lifetime warranty against bubbling, peeling, cracking and discolouration. Stone-chip and self-healing performance is also covered on our PPF — we'll walk you through the fine print before you commit.",
  },
  {
    q: "Will the wrap or PPF damage my paint?",
    a: "No — quite the opposite. Both are reversible and act as a protective barrier. Removed properly, your factory paint comes out looking the same (or better) than it went in.",
  },
  {
    q: "Where are you located? Do you collect?",
    a: "Our climate-controlled bay is at 2/10 Judds Ct, Slacks Creek QLD 4127 — close to the M1 from Brisbane city, Logan, the Gold Coast and Springwood. We can arrange collection / drop-off for larger jobs.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative section-pad">
      <div className="divider-etched absolute inset-x-0 top-0" />

      <div className="container-pad mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[12px] font-medium tracking-wide text-chrome-300">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-ice" />
                Common questions
              </div>
              <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.05] tracking-[-0.025em] text-white">
                Answers before <br />
                <span className="text-chrome-shine">you reach out.</span>
              </h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-chrome-300">
                Still got a question? Drop it in the quote form notes and
                Sam will answer personally.
              </p>
              <a href="#quote" className="btn-outline mt-7 inline-flex">
                Ask in the quote form
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="divide-y divide-white/10 overflow-hidden rounded-3xl border border-white/10 bg-ink-900/40">
              {FAQS.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.02] cursor-pointer sm:px-7 sm:py-6"
        aria-expanded={open}
      >
        <span className="font-display text-[15.5px] font-semibold leading-snug text-white sm:text-[17px]">
          {q}
        </span>
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-chrome-100 transition-colors hover:bg-white/[0.08]">
          {open ? (
            <MinusIcon className="h-4 w-4" />
          ) : (
            <PlusIcon className="h-4 w-4" />
          )}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-[14.5px] leading-relaxed text-chrome-300 sm:px-7">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
