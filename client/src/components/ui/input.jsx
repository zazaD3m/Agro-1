import * as React from "react";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const inputVariants = cva(
  "flex w-full rounded-md border border-input bg-background text-sm ring-offset-background  placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "",
        file: "file:border-0 file:bg-transparent file:text-sm file:font-medium",
        // destructive:
        //   "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        // outline:
        //   "border border-primary-light text-primary bg-background hover:bg-primary-light hover:text-primary-foreground",
        // secondary:
        //   "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost:
          "border-0 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none",
        // link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-3 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-4 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

const Input = React.forwardRef(
  ({ className, variant, size, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, size, className }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input, inputVariants };
