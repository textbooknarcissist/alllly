import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import useInView from "@/hooks/useInView";
import SectionHeader from "@/components/ui/SectionHeader";
import LazyImage from "@/components/ui/LazyImage";
import Button from "@/components/ui/Button";
import { fadeUp } from "@/utils/animations";

const articles = [
  {
    cover: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=80",
    category: "Savings",
    title: "How To Build An Emergency Fund",
    summary: "Proven strategies to create a financial safety net that protects your future.",
    readTime: "5 min read",
  },
  {
    cover: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=80",
    category: "Credit",
    title: "Understanding Your Credit Score",
    summary: "Learn what drives your score and actionable steps to improve it over time.",
    readTime: "7 min read",
  },
  {
    cover: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop&q=80",
    category: "Business",
    title: "Business Banking Essentials",
    summary: "Everything entrepreneurs need to manage business finances efficiently.",
    readTime: "8 min read",
  },
];

export default function ResourcesSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, 0.1);

  return (
    <section id="resources" ref={ref} className="section-padding">
      <div className="container">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Resource Center"
            title="Insights For Smarter Financial Decisions"
            description="Expert guides and analysis to help you navigate every stage of your financial journey."
          />
          <Button href="#" variant="ghost" className="shrink-0 self-start lg:self-auto">
            View All Articles
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-2xl border border-surface-2 bg-white shadow-soft transition-shadow hover:shadow-premium"
            >
              <div className="relative h-48 overflow-hidden">
                <LazyImage
                  src={article.cover}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20" />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                    {article.category}
                  </span>
                  <span className="text-xs text-ink-light">{article.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-primary">{article.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-muted">{article.summary}</p>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:gap-3"
                >
                  Read Article
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
