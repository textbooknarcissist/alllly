'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, PiggyBank, Zap, TrendingUp, ArrowRight } from 'lucide-react';

export default function ProductsSection() {
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

  const products = [
    {
      icon: CreditCard,
      title: 'Checking Accounts',
      description: 'Everyday banking without hidden fees.',
    },
    {
      icon: PiggyBank,
      title: 'Savings Accounts',
      description: 'Earn competitive returns while growing your savings.',
    },
    {
      icon: Zap,
      title: 'Loans',
      description: 'Flexible financing for personal and business needs.',
    },
    {
      icon: TrendingUp,
      title: 'Investments',
      description: 'Build long-term wealth with confidence.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="products" ref={ref} className="section-padding bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4">
            Everything You Need In One Place
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From daily banking to long-term wealth building, we have the tools to help you succeed.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.title}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-[2rem]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary opacity-10 blur-2xl" />
                <div className="relative rounded-[2rem] border border-white/10 bg-white/95 dark:bg-slate-800/95 dark:border-slate-700 p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-premium">
                  <div className="mb-6 inline-flex p-3 bg-gradient-to-br from-accent/10 to-primary/10 dark:from-accent/20 dark:to-primary/20 rounded-xl">
                    <Icon size={28} className="text-accent" />
                  </div>

                  <h3 className="text-xl font-bold text-primary dark:text-white mb-3">
                    {product.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {product.description}
                  </p>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center text-accent font-semibold hover:text-accent/80 transition-colors"
                  >
                    Learn More
                    <ArrowRight size={18} className="ml-2" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
