import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CreditCard, PiggyBank, Briefcase, TrendingUp } from "lucide-react";
import useInView from "@/hooks/useInView";
import SectionHeader from "@/components/ui/SectionHeader";
import LazyImage from "@/components/ui/LazyImage";
import { fadeUp } from "@/utils/animations";

const products = [
  {
    icon: CreditCard,
    title: "Checking Accounts",
    description: "Everyday banking with zero hidden fees, instant transfers, and real-time notifications.",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&auto=format&fit=crop&q=80",
    href: "#",
  },
  {
    icon: PiggyBank,
    title: "Savings Accounts",
    description: "Competitive yields with automated savings tools to help you reach goals faster.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&auto=format&fit=crop&q=80",
    href: "#",
  },
  {
    icon: Briefcase,
    title: "Business Banking",
    description: "Complete business financial solutions from accounts to payroll and merchant services.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop&q=80",
    href: "#business",
  },
  {
    icon: TrendingUp,
    title: "Investments",
    description: "Institutional-grade portfolio tools with insights, diversification, and goal planning.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=80",
    href: "#investments",
  },
];

export default function ProductsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, 0.1);

  return (
    <section id="products" ref={ref} className="section-padding">
      <div className="container">
        <SectionHeader
          eyebrow="Our Products"
          title="Financial Solutions For Every Stage"
          description="A complete suite of banking products designed for clarity, control, and long-term growth."
          className="mb-14"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.article
                key={product.title}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={index}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-2xl border border-surface-2 bg-white shadow-soft transition-shadow hover:shadow-premium"
              >
                <div className="relative h-44 overflow-hidden">
                  <LazyImage
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/30" />
                  <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-primary shadow-soft">
                    <Icon size={22} />
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-primary">{product.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink-muted">{product.description}</p>
                  <a
                    href={product.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:gap-3"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
