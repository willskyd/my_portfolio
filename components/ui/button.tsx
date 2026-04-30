"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_20px_50px_rgba(16,185,129,0.3)] hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--primary)_88%,white)]",
        secondary:
          "glass-panel text-foreground dark:border-white/20 hover:-translate-y-0.5 hover:border-primary/35 dark:hover:border-primary/50 hover:text-primary dark:hover:text-primary hover:bg-primary/8 dark:hover:bg-primary/15",
        ghost:
          "bg-transparent text-foreground/82 hover:bg-white/10 hover:text-foreground dark:hover:bg-white/8",
        outline:
          "border border-border/80 bg-transparent text-foreground hover:border-primary/35 hover:bg-primary/8 hover:text-primary",
        link: "h-auto rounded-none px-0 text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-7 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
