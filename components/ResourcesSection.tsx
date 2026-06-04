'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bookmark } from 'lucide-react';

export default function ResourcesSection() {
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

  const articles = [
    {
      title: 'How To Build An Emergency Fund',
      category: 'Savings',
      excerpt: 'Learn the proven strategies to build a safety net that protects your financial future.',
      image: '📊',
      readTime: '5 min read',
    },
    {
      title: 'Understanding Credit Scores',
      category: 'Credit',
      excerpt: 'Discover what makes up your credit score and how to improve it for better financial opportunities.',
      image: '📈',
      readTime: '7 min read',
    },
    {
      title: 'Business Banking Essentials',
      category: 'Business',
      excerpt: 'Everything you need to know about managing business finances efficiently.',
      image: '💼',
      readTime: '8 min read',
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
            Financial Insights
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Learn from our experts and stay updated with the latest financial tips.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-soft dark:shadow-none dark:border dark:border-slate-700 hover:shadow-premium transition-shadow"
            >
              {/* Image Area */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-48 bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center overflow-hidden"
              >
                <span className="text-6xl">{article.image}</span>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-primary/10 backdrop-blur-sm flex items-center justify-center"
                >
                  <span className="text-white font-semibold">Read Article</span>
                </motion.div>
              </motion.div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{article.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-primary dark:text-white mb-3 group-hover:text-accent transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {article.excerpt}
                </p>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-accent font-semibold hover:text-accent/80 transition-colors"
                >
                  Read More
                  <ArrowRight size={18} className="ml-2" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
