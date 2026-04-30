import * as React from "react";

import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex min-h-32 w-full rounded-[1.75rem] border border-border/80 bg-background/60 px-4 py-3 text-sm text-foreground shadow-sm outline-none backdrop-blur-sm placeholder:text-muted-foreground/75 focus-visible:border-primary/45 focus-visible:ring-4 focus-visible:ring-primary/10",
          className,
          "resize-none",
        )}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
