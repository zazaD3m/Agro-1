import { useState } from "react";
import { cn } from "@/lib/utils";
import SubCategoryDesktop from "./SubCategoryDesktop";
// import { MAIN_CATEGORIES } from "@/data/categories";
import { CATEGORIES, MAIN_CAT_IDS } from "@/data/testcat";

const MainCategoriesDesktop = () => {
  const [mainCatId, setMainCatId] = useState(1000);
  const [mainCat, setMainCat] = useState(CATEGORIES[1000]);

  const handleMainCatChange = (id) => {
    setMainCatId(id);
    setMainCat(CATEGORIES[id]);
  };

  return (
    <div className="flex h-full w-full">
      <div className="h-full min-w-80 shrink-0 border-r border-muted pb-12">
        <h2 className="cursor-default pb-4 text-xl font-semibold">კატეგორია</h2>
        <ul className="h-full min-w-80 shrink-0 overflow-y-scroll border-r border-muted">
          {MAIN_CAT_IDS.map((id) => (
            <li
              onClick={() => {
                handleMainCatChange(id);
              }}
              key={id}
              className={cn(
                "flex h-16 w-full cursor-pointer items-center justify-start gap-x-4 whitespace-nowrap px-2 text-sm tracking-wide hover:bg-muted",
                id === mainCatId && "border-l-2 border-primary bg-muted",
              )}
            >
              <img src={"/" + CATEGORIES[id].icon} className="h-auto w-10" />
              {CATEGORIES[id].name}
            </li>
          ))}
        </ul>
      </div>
      <div className="h-full w-full pb-14 pl-8 pr-2">
        <SubCategoryDesktop mainCat={mainCat} mainCatId={mainCatId} />
      </div>
    </div>
  );
};
export default MainCategoriesDesktop;
