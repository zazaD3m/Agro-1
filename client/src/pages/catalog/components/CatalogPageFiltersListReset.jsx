import { Button } from "@/components/ui/button";
import {
  defaultFilter,
  resetCatalogFilter,
  selectCatalogFilter,
} from "@/features/site/siteSlice";
import { cn } from "@/lib/utils";
import { Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const CatalogPageFiltersListReset = ({
  children,
  size = "icon",
  className,
}) => {
  const dispatch = useDispatch();
  const { SellerType, LocId, PriceFrom, PriceTo } =
    useSelector(selectCatalogFilter);
  return (
    (SellerType !== defaultFilter.SellerType ||
      LocId !== defaultFilter.LocId ||
      PriceFrom !== defaultFilter.PriceFrom ||
      PriceTo !== defaultFilter.PriceTo) && (
      <Button
        size={size}
        variant="ghost"
        className={cn(
          "m-2 shrink-0 rounded-full bg-accent-dark hover:bg-opacity-50 max-lg:mb-4 max-lg:mt-0",
          className,
        )}
        onClick={(e) => {
          dispatch(resetCatalogFilter({ keepSort: true }));
        }}
      >
        {children ? children : <Trash2 />}
      </Button>
    )
  );
};
export default CatalogPageFiltersListReset;
