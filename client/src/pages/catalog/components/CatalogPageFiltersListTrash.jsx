import { Button } from "@/components/ui/button";
import {
  defaultFilter,
  resetCatalogFilter,
  selectCatalogFilter,
} from "@/features/site/siteSlice";
import { Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const CatalogPageFiltersListTrash = () => {
  const dispatch = useDispatch();
  const { SellerType, LocId, PriceFrom, PriceTo } =
    useSelector(selectCatalogFilter);
  return (
    (SellerType !== defaultFilter.SellerType ||
      LocId !== defaultFilter.LocId ||
      PriceFrom !== defaultFilter.PriceFrom ||
      PriceTo !== defaultFilter.PriceTo) && (
      <Button
        size="icon"
        variant="ghost"
        className="m-2 shrink-0 rounded-full bg-accent-dark hover:bg-opacity-50 max-lg:hidden"
        onClick={(e) => {
          e.preventDefault();
          dispatch(resetCatalogFilter({ keepSort: true }));
        }}
      >
        <Trash2 />
      </Button>
    )
  );
};
export default CatalogPageFiltersListTrash;
