import { memo } from "react";
import CatalogPageSellerType from "../components/CatalogPageSellerType";
import { Separator } from "@/components/ui/separator";
import CatalogPageLocation from "../components/CatalogPageLocation";
import CatalogPagePrice from "../components/CatalogPagePrice";

const CatalogPageFilters = memo(() => {
  return (
    <ul className="flex flex-col gap-y-4 pt-4">
      <li className="px-4">
        <h2 className="mb-4 text-sm opacity-70">გამყიდველის ტიპი</h2>
        <CatalogPageSellerType />
      </li>
      <Separator />
      <li className="px-4">
        <h2 className="mb-4 text-sm opacity-70">მდებარეობა</h2>
        <CatalogPageLocation />
      </li>
      <Separator />
      <li className="px-4">
        <h2 className="mb-4 text-sm opacity-70">ფასი</h2>
        <CatalogPagePrice />
      </li>
    </ul>
  );
});

CatalogPageFilters.displayName = "CatalogPageFilters";
export default CatalogPageFilters;
