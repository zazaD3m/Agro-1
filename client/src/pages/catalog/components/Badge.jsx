import { defaultFilter, setCatalogFilter } from "@/features/site/siteSlice";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useDispatch } from "react-redux";

const Badge = ({ className, filter, value, ...props }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={cn(
        "inline-flex items-center gap-x-1.5 rounded-full border bg-primary pl-3.5 pr-2.5 text-xs font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/80",
        className,
      )}
      {...props}
    >
      {value}
      <button
        className="transition-transform hover:scale-110"
        onClick={(e) => {
          e.preventDefault();
          dispatch(setCatalogFilter({ [filter]: defaultFilter[filter] }));
        }}
      >
        <X className="size-4" />
      </button>
    </div>
  );
};

export { Badge };
