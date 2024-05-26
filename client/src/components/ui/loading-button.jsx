import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { buttonVariants } from "./button";

const LoadingButton = React.forwardRef(
  (
    { className, variant, size, asChild = false, loading, children, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={loading || props.disabled}
        ref={ref}
        {...props}
      >
        <>
          {loading && (
            <Loader2
              className={cn(
                "size-4 animate-spin",
                size === "lg" && "size-6",
                children && "mr-2",
              )}
            />
          )}
          {children}
        </>
      </Comp>
    );
  },
);
LoadingButton.displayName = "LoadingButton";

export { LoadingButton, buttonVariants };
