import { useRef } from "react";
import { motion } from "framer-motion";
import useInView from "@/hooks/useInView";
import useCounter from "@/hooks/useCounter";
import { TRUST_STATS } from "@/utils/constants";
import { fadeUp, staggerContainer } from "@/utils/animations";

function StatCard({
  prefix,
  end,
  suffix,
  label,
  decimals,
  active,
  index,
}: {
  prefix: string;
  end: number;
  suffix: string;
  label: string;
  decimals?: number;
  active: boolean;
  index: number;
}) {
  const count = useCounter({ end, active, decimals: decimals ?? 0 });

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm"
    >
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/10 blur-2xl" />
      <p className="relative text-4xl font-bold text-white lg:text-5xl">
        {prefix}
        {count}
        {suffix}
      </p>
      <p className="relative mt-3 text-sm font-medium text-white/65">{label}</p>
    </motion.div>
  );
}

export default function TrustSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, 0.2);

  return (
    <section ref={ref} className="relative overflow-hidden bg-primary py-20">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-success/10 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {TRUST_STATS.map((stat, i) => (
            <StatCard
              key={stat.label}
              prefix={stat.prefix}
              end={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              decimals={"decimals" in stat ? stat.decimals : undefined}
              active={isInView}
              index={i}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
