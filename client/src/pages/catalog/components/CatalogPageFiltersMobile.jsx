import { Button } from "@/components/ui/button";
import { SlidersVertical, X } from "lucide-react";

import CatalogPageFilters from "../sections/CatalogPageFilters";
import { ScrollArea } from "@/components/ui/scroll-area";
import CatalogPageFiltersListReset from "./CatalogPageFiltersListReset";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

const CatalogPageFiltersMobile = () => {
  const [container, setContainer] = useState(null);
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
        className="rounded-t-2xl pb-20"
      >
        <ScrollArea className="h-full">
          <div className="flex h-16 items-center justify-between border-b border-gray-400 px-4">
            <h2>ფილტრები</h2>
            <DialogClose asChild>
              <Button variant="ghost" size="icon">
                <X />
              </Button>
            </DialogClose>
          </div>
          <CatalogPageFilters container={container} />
        </ScrollArea>
        <div className="fixed bottom-0 flex h-20 w-full items-center justify-between border-t border-gray-400 px-4">
          <CatalogPageFiltersListReset
            size="default"
            className="bg-background p-0 max-lg:mb-1"
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
