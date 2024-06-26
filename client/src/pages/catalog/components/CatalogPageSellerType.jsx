import { Button } from "@/components/ui/button";
import { SellerFilter } from "@/data/filters-data";
import { selectSellerType, setCatalogFilter } from "@/features/site/siteSlice";
import { useDispatch, useSelector } from "react-redux";

const CatalogPageSellerType = () => {
  const dispatch = useDispatch();
  const sellerType = useSelector(selectSellerType);

  const handleSellerTypeClick = (id) => {
    dispatch(setCatalogFilter({ SellerType: id }));
  };

  return (
    <div className="flex flex-wrap gap-x-2 gap-y-2">
      {SellerFilter.options.map((id) => (
        <Button
          key={id}
          variant="accentOutline"
          size="sm"
          className="w-min text-xs"
          data-state={sellerType === id ? "active" : ""}
          onClick={() => handleSellerTypeClick(id)}
        >
          {SellerFilter.nameMap[id]}
        </Button>
      ))}
    </div>
  );
};
export default CatalogPageSellerType;
