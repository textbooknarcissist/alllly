import { useRef } from "react";
import { motion } from "framer-motion";
import useInView from "@/hooks/useInView";
import Button from "@/components/ui/Button";
import LazyImage from "@/components/ui/LazyImage";
import { fadeUp } from "@/utils/animations";

export default function FinalCTASection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, 0.2);

  return (
    <section ref={ref} className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0">
        <LazyImage
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&auto=format&fit=crop&q=80"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-tight text-white">
            Ready To Build A Stronger Financial Future?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/70">
            Join over a million customers who trust Vaultline for secure, intelligent banking
            that grows with them.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="#" variant="white">
              Open Account
            </Button>
            <Button href="#" variant="outline-light">
              Speak To An Advisor
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
