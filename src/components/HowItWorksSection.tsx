"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { CreditCard, ArrowRight, ShieldCheck } from "lucide-react";
import useInView from "@/hooks/useInView";

const steps = [
  {
    icon: CreditCard,
    label: "Open an account",
    description:
      "Create a premium checking or savings account in minutes with no hidden fees.",
  },
  {
    icon: ShieldCheck,
    label: "Secure your money",
    description:
      "Protect your finances with bank-grade encryption and real-time alerts.",
  },
  {
    icon: ArrowRight,
    label: "Grow your balance",
    description:
      "Earn competitive returns while keeping your money accessible and flexible.",
  },
];

export default function HowItWorksSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, 0.12);

  return (
    <section id="how" ref={ref} className="py-32">
      <div className="container">
        <div className="max-w-3xl space-y-5 text-ink">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.24em] text-gold">
            How it works
          </p>
          <h2 className="serif text-4xl leading-tight sm:text-5xl">
            A smarter banking experience in three simple steps.
          </h2>
          <p className="text-base leading-7 text-ink-60">
            Move from ordinary banking to a premium financial experience built
            for clarity, control, and long-term growth.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="rounded-3xl border border-stone-2 bg-white p-8 shadow-soft"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-stone text-navy">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">
                  {step.label}
                </h3>
                <p className="text-sm leading-7 text-ink-60">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
