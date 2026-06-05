'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Send, CreditCard, Fingerprint, Bell, Zap } from 'lucide-react';

export default function MobileExperienceSection() {
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

  const features = [
    { icon: Send, label: 'Instant Transfers', color: 'from-blue-500 to-blue-600' },
    { icon: CreditCard, label: 'Virtual Cards', color: 'from-purple-500 to-purple-600' },
    { icon: Zap, label: 'Bill Payments', color: 'from-yellow-500 to-yellow-600' },
    { icon: Fingerprint, label: 'Biometric Login', color: 'from-green-500 to-green-600' },
    { icon: Bell, label: 'Push Notifications', color: 'from-red-500 to-red-600' },
    { icon: Smartphone, label: 'Real-Time Alerts', color: 'from-pink-500 to-pink-600' },
  ];

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-primary via-primary/95 to-slate-900 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Banking in Your Pocket
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            A powerful mobile app designed for modern banking on the go.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative w-64 h-96">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-gray-900 rounded-3xl border-8 border-gray-800 shadow-2xl overflow-hidden">
                {/* Phone Content */}
                <div className="w-full h-full bg-gradient-to-b from-slate-950 to-slate-900 p-4 flex flex-col justify-between">
                  {/* Top Bar */}
                  <div className="text-center">
                    <div className="text-xs text-gray-500 mb-4">9:41</div>
                    <div className="text-sm font-semibold text-white mb-2">Ally Digital</div>
                  </div>

                  {/* Balance Display */}
                  <motion.div
                    animate={isInView ? { scale: [1, 1.02, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-center mb-8"
                  >
                    <div className="text-xs text-gray-400 mb-2">Total Balance</div>
                    <div className="text-4xl font-bold text-white">$24,583</div>
                  </motion.div>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <button className="bg-accent/20 hover:bg-accent/30 text-white py-2 rounded-lg text-xs font-medium transition">
                      Send
                    </button>
                    <button className="bg-accent/20 hover:bg-accent/30 text-white py-2 rounded-lg text-xs font-medium transition">
                      Request
                    </button>
                  </div>

                  {/* Transactions */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-300">Starbucks</span>
                      <span className="text-red-400">-$4.50</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-300">Direct Deposit</span>
                      <span className="text-green-400">+$3,250</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl" />
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-3xl"
            />
          </motion.div>

          {/* Right - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="glass-effect p-6 rounded-xl"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="font-semibold">{feature.label}</h3>
                  </motion.div>
                );
              })}
            </div>

            {/* App Store Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <button className="glass-effect hover:bg-white/20 transition-all py-3 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2">
                <span>📱</span>
                <span>App Store</span>
              </button>
              <button className="glass-effect hover:bg-white/20 transition-all py-3 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2">
                <span>🔵</span>
                <span>Google Play</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
