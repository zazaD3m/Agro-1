import { defaultFilter, setCatalogFilter } from "@/features/site/siteSlice";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useDispatch } from "react-redux";

const Badge = ({ className, filter, value, ...props }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={cn(
        "inline-flex items-center gap-x-1.5 rounded-full border border-transparent bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        className,
      )}
      {...props}
    >
      {value}
      <button
        className="group flex size-5 items-center justify-center"
        onClick={(e) => {
          e.preventDefault();
          dispatch(setCatalogFilter({ [filter]: defaultFilter[filter] }));
        }}
      >
        <X className="size-4 transition-all duration-200 group-hover:size-5" />
      </button>
    </div>
  );
};

export { Badge };
