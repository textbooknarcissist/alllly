import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import LazyImage from "@/components/ui/LazyImage";
import { TESTIMONIALS } from "@/utils/constants";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent((prev) => {
      const next = prev + dir;
      if (next < 0) return TESTIMONIALS.length - 1;
      if (next >= TESTIMONIALS.length) return 0;
      return next;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [paginate]);

  const testimonial = TESTIMONIALS[current];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section id="testimonials" className="section-padding bg-surface">
      <div className="container">
        <SectionHeader
          eyebrow="Testimonials"
          title="Trusted By Professionals Worldwide"
          description="Hear from customers who've transformed their financial lives with Vaultline."
          align="center"
          className="mb-14"
        />

        <div className="relative mx-auto max-w-3xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.article
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-surface-2 bg-white p-8 shadow-soft sm:p-12"
            >
              <div className="mb-6 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-lg leading-8 text-primary sm:text-xl">
                &ldquo;{testimonial.review}&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <LazyImage
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-ink-muted">{testimonial.position}</p>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-2 bg-white text-primary transition hover:bg-surface"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-8 bg-accent" : "w-2 bg-surface-2"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-2 bg-white text-primary transition hover:bg-surface"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
