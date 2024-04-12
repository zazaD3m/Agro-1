import * as React from "react";

import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

const PasswordInput = React.forwardRef(
  ({ className, showDefault = false, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(showDefault);
    return (
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
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
