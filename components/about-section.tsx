"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { aboutHighlights, siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="anchor-offset section-shell section-padding">
      <SectionHeading
        eyebrow="About Me"
        title="A developer who treats interfaces like experiences, not just screens."
        description="Will blends product strategy, visual sensitivity, and frontend engineering discipline to create websites that feel premium from the first scroll to the final conversion point."
      />

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="radial-outline glass-panel overflow-hidden rounded-[2rem] p-4"
        >
          <div className="relative h-[520px] overflow-hidden rounded-[1.75rem]">
            <Image
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80"
              alt="Portrait of a stylish creative professional"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
            <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/12 bg-black/35 p-5 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.28em] text-white/68">Based in</p>
              <p className="mt-3 font-display text-3xl font-semibold text-white">
                {siteConfig.location}
              </p>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/72">
                Available globally for premium websites, product marketing experiences, and
                design-forward frontend systems.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel rounded-[2rem] border border-border/70 p-7"
          >
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              Will creates digital products that look refined, feel effortless, and perform at a
              professional standard. His sweet spot sits where design ambition meets engineering
              rigor: immersive portfolios, luxury brand sites, compelling landing pages, and
              modern product experiences that earn attention and convert with confidence.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {aboutHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.75,
                  delay: 0.1 * index,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Card className="rounded-[1.75rem] p-6">
                  <div className="flex gap-5">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      <item.icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
