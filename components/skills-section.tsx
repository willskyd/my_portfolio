"use client";

import { motion } from "framer-motion";

import { skillGroups } from "@/data/site";
import { SectionHeading } from "@/components/section-heading";

export function SkillsSection() {
  return (
    <section id="skills" className="anchor-offset section-shell section-padding">
      <SectionHeading
        eyebrow="Skills"
        title="Design sensitivity, frontend depth, and system thinking in one working rhythm."
        description="Will works across the layers that shape premium digital products: interface craft, scalable frontend architecture, performance, and delivery under real production constraints."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="glass-panel rounded-[2rem] border border-border/70 p-7"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="max-w-xl">
                <p className="text-xs uppercase tracking-[0.28em] text-primary">Core Discipline</p>
                <h3 className="mt-4 font-display text-3xl font-semibold">{group.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {group.description}
                </p>
              </div>

              <div className="hidden rounded-[1.5rem] border border-border/70 bg-background/55 px-5 py-4 text-right sm:block">
                <p className="font-display text-4xl font-semibold text-foreground">
                  {group.level}
                  <span className="text-xl text-muted-foreground">%</span>
                </p>
                <p className="mt-1 text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground">
                  Proficiency
                </p>
              </div>
            </div>

            <div className="mt-8 h-3 overflow-hidden rounded-full bg-muted/80">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${group.level}%` }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1, delay: 0.1 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-full bg-[linear-gradient(90deg,rgba(16,185,129,0.92),rgba(216,197,140,0.88))]"
              />
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {group.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-border/70 bg-background/72 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-foreground/72"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
