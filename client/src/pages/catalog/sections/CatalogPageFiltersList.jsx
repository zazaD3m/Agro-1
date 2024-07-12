import { Button } from "@/components/ui/button";
import {
  defaultFilter,
  resetCatalogFilter,
  selectLocId,
  selectPriceFrom,
  selectPriceTo,
  selectSellerType,
} from "@/features/site/siteSlice";
import { Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Badge } from "../components/Badge";
import { LocationFilter, SellerFilter } from "@/data/filters-data";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const CatalogPageFiltersList = () => {
  const dispatch = useDispatch();
  const sellerType = useSelector(selectSellerType);
  const locId = useSelector(selectLocId);
  const priceFrom = useSelector(selectPriceFrom);
  const priceTo = useSelector(selectPriceTo);

  return (
    <div className="max-lg:border-b max-lg:px-4 max-lg:pb-1.5 lg:flex lg:gap-2">
      {(sellerType !== defaultFilter.SellerType ||
        locId !== defaultFilter.LocId ||
        priceFrom !== defaultFilter.PriceFrom ||
        priceTo !== defaultFilter.PriceTo) && (
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
      )}
      <ScrollArea className="mt-2 w-full overflow-x-auto max-lg:pb-4">
        <div className="flex w-max gap-2">
          {locId !== defaultFilter.LocId && (
            <Badge filter="LocId" value={LocationFilter.nameMap[locId]} />
          )}
          {sellerType !== defaultFilter.SellerType && (
            <Badge
              filter="SellerType"
              value={SellerFilter.nameMap[sellerType]}
            />
          )}
          {priceFrom !== defaultFilter.PriceFrom && (
            <Badge filter="PriceFrom" value={`ფასი: ${priceFrom} დან`} />
          )}
          {priceTo !== defaultFilter.PriceTo && (
            <Badge filter="PriceTo" value={`ფასი: ${priceTo} მდე`} />
          )}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};
export default CatalogPageFiltersList;
