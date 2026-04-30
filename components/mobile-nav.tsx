"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { navItems, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="secondary"
          size="icon"
          className="rounded-full md:hidden"
          aria-label="Open navigation"
        >
          <Menu className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col gap-8">
        <SheetHeader>
          <SheetTitle>{siteConfig.name}</SheetTitle>
          <SheetDescription>
            Explore Will&apos;s work, process, and contact options.
          </SheetDescription>
        </SheetHeader>

        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <SheetClose asChild key={item.href}>
              <Link
                href={item.href}
                className="rounded-2xl px-4 py-3 text-base font-medium text-foreground/82 transition hover:bg-primary/10 hover:text-primary"
              >
                {item.label}
              </Link>
            </SheetClose>
          ))}
        </nav>

        <div className="mt-auto rounded-[1.75rem] border border-border/70 bg-background/45 p-5">
          <p className="text-sm text-muted-foreground">{siteConfig.availability}</p>
          <Button asChild className="mt-4 w-full">
            <SheetClose asChild>
              <Link href="#contact">Start a Project</Link>
            </SheetClose>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
