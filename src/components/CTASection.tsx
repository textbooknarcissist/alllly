"use client";

import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-32">
      <div className="container">
        <div className="rounded-[3rem] bg-navy p-12 lg:p-20 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 hero-bg-grid pointer-events-none opacity-50" />
          <div className="absolute -top-30 -right-30 h-130 w-130 rounded-full bg-gold-lt/20 blur-3xl pointer-events-none" />
          
          <div className="max-w-2xl relative z-10">
            <h2 className="serif text-4xl leading-tight text-white sm:text-5xl">
              Ready to bank{" "}
              <span className="italic text-gold">smarter</span>?
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/70">
              Open your account in minutes with premium tools built to grow your
              savings, simplify spending, and protect your money.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row relative z-10">
            <a href="#" className="btn-white text-navy">
              Open a Free Account
            </a>
            <a
              href="#"
              className="btn-ghost border-white/30 text-white hover:bg-white hover:text-navy"
            >
              Learn More
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
