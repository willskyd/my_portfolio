"use client";

import { motion } from "framer-motion";

import { experience } from "@/data/site";
import { SectionHeading } from "@/components/section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="anchor-offset section-shell section-padding">
      <SectionHeading
        eyebrow="Experience"
        title="A timeline shaped by premium launches, design systems, and product impact."
        description="From independent builds to senior frontend leadership, Will has consistently helped brands turn ambitious digital ideas into polished, high-performing experiences."
      />

      <div className="relative space-y-6 before:absolute before:bottom-0 before:left-4 before:top-4 before:w-px before:bg-[linear-gradient(180deg,rgba(16,185,129,0.4),rgba(216,197,140,0.35),transparent)] md:before:left-1/2">
        {experience.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.period}`}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.75,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative grid gap-4 md:grid-cols-2 md:gap-10"
          >
            <div className={`md:${index % 2 === 0 ? "pr-8" : "col-start-2 pl-8"}`}>
              <div className="glass-panel rounded-[2rem] border border-border/70 p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-primary">{item.period}</p>
                <h3 className="mt-4 font-display text-2xl font-semibold">{item.role}</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  {item.company}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.summary}
                </p>
                <div className="mt-5 space-y-3">
                  {item.achievements.map((achievement) => (
                    <div key={achievement} className="flex gap-3 text-sm text-foreground/82">
                      <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary shadow-[0_0_18px_rgba(16,185,129,0.8)]" />
                      <p className="leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <span className="absolute left-4 top-7 flex size-4 -translate-x-1/2 items-center justify-center rounded-full border border-primary/35 bg-background md:left-1/2">
              <span className="size-2 rounded-full bg-primary" />
            </span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
