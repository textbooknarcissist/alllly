"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CreditCard,
  PiggyBank,
  Zap,
  TrendingUp,
} from "lucide-react";
import useInView from "@/hooks/useInView";

const featuredProduct = {
  title: "High-Yield Savings",
  description:
    "A premium savings account with market-leading APY and no hidden fees.",
  rate: "4.20% APY",
  subtext: "Save smarter with a rate that beats the national average.",
};

const products = [
  {
    icon: CreditCard,
    title: "Checking Accounts",
    description: "Everyday banking without hidden fees.",
  },
  {
    icon: PiggyBank,
    title: "Business Banking",
    description: "Built for modern businesses and fast cash flow.",
  },
  {
    icon: Zap,
    title: "Loans",
    description: "Flexible financing for your next move.",
  },
  {
    icon: TrendingUp,
    title: "Investments",
    description: "Grow your portfolio with intelligent guidance.",
  },
];

export default function ProductsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, 0.12);

  return (
    <section id="products" ref={ref} className="py-32">
      <div className="container">
        <div className="max-w-3xl space-y-6 pb-12">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.24em] text-gold">
            Our Products
          </p>
          <h2 className="serif text-4xl leading-tight text-ink sm:text-5xl">
            Everything you need, <em>nothing you don&apos;t</em>.
          </h2>
          <p className="max-w-2xl text-base leading-7 text-ink-60">
            A complete suite of financial products designed for how you actually
            live — built without the complexity of legacy banking.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="group flex flex-col justify-between overflow-hidden rounded-4xl border border-stone-2 bg-navy p-10 text-white shadow-soft"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white text-xl font-semibold">
                $
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-white/70">
                  Featured
                </p>
                <h3 className="mt-3 text-2xl font-semibold">
                  {featuredProduct.title}
                </h3>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-between gap-6">
              <div>
                <p className="text-base leading-7 text-white/80">
                  {featuredProduct.description}
                </p>
                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 text-gold font-semibold hover:underline"
                >
                  View rates
                  <ArrowRight size={16} />
                </a>
              </div>
              <div className="text-right">
                <div className="text-5xl font-semibold">4.20%</div>
                <p className="mt-2 text-sm text-white/70">APY</p>
              </div>
            </div>
          </motion.article>

          <div className="grid gap-6 sm:grid-cols-2">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.article
                  key={product.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  className="group relative overflow-hidden rounded-4xl border border-stone-2 bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lg-custom"
                >
                  <div className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-gold transition-transform duration-300 group-hover:scale-y-100" />
                  <div className="relative flex items-center justify-between gap-4 pb-6">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-stone-2 text-navy">
                      <Icon size={24} />
                    </span>
                  </div>
                  <h4 className="relative text-xl font-semibold text-ink mb-3">
                    {product.title}
                  </h4>
                  <p className="relative text-sm leading-6 text-ink-60 mb-6">
                    {product.description}
                  </p>
                  <a
                    href="#"
                    className="relative inline-flex items-center gap-2 text-navy font-semibold transition hover:text-navy"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </a>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
