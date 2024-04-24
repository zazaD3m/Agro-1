import { useState } from "react";
import { MAIN_CATEGORIES } from "./categories-data";
import { cn } from "@/lib/utils";
import SubCategoryDesktop from "./SubCategoryDesktop";

const MainCategoriesDesktop = () => {
  const [selectedMainCat, setSelectedMainCat] = useState(
    MAIN_CATEGORIES[0].name,
  );
  const [selectedMainCatLink, setSelectedMainCatLink] = useState(
    MAIN_CATEGORIES[0].link,
  );
  return (
    <div className="flex h-full w-full">
      <div className="h-full min-w-80 shrink-0 border-r border-muted pb-12">
        <h2 className="cursor-default pb-4 text-xl font-semibold">კატეგორია</h2>
        <ul className="h-full min-w-80 shrink-0 overflow-y-scroll border-r border-muted">
          {MAIN_CATEGORIES.map((mainCat) => (
            <li
              onClick={() => {
                setSelectedMainCat(mainCat.name);
                setSelectedMainCatLink(mainCat.link);
              }}
              key={mainCat.name}
              className={cn(
                "flex h-16 w-full cursor-pointer items-center justify-start gap-x-4 whitespace-nowrap px-2 text-sm tracking-wide hover:bg-muted",
                selectedMainCat === mainCat.name &&
                  "border-l-2 border-primary bg-muted",
              )}
            >
              <img src={mainCat.icon} className="h-auto w-10" />
              {mainCat.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="h-full w-full pb-14 pl-8 pr-2">
        <SubCategoryDesktop
          mainCat={selectedMainCat}
          mainCatLink={selectedMainCatLink}
        />
      </div>
    </div>
  );
};
export default MainCategoriesDesktop;
