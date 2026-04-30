"use client";

import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  type SpringOptions,
} from "framer-motion";

import type { Project } from "@/data/site";
import { Badge } from "@/components/ui/badge";

const spring: SpringOptions = {
  stiffness: 170,
  damping: 20,
  mass: 0.75,
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const rotateXValue = useMotionValue(0);
  const rotateYValue = useMotionValue(0);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const rotateX = useSpring(rotateXValue, spring);
  const rotateY = useSpring(rotateYValue, spring);
  const spotlight = useMotionTemplate`radial-gradient(380px circle at ${mouseX}% ${mouseY}%, rgba(16,185,129,0.18), transparent 45%)`;

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    rotateXValue.set((0.5 - y) * 9);
    rotateYValue.set((x - 0.5) * 10);
    mouseX.set(x * 100);
    mouseY.set(y * 100);
  };

  const handleLeave = () => {
    rotateXValue.set(0);
    rotateYValue.set(0);
    mouseX.set(50);
    mouseY.set(50);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="h-full"
    >
      <motion.article
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          rotateX,
          rotateY,
          backgroundImage: spotlight,
          transformStyle: "preserve-3d",
        }}
        className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-border/70 bg-background/58 shadow-[0_25px_90px_rgba(0,0,0,0.08)] backdrop-blur-2xl"
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),transparent)] opacity-70 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent)]" />

        <div className="relative h-72 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/30 to-black/8" />

          <div className="absolute left-5 right-5 top-5 flex items-start justify-between gap-4">
            <Badge className="border-white/16 bg-black/30 text-white backdrop-blur-lg">
              {project.category}
            </Badge>
            <span className="rounded-full border border-white/16 bg-black/30 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/75 backdrop-blur-lg">
              {project.year}
            </span>
          </div>

          <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="font-display text-3xl font-semibold text-white">{project.title}</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-white/74">
                {project.description}
              </p>
            </div>

            <Link
              href={project.viewsite}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-white/18 bg-white/12 px-4 py-2 text-sm font-medium text-white backdrop-blur-lg transition duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-primary hover:text-primary-foreground"
            >
              View Site
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>

        <Link href={`/projects/${project.slug}`} className="relative flex flex-1 flex-col justify-between gap-6 p-6">
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border/70 bg-background/72 px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-foreground/72"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-5">
            <div className="grid grid-cols-3 gap-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[1.4rem] border border-border/70 bg-background/62 p-3"
                >
                  <p className="font-display text-xl font-semibold">{metric.value}</p>
                  <p className="mt-1 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground/78 transition group-hover:text-primary">
              View Details
              <ArrowRight className="size-4" />
            </span>
          </div>
        </Link>
      </motion.article>
    </motion.div>
  );
}
