import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import CatalogPageFiltersListItems from "../components/CatalogPageFiltersListItems";
import CatalogPageFiltersListReset from "../components/CatalogPageFiltersListReset";
import { useSelector } from "react-redux";
import { defaultFilter, selectFilter } from "@/features/filter/filterSlice";

const CatalogPageFiltersListDesktop = () => {
  const { SellerType, LocId, PriceFrom, PriceTo } = useSelector(selectFilter);

  if (
    SellerType === defaultFilter.SellerType &&
    LocId === defaultFilter.LocId &&
    PriceFrom === defaultFilter.PriceFrom &&
    PriceTo === defaultFilter.PriceTo
  ) {
    return null;
  }
  return (
    <div className="mr-2 flex gap-2">
      <>
        <CatalogPageFiltersListReset />
        <ScrollArea className="mt-2 w-full overflow-x-auto">
          <div className="flex w-max gap-2">
            <CatalogPageFiltersListItems />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </>
    </div>
  );
};
export default CatalogPageFiltersListDesktop;
