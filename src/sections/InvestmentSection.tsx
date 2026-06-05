import { useRef } from "react";
import { motion } from "framer-motion";
import { PieChart, Lightbulb, Layers, Target, ArrowRight } from "lucide-react";
import useInView from "@/hooks/useInView";
import Button from "@/components/ui/Button";
import { slideInLeft, slideInRight } from "@/utils/animations";

const features = [
  { icon: PieChart, label: "Portfolio Tracking", description: "Monitor performance across all holdings in real time." },
  { icon: Lightbulb, label: "Investment Insights", description: "Data-driven recommendations tailored to your goals." },
  { icon: Layers, label: "Diversification Tools", description: "Balance risk with intelligent asset allocation." },
  { icon: Target, label: "Goal Planning", description: "Set milestones and track progress toward each target." },
];

const chartPoints = [20, 28, 25, 38, 42, 55, 52, 68, 75, 82, 78, 95];

export default function InvestmentSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, 0.15);

  return (
    <section id="investments" ref={ref} className="section-padding bg-white">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative rounded-3xl border border-surface-2 bg-surface p-8 shadow-soft"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-ink-muted">Portfolio Growth</p>
                <p className="text-3xl font-bold text-primary">+24.8%</p>
              </div>
              <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
                YTD Return
              </span>
            </div>

            <div className="relative h-56">
              <svg viewBox="0 0 400 200" className="h-full w-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#E07B2A" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#E07B2A" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path
                  d={`M 0 ${200 - chartPoints[0] * 2} ${chartPoints.map((p, i) => `L ${(i / (chartPoints.length - 1)) * 400} ${200 - p * 2}`).join(" ")} L 400 200 L 0 200 Z`}
                  fill="url(#chartGradient)"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.3 }}
                />
                <motion.polyline
                  points={chartPoints.map((p, i) => `${(i / (chartPoints.length - 1)) * 400},${200 - p * 2}`).join(" ")}
                  fill="none"
                  stroke="#E07B2A"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1.5, delay: 0.2 }}
                />
              </svg>
            </div>

            <div className="mt-4 flex justify-between text-xs text-ink-muted">
              <span>Jan</span>
              <span>Mar</span>
              <span>Jun</span>
              <span>Sep</span>
              <span>Dec</span>
            </div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Investments
            </p>
            <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] leading-tight text-primary">
              Grow Your Wealth With Confidence
            </h2>
            <p className="mt-4 text-base leading-7 text-ink-muted">
              Institutional-grade investment tools that put professional portfolio management
              within everyone's reach.
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
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-surface-2 bg-surface text-accent">
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
              Start Investing
              <ArrowRight size={18} />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
