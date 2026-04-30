"use client";

import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  type SpringOptions,
} from "framer-motion";

import { heroStats } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const spring: SpringOptions = {
  stiffness: 180,
  damping: 18,
  mass: 0.7,
};

export function HeroSection() {
  const rotateXValue = useMotionValue(0);
  const rotateYValue = useMotionValue(0);
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const rotateX = useSpring(rotateXValue, spring);
  const rotateY = useSpring(rotateYValue, spring);
  const glow = useMotionTemplate`radial-gradient(460px circle at ${pointerX}% ${pointerY}%, rgba(16, 185, 129, 0.22), transparent 42%)`;

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    rotateXValue.set((0.5 - y) * 11);
    rotateYValue.set((x - 0.5) * 13);
    pointerX.set(x * 100);
    pointerY.set(y * 100);
  };

  const resetTilt = () => {
    rotateXValue.set(0);
    rotateYValue.set(0);
    pointerX.set(50);
    pointerY.set(50);
  };

  return (
    <section className="relative overflow-hidden pb-12 pt-32 md:pb-18 md:pt-36">
      <div className="ambient-orb left-[-8rem] top-20 h-72 w-72 bg-primary/30" />
      <div className="ambient-orb right-[-4rem] top-40 h-64 w-64 bg-highlight/25 [animation-delay:-2s]" />
      <div className="ambient-orb bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 bg-accent/20 [animation-delay:-4s]" />

      <div className="hero-shell grid min-h-[92vh] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl space-y-8"
          >
            <Badge className="w-fit bg-background/60 text-primary shadow-sm backdrop-blur-xl">
              <Sparkles className="size-3.5" />
              Cinematic portfolio for a modern web developer
            </Badge>

            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
                Web Developer &amp; Digital Craftsman
              </p>
              <h1 className="font-display text-6xl font-semibold leading-[0.88] tracking-[-0.06em] text-balance md:text-8xl">
                Will
                <span className="text-shimmer block">builds the web with taste.</span>
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Bespoke digital experiences that merge premium aesthetics, responsive
                engineering, and motion-rich storytelling for brands that want to feel
                unmistakably world-class.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="group">
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>

            <div className="grid gap-4 pt-3 md:grid-cols-3">
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.85,
                    delay: 0.12 * index,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="glass-panel rounded-[1.5rem] border border-border/70 p-5"
                >
                  <p className="font-display text-3xl font-semibold text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <Link
              href="#about"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-primary"
            >
              <ArrowDown className="size-4 animate-bounce" />
              Scroll to explore the craft
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative hidden lg:block"
        >
          <motion.div
            onMouseMove={handleMove}
            onMouseLeave={resetTilt}
            style={{
              rotateX,
              rotateY,
              backgroundImage: glow,
              transformStyle: "preserve-3d",
            }}
            className="relative mx-auto w-full max-w-[560px] rounded-[2.25rem] border border-white/10 bg-background/55 p-5 shadow-[0_45px_130px_rgba(0,0,0,0.24)] backdrop-blur-2xl"
          >
            <div className="absolute inset-0 rounded-[2.25rem] bg-[radial-gradient(circle_at_top,rgba(216,197,140,0.22),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.12),transparent)]" />
            <div className="relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-secondary/80">
              <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-5 py-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/72">Featured Build</p>
                  <p className="mt-2 font-display text-2xl font-semibold text-white">
                    Helios OS
                  </p>
                </div>
                <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/80">
                  2024 Launch
                </div>
              </div>

              <div className="relative h-[480px]">
                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80"
                  alt="Modern desk setup showing a premium digital workspace"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/15" />

                <motion.div
                  style={{ transform: "translateZ(44px)" }}
                  className="absolute bottom-6 left-6 right-6 glass-panel rounded-[1.7rem] border border-white/10 p-5 text-white"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-white/62">
                        Motion-forward product storytelling
                      </p>
                      <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/72">
                        Designed to feel fast, convincing, and premium on every screen with
                        layered visuals, soft parallax, and sharp technical clarity.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-primary/30 bg-primary/12 px-3 py-2 text-right">
                      <p className="font-display text-lg font-semibold text-white">98</p>
                      <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/62">
                        Lighthouse
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              style={{ transform: "translate3d(-24px, -18px, 80px)" }}
              className="absolute -left-10 top-16 glass-panel rounded-[1.6rem] border border-white/10 px-5 py-4"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Preferred Stack
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                {["Next.js 15", "TypeScript", "Tailwind", "Framer Motion"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border/80 bg-background/75 px-3 py-1.5 text-foreground/78"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              style={{ transform: "translate3d(28px, 42px, 90px)" }}
              className="absolute -right-8 bottom-10 rounded-[1.6rem] border border-white/12 bg-primary/15 px-5 py-4 text-primary-foreground shadow-[0_20px_60px_rgba(16,185,129,0.22)] backdrop-blur-2xl"
            >
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/65">Impact</p>
              <p className="mt-2 font-display text-3xl font-semibold text-white">+47%</p>
              <p className="mt-2 text-sm text-white/70">Bookings after launch</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
