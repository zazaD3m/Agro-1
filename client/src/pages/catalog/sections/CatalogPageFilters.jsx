import { memo } from "react";
import CatalogPageSellerType from "../components/CatalogPageSellerType";
import { Separator } from "@/components/ui/separator";

const CatalogPageFilters = memo(() => {
  return (
    <ul className="flex flex-col gap-y-4">
      <li className="rounded-t-md bg-accent py-4 shadow-md">
        <h1 className="text-center">ფილტრები</h1>
      </li>
      <li className="px-4">
        <h2 className="mb-4 text-sm">გამყიდველის ტიპი</h2>
        <CatalogPageSellerType />
      </li>
      <Separator />
      <li className="px-4">
        <h2 className="mb-4 text-sm">ფასი</h2>
        {/* <CatalogPageSellerType /> */}
      </li>
    </ul>
  );
});

CatalogPageFilters.displayName = "CatalogPageFilters";
export default CatalogPageFilters;
