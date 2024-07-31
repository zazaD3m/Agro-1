import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import CatalogPageFiltersListItems from "../components/CatalogPageFiltersListItems";
import CatalogPageFiltersListTrash from "../components/CatalogPageFiltersListTrash";

const CatalogPageFiltersListDesktop = () => {
  return (
    <div className="flex gap-2">
      <>
        <CatalogPageFiltersListTrash />
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
