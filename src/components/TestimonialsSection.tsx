"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import useInView from "@/hooks/useInView";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Freelance Designer",
    initials: "SJ",
    rating: 5,
    text: "Switching to Ally Digital was the best decision for my finances. The intuitive interface and smart tools have helped me save 30% more each month.",
  },
  {
    name: "Michael Chen",
    role: "Small Business Owner",
    initials: "MC",
    rating: 5,
    text: "The business banking features are incredible. Instant transfers, automated accounting, and 24/7 support make running my business seamless.",
  },
  {
    name: "Emily Rodriguez",
    role: "Software Engineer",
    initials: "ER",
    rating: 5,
    text: "I love how modern and secure Ally Digital feels. The app is beautifully designed and the security features give me peace of mind.",
  },
];

export default function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, 0.12);

  return (
    <section ref={ref} className="py-32">
      <div className="container">
        <div className="max-w-3xl text-center mx-auto mb-12">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.24em] text-gold">
            Customer Stories
          </p>
          <h2 className="serif text-4xl leading-tight text-ink sm:text-5xl">
            Trusted by people who take their finances seriously.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              ref={ref}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="rounded-4xl border border-stone-2 bg-white p-8 shadow-soft"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone text-navy font-semibold">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-ink font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-ink-40">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <div className="mb-4 flex gap-1 text-gold">
                {Array.from({ length: testimonial.rating }).map(
                  (_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={14}
                      className="fill-gold text-gold"
                    />
                  ),
                )}
              </div>
              <p className="text-ink leading-7 text-sm">
                “{testimonial.text}”
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
