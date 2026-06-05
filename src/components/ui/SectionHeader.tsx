import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { fadeUp } from "@/utils/animations";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(
        "max-w-3xl space-y-5",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.24em]",
            light ? "text-accent" : "text-accent",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-[clamp(2rem,3.5vw,3.25rem)] leading-[1.1]",
          light ? "text-white" : "text-primary",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-base leading-7 sm:text-lg",
            light ? "text-white/70" : "text-ink-muted",
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
