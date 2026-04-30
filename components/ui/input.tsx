import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "flex h-12 w-full rounded-2xl border border-border/80 bg-background/60 px-4 py-3 text-sm text-foreground shadow-sm outline-none backdrop-blur-sm placeholder:text-muted-foreground/75 focus-visible:border-primary/45 focus-visible:ring-4 focus-visible:ring-primary/10",
        className,
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
