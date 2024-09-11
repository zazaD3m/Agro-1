import { Button } from "@/components/ui/button";
import { resetFilter } from "@/features/filter/filterSlice";
import { cn } from "@/lib/utils";
import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";

const CatalogPageFiltersListReset = ({
  children,
  size = "icon",
  className,
}) => {
  const dispatch = useDispatch();

  return (
    <Button
      size={size}
      variant="ghost"
      className={cn(
        "m-2 shrink-0 rounded-full bg-accent-dark hover:bg-opacity-50 max-lg:mt-0",
        className,
      )}
      onClick={() => {
        dispatch(resetFilter({ keepSort: true }));
      }}
    >
      {children ? children : <Trash2 />}
    </Button>
  );
};
export default CatalogPageFiltersListReset;
