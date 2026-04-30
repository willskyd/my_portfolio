"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";

import { testimonials } from "@/data/site";
import { SectionHeading } from "@/components/section-heading";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="anchor-offset section-shell section-padding">
      <SectionHeading
        eyebrow="Testimonials"
        title="Trusted by teams that care about both polish and performance."
        description="The throughline across Will's work is consistent: ambitious design, clean delivery, thoughtful communication, and finished products that feel far more premium than the starting brief."
        align="center"
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.article
            key={`${item.name}-${item.title}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="glass-panel flex h-full flex-col rounded-[2rem] border border-border/70 p-7"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-primary/20 bg-primary/10 p-3 text-primary">
                <Quote className="size-5" />
              </span>
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
                Client Voice
              </p>
            </div>

            <p className="mt-7 font-display text-2xl font-semibold leading-relaxed text-balance">
              &ldquo;{item.quote}&rdquo;
            </p>

            <div className="mt-auto border-t border-border/70 pt-6">
              <p className="text-lg font-semibold text-foreground">{item.name}</p>
              <p className="mt-1 text-sm uppercase tracking-[0.16em] text-muted-foreground">
                {item.title}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
