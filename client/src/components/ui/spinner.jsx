import React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";

const spinnerVariants = cva("flex-col items-center justify-center", {
  variants: {
    show: {
      true: "flex",
      false: "hidden",
    },
    fullScreen: {
      true: "size-full",
      false: "",
    },
  },
  defaultVariants: {
    show: true,
    fullScreen: false,
  },
});

const loaderVariants = cva("animate-spin text-primary", {
  variants: {
    size: {
      small: "size-6",
      medium: "size-8",
      large: "size-12",
      huge: "size-20",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

const Spinner = ({ size, show, fullScreen = false, children, className }) => {
  return (
    <div className={spinnerVariants({ show, fullScreen })}>
      <Loader2 className={cn(loaderVariants({ size }), className)} />
      {children}
    </div>
  );
};

export { Spinner };
