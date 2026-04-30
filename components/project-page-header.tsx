import Link from "next/link";
import { ArrowUpRight, ChevronLeft } from "lucide-react";

import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";

export function ProjectPageHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/72 backdrop-blur-2xl">
      <div className="section-shell flex items-center justify-between gap-4 py-4">
        <Link href="/" className="group inline-flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
            <span className="size-2 rounded-full bg-primary shadow-[0_0_24px_rgba(16,185,129,0.8)]" />
          </span>
          <span>
            <span className="block font-display text-lg font-semibold tracking-tight">
              {siteConfig.shortName}
              <span className="text-primary">.</span>dev
            </span>
            <span className="block text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Case Study
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <Button asChild variant="secondary" className="hidden sm:inline-flex">
            <Link href="/">
              <ChevronLeft className="size-4" />
              Back Home
            </Link>
          </Button>
          <Button asChild>
            <Link href="/#contact">
              Start a Project
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
