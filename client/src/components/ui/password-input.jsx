import * as React from "react";

import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { inputVariants } from "./input";

const PasswordInput = React.forwardRef(
  ({ className, variant, size, showDefault = false, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(showDefault);
    return (
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          className={cn(inputVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
        <span
          className="absolute end-0 top-0 flex aspect-square h-full cursor-pointer select-none items-center justify-center p-0 text-muted-foreground transition-all hover:text-secondary-foreground"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setShowPassword((p) => !p);
          }}
        >
          {showPassword ? <Eye /> : <EyeOff />}
        </span>
      </div>
    );
  },
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
