import { useState } from "react";
import { cn } from "@/lib/utils";
import SubCategoryDesktop from "./SubCategoryDesktop";
import { MAIN_CATEGORIES } from "@/data/categories";

const MainCategoriesDesktop = () => {
  const [selectedMainCatId, setSelectedMainCatId] = useState(
    MAIN_CATEGORIES[0].id,
  );

  const mainCat = MAIN_CATEGORIES.find((cat) => cat.id === selectedMainCatId);

  return (
    <div className="flex h-full w-full">
      <div className="h-full min-w-80 shrink-0 border-r border-muted pb-12">
        <h2 className="cursor-default pb-4 text-xl font-semibold">კატეგორია</h2>
        <ul className="h-full min-w-80 shrink-0 overflow-y-scroll border-r border-muted">
          {MAIN_CATEGORIES.map((mainCat) => (
            <li
              onClick={() => {
                setSelectedMainCatId(mainCat.id);
              }}
              key={mainCat.id}
              className={cn(
                "flex h-16 w-full cursor-pointer items-center justify-start gap-x-4 whitespace-nowrap px-2 text-sm tracking-wide hover:bg-muted",
                selectedMainCatId === mainCat.id &&
                  "border-l-2 border-primary bg-muted",
              )}
            >
              <img src={"/" + mainCat.icon} className="h-auto w-10" />
              {mainCat.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="h-full w-full pb-14 pl-8 pr-2">
        <SubCategoryDesktop mainCat={mainCat} />
      </div>
    </div>
  );
};
export default MainCategoriesDesktop;
