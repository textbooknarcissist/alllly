import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Users,
  CreditCard,
  Banknote,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import useInView from "@/hooks/useInView";
import Button from "@/components/ui/Button";
import LazyImage from "@/components/ui/LazyImage";
import { slideInLeft, slideInRight } from "@/utils/animations";

const features = [
  { icon: Building2, label: "Business Accounts", description: "Dedicated accounts with multi-user access." },
  { icon: Users, label: "Payroll Support", description: "Streamlined payroll processing and tax compliance." },
  { icon: CreditCard, label: "Merchant Services", description: "Accept payments with competitive processing rates." },
  { icon: Banknote, label: "Working Capital", description: "Flexible credit lines to fuel business growth." },
  { icon: BarChart3, label: "Business Insights", description: "Real-time analytics and cash flow forecasting." },
];

export default function BusinessBankingSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, 0.15);

  return (
    <section id="business" ref={ref} className="section-padding">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative order-2 lg:order-1"
          >
            <div className="overflow-hidden rounded-3xl shadow-premium">
              <LazyImage
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&auto=format&fit=crop&q=80"
                alt="Business professionals collaborating in modern office"
                className="h-[420px] w-full object-cover lg:h-[500px]"
              />
            </div>
            <div className="absolute inset-0 rounded-3xl bg-primary/10" />
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-1 lg:order-2"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Business Banking
            </p>
            <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] leading-tight text-primary">
              Banking Solutions Built For Growth
            </h2>
            <p className="mt-4 text-base leading-7 text-ink-muted">
              From startups to enterprises, our business banking platform scales with your
              ambitions and simplifies complex financial operations.
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
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
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

            <Button href="#" variant="accent" className="mt-8">
              Explore Business Banking
              <ArrowRight size={18} />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
