import { Button } from "@/components/ui/button";
import {
  Command,
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

const FormLocation = ({ control, setValue }) => {
  const [open, setOpen] = useState(false);
  return (
    <FormField
      control={control}
      name="locId"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>ლოკაცია*</FormLabel>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="popoverTriggerAsInput"
                  role="combobox"
                  aria-expanded={open}
                  className={cn(
                    "group w-48 justify-between pl-4 pr-2 text-foreground",
                    !field.value && "text-muted-foreground",
                  )}
                >
                  {field.value
                    ? LOCATION.getLocName(field.value)
                    : "აირჩიე ლოკაცია"}
                  <div className="ml-auto h-full w-px bg-accent-dark" />

                  <ChevronDown className="ml-2 h-5 w-5 shrink-0 opacity-50 transition-all group-hover:opacity-100" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-48 rounded-sm p-0">
              <Command
                filter={(value, search) => {
                  if (value.includes(search)) return 1;
                  return 0;
                }}
              >
                <CommandList>
                  <CommandInput />
                  <CommandGroup>
                    <ScrollArea className="h-[255px]">
                      {LOCATION.options.map((locId) => (
                        <CommandItem
                          value={locId}
                          key={locId}
                          onSelect={() => {
                            if (field?.value === locId) {
                              setValue("locId", "");
                            } else {
                              setValue("locId", locId);
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
export default FormLocation;
