"use client";

import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-navy py-20">
      <div className="container flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="serif text-4xl leading-tight text-white sm:text-5xl">
            Ready to bank{" "}
            <span className="italic text-gold">smarter</span>?
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/70">
            Open your account in minutes with premium tools built to grow your
            savings, simplify spending, and protect your money.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a href="#" className="btn-white text-navy">
            Open a Free Account
          </a>
          <a
            href="#"
            className="btn-ghost border-white/30 text-white hover:bg-white/10"
          >
            Learn More
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
