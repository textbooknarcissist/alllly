'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsSection() {
  const [isInView, setIsInView] = useState(false);
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLElement | null>(null);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Freelance Designer',
      avatar: '👩‍💼',
      rating: 5,
      text: 'Switching to Ally Digital was the best decision for my finances. The intuitive interface and smart tools have helped me save 30% more each month.',
    },
    {
      name: 'Michael Chen',
      role: 'Small Business Owner',
      avatar: '👨‍💼',
      rating: 5,
      text: 'The business banking features are incredible. Instant transfers, automated accounting, and 24/7 support make running my business seamless.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Software Engineer',
      avatar: '👩‍💻',
      rating: 5,
      text: 'I love how modern and secure Ally Digital feels. The app is beautifully designed and the security features give me peace of mind.',
    },
  ];

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section ref={ref} className="section-padding bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4">
            Loved by Our Customers
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Join thousands of satisfied users managing their finances with confidence.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 md:p-12 shadow-soft dark:shadow-none dark:border dark:border-slate-700 text-center"
            >
              {/* Avatar */}
              <div className="text-6xl mb-4">{testimonials[current].avatar}</div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed italic">
                “{testimonials[current].text}”
              </p>

              {/* Author Info */}
              <div>
                <h3 className="text-xl font-bold text-primary dark:text-white">
                  {testimonials[current].name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="p-2 rounded-full bg-accent/10 hover:bg-accent/20 text-accent transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrent(i)}
                  animate={{
                    scale: i === current ? 1.2 : 1,
                    backgroundColor: i === current ? '#E07B2A' : '#E0E7FF',
                  }}
                  className="w-2 h-2 rounded-full"
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
              className="p-2 rounded-full bg-accent/10 hover:bg-accent/20 text-accent transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
