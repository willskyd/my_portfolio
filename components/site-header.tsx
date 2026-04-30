"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import { navItems } from "@/data/site";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4">
      <div
        className={cn(
          "mx-auto flex max-w-[1240px] items-center justify-between rounded-full px-4 py-3 transition-all duration-500",
          scrolled
            ? "glass-panel border border-border/70 shadow-[0_20px_70px_rgba(0,0,0,0.14)]"
            : "bg-transparent",
        )}
      >
        <Link href="/" className="group inline-flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
            <span className="size-2 rounded-full bg-primary shadow-[0_0_24px_rgba(16,185,129,0.8)]" />
          </span>
          <span>
            <span className="block font-display text-lg font-semibold tracking-tight text-foreground dark:text-foreground">
              Will<span className="text-primary">.</span>dev
            </span>
            <span className="block text-xs uppercase tracking-[0.24em] text-muted-foreground dark:text-muted-foreground">
              Digital Craftsman
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-border/60 bg-background/45 p-1.5 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/76 transition hover:bg-primary/10 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild variant="secondary" className="hidden md:inline-flex">
            <Link href="#contact">
              Get In Touch
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
