"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mb-12 max-w-2xl space-y-5",
        align === "center" && "mx-auto text-center",
      )}
    >
      <Badge
        variant="highlight"
        className={cn(
          "w-fit border-highlight/35 bg-highlight/10 text-[0.68rem] text-foreground",
          align === "center" && "mx-auto",
        )}
      >
        {eyebrow}
      </Badge>
      <div className="space-y-4">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-balance md:text-5xl">
          {title}
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
