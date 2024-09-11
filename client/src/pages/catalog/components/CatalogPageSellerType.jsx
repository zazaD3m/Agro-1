import { Button } from "@/components/ui/button";
import { SellerFilter } from "@/data/filters-data";
import { selectSellerType, setFilter } from "@/features/filter/filterSlice";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";

const CatalogPageSellerType = memo(() => {
  const dispatch = useDispatch();
  const SellerType = useSelector(selectSellerType);

  const handleSellerTypeClick = (id) => {
    if (id === SellerType) {
      // skip users click on the value that is already set
      return;
    }
    dispatch(setFilter({ SellerType: id }));
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
