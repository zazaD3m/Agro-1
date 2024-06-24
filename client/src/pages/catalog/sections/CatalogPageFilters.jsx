import { Button } from "@/components/ui/button";
import {
  selectCatalogFilter,
  selectCountry,
  setCatalogFilter,
} from "@/features/site/siteSlice";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";

const CatalogPageFilters = memo(() => {
  const dispatch = useDispatch();
  const country = useSelector(selectCountry);

  return (
    <div className="flex flex-col gap-y-8 px-8">
      <Button
        onClick={() => {
          dispatch(setCatalogFilter({ country: "ge" }));
        }}
        className={country === "ge" && "bg-yellow-300"}
      >
        ge
      </Button>

      <Button
        onClick={() => {
          dispatch(setCatalogFilter({ country: "en" }));
        }}
        className={country === "en" && "bg-yellow-300"}
      >
        en
      </Button>
    </div>
  );
});

CatalogPageFilters.displayName = "CatalogPageFilters";
export default CatalogPageFilters;
