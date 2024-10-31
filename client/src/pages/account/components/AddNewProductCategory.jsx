import { Button } from "@/components/ui/button";
import {
  Command,
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
import {
  CAT_IDS,
  CATEGORIES,
  MAIN_CAT_ID_TO_SUB_CAT_IDS,
  MAIN_CAT_IDS,
  SUB_CAT_ID_TO_CAT_IDS,
  SUB_CAT_IDS,
} from "@/data/categories-data";
import { cn } from "@/lib/utils";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";

const getFullCatName = (catId, subCatId, mainCatId) => {
  const catName = CATEGORIES[catId].name;
  const subCatName = CATEGORIES[subCatId]?.name;
  const mainCatName = CATEGORIES[mainCatId].name;

  return (
    <span>
      {mainCatName} &rarr; {subCatName ? <> {subCatName} &rarr; </> : ""}{" "}
      {catName}
    </span>
  );
};

const AddNewProductCategory = ({ control, setValue }) => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [catId, setCatId] = useState(null);
  const [subCatId, setSubCatId] = useState(null);
  const [mainCatId, setMainCatId] = useState(null);

  const setFormCatState = (onChange, catId, subCatId, mainCatId) => {
    onChange(catId);
    setValue("SubCatId", subCatId);
    setValue("MainCatId", mainCatId);
  };

  const resetFormCatState = () => {
    setValue("CatId", "");
    setValue("SubCatId", "");
    setValue("MainCatId", "");
  };

  return (
    <FormField
      control={control}
      name="CatId"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel className="text-base">
            კატეგორია
            <span className="align-top text-xs font-semibold text-destructive">
              *
            </span>
          </FormLabel>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="popoverTriggerAsInput"
                  role="combobox"
                  aria-expanded={open}
                  className={cn(
                    "group justify-between pl-4 pr-2 text-xs font-normal text-foreground",
                    !catId && "text-muted-foreground",
                  )}
                  onClick={() => {
                    setSearch("");
                    if (!catId) {
                      setMainCatId(null);
                      setSubCatId(null);
                    }
                  }}
                  ref={field.ref}
                >
                  <span className="overflow-clip text-ellipsis">
                    {catId
                      ? getFullCatName(catId, subCatId, mainCatId)
                      : "აირჩიე/ჩაწერე კატეგორია"}
                  </span>
                  <div className="ml-auto h-full w-px bg-accent-dark" />
                  <ChevronDown className="ml-2 h-5 w-5 shrink-0 opacity-50 transition-all group-hover:opacity-100" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="PopoverContent rounded-sm border p-0 drop-shadow-lg"
              avoidCollisions={false}
              onOpenAutoFocus={(e) => {
                e.preventDefault();
              }}
            >
              <Command
                filter={(value, search) => {
                  if (value.includes(search)) return 1;
                  return 0;
                }}
              >
                <CommandInput
                  value={search}
                  onValueChange={setSearch}
                  placeholder="ჩაწერე"
                />
                <ScrollArea maxHeight="max-h-64">
                  <CommandList className="py-1">
                    {!search && mainCatId && (
                      <CommandItem
                        className="cursor-pointer rounded-none bg-accent/50 px-3.5 py-2.5 text-sm font-semibold aria-selected:bg-accent-dark"
                        onSelect={() => {
                          if (subCatId) {
                            setCatId(null);
                            setSubCatId(null);
                            if (!CATEGORIES[subCatId].name) {
                              setMainCatId(null);
                            }
                            resetFormCatState();
                          } else {
                            setMainCatId(null);
                          }
                        }}
                      >
                        უკან დაბრუნება
                      </CommandItem>
                    )}
                    {search &&
                      MAIN_CAT_IDS.map((mainCatId) => (
                        <CommandItem
                          className="cursor-pointer rounded-none px-3.5 py-3 text-xs aria-selected:bg-accent-dark aria-selected:text-primary"
                          key={mainCatId}
                          onSelect={() => {
                            setMainCatId(mainCatId);
                            setCatId(null);
                            if (mainCatId === 10000) {
                              setSubCatId(10050);
                            } else if (mainCatId === 11000) {
                              setSubCatId(11050);
                            } else {
                              setSubCatId(null);
                            }
                            resetFormCatState();
                            setSearch("");
                          }}
                        >
                          {CATEGORIES[mainCatId].name}
                        </CommandItem>
                      ))}
                    {search &&
                      SUB_CAT_IDS.map((subCatId) => {
                        if (subCatId === 10050 || subCatId === 11050)
                          return null;
                        const subCat = CATEGORIES[subCatId];
                        const mainCatId = subCat.mainCatId;
                        return (
                          <CommandItem
                            className="cursor-pointer rounded-none px-3.5 py-3 text-xs aria-selected:bg-accent-dark aria-selected:text-primary"
                            key={subCatId}
                            onSelect={() => {
                              setMainCatId(mainCatId);
                              setSubCatId(subCatId);
                              setCatId(null);
                              resetFormCatState();
                              setSearch("");
                            }}
                          >
                            {CATEGORIES[mainCatId].name} &rarr; {subCat.name}
                          </CommandItem>
                        );
                      })}
                    {search &&
                      CAT_IDS.map((catId) => {
                        const cat = CATEGORIES[catId];
                        const subCatId = cat.subCatId;
                        const subCat = CATEGORIES[subCatId];
                        const subCatName = subCat.name;
                        const mainCatId = subCat.mainCatId;
                        return (
                          <CommandItem
                            className="cursor-pointer rounded-none px-3.5 py-3 text-xs aria-selected:bg-accent-dark aria-selected:text-primary"
                            key={catId}
                            onSelect={() => {
                              setCatId(catId);
                              setSubCatId(subCatId);
                              setMainCatId(mainCatId);
                              setFormCatState(
                                field.onChange,
                                catId,
                                subCatId,
                                mainCatId,
                              );
                              setSearch("");
                              setOpen(false);
                            }}
                          >
                            {CATEGORIES[mainCatId].name} &rarr;{" "}
                            {subCatName ? <> {subCatName} &rarr; </> : ""}
                            {cat.name}
                          </CommandItem>
                        );
                      })}
                    {!search &&
                      !mainCatId &&
                      MAIN_CAT_IDS.map((mainCatId) => (
                        <CommandItem
                          className="cursor-pointer rounded-none px-3.5 py-3 text-xs aria-selected:bg-accent-dark aria-selected:text-primary"
                          key={mainCatId}
                          onSelect={() => {
                            setMainCatId(mainCatId);
                            if (mainCatId === 10000) {
                              setSubCatId(10050);
                            }
                            if (mainCatId === 11000) {
                              setSubCatId(11050);
                            }
                          }}
                        >
                          {CATEGORIES[mainCatId].name}
                        </CommandItem>
                      ))}
                    {!search &&
                      mainCatId &&
                      !subCatId &&
                      MAIN_CAT_ID_TO_SUB_CAT_IDS[mainCatId].map((subCatId) => {
                        if (subCatId === 10050 || subCatId === 11050)
                          return null;
                        return (
                          <CommandItem
                            className="cursor-pointer rounded-none px-3.5 py-3 text-xs aria-selected:bg-accent-dark aria-selected:text-primary"
                            key={subCatId}
                            onSelect={() => {
                              setSubCatId(subCatId);
                            }}
                          >
                            {CATEGORIES[subCatId].name}
                          </CommandItem>
                        );
                      })}
                    {!search &&
                      mainCatId &&
                      subCatId &&
                      SUB_CAT_ID_TO_CAT_IDS[subCatId].map((id) => (
                        <CommandItem
                          className={cn(
                            "cursor-pointer rounded-none py-3 text-xs aria-selected:bg-accent-dark aria-selected:text-primary",
                            id === catId && "text-primary",
                          )}
                          key={id}
                          onSelect={() => {
                            if (id === catId) {
                              setCatId(null);
                              resetFormCatState();
                            } else {
                              setCatId(id);
                              setFormCatState(
                                field.onChange,
                                id,
                                subCatId,
                                mainCatId,
                              );
                              setOpen(false);
                            }
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              id === catId ? "opacity-100" : "opacity-0",
                            )}
                          />
                          {CATEGORIES[id].name}
                        </CommandItem>
                      ))}
                  </CommandList>
                </ScrollArea>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default AddNewProductCategory;
