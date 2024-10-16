import { ChevronDown } from "lucide-react";
import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import SubCategoryMobile from "./SubCategoryMobile";
import { SheetCloseChild } from "../ui/sheet";
import { CATEGORIES, MAIN_CAT_IDS } from "@/data/categories-data";
import { useDispatch } from "react-redux";
import { closeMobileCat } from "@/features/site/siteSlice";

const MainCategoryItem = ({ id, name, link, icon, setSelectedMainCatId }) => {
  return (
    <div className="border-b py-4 first:pt-6 last:border-none">
      <div className="flex w-full items-center">
        <SheetCloseChild asChild>
          <Link
            to={`catalog/${id}/${link}`}
            className="flex items-center gap-x-4 text-sm font-medium"
          >
            <img src={"/" + icon} className="size-10 shrink-0" alt={name} />
            {name}
          </Link>
        </SheetCloseChild>
        <button
          className="ml-auto w-auto rounded-md bg-background-green p-1"
          onClick={() => {
            setSelectedMainCatId(id);
          }}
        >
          <ChevronDown className="ml-auto" />
        </button>
      </div>
    </div>
  );
};

const MainCategoriesMobile = ({ setOnFavoritesOpen }) => {
  const dispatch = useDispatch();
  const [selectedMainCatId, setSelectedMainCatId] = useState(null);

  useLayoutEffect(() => {
    const handleBackButton = () => {
      dispatch(closeMobileCat());
      setOnFavoritesOpen(false);
    };
    window.addEventListener("popstate", handleBackButton, false);
    return () => {
      window.removeEventListener("popstate", handleBackButton, false);
    };
  }, []);

  return (
    <nav className="h-full overflow-auto px-4 pb-12">
      {selectedMainCatId ? (
        <SubCategoryMobile
          mainCat={CATEGORIES[selectedMainCatId]}
          mainCatId={selectedMainCatId}
          setSelectedMainCatId={setSelectedMainCatId}
        />
      ) : (
        MAIN_CAT_IDS.map((mainCatId) => {
          const mainCat = CATEGORIES[mainCatId];
          return (
            <MainCategoryItem
              key={mainCatId}
              id={mainCatId}
              name={mainCat.name}
              link={mainCat.link}
              icon={mainCat.icon}
              setSelectedMainCatId={setSelectedMainCatId}
            />
          );
        })
      )}
    </nav>
  );
};
export default MainCategoriesMobile;
