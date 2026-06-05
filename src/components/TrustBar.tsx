"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import useInView from "@/hooks/useInView";
import { Shield, Lock, CheckCircle2, Clock3, Users } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "FDIC Insured" },
  { icon: Lock, label: "256-bit Encryption" },
  { icon: CheckCircle2, label: "No Hidden Fees" },
  { icon: Clock3, label: "99.99% Uptime" },
  { icon: Users, label: "1M+ Customers" },
];

export default function TrustBar() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, 0.12);

  return (
    <section
      ref={ref}
      className="bg-stone border-b border-stone-2 py-8"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col flex-wrap items-center justify-between gap-4 sm:flex-row"
        >
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-3 text-[0.8rem] font-medium text-ink-60"
              >
                <Icon size={16} className="text-gold" />
                <span>{item.label}</span>
                {index < trustItems.length - 1 && (
                  <span className="hidden sm:inline-block h-5 w-px bg-stone-2" />
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
