import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-text-light hover:bg-secondary dark:bg-text-light dark:text-text-default dark:hover:bg-secondary",
        destructive:
          "bg-red text-text-light hover:bg-red/90 dark:bg-red-900 dark:text-text-light dark:hover:bg-red-900/90",
        outline:
          "border border-primary rounded-full text-primary hover:text-text-light hover:bg-primary dark:border-text-default dark:bg-slate-950 dark:hover:bg-text-default dark:hover:text-text-light",
        secondary:
          "bg-secondary text-text-light hover:bg-secondary/80 dark:bg-secondary dark:text-text-light dark:hover:bg-secondary/80",
        ghostPrimary:
          "text-primary hover:text-secondary dark:text-primary dark:hover:text-secondary",
        ghostSecondary:
          "text-secondary hover:text-primary dark:text-secondary dark:hover:text-primary",
        link: "text-text-default underline-offset-4 hover:underline dark:text-text-light",
        success:
          "bg-success text-text-light hover:bg-success/90 dark:bg-success dark:text-text-light",
        outlineSuccess:
          "border border-success bg-lightGray text-success hover:bg-success/10 dark:border-success dark:bg-slate-950 dark:text-success dark:hover:bg-success/10",
        iconButton:
          "p-2 rounded-full text-text-default border border-lightGray bg-text-light hover:bg-primary hover:text-text-light dark:text-primary dark:hover:text-secondary",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-14 rounded-md px-9 font-bold text-lg",
        icon: "h-10 w-10",
        wopadding: "p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
