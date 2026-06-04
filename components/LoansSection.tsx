'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Banknote, Briefcase, Home, Car, ArrowRight } from 'lucide-react';

export default function LoansSection() {
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

  const loanProducts = [
    {
      icon: Banknote,
      title: 'Personal Loan',
      description: 'Up to $50,000 for life\'s expenses',
      rate: 'From 6.99% APR',
    },
    {
      icon: Briefcase,
      title: 'Business Loan',
      description: 'Grow your business with flexible terms',
      rate: 'From 7.49% APR',
    },
    {
      icon: Home,
      title: 'Mortgage',
      description: 'Competitive rates on home loans',
      rate: 'From 5.99% APR',
    },
    {
      icon: Car,
      title: 'Auto Loan',
      description: 'Finance your dream vehicle',
      rate: 'From 5.49% APR',
    },
  ];

  return (
    <section id="loans" ref={ref} className="section-padding bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4">
            Flexible Financing Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Quick approvals and competitive rates for every financial need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loanProducts.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(224, 123, 42, 0.15)' }}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 shadow-soft dark:shadow-none dark:border dark:border-slate-700 border-2 border-transparent hover:border-accent transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="mb-6 inline-flex p-3 bg-gradient-to-br from-accent/10 to-primary/10 dark:from-accent/20 dark:to-primary/20 rounded-xl"
                >
                  <Icon size={32} className="text-accent" />
                </motion.div>

                <h3 className="text-xl font-bold text-primary dark:text-white mb-2">
                  {product.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {product.description}
                </p>

                <div className="mb-6 p-3 bg-accent/5 dark:bg-accent/10 rounded-lg">
                  <p className="text-accent font-bold">{product.rate}</p>
                </div>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-primary dark:text-white font-semibold hover:text-accent transition-colors"
                >
                  Learn More
                  <ArrowRight size={18} className="ml-2" />
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
