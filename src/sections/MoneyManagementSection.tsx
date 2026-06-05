import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Target,
  Wallet,
  ArrowLeftRight,
  BarChart3,
  LineChart,
  ArrowRight,
} from "lucide-react";
import useInView from "@/hooks/useInView";
import Button from "@/components/ui/Button";
import LazyImage from "@/components/ui/LazyImage";
import { slideInLeft, slideInRight } from "@/utils/animations";

const features = [
  { icon: Target, label: "Savings Goals", description: "Set targets and track progress automatically." },
  { icon: Wallet, label: "Budget Tracking", description: "Categorize spending and stay within limits." },
  { icon: ArrowLeftRight, label: "Automatic Transfers", description: "Schedule recurring transfers on your terms." },
  { icon: BarChart3, label: "Spending Insights", description: "Understand patterns with clear visualizations." },
  { icon: LineChart, label: "Financial Planning", description: "Plan ahead with projections and recommendations." },
];

export default function MoneyManagementSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, 0.15);

  return (
    <section id="money-management" ref={ref} className="section-padding bg-white">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-premium">
              <LazyImage
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80"
                alt="Financial planning dashboard on laptop"
                className="h-[420px] w-full object-cover lg:h-[500px]"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-4 rounded-2xl border border-surface-2 bg-white p-5 shadow-premium sm:-right-8"
            >
              <p className="text-xs text-ink-muted">Monthly Savings</p>
              <p className="text-2xl font-bold text-success">+$1,240</p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Smart Money Management
            </p>
            <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] leading-tight text-primary">
              Automate The Way You Save
            </h2>
            <p className="mt-4 text-base leading-7 text-ink-muted">
              Intelligent tools that work quietly in the background, helping you build wealth
              without the complexity.
            </p>

            <div className="mt-8 space-y-5">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-surface-2 bg-surface text-primary">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">{feature.label}</h3>
                      <p className="text-sm text-ink-muted">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <Button href="#" variant="primary" className="mt-8">
              Start Saving Smarter
              <ArrowRight size={18} />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
