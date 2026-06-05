"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import useInView from "@/hooks/useInView";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, 0.12);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-navy pt-24 pb-12"
    >
      <div className="absolute inset-0 hero-bg-grid pointer-events-none" />
      <div className="absolute -top-30 -right-30 h-130 w-130 rounded-full bg-gold-lt/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-30 h-105 w-105 rounded-full bg-navy-mid/70 blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid min-h-[calc(100vh-6rem)] items-end gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.24em] text-gold">
              Digital Banking, Redefined
            </p>
            <h1 className="serif text-[clamp(2.8rem,5vw,4.5rem)] leading-[1.07] text-white">
              Your money,
              <br />
              <em className="italic text-gold">
                working harder
              </em>
              <br />
              than ever before.
            </h1>
            <p className="max-w-105 text-base leading-7 text-white/75">
              No hidden fees. Competitive yields. Smart tools that help you
              save, spend, and invest — all from one account.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#" className="btn-white text-navy">
                Open a Free Account
              </a>
              <a
                href="#products"
                className="btn-ghost border-white/30 bg-white/10 text-white hover:bg-white hover:text-navy"
              >
                Explore Products
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-white/60">
              <Shield size={16} className="text-gold" />
              <span>FDIC insured · No minimum balance · No monthly fees</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="grid gap-6"
          >
            <div className="glass-card rounded-[28px] border border-white/10 p-8 text-white shadow-soft">
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-white/60">
                    High-Yield Savings APY
                  </p>
                </div>
                <div className="inline-flex items-center gap-3 rounded-full bg-green/10 px-3 py-1 text-green text-xs font-semibold">
                  <span className="h-2 w-2 rounded-full bg-green" />
                  Rate updated daily
                </div>
              </div>
              <div className="text-[2.25rem] font-semibold text-white">
                4.20%{" "}
                <span className="text-sm font-normal text-white/70">APY</span>
              </div>
              <p className="mt-3 text-sm text-white/65">
                10× the national average
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 rounded-[28px] bg-white/5 border border-white/10 p-4 text-white">
              {[
                { value: "$0", label: "Monthly fees" },
                { value: "2-day", label: "Early direct deposit" },
                { value: "24/7", label: "Customer support" },
                { value: "256-bit", label: "Encryption" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-2xl font-semibold text-white">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm text-white/65">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
