import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  CAT_IDS,
  CATEGORIES,
  MAIN_CAT_ID_TO_SUB_CAT_IDS,
  MAIN_CAT_IDS,
  SUB_CAT_ID_TO_CAT_IDS,
  SUB_CAT_IDS,
} from "@/data/categories-data";
import { useState } from "react";

const AddNewProductCat = () => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [mainCatId, setMainCatId] = useState(null);
  const [subCatId, setSubCatId] = useState(null);
  const [catId, setCatId] = useState(null);

  return (
    <div>
      <Command
        filter={(value, search) => {
          if (value.includes(search)) return 1;
          return 0;
        }}
      >
        <CommandInput value={search} onValueChange={setSearch} />
        <CommandList>
          {search &&
            MAIN_CAT_IDS.map((mainCatId) => (
              <CommandItem
                key={mainCatId}
                onSelect={() => {
                  if (mainCatId === 10000) {
                    setMainCatId(mainCatId);
                    setSubCatId(10050);
                    setCatId(null);
                  } else if (mainCatId === 11000) {
                    setMainCatId(mainCatId);
                    setSubCatId(11050);
                    setCatId(null);
                  } else {
                    setMainCatId(mainCatId);
                    setSubCatId(null);
                    setCatId(null);
                  }
                }}
              >
                {CATEGORIES[mainCatId].name}
              </CommandItem>
            ))}
          {search &&
            SUB_CAT_IDS.map((subCatId) => {
              if (subCatId === 10050 || subCatId === 11050) return null;
              const subCat = CATEGORIES[subCatId];
              const subCatName = subCat.name;
              const mainCatId = subCat.mainCatId;
              const mainCatName = CATEGORIES[mainCatId].name;
              return (
                <CommandItem
                  key={subCatId}
                  onSelect={() => {
                    setMainCatId(mainCatId);
                    setSubCatId(subCatId);
                    setCatId(null);
                  }}
                >
                  {mainCatName} &rarr; {subCatName}
                </CommandItem>
              );
            })}
          {search &&
            CAT_IDS.map((catId) => {
              const cat = CATEGORIES[catId];
              const catName = cat.name;
              const subCatId = cat.subCatId;
              const subCat = CATEGORIES[subCatId];
              const subCatName = subCat.name;
              const mainCatId = subCat.mainCatId;
              const mainCatName = CATEGORIES[mainCatId].name;
              return (
                <CommandItem
                  key={catId}
                  onSelect={() => {
                    setMainCatId(mainCatId);
                    setSubCatId(subCatId);
                    setCatId(catId);
                  }}
                >
                  {mainCatName} &rarr;{" "}
                  {subCatName ? <> {subCatName} &rarr; </> : ""}
                  {catName}
                </CommandItem>
              );
            })}
          {!search &&
            !mainCatId &&
            MAIN_CAT_IDS.map((mainCatId) => (
              <CommandItem
                key={mainCatId}
                onSelect={() => {
                  if (mainCatId === 10000) {
                    setMainCatId(mainCatId);
                    setSubCatId(10050);
                    setCatId(null);
                  } else if (mainCatId === 11000) {
                    setMainCatId(mainCatId);
                    setSubCatId(11050);
                    setCatId(null);
                  } else {
                    setMainCatId(mainCatId);
                    setSubCatId(null);
                    setCatId(null);
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
              if (subCatId === 10050 || subCatId === 11050) return null;
              const subCat = CATEGORIES[subCatId];
              const subCatName = subCat.name;
              const mainCatId = subCat.mainCatId;
              return (
                <CommandItem
                  key={subCatId}
                  onSelect={() => {
                    setMainCatId(mainCatId);
                    setSubCatId(subCatId);
                    setCatId(null);
                  }}
                >
                  {subCatName}
                </CommandItem>
              );
            })}
          {!search &&
            mainCatId &&
            subCatId &&
            SUB_CAT_ID_TO_CAT_IDS[subCatId].map((catId) => {
              const cat = CATEGORIES[catId];
              const catName = cat.name;
              const subCatId = cat.subCatId;
              const subCat = CATEGORIES[subCatId];
              const mainCatId = subCat.mainCatId;
              return (
                <CommandItem
                  key={catId}
                  onSelect={() => {
                    setMainCatId(mainCatId);
                    setSubCatId(subCatId);
                    setCatId(catId);
                    console.log(typeof mainCatId);
                    console.log(typeof subCatId);
                    console.log(typeof catId);
                  }}
                >
                  {catName}
                </CommandItem>
              );
            })}
        </CommandList>
      </Command>
    </div>
  );
};
export default AddNewProductCat;
