'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function formatNumber(value: number) {
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(value);
}

export default function TrustBar() {
  const ref = useRef<HTMLElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [stats, setStats] = useState({ customers: 0, assets: 0, uptime: 0, security: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1200;
    const start = performance.now();
    const targets = {
      customers: 1000000,
      assets: 5,
      uptime: 99.99,
      security: 256,
    };

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);

      setStats({
        customers: Math.floor(targets.customers * progress),
        assets: parseFloat((targets.assets * progress).toFixed(2)),
        uptime: parseFloat((targets.uptime * progress).toFixed(2)),
        security: Math.floor(targets.security * progress),
      });

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [hasAnimated]);

  const trustItems = [
    {
      value: `${formatNumber(stats.customers)}+`,
      label: 'Customers',
    },
    {
      value: `$${stats.assets.toFixed(2)}B+`,
      label: 'Assets Managed',
    },
    {
      value: `${stats.uptime.toFixed(2)}%`,
      label: 'Uptime',
    },
    {
      value: `${stats.security}-bit`,
      label: 'Encryption',
    },
  ];

  const partnerLogos = ['NexPay', 'Vault', 'ClearRate', 'LendPro'];

  return (
    <section
      ref={ref}
      className="py-12 md:py-16 bg-gradient-to-r from-primary to-primary/90 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="text-center text-white"
            >
              <div className="text-3xl md:text-4xl font-bold mb-2">{item.value}</div>
              <div className="text-sm md:text-base text-gray-200">{item.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-gray-200">
          <p className="font-medium">Trusted by innovative teams and modern financial leaders.</p>
          <div className="flex flex-wrap items-center gap-4 justify-center sm:justify-end">
            {partnerLogos.map((logo) => (
              <span
                key={logo}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
