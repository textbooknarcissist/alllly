"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Lock, Shield, Fingerprint, Bell } from "lucide-react";
import useInView from "@/hooks/useInView";

const securityFeatures = [
  {
    icon: Lock,
    title: "Encryption",
    description: "256-bit encryption protects all your data.",
  },
  {
    icon: Shield,
    title: "Fraud Detection",
    description: "Continuous monitoring detects suspicious activity.",
  },
  {
    icon: Fingerprint,
    title: "Biometric Authentication",
    description: "Face and fingerprint login for added security.",
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    description: "Real-time notifications for every transaction.",
  },
];

export default function SecuritySection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, 0.12);

  return (
    <section id="security" ref={ref} className="py-32">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.24em] text-gold">
            Security
          </p>
          <h2 className="serif text-4xl leading-tight text-ink sm:text-5xl">
            Your money is protected at every level.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-ink-60">
            Bank-grade security built into every transaction, login, and data
            point — because your finances deserve nothing less.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="rounded-[1.25rem] border border-stone-2 bg-white shadow-soft p-8"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-[14px] bg-stone text-navy">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-ink mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm leading-6 text-ink-60">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12 rounded-3xl border border-stone-2 bg-stone p-6 sm:flex sm:items-center sm:justify-between"
        >
          <div className="inline-flex items-center justify-center rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white">
            FDIC
          </div>
          <p className="mt-4 text-sm leading-6 text-ink-60 sm:mt-0">
            Your deposits are{" "}
            <span className="font-semibold text-ink">
              insured up to $250,000
            </span>{" "}
            by the Federal Deposit Insurance Corporation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
