import { selectLocId, setCatalogFilter } from "@/features/site/siteSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LocationFilter } from "@/data/filters-data";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSearchParams } from "react-router-dom";

const CatalogPageLocation = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [, setSearchParams] = useSearchParams();
  const LocId = useSelector(selectLocId);

  const handleLocIdClick = (id) => {
    if (id === LocId) {
      // skip users click on the value that is already set
      return;
    }
    dispatch(setCatalogFilter({ LocId: id }));
    setSearchParams(
      (prev) => {
        if (id === LocationFilter.default) {
          // if id user selected is default value
          if (prev.has("LocId")) {
            // if there was some value of filter remove it as default value doesn't require url filter
            prev.delete("LocId");
          }
        } else {
          // if new id isn't default value append id to searchParams
          prev.set("LocId", id);
        }
        return prev;
      },
      { preventScrollReset: true },
    );
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="accentOutline"
          role="combobox"
          aria-expanded={open}
          className="group w-full rounded-md px-2"
        >
          {LocId === LocationFilter.default
            ? ""
            : LocationFilter.nameMap[LocId]}

          <div className="ml-auto h-full w-px bg-accent-dark" />
          <ChevronDown className="ml-2 h-5 w-5 shrink-0 opacity-50 transition-all group-hover:opacity-80" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="მდებარეობა..." />
            <CommandEmpty className="text-wrap p-2">
              მდებარეობა ვერ მოიძებნა.
            </CommandEmpty>
            <ScrollArea className="h-[255px]">
              <CommandGroup>
                {LocationFilter.options.map((id) => {
                  const location = LocationFilter.nameMap[id];
                  return (
                    <CommandItem
                      key={id}
                      value={location}
                      onSelect={() => {
                        if (id === LocId) {
                          handleLocIdClick(LocationFilter.default);
                        } else {
                          handleLocIdClick(id);
                        }
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          LocId === id ? "opacity-100" : "opacity-0",
                        )}
                      />
                      {location}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
export default CatalogPageLocation;
