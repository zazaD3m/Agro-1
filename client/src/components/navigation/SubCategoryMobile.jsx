import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SheetCloseChild } from "../ui/sheet";
import { useState } from "react";
import { CATEGORIES, SUB_CATEGORIES } from "@/data/categories";

const SubCategoryItems = ({ subCat, mainCatLink }) => {
  const [showAll, setShowAll] = useState(false);
  const filteredCategories = CATEGORIES.filter(
    (cat) => cat.subCatId === subCat.id,
  );
  const visibleCategories = showAll
    ? filteredCategories
    : filteredCategories.slice(0, 7);

  const toggleShowAll = () => {
    setShowAll((p) => !p);
  };

  return (
    <div className="flex flex-col gap-y-4 py-4">
      <SheetCloseChild asChild>
        <Link
          to={`catalog/${subCat.id}/${mainCatLink}/${subCat.link}`}
          className="flex w-min items-center gap-x-2 text-nowrap font-medium hover:text-primary"
        >
          {subCat.name}
          <span className="rounded-md bg-background-green">
            <ChevronRight />
          </span>
        </Link>
      </SheetCloseChild>
      {visibleCategories.map((cat) => (
        <SheetCloseChild key={cat.id} asChild>
          <Link
            to={`catalog/${cat.id}/${mainCatLink}/${subCat.link}/${cat.link}`}
            className="border-b pb-4 pl-2 text-sm transition-colors last:border-none hover:text-primary"
          >
            {cat.name}
          </Link>
        </SheetCloseChild>
      ))}
      {filteredCategories.length > 7 ? (
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

const SubCategoryMobile = ({ mainCat, setSelectedMainCatId }) => {
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
      {SUB_CATEGORIES.map((subCat) =>
        subCat.mainCatId === mainCat.id ? (
          subCat.name ? (
            <SubCategoryItems
              key={subCat.id}
              subCat={subCat}
              mainCatLink={mainCat.link}
            />
          ) : (
            <div key={subCat.id} className="flex flex-col gap-y-4 py-4">
              {CATEGORIES.map((cat) =>
                cat.subCatId === subCat.id ? (
                  <SheetCloseChild key={cat.id} asChild>
                    <Link
                      to={`catalog/${cat.id}/${mainCat.link}/${cat.link}`}
                      className="flex items-center text-nowrap border-b pb-4 font-medium last:border-none hover:text-primary"
                    >
                      {cat.name}
                    </Link>
                  </SheetCloseChild>
                ) : null,
              )}
            </div>
          )
        ) : null,
      )}
    </>
  );
};
export default SubCategoryMobile;
