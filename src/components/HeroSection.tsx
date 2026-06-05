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
      className="relative min-h-screen pt-32 pb-20"
    >
      <div className="container relative z-10">
        <div className="grid min-h-[calc(100vh-8rem)] items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.24em] text-gold">
              Digital Banking, Redefined
            </p>
            <h1 className="serif text-[clamp(2.8rem,5vw,4.5rem)] leading-[1.07] text-ink">
              Your money,
              <br />
              <em className="italic text-gold">
                working harder
              </em>
              <br />
              than ever before.
            </h1>
            <p className="max-w-105 text-lg leading-8 text-ink-60">
              No hidden fees. Competitive yields. Smart tools that help you
              save, spend, and invest — all from one account.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#" className="btn-primary">
                Open a Free Account
              </a>
              <a
                href="#products"
                className="btn-ghost"
              >
                Explore Products
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-ink-60 mt-4">
              <Shield size={16} className="text-gold" />
              <span>FDIC insured · No minimum balance · No monthly fees</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-navy/10 mix-blend-multiply z-10 rounded-[2rem]"></div>
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80" 
              alt="Person using modern mobile banking app"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
