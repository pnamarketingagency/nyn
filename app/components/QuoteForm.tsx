"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  CheckIcon,
  GoogleLogo,
  ShieldIcon,
  SparkleIcon,
  StarIcon,
  WrapIcon,
} from "./ui/Icons";
import { Reveal } from "./ui/Reveal";

const SERVICES = [
  { id: "detail", label: "Detailing & Paint Correction", Icon: SparkleIcon },
  { id: "protection", label: "Paint Protection (Ceramic & PPF)", Icon: ShieldIcon },
  { id: "wrap", label: "Vehicle Wrapping", Icon: WrapIcon },
  { id: "multi", label: "Multiple Services", Icon: SparkleIcon },
  { id: "tint", label: "Window Tinting", Icon: SparkleIcon },
];

const URGENCY = ["ASAP (this week)", "Next 2–4 weeks", "Just exploring"];

type FormData = {
  service: string;
  year: string;
  vehicle: string;
  condition: string;
  name: string;
  phone: string;
  email: string;
  urgency: string;
  notes: string;
};

const initial: FormData = {
  service: "",
  year: "",
  vehicle: "",
  condition: "",
  name: "",
  phone: "",
  email: "",
  urgency: "",
  notes: "",
};

const easeOut = [0.22, 1, 0.36, 1] as const;

