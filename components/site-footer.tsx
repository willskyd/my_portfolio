import Link from "next/link";

import { contactMethods, siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="section-shell pb-8 pt-10">
      <div className="glass-panel rounded-[2rem] border border-border/70 px-6 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Will.dev</p>
            <h2 className="font-display text-2xl font-semibold text-balance md:text-3xl">
              Crafted with precision, motion, and premium intent.
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
              A cinematic portfolio experience for ambitious teams that want thoughtful design,
              world-class frontend execution, and polished digital storytelling.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {contactMethods.slice(1, 5).map((item) => {
              const opensInNewTab = item.href.startsWith("http");

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target={opensInNewTab ? "_blank" : undefined}
                  rel={opensInNewTab ? "noreferrer" : undefined}
                  className="rounded-full border border-border/70 px-4 py-2 text-sm text-foreground/78 transition hover:border-primary/35 hover:bg-primary/8 hover:text-primary"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-border/70 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            Copyright {new Date().getFullYear()} {siteConfig.name}. Built in Next.js 15 with
            luxury-level attention to detail.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#projects" className="transition hover:text-primary">
              Projects
            </Link>
            <Link href="#contact" className="transition hover:text-primary">
              Contact
            </Link>
            <Link href="/projects/verdant-commerce" className="transition hover:text-primary">
              Case Study
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
