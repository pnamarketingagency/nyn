"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, PhoneIcon } from "./ui/Icons";

export function MobileCTABar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const quote = document.getElementById("quote");
      const quoteTop = quote ? quote.getBoundingClientRect().top : Infinity;
      const past = window.scrollY > window.innerHeight * 0.4;
      // Hide bar once user has reached the quote form to avoid covering it
      const beforeQuote = quoteTop > 200;
      setShow(past && beforeQuote);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-3 bottom-3 z-40 md:hidden"
        >
          <div className="flex gap-2 rounded-2xl border border-white/15 bg-ink-900/85 p-2 backdrop-blur-xl shadow-elevated">
            <a
              href="tel:+61"
              className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-white"
              aria-label="Call NYN Detailing"
            >
              <PhoneIcon className="h-5 w-5" />
            </a>
            <a
              href="#quote"
              className="btn-chrome flex-1 justify-center !py-3"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
