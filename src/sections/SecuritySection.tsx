import { useRef } from "react";
import { motion } from "framer-motion";
import { Lock, Shield, Fingerprint, Eye } from "lucide-react";
import useInView from "@/hooks/useInView";
import SectionHeader from "@/components/ui/SectionHeader";
import LazyImage from "@/components/ui/LazyImage";
import { fadeUp } from "@/utils/animations";

const securityFeatures = [
  {
    icon: Lock,
    title: "Encryption",
    description: "256-bit AES encryption protects every transaction and data point.",
  },
  {
    icon: Shield,
    title: "Fraud Detection",
    description: "AI-powered monitoring identifies and blocks suspicious activity instantly.",
  },
  {
    icon: Fingerprint,
    title: "Multi-Factor Authentication",
    description: "Biometric and token-based verification for every account access.",
  },
  {
    icon: Eye,
    title: "Real-Time Monitoring",
    description: "Continuous surveillance with instant alerts on every transaction.",
  },
];

export default function SecuritySection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, 0.1);

  return (
    <section id="security" ref={ref} className="relative overflow-hidden section-padding">
      <div className="absolute inset-0">
        <LazyImage
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1600&auto=format&fit=crop&q=80"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/92" />
      </div>

      <div className="container relative z-10">
        <SectionHeader
          eyebrow="Security"
          title="Your Finances, Protected At Every Level"
          description="Bank-grade security infrastructure built into every layer of our platform."
          align="center"
          light
          className="mb-14"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={index}
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-7"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:justify-center"
        >
          <span className="rounded-full bg-white px-4 py-1.5 text-xs font-bold text-primary">
            FDIC INSURED
          </span>
          <p className="text-center text-sm text-white/70 sm:text-left">
            Deposits insured up to{" "}
            <span className="font-semibold text-white">$250,000</span> per depositor.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
