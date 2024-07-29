import { Button } from "@/components/ui/button";
import { SellerFilter } from "@/data/filters-data";
import { selectSellerType, setCatalogFilter } from "@/features/site/siteSlice";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const CatalogPageSellerType = memo(() => {
  const dispatch = useDispatch();
  const [, setSearchParams] = useSearchParams();
  const SellerType = useSelector(selectSellerType);

  const handleSellerTypeClick = (id) => {
    if (id === SellerType) {
      // skip users click on the value that is already set
      return;
    }
    dispatch(setCatalogFilter({ SellerType: id }));
    setSearchParams(
      (prev) => {
        if (id === SellerFilter.default) {
          // if id user selected is default value
          if (prev.has("SellerType")) {
            // if there was some value of filter remove it as default value doesn't require url filter
            prev.delete("SellerType");
          }
        } else {
          // if new id isn't default value append id to searchParams
          prev.set("SellerType", id);
        }
        return prev;
      },
      { preventScrollReset: true },
    );
  };

  return (
    <div className="flex flex-wrap gap-x-2 gap-y-2">
      {SellerFilter.options.map((id) => (
        <Button
          key={id}
          variant="accentOutline"
          className="w-min text-xs"
          data-state={SellerType === id ? "active" : ""}
          onClick={() => handleSellerTypeClick(id)}
        >
          {SellerFilter.nameMap[id]}
        </Button>
      ))}
    </div>
  );
});
CatalogPageSellerType.displayName = "CatalogPageSellerType";
export default CatalogPageSellerType;
