'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Shield, Fingerprint, Bell } from 'lucide-react';

export default function SecuritySection() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const securityFeatures = [
    {
      icon: Lock,
      title: 'Encryption',
      description: '256-bit encryption protects all your data.',
    },
    {
      icon: Shield,
      title: 'Fraud Detection',
      description: 'Continuous monitoring detects suspicious activity.',
    },
    {
      icon: Fingerprint,
      title: 'Biometric Authentication',
      description: 'Face and fingerprint login for added security.',
    },
    {
      icon: Bell,
      title: 'Instant Alerts',
      description: 'Real-time notifications for all transactions.',
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4">
            Security You Can Trust
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Bank-grade security with multiple layers of protection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-soft dark:shadow-none dark:border dark:border-slate-700 group hover:shadow-premium transition-shadow"
              >
                {/* Icon Circle */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="mb-6 inline-flex p-4 bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 rounded-full"
                >
                  <Icon size={32} className="text-accent" />
                </motion.div>

                <h3 className="text-xl font-bold text-primary dark:text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>

                {/* Decorative Bottom Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                  className="mt-6 h-1 bg-gradient-to-r from-accent to-primary origin-left"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
