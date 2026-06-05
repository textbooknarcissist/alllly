'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, BarChart3, Lightbulb, ArrowRight } from 'lucide-react';

export default function MoneyManagementSection() {
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
    { icon: Target, label: 'Savings Goals', description: 'Set and track your financial goals' },
    { icon: Zap, label: 'Automated Transfers', description: 'Automate your savings journey' },
    { icon: BarChart3, label: 'Spending Insights', description: 'Understand your money flow' },
    { icon: Lightbulb, label: 'Smart Recommendations', description: 'Get personalized advice' },
  ];

  return (
    <section id="money-management" ref={ref} className="section-padding bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Visual Diagram */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-96 flex items-center justify-center"
          >
            <div className="w-full h-full flex items-center justify-center">
              <motion.div
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{ duration: 1 }}
                className="relative w-full h-full flex flex-col justify-center items-center"
              >
                {/* Center circle */}
                <div className="w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-center text-sm">Income</span>
                </div>

                {/* Branches */}
                <div className="grid grid-cols-2 gap-8 w-full">
                  {['Rent', 'Emergency Fund', 'Utilities', 'Vacation'].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex flex-col items-center"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center border border-primary/30 dark:border-primary/50">
                        <span className="text-xs font-semibold text-center text-gray-700 dark:text-gray-200">
                          {item}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-primary dark:text-white mb-6">
              Automate Your Financial Growth
            </h2>

            <div className="space-y-6 mb-8">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 mr-4 p-2 bg-accent/10 rounded-lg">
                      <Icon className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {feature.label}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.button
              whileHover={{ x: 5 }}
              className="btn-primary group"
            >
              Start Growing Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
