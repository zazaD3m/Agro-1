import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50",
  {
    variants: {
      variant: {
        popoverTriggerAsInput:
          "border border-input bg-background ring-offset-background data-[state=open]:ring-1 duration-300 data-[state=open]:ring-ring data-[state=open]:ring-offset-0 transition",
        primary:
          "bg-primary text-primary-foreground lg:hover:bg-primary/90 transition-all duration-300",
        action:
          "bg-action text-primary-foreground hover:bg-action/90 border-action",
        actionOutline:
          "border border-action text-action bg-background lg:hover:bg-action active:bg-action lg:hover:text-primary-foreground active:text-primary-foreground",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-primary-light text-primary-light bg-background lg:hover:bg-primary-light active:bg-primary-light lg:hover:text-primary-foreground active:text-primary-foreground disabled:hover:bg-background disabled:hover:text-primary-light",
        accent: "bg-accent hover:bg-accent/70",
        accentOutline:
          "border-accent-dark border font-normal hover:bg-accent/50 rounded-full data-[state=active]:border-primary-light/30 data-[state=active]:bg-primary-light/10",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "bg-transparent",
        blank: "",
        link: "hover:text-primary",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-8",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "default",
    },
  },
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
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
