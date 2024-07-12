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

const CatalogPageLocation = () => {
  const dispatch = useDispatch();
  const locId = useSelector(selectLocId);

  const handleLocIdClick = (id) => {
    dispatch(setCatalogFilter({ LocId: id }));
  };
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="accentOutline"
          role="combobox"
          aria-expanded={open}
          className="group w-full rounded-md px-2"
        >
          {locId === LocationFilter.default
            ? ""
            : LocationFilter.nameMap[locId]}

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
                        if (id === locId) {
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
                          locId === id ? "opacity-100" : "opacity-0",
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
