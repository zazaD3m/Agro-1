import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SheetCloseChild } from "../ui/sheet";
import { useState } from "react";
import { SUB_CATEGORIES } from "@/data/categories";
import {
  CATEGORIES,
  MAIN_CAT_ID_TO_SUB_CAT_IDS,
  SUB_CAT_ID_TO_CAT_IDS,
} from "@/data/testcat";

const SubCategoryItems = ({ subCat, subCatId, mainCatLink }) => {
  const [showAll, setShowAll] = useState(false);

  const catIds = SUB_CAT_ID_TO_CAT_IDS[subCatId];
  const visibleItemIds = showAll ? catIds : catIds.slice(0, 7);

  const toggleShowAll = () => {
    setShowAll((p) => !p);
  };

  return (
    <div className="flex flex-col gap-y-4 py-4">
      <SheetCloseChild asChild>
        <Link
          to={`catalog/${subCatId}/${mainCatLink}/${subCat.link}`}
          className="flex w-min items-center gap-x-2 text-nowrap font-medium hover:text-primary"
        >
          {subCat.name}
          <span className="rounded-md bg-background-green">
            <ChevronRight />
          </span>
        </Link>
      </SheetCloseChild>
      {visibleItemIds.map((id) => {
        const cat = CATEGORIES[id];
        return (
          <SheetCloseChild key={id} asChild>
            <Link
              to={`catalog/${id}/${mainCatLink}/${subCat.link}/${cat.link}`}
              className="border-b pb-4 pl-2 text-sm transition-colors last:border-none hover:text-primary"
            >
              {cat.name}
            </Link>
          </SheetCloseChild>
        );
      })}
      {catIds.length > 7 ? (
        <button
          onClick={toggleShowAll}
          className="flex items-center gap-x-1 text-nowrap border-b pb-4 pl-2 text-sm font-medium hover:opacity-90"
        >
          <span>{showAll ? "ნაკლების ნახვა" : "მეტის ნახვა"}</span>
          <span className="">
            {showAll ? (
              <ChevronUp className="size-4" />
            ) : (
              <ChevronDown className="size-4" />
            )}
          </span>
        </button>
      ) : null}
    </div>
  );
};

const SubCategoryMobile = ({ mainCat, mainCatId, setSelectedMainCatId }) => {
  return (
    <>
      <button
        className="flex w-full items-center gap-x-4 rounded-b-md border-2 border-t-0 border-primary bg-accent py-3 pl-2"
        onClick={() => {
          setSelectedMainCatId(null);
        }}
      >
        <ChevronLeft className="size-8" />
        <span>{mainCat.name}</span>
      </button>
      {MAIN_CAT_ID_TO_SUB_CAT_IDS[mainCatId].map((id) => {
        const subCat = CATEGORIES[id];
        return subCat.name ? (
          <SubCategoryItems
            key={id}
            subCat={subCat}
            subCatId={id}
            mainCatLink={mainCat.link}
          />
        ) : (
          <div key={id} className="flex flex-col gap-y-4 py-4">
            {SUB_CAT_ID_TO_CAT_IDS[id].map((catId) => {
              const cat = CATEGORIES[catId];
              return (
                <SheetCloseChild key={catId} asChild>
                  <Link
                    to={`catalog/${catId}/${mainCat.link}/${cat.link}`}
                    className="flex items-center text-nowrap border-b pb-4 font-medium last:border-none hover:text-primary"
                  >
                    {cat.name}
                  </Link>
                </SheetCloseChild>
              );
            })}
          </div>
        );
      })}
    </>
  );
};
export default SubCategoryMobile;
