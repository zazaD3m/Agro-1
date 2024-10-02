import { useLayoutEffect, useState } from "react";
import { cn } from "@/lib/utils";
import SubCategoryDesktop from "./SubCategoryDesktop";
import { CATEGORIES, MAIN_CAT_IDS } from "@/data/categories-data";
import { useDispatch } from "react-redux";
import { closeDesktopCat } from "@/features/site/siteSlice";

const MainCategoriesDesktop = () => {
  const [mainCatId, setMainCatId] = useState(1000);
  const [mainCat, setMainCat] = useState(CATEGORIES[1000]);
  const dispatch = useDispatch();

  const handleMainCatChange = (id) => {
    setMainCatId(id);
    setMainCat(CATEGORIES[id]);
  };

  useLayoutEffect(() => {
    const handleBackButton = () => {
      dispatch(closeDesktopCat());
    };
    window.addEventListener("popstate", handleBackButton, false);
    return () => {
      window.removeEventListener("popstate", handleBackButton, false);
    };
  }, []);

  return (
    <div className="flex h-full w-full">
      <div className="h-full min-w-80 shrink-0 pb-12">
        <h2 className="cursor-default pb-4 text-xl font-semibold">კატეგორია</h2>
        <ul className="h-full min-w-80 shrink-0 overflow-y-scroll border-r border-muted">
          {MAIN_CAT_IDS.map((id) => (
            <li
              onClick={() => {
                handleMainCatChange(id);
              }}
              key={id}
              className={cn(
                "duration-250 flex h-16 w-full cursor-pointer items-center justify-start gap-x-4 whitespace-nowrap border-l-2 border-background px-2 text-sm tracking-wide transition-all",
                id === mainCatId && "border-primary bg-accent bg-opacity-100",
              )}
            >
              <img src={"/" + CATEGORIES[id].icon} className="h-auto w-11" />
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
