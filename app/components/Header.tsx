"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, CloseIcon, MenuIcon, PhoneIcon } from "./ui/Icons";
import { LogoLockup, Logo } from "./ui/Logo";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#expertise", label: "Expertise" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#location", label: "Visit" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: reduce ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-5 sm:pt-5"
      >
        <div
          className={[
            "flex w-full max-w-6xl items-center gap-2 rounded-full border px-3 py-2 transition-all duration-500",
            scrolled
              ? "border-white/10 bg-ink-900/80 backdrop-blur-xl shadow-elevated"
              : "border-white/[0.06] bg-ink-900/40 backdrop-blur-md",
          ].join(" ")}
        >
          <a
            href="#top"
            className="flex items-center rounded-full pl-2 pr-3 py-1 transition-opacity hover:opacity-90"
            aria-label="NYN Detailing — home"
          >
            <LogoLockup height={46} />
          </a>

          <nav className="ml-auto hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-[13.5px] font-medium text-chrome-200 transition-colors hover:bg-white/[0.05] hover:text-white cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="tel:+61"
            className="ml-auto hidden items-center gap-1.5 rounded-full border border-white/10 px-3.5 py-2 text-[13px] font-medium text-chrome-100 transition-colors hover:bg-white/[0.05] cursor-pointer lg:ml-2 md:inline-flex"
            aria-label="Call NYN Detailing"
          >
            <PhoneIcon className="h-3.5 w-3.5" />
            <span className="hidden xl:inline">Call</span>
          </a>

          <a href="#quote" className="btn-chrome ml-1 hidden md:inline-flex">
            Get a Free Quote
            <ArrowRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-chrome-100 transition-colors hover:bg-white/[0.08] md:hidden cursor-pointer"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <div
              className="absolute inset-0 bg-ink-950/90 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-full flex-col px-6 pb-10 pt-5"
            >
              <div className="flex items-center justify-between">
                <LogoLockup height={46} />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-chrome-100 transition-colors hover:bg-white/[0.08] cursor-pointer"
                >
                  <CloseIcon className="h-5 w-5" />
                </button>
              </div>

              <nav className="mt-12 flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-white/5 py-5 font-display text-2xl font-medium text-chrome-50 transition-colors hover:text-white cursor-pointer"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3 pt-10">
                <a
                  href="#quote"
                  onClick={() => setOpen(false)}
                  className="btn-chrome justify-center"
                >
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="tel:+61" className="btn-outline justify-center">
                  <PhoneIcon className="h-4 w-4" />
                  Call NYN Detailing
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
