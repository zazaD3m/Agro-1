import { defaultFilter, selectFilter } from "@/features/filter/filterSlice";
import { Badge } from "./Badge";
import { LocationFilter, SellerFilter } from "@/data/filters-data";
import { useSelector } from "react-redux";

const CatalogPageFiltersListItems = () => {
  const { SellerType, LocId, PriceFrom, PriceTo } = useSelector(selectFilter);
  return (
    <>
      {LocId !== defaultFilter.LocId && (
        <Badge filter="LocId" value={LocationFilter.nameMap[LocId]} />
      )}
      {SellerType !== defaultFilter.SellerType && (
        <Badge filter="SellerType" value={SellerFilter.nameMap[SellerType]} />
      )}
      {PriceFrom !== defaultFilter.PriceFrom && (
        <Badge filter="PriceFrom" value={`ფასი: ${PriceFrom} დან`} />
      )}
      {PriceTo !== defaultFilter.PriceTo && (
        <Badge filter="PriceTo" value={`ფასი: ${PriceTo} მდე`} />
      )}
    </>
  );
};
export default CatalogPageFiltersListItems;
