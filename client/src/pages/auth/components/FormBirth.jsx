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
import { BIRTH_YEARS } from "@/constants/constants";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

const FormBirth = ({ control, setValue }) => {
  const [open, setOpen] = useState(false);
  return (
    <FormField
      control={control}
      name="birthYear"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel className="text-lg">დაბადების წელი</FormLabel>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  size="lg"
                  variant="secondary"
                  role="combobox"
                  aria-expanded={open}
                  className={cn(
                    "w-64 justify-between px-4 text-foreground",
                    !field.value && "text-muted-foreground",
                  )}
                >
                  {field.value
                    ? BIRTH_YEARS.find((year) => year === field.value)
                    : "აირჩიე წელი"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-64 rounded-sm p-0">
              <Command
                filter={(value, search) => {
                  if (value.includes(search)) return 1;
                  return 0;
                }}
              >
                <CommandInput />
                <CommandList>
                  <CommandGroup>
                    {BIRTH_YEARS.map((year) => (
                      <CommandItem
                        value={year}
                        key={year}
                        onSelect={() => {
                          if (field?.value === year) {
                            setValue("birthYear", "");
                          } else {
                            setValue("birthYear", year);
                            setOpen(false);
                          }
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            year === field.value ? "opacity-100" : "opacity-0",
                          )}
                        />
                        {year}
                      </CommandItem>
                    ))}
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
export default FormBirth;
