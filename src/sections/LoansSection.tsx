import { useRef } from "react";
import { motion } from "framer-motion";
import { Banknote, Briefcase, Car, Home, ArrowRight } from "lucide-react";
import useInView from "@/hooks/useInView";
import SectionHeader from "@/components/ui/SectionHeader";
import { fadeUp } from "@/utils/animations";

const loans = [
  {
    icon: Banknote,
    title: "Personal Loans",
    summary: "Flexible financing up to $50,000 for life's important moments.",
    rate: "From 6.99% APR",
  },
  {
    icon: Briefcase,
    title: "Business Loans",
    summary: "Capital solutions designed to accelerate your business growth.",
    rate: "From 7.49% APR",
  },
  {
    icon: Car,
    title: "Vehicle Financing",
    summary: "Competitive auto loans with fast approval and transparent terms.",
    rate: "From 5.49% APR",
  },
  {
    icon: Home,
    title: "Home Financing",
    summary: "Mortgage solutions with personalized guidance every step of the way.",
    rate: "From 5.99% APR",
  },
];

export default function LoansSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, 0.1);

  return (
    <section id="loans" ref={ref} className="section-padding bg-surface">
      <div className="container">
        <SectionHeader
          eyebrow="Lending"
          title="Flexible Financing Solutions"
          description="Quick approvals and competitive rates tailored to your financial goals."
          align="center"
          className="mb-14"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {loans.map((loan, index) => {
            const Icon = loan.icon;
            return (
              <motion.article
                key={loan.title}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={index}
                whileHover={{ y: -8 }}
                className="flex flex-col rounded-2xl border border-surface-2 bg-white p-7 shadow-soft transition-shadow hover:shadow-premium"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-primary">{loan.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-ink-muted">{loan.summary}</p>
                <p className="mt-4 rounded-lg bg-surface px-3 py-2 text-sm font-bold text-accent">
                  {loan.rate}
                </p>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-accent"
                >
                  Apply Now
                  <ArrowRight size={16} />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
