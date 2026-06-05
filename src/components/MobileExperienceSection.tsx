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
    <section ref={ref} className="py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="serif text-4xl md:text-5xl font-bold mb-4 text-ink">
            Banking in Your Pocket
          </h2>
          <p className="text-lg text-ink-60 max-w-2xl mx-auto">
            A powerful mobile app designed for modern banking on the go.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative w-[300px] h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
               <img 
                 src="https://images.unsplash.com/photo-1616077168079-7e07b8a07c91?q=80&w=800&auto=format&fit=crop" 
                 alt="Mobile banking application interface"
                 className="w-full h-full object-cover"
               />
            </div>
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
                    className="bg-white border border-stone-2 p-6 rounded-3xl shadow-soft"
                  >
                    <div className={`w-12 h-12 bg-stone rounded-2xl flex items-center justify-center mb-4`}>
                      <Icon size={24} className="text-navy" />
                    </div>
                    <h3 className="font-semibold text-ink">{feature.label}</h3>
                  </motion.div>
                );
              })}
            </div>

            {/* App Store Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <button className="bg-white border border-stone-2 shadow-soft hover:shadow-md transition-all py-3 px-4 rounded-2xl font-semibold text-ink flex items-center justify-center space-x-2">
                <span>📱</span>
                <span>App Store</span>
              </button>
              <button className="bg-white border border-stone-2 shadow-soft hover:shadow-md transition-all py-3 px-4 rounded-2xl font-semibold text-ink flex items-center justify-center space-x-2">
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
