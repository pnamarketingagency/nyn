"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  once?: boolean;
  className?: string;
  amount?: number;
}

const easeOut = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  duration = 0.7,
  direction = "up",
  distance = 24,
  once = true,
  className,
  amount = 0.2,
}: RevealProps) {
  const reduce = useReducedMotion();

  const offset =
    direction === "up"
      ? { y: distance }
      : direction === "down"
      ? { y: -distance }
      : direction === "left"
      ? { x: distance }
      : direction === "right"
      ? { x: -distance }
      : { y: 0 };

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: reduce ? 0.001 : duration,
        delay: reduce ? 0 : delay,
        ease: easeOut,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({
  children,
  delayChildren = 0,
  staggerChildren = 0.08,
  className,
  once = true,
  amount = 0.2,
}: {
  children: ReactNode;
  delayChildren?: number;
  staggerChildren?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: { delayChildren, staggerChildren },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  distance = 20,
  className,
}: {
  children: ReactNode;
  distance?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: distance },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: reduce ? 0.001 : 0.7, ease: easeOut },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
