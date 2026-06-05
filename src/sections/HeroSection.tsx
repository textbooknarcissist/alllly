import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Headphones, Zap, Shield, BarChart3 } from "lucide-react";
import useInView from "@/hooks/useInView";
import Button from "@/components/ui/Button";
import LazyImage from "@/components/ui/LazyImage";
import {
  DashboardMockup,
  FloatingBalanceCard,
  PhoneMockup,
} from "@/components/ui/DashboardMockup";
import { HERO_BADGES } from "@/utils/constants";
import { fadeUp } from "@/utils/animations";

const badgeIcons = [Headphones, Zap, Shield, BarChart3];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, 0.1);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden bg-surface pt-24 hero-grid"
    >
      <div className="container relative z-10 py-12 lg:py-0">
        <div className="grid min-h-[calc(100vh-6rem)] items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Institutional Digital Banking
            </p>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4.75rem)] leading-[1.05] text-primary">
              Banking Designed For Your Future
            </h1>
            <p className="max-w-lg text-lg leading-8 text-ink-muted">
              Take control of your finances with secure accounts, smart money management,
              investment tools, and flexible financing solutions.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="#" variant="primary">
                Open Account
              </Button>
              <Button href="#products" variant="ghost">
                Explore Products
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
              {HERO_BADGES.map((badge, i) => {
                const Icon = badgeIcons[i];
                return (
                  <motion.div
                    key={badge}
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-2 rounded-xl border border-surface-2 bg-white px-3 py-2.5 shadow-soft"
                  >
                    <Icon size={14} className="shrink-0 text-accent" />
                    <span className="text-xs font-semibold text-primary">{badge}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div style={{ y: visualY }} className="relative min-h-[480px] lg:min-h-[600px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute inset-0 overflow-hidden rounded-3xl shadow-premium"
            >
              <LazyImage
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&auto=format&fit=crop&q=80"
                alt="Professional using digital banking on mobile device"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="absolute left-0 top-8 z-10 w-[88%] sm:w-[78%]"
            >
              <DashboardMockup />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="absolute bottom-4 right-0 z-20 w-[42%] sm:w-[38%]"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <PhoneMockup variant="transactions" />
              </motion.div>
            </motion.div>

            <div className="absolute left-4 top-[55%] z-30">
              <FloatingBalanceCard label="Savings" value="$24,850" delay={0.9} />
            </div>
            <div className="absolute right-[38%] top-[18%] z-30 hidden sm:block">
              <FloatingBalanceCard label="Investments" value="$12,400" delay={1.1} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
