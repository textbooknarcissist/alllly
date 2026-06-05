'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, BarChart3, PieChart, TrendingUp } from 'lucide-react';

export default function FinancialToolsSection() {
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

  const tools = [
    {
      icon: Calculator,
      title: 'Savings Calculator',
      description: 'See how your savings can grow over time',
    },
    {
      icon: BarChart3,
      title: 'Loan Calculator',
      description: 'Calculate payments and interest',
    },
    {
      icon: TrendingUp,
      title: 'Retirement Planner',
      description: 'Plan for a comfortable retirement',
    },
    {
      icon: PieChart,
      title: 'Investment Forecast',
      description: 'Project your investment growth',
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
            Plan With Confidence
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Use our powerful financial tools to make informed decisions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="h-full bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-soft dark:shadow-none dark:border dark:border-slate-700 hover:shadow-premium transition-all">
                  {/* Animated background circle */}
                  <motion.div
                    animate={isInView ? { scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] } : {}}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                    className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl"
                  />

                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="mb-6 inline-flex p-4 bg-gradient-to-br from-accent/10 to-primary/10 dark:from-accent/20 dark:to-primary/20 rounded-xl relative z-10"
                  >
                    <Icon size={32} className="text-accent" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-primary dark:text-white mb-3">
                    {tool.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {tool.description}
                  </p>

                  {/* Mini Chart */}
                  <div className="h-12 flex items-end justify-center gap-1">
                    {[40, 50, 65, 55, 75, 85].map((height, j) => (
                      <motion.div
                        key={j}
                        animate={isInView ? { height: `${height}%` } : { height: '20%' }}
                        transition={{ delay: 0.3 + j * 0.1 }}
                        className="flex-1 bg-gradient-to-t from-accent to-accent/50 rounded-t"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
