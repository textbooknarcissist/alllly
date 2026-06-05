import { useRef } from "react";
import { motion } from "framer-motion";
import { Send, CreditCard, Zap, Bell, Fingerprint, Smartphone } from "lucide-react";
import useInView from "@/hooks/useInView";
import SectionHeader from "@/components/ui/SectionHeader";
import { PhoneMockup } from "@/components/ui/DashboardMockup";
import { fadeUp } from "@/utils/animations";

const features = [
  { icon: Send, label: "Instant Transfers" },
  { icon: Zap, label: "Bill Payments" },
  { icon: CreditCard, label: "Virtual Cards" },
  { icon: Bell, label: "Push Notifications" },
  { icon: Fingerprint, label: "Biometric Login" },
  { icon: Smartphone, label: "Real-Time Alerts" },
];

export default function MobileAppSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, 0.1);

  return (
    <section id="mobile-app" ref={ref} className="section-padding relative overflow-hidden bg-primary">
      <div className="absolute inset-0 hero-grid opacity-20" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative z-10">
        <SectionHeader
          eyebrow="Mobile Banking"
          title="Your Bank, Always Within Reach"
          description="A powerful mobile experience with every feature you need to manage money on the go."
          align="center"
          light
          className="mb-16"
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-end justify-center gap-4 sm:gap-6"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-[28%] opacity-70"
            >
              <PhoneMockup variant="savings" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="w-[36%] z-10"
            >
              <PhoneMockup variant="transactions" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="w-[28%] opacity-70"
            >
              <PhoneMockup variant="investments" />
            </motion.div>
          </motion.div>

          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.label}
                    variants={fadeUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={i}
                    className="glass-card rounded-2xl p-5"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 text-accent">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-semibold text-white">{feature.label}</h3>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#"
                className="flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.407 1.407 0 01-.395-.985V2.8a1.407 1.407 0 01.394-.986zM14.5 12.707l2.302 2.302-10.937 6.333 8.635-8.635zm3.864-2.54L20.28 12l-1.916 1.833L15.06 12l3.304-2.833zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                Google Play
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