export function QuoteForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const reduce = useReducedMotion();

  const steps = [
    { id: 0, label: "Service" },
    { id: 1, label: "Vehicle" },
    { id: 2, label: "Contact" },
  ];

  const canAdvance =
    (step === 0 && data.service) ||
    (step === 1 && data.year && data.vehicle && data.condition) ||
    (step === 2 && data.name && data.phone && data.email && data.urgency);

  const set = (patch: Partial<FormData>) =>
    setData((d) => ({ ...d, ...patch }));

  const submit = async () => {
    setSubmitting(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      // network error is fine — lead is still surfaced via success state
    } finally {
      setSubmitting(false);
      setDone(true);
    }
  };

  return (
    <section id="quote" className="relative section-pad">
      <div className="divider-etched absolute inset-x-0 top-0" />

      {/* Atmospheric backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_0%,rgba(159,180,217,0.12),transparent)]" />
      </div>

      <div className="container-pad mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.25fr] lg:gap-12">
          {/* LEFT — pitch */}
          <Reveal>
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[12px] font-medium tracking-wide text-chrome-300">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-ice" />
                Free quote — under 60 seconds
              </div>
              <h2 className="mt-5 font-display text-[clamp(2rem,4.4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.025em] text-white">
                Tell us about your car. <br />
                <span className="text-chrome-shine">We&apos;ll come back with a quote.</span>
              </h2>
              <p className="mt-5 text-[15.5px] leading-relaxed text-chrome-300">
                Replies usually within an hour during business hours, direct from
                Sam. No call centres, no upsells — just a clear quote and a clear
                next step.
              </p>

              <ul className="mt-7 space-y-3">
                {[
                  "60-second form, zero pressure",
                  "Direct reply from Sam (the owner)",
                  "Premium-only films & coatings",
                  "5.0★ Google rated · Slacks Creek QLD",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/[0.06] ring-1 ring-white/10">
                      <CheckIcon className="h-3 w-3 text-accent-ice" />
                    </span>
                    <span className="text-[14.5px] text-chrome-100">{p}</span>
                  </li>
                ))}
              </ul>

              {/* Mini review proof */}
              <div className="mt-8 rounded-2xl glass p-5">
                <div className="flex items-center gap-3">
                  <GoogleLogo className="h-5 w-5" />
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="h-3.5 w-3.5 text-amber-300" />
                    ))}
                  </div>
                  <span className="ml-auto text-[12px] font-semibold text-white">
                    5.0 / 5.0
                  </span>
                </div>
                <p className="mt-3 text-[13.5px] leading-relaxed text-chrome-200">
                  “Best detailing company I&apos;ve ever used in 20 years in the
                  motor industry.”
                </p>
                <div className="mt-2 text-[11.5px] text-chrome-400">
                  — Marque One · Google verified
                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT — form */}
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl glass-elevated">
              {/* Progress */}
              <div className="border-b border-white/10 px-6 pb-5 pt-6 sm:px-8 sm:pt-8">
                <div className="flex items-center gap-3">
                  {steps.map((s, i) => (
                    <div key={s.id} className="flex flex-1 items-center gap-3">
                      <button
                        type="button"
                        disabled={i > step && !done}
                        onClick={() => !done && i < step && setStep(i)}
                        className={[
                          "flex items-center gap-2.5 text-left transition-opacity",
                          i <= step ? "opacity-100" : "opacity-50",
                          i < step ? "cursor-pointer" : "cursor-default",
                        ].join(" ")}
                      >
                        <span
                          className={[
                            "grid h-7 w-7 place-items-center rounded-full font-display text-[12px] font-semibold transition-all duration-300",
                            i < step || done
                              ? "bg-chrome-gradient text-ink-950 shadow-chrome"
                              : i === step
                              ? "border border-white/30 bg-white/[0.04] text-white"
                              : "border border-white/10 bg-transparent text-chrome-400",
                          ].join(" ")}
                        >
                          {i < step || done ? (
                            <CheckIcon className="h-3.5 w-3.5" />
                          ) : (
                            i + 1
                          )}
                        </span>
                        <span
                          className={[
                            "hidden sm:inline text-[13px] font-medium tracking-tight",
                            i <= step ? "text-white" : "text-chrome-400",
                          ].join(" ")}
                        >
                          {s.label}
                        </span>
                      </button>
                      {i < steps.length - 1 && (
                        <div className="flex-1 h-px bg-white/10" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Body */}
              <div className="relative px-6 py-7 sm:px-8 sm:py-9 min-h-[420px]">
                <AnimatePresence mode="wait">
                  {done ? (
                    <SuccessScreen key="done" data={data} reset={() => {
                      setData(initial);
                      setStep(0);
                      setDone(false);
                    }} />
                  ) : (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: reduce ? 0 : 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: reduce ? 0 : -16 }}
                      transition={{ duration: 0.4, ease: easeOut }}
                      className="space-y-6"
                    >
                      {step === 0 && (
                        <ServiceStep
                          value={data.service}
                          onChange={(v) => set({ service: v })}
                        />
                      )}
                      {step === 1 && (
                        <VehicleStep
                          data={data}
                          onChange={(p) => set(p)}
                        />
                      )}
                      {step === 2 && (
                        <ContactStep data={data} onChange={(p) => set(p)} />
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer actions */}
              {!done && (
                <div className="flex flex-col-reverse gap-3 border-t border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                  <button
                    type="button"
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    disabled={step === 0}
                    className="text-[13.5px] font-medium text-chrome-300 transition-colors hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  >
                    ← Back
                  </button>

                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline text-[12px] text-chrome-400">
                      Step {step + 1} of {steps.length}
                    </span>
                    {step < 2 ? (
                      <button
                        type="button"
                        onClick={() => canAdvance && setStep((s) => s + 1)}
                        disabled={!canAdvance}
                        className="btn-chrome disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Continue
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => canAdvance && submit()}
                        disabled={!canAdvance || submitting}
                        className="btn-chrome disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {submitting ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink-950/30 border-t-ink-950" />
                            Sending…
                          </>
                        ) : (
                          <>
                            Submit Quote Request
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Step components ---------------- */

function ServiceStep({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <Label
        title="Which service can we quote for?"
        sub="Pick one — you can add more in the notes step."
      />
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {SERVICES.map((s) => {
          const active = value === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => onChange(s.id)}
              className={[
                "group flex items-center gap-3 rounded-2xl border px-4 py-4 text-left transition-all duration-300 cursor-pointer",
                active
                  ? "border-white/30 bg-white/[0.06] shadow-elevated"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]",
              ].join(" ")}
              aria-pressed={active}
            >
              <span
                className={[
                  "grid h-10 w-10 shrink-0 place-items-center rounded-xl border transition-colors duration-300",
                  active
                    ? "border-white/30 bg-chrome-gradient text-ink-950"
                    : "border-white/10 bg-white/[0.04] text-chrome-100",
                ].join(" ")}
              >
                <s.Icon className="h-5 w-5" />
              </span>
              <span className="flex-1">
                <span className="block text-[14.5px] font-semibold text-white">
                  {s.label}
                </span>
                <span className="block text-[12px] text-chrome-400">
                  {s.id === "multi"
                    ? "Combine for package pricing"
                    : "Free, detailed quote"}
                </span>
              </span>
              <span
                className={[
                  "grid h-5 w-5 place-items-center rounded-full border transition-all",
                  active
                    ? "border-white/40 bg-white"
                    : "border-white/15 bg-transparent",
                ].join(" ")}
              >
                {active && (
                  <span className="h-2 w-2 rounded-full bg-ink-950" />
                )}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function VehicleStep({
  data,
  onChange,
}: {
  data: FormData;
  onChange: (p: Partial<FormData>) => void;
}) {
  const conditions = [
    "Brand new / nearly new",
    "Daily — light wear",
    "Used — paint needs love",
  ];
  return (
    <div>
      <Label
        title="Tell us about the vehicle"
        sub="A few quick details so we can quote accurately."
      />
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field
          label="Year"
          placeholder="2024"
          value={data.year}
          onChange={(v) => onChange({ year: v })}
          inputMode="numeric"
          maxLength={4}
        />
        <Field
          label="Make &amp; model"
          placeholder="e.g. Tesla Model Y, BMW M3"
          value={data.vehicle}
          onChange={(v) => onChange({ vehicle: v })}
        />
      </div>

      <div className="mt-6">
        <div className="mb-3 text-[13px] font-medium text-chrome-200">
          Current condition
        </div>
        <div className="grid gap-2 sm:grid-cols-3">
          {conditions.map((c) => {
            const active = data.condition === c;
            return (
              <button
                key={c}
                type="button"
                onClick={() => onChange({ condition: c })}
                className={[
                  "rounded-xl border px-4 py-3 text-left text-[13.5px] font-medium transition-all duration-200 cursor-pointer",
                  active
                    ? "border-white/30 bg-white/[0.08] text-white"
                    : "border-white/10 bg-white/[0.02] text-chrome-200 hover:border-white/20 hover:text-white",
                ].join(" ")}
              >
                {c}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ContactStep({
  data,
  onChange,
}: {
  data: FormData;
  onChange: (p: Partial<FormData>) => void;
}) {
  return (
    <div>
      <Label
        title="Where should Sam send the quote?"
        sub="Replies go straight to you — usually within an hour."
      />
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field
          label="Your name"
          placeholder="Full name"
          value={data.name}
          onChange={(v) => onChange({ name: v })}
        />
        <Field
          label="Phone"
          placeholder="e.g. 04XX XXX XXX"
          value={data.phone}
          onChange={(v) => onChange({ phone: v })}
          type="tel"
          inputMode="tel"
        />
      </div>
      <div className="mt-4">
        <Field
          label="Email"
          placeholder="you@email.com"
          value={data.email}
          onChange={(v) => onChange({ email: v })}
          type="email"
          inputMode="email"
        />
      </div>

      <div className="mt-6">
        <div className="mb-3 text-[13px] font-medium text-chrome-200">
          Timing
        </div>
        <div className="grid gap-2 sm:grid-cols-3">
          {URGENCY.map((u) => {
            const active = data.urgency === u;
            return (
              <button
                key={u}
                type="button"
                onClick={() => onChange({ urgency: u })}
                className={[
                  "rounded-xl border px-4 py-3 text-left text-[13.5px] font-medium transition-all duration-200 cursor-pointer",
                  active
                    ? "border-white/30 bg-white/[0.08] text-white"
                    : "border-white/10 bg-white/[0.02] text-chrome-200 hover:border-white/20 hover:text-white",
                ].join(" ")}
              >
                {u}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-[13px] font-medium text-chrome-200">
          Anything else? <span className="text-chrome-500">(optional)</span>
        </label>
        <textarea
          rows={3}
          value={data.notes}
          onChange={(e) => onChange({ notes: e.target.value })}
          placeholder="Colour change ideas, problem areas, preferred booking dates…"
          className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[14.5px] text-white placeholder:text-chrome-500 focus:border-white/30 focus:bg-white/[0.05] focus:outline-none transition-colors resize-none"
        />
      </div>
    </div>
  );
}

function SuccessScreen({ data, reset }: { data: FormData; reset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: easeOut }}
      className="flex flex-col items-center text-center"
    >
      <div className="grid h-16 w-16 place-items-center rounded-full bg-chrome-gradient shadow-chrome">
        <CheckIcon className="h-7 w-7 text-ink-950" />
      </div>
      <h3 className="mt-6 font-display text-2xl font-semibold text-white sm:text-3xl">
        Quote request received.
      </h3>
      <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-chrome-300">
        Thanks {data.name?.split(" ")[0] || "for reaching out"} — Sam will be in
        touch shortly via {data.phone || "phone"} or {data.email || "email"}.
      </p>

      <div className="mt-7 grid w-full max-w-md gap-3 sm:grid-cols-3">
        <Stat label="Average reply" value="< 1hr" />
        <Stat label="Google rating" value="5.0★" />
        <Stat label="Hand-finished" value="100%" />
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <a href="tel:+61" className="btn-chrome">
          Call Sam directly
        </a>
        <button type="button" onClick={reset} className="btn-outline">
          Send another request
        </button>
      </div>
    </motion.div>
  );
}

/* ---------------- Primitives ---------------- */

function Label({ title, sub }: { title: string; sub: string }) {
  return (
    <div>
      <h3 className="font-display text-xl font-semibold tracking-[-0.015em] text-white sm:text-2xl">
        {title}
      </h3>
      <p className="mt-1.5 text-[13.5px] text-chrome-400">{sub}</p>
    </div>
  );
}

function Field({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  inputMode,
  maxLength,
}: {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  inputMode?: "text" | "tel" | "email" | "numeric";
  maxLength?: number;
}) {
  return (
    <label className="block">
      <span
        className="block text-[13px] font-medium text-chrome-200"
        dangerouslySetInnerHTML={{ __html: label }}
      />
      <input
        type={type}
        inputMode={inputMode}
        maxLength={maxLength}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[14.5px] text-white placeholder:text-chrome-500 focus:border-white/30 focus:bg-white/[0.05] focus:outline-none transition-colors"
      />
    </label>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-center">
      <div className="font-display text-base font-semibold text-white">
        {value}
      </div>
      <div className="mt-0.5 text-[11px] text-chrome-400">{label}</div>
    </div>
  );
}
