import { defaultFilter, setFilter } from "@/features/filter/filterSlice";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useDispatch } from "react-redux";

const Badge = ({ className, filter, value, ...props }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={cn(
        "inline-flex h-9 shrink-0 items-center gap-x-1.5 text-nowrap rounded-full border bg-primary pl-3.5 pr-2.5 text-xs font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/80 max-lg:mb-2 lg:h-10",
        className,
      )}
      {...props}
    >
      {value}
      <button
        className="transition-transform hover:scale-110"
        onClick={(e) => {
          e.preventDefault();
          dispatch(setFilter({ [filter]: defaultFilter[filter] }));
        }}
      >
        <X className="size-4" />
      </button>
    </div>
  );
};

export { Badge };
