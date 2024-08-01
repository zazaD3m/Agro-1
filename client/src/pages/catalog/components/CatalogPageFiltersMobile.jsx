import { Button } from "@/components/ui/button";
import { SlidersVertical, X } from "lucide-react";

import CatalogPageFilters from "../sections/CatalogPageFilters";
import CatalogPageFiltersListReset from "./CatalogPageFiltersListReset";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { useSelector } from "react-redux";
import { defaultFilter, selectCatalogFilter } from "@/features/site/siteSlice";
import CatalogPageFiltersListMobile from "./CatalogPageFiltersListMobile";

const CatalogPageFiltersMobile = () => {
  const [container, setContainer] = useState(null);
  const { SellerType, LocId, PriceFrom, PriceTo } =
    useSelector(selectCatalogFilter);

  let filtersListShouldRender;
  if (
    SellerType === defaultFilter.SellerType &&
    LocId === defaultFilter.LocId &&
    PriceFrom === defaultFilter.PriceFrom &&
    PriceTo === defaultFilter.PriceTo
  ) {
    filtersListShouldRender = false;
  } else {
    filtersListShouldRender = true;
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex h-10 w-min items-center gap-x-1 text-sm font-semibold">
          <SlidersVertical className="h-4 w-4 translate-y-0.5" />
          ფილტრი
        </button>
      </DialogTrigger>
      <DialogContent
        ref={setContainer}
        customClose={true}
        side="bottom"
        className="overflow-hidden rounded-t-2xl pb-20"
      >
        <div className="h-full overflow-auto">
          <div className="flex h-16 items-center justify-between rounded-t-2xl px-4 max-lg:bg-accent">
            <h2>ფილტრები</h2>
            <DialogClose asChild>
              <Button variant="ghost" size="icon">
                <X />
              </Button>
            </DialogClose>
          </div>
          {filtersListShouldRender && (
            <CatalogPageFiltersListMobile className="rounded-none border-x-0" />
          )}
          <CatalogPageFilters container={container} />
        </div>
        <div className="fixed bottom-0 flex h-20 w-full items-center justify-between px-4 max-lg:bg-accent">
          <CatalogPageFiltersListReset
            size="default"
            className="bg-accent p-0 max-lg:mb-1"
          >
            გასუფთავება
          </CatalogPageFiltersListReset>
          <DialogClose asChild>
            <Button className="ml-auto" variant="primary">
              გაფილტვრა
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default CatalogPageFiltersMobile;
