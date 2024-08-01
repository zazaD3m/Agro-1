import { useSelector } from "react-redux";
import CatalogPageFiltersListItems from "../components/CatalogPageFiltersListItems";
import CatalogPageFiltersListReset from "../components/CatalogPageFiltersListReset";
import { defaultFilter, selectCatalogFilter } from "@/features/site/siteSlice";
import { cn } from "@/lib/utils";

const CatalogPageFiltersListMobile = ({ className }) => {
  const { SellerType, LocId, PriceFrom, PriceTo } =
    useSelector(selectCatalogFilter);

  if (
    SellerType === defaultFilter.SellerType &&
    LocId === defaultFilter.LocId &&
    PriceFrom === defaultFilter.PriceFrom &&
    PriceTo === defaultFilter.PriceTo
  ) {
    return null;
  }

  return (
    <div
      className={cn(
        "mb-4 flex items-center rounded-md border-2 bg-background pr-2 pt-2",
        className,
      )}
    >
      <>
        <CatalogPageFiltersListReset />
        <div className="overflow-x-auto">
          <div className="flex gap-2">
            <CatalogPageFiltersListItems />
          </div>
        </div>
      </>
    </div>
  );
};
export default CatalogPageFiltersListMobile;
