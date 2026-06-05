"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import useInView from "@/hooks/useInView";

const articles = [
  {
    title: "How To Build An Emergency Fund",
    category: "Savings",
    excerpt:
      "Learn the proven strategies to build a safety net that protects your financial future.",
    image: "📊",
    readTime: "5 min read",
  },
  {
    title: "Understanding Credit Scores",
    category: "Credit",
    excerpt:
      "Discover what makes up your credit score and how to improve it for better financial opportunities.",
    image: "📈",
    readTime: "7 min read",
  },
  {
    title: "Business Banking Essentials",
    category: "Business",
    excerpt:
      "Everything you need to know about managing business finances efficiently.",
    image: "💼",
    readTime: "8 min read",
  },
];

export default function ResourcesSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, 0.12);

  return (
    <section id="resources" ref={ref} className="bg-white py-20">
      <div className="container">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.24em] text-gold">
              Resources
            </p>
            <h2 className="serif text-4xl leading-tight text-ink sm:text-5xl">
              Fresh insights for better financial decisions.
            </h2>
          </div>
          <a
            href="#"
            className="btn-ghost border-navy bg-transparent text-navy"
          >
            View All Articles
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group overflow-hidden rounded-[1.75rem] border border-stone-2 bg-white transition duration-300 hover:-translate-y-3 hover:shadow-lg-custom"
            >
              <div className="flex h-40 items-center justify-center bg-stone border-b border-stone-2 text-5xl">
                {article.image}
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="inline-flex rounded-full bg-stone px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-navy">
                    {article.category}
                  </span>
                  <span className="text-xs text-ink-40">
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">
                  {article.title}
                </h3>
                <p className="mb-6 text-sm leading-7 text-ink-60">
                  {article.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-navy font-semibold transition hover:underline"
                >
                  Read article
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
