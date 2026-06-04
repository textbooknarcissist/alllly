'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const trustItems = [
    'No Monthly Fees',
    'Instant Transfers',
    'Bank-Level Security',
    '24/7 Support',
  ];

  return (
    <section className="min-h-screen pt-24 pb-12 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="z-10"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary dark:text-white leading-tight mb-6"
            >
              Banking Built Around Your <span className="text-accent">Goals</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Save smarter, spend confidently, invest for the future, and access flexible financing from one secure digital platform.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <button className="btn-primary group">
                Open Account
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="btn-secondary">Explore Products</button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {trustItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center text-gray-700 dark:text-gray-300"
                >
                  <CheckCircle size={20} className="text-accent mr-3 flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="relative h-96 sm:h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-3xl" />

            {/* Main Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-0 left-0 right-0 mx-auto w-80 glass-effect rounded-2xl p-6 shadow-premium"
            >
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Total Balance</div>
              <div className="text-3xl font-bold text-primary dark:text-white mb-6">
                $24,582.50
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/50 dark:bg-slate-800/50 rounded-lg p-3">
                  <div className="text-xs text-gray-600 dark:text-gray-400">Checking</div>
                  <div className="font-semibold text-primary dark:text-white">$12,450</div>
                </div>
                <div className="bg-white/50 dark:bg-slate-800/50 rounded-lg p-3">
                  <div className="text-xs text-gray-600 dark:text-gray-400">Savings</div>
                  <div className="font-semibold text-accent">$12,133</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 1 */}
            <motion.div
              animate={{ y: [20, 0, 20], x: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-12 -left-6 w-72 glass-effect rounded-2xl p-4 shadow-medium"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-gray-700 dark:text-gray-300">Recent Transactions</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Coffee Shop</span>
                  <span className="text-red-500">-$4.50</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Salary Deposit</span>
                  <span className="text-green-500">+$3,250</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              animate={{ y: [-10, 10, -10], x: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-4 right-0 w-64 glass-effect rounded-2xl p-4 shadow-medium"
            >
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Monthly Spending
              </div>
              <div className="flex gap-1 h-12 items-end">
                {[60, 45, 80, 55, 70, 90, 65].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-accent to-accent/50 rounded-t"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
