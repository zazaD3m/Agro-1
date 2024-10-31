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
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import LOCATION from "@/constants/LOCATION";
import { cn } from "@/lib/utils";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";

const AddNewProductLocation = ({ control }) => {
  const [open, setOpen] = useState(false);

  return (
    <FormField
      control={control}
      name="LocId"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel className="w-min text-nowrap font-normal">
            აირჩიე მდებარეობა
            <span className="text-destructive">*</span>
          </FormLabel>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="popoverTriggerAsInput"
                  role="combobox"
                  aria-expanded={open}
                  className={cn(
                    "group w-64 justify-between pl-4 pr-2 font-normal text-foreground",
                    !field.value && "text-muted-foreground",
                  )}
                  ref={field.ref}
                >
                  {field.value ? LOCATION.getLocName(field.value) : ""}
                  <div className="ml-auto h-full w-px bg-accent-dark" />
                  <ChevronDown className="ml-2 h-5 w-5 shrink-0 opacity-50 transition-all group-hover:opacity-100" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-64 rounded-sm p-0">
              <Command>
                <CommandList>
                  <CommandInput />
                  <CommandEmpty className="text-nowrap p-2 text-sm">
                    მდებარეობა ვერ მოიძებნა.
                  </CommandEmpty>
                  <CommandGroup>
                    <ScrollArea className="h-[255px]">
                      {LOCATION.options.map((locId) => (
                        <CommandItem
                          value={locId}
                          key={locId}
                          onSelect={() => {
                            if (field?.value === locId) {
                              field.onChange("");
                            } else {
                              field.onChange(locId);
                              setOpen(false);
                            }
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              locId === field.value
                                ? "opacity-100"
                                : "opacity-0",
                            )}
                          />
                          {LOCATION.getLocName(locId)}
                        </CommandItem>
                      ))}
                    </ScrollArea>
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default AddNewProductLocation;
