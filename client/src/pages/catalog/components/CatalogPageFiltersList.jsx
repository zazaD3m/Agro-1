import { Button } from "@/components/ui/button";
import {
  defaultFilter,
  resetCatalogFilter,
  selectCountry,
  selectSellerType,
} from "@/features/site/siteSlice";
import { Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Badge } from "./Badge";
import { SellerFilter, countryFilter } from "@/data/filters-data";

const CatalogPageFiltersList = () => {
  const dispatch = useDispatch();
  const sellerType = useSelector(selectSellerType);
  const country = useSelector(selectCountry);

  return (
    <div className="flex gap-x-2">
      {(country !== countryFilter.default ||
        sellerType !== SellerFilter.default) && (
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full bg-accent-dark hover:bg-opacity-50"
          onClick={(e) => {
            e.preventDefault();
            dispatch(resetCatalogFilter());
          }}
        >
          <Trash2 />
        </Button>
      )}
      {country !== defaultFilter.country && (
        <Badge filter="country" value={country} />
      )}
      {sellerType !== defaultFilter.SellerType && (
        <Badge filter="SellerType" value={SellerFilter.nameMap[sellerType]} />
      )}
    </div>
  );
};
export default CatalogPageFiltersList;
