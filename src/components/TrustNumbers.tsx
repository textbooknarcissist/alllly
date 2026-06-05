"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import useInView from "@/hooks/useInView";

const stats = [
  { value: "1M+", label: "Customers" },
  { value: "$5B+", label: "Assets" },
  { value: "99.99%", label: "Uptime" },
  { value: "4.8★", label: "Rating" },
];

export default function TrustNumbers() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, 0.12);

  return (
    <section ref={ref} className="bg-navy py-16 text-white">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="rounded-3xl border border-white/10 bg-navy-90 p-8 text-center"
            >
              <p className="text-4xl font-semibold">{item.value}</p>
              <p className="mt-3 text-sm text-white/70">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
