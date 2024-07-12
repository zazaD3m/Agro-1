import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHandle,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { SlidersHorizontal, SlidersVertical, X } from "lucide-react";
import CatalogPageFiltersList from "../sections/CatalogPageFiltersList";
import CatalogPageFilters from "../sections/CatalogPageFilters";
import { ScrollArea } from "@/components/ui/scroll-area";

const CatalogPageFiltersMobile = () => {
  return (
    <Drawer handleOnly={true} className="" disablePreventScroll={false}>
      <DrawerTrigger asChild>
        <button className="flex h-10 w-min items-center gap-x-1 text-sm font-semibold">
          <SlidersVertical className="h-4 w-4 translate-y-0.5" />
          ფილტრი
        </button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[80%] border-0 pb-20">
        <DrawerHandle className="absolute -top-6 min-h-1.5 bg-background" />
        <ScrollArea className="-translate-y-1.5 overflow-y-auto">
          <div className="mb-5 flex items-center justify-between border-b border-gray-400 p-4 pt-0.5">
            <h2>ფილტრები</h2>
            <DrawerClose asChild>
              <Button variant="ghost" size="icon">
                <X />
              </Button>
            </DrawerClose>
          </div>
          <CatalogPageFiltersList />
          <CatalogPageFilters />
          <div className="h-[800px] w-full bg-green-300"></div>
        </ScrollArea>
        <div className="fixed bottom-0 flex h-16 w-full items-center justify-between bg-action px-4">
          <h1>გასუფთავება</h1>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
export default CatalogPageFiltersMobile;
