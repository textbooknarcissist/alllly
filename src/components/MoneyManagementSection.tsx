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
    <section id="money-management" ref={ref} className="py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Visual Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" 
              alt="Financial planning and charts on a laptop"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Side - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="serif text-4xl font-bold text-ink mb-6">
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
                    <div className="shrink-0 mr-4 p-3 bg-white border border-stone-2 shadow-soft rounded-2xl">
                      <Icon className="text-navy" size={24} />
                    </div>
                    <div className="pt-1">
                      <h3 className="font-semibold text-ink mb-1">
                        {feature.label}
                      </h3>
                      <p className="text-ink-60">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.a
              href="#"
              whileHover={{ x: 5 }}
              className="btn-primary group inline-flex"
            >
              Start Growing Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
