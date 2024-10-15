import { selectLocId, setFilter } from "@/features/filter/filterSlice";
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

const CatalogPageLocation = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const LocId = useSelector(selectLocId);

  const handleLocIdClick = (id) => {
    dispatch(setFilter({ LocId: id === LocId ? LocationFilter.default : id }));
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen} modal={true}>
      <PopoverTrigger asChild>
        <Button
          variant="popoverTriggerAsInput"
          role="combobox"
          aria-expanded={open}
          className="group w-full rounded-md px-2 text-xs font-normal"
        >
          {LocId === LocationFilter.default
            ? ""
            : LocationFilter.nameMap[LocId]}

          <div className="ml-auto h-full w-px bg-accent-dark" />
          <ChevronDown className="ml-2 h-5 w-5 shrink-0 opacity-50 transition-all group-hover:opacity-80" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="popover-content-width-full p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="მდებარეობა..." />
            <CommandEmpty className="text-wrap p-2">
              მდებარეობა ვერ მოიძებნა.
            </CommandEmpty>
            <CommandGroup>
              <ScrollArea className="h-[255px]">
                {LocationFilter.options.map((id) => {
                  const location = LocationFilter.nameMap[id];
                  return (
                    <CommandItem
                      key={id}
                      value={location}
                      onSelect={() => {
                        handleLocIdClick(id);
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
              </ScrollArea>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
export default CatalogPageLocation;
