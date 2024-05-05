import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import { SUB_CATEGORIES } from "./categories-data";
import { Link } from "react-router-dom";
import { SheetCloseChild } from "../ui/sheet";
import { useState } from "react";

const SubCategoryItems = ({ subCat, mainCatLink }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? subCat.items : subCat.items.slice(0, 7);

  const toggleShowAll = () => {
    setShowAll((p) => !p);
  };

  return (
    <div className="flex flex-col gap-y-4 py-4 ">
      <SheetCloseChild asChild>
        <Link
          to={`catalog/${mainCatLink}/${subCat.link}`}
          className="flex w-min items-center gap-x-2 text-nowrap font-medium hover:text-primary "
        >
          {subCat.name}
          <span className="rounded-md bg-background-green">
            <ChevronRight />
          </span>
        </Link>
      </SheetCloseChild>
      {visibleItems.map((item) => (
        <SheetCloseChild key={item.name} asChild>
          <Link
            to={`catalog/${mainCatLink}/${subCat.link}/${item.link}`}
            className="border-b pb-4 pl-2 text-sm transition-colors last:border-none hover:text-primary"
          >
            {item.name}
          </Link>
        </SheetCloseChild>
      ))}
      {subCat.items.length > 7 ? (
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

const SubCategoryMobile = ({
  selectedMainCat,
  mainCatLink,
  setSelectedMainCat,
  setSelectedMainCatLink,
}) => {
  return (
    <>
      <button
        className="flex w-full items-center gap-x-4 rounded-b-md border-2 border-t-0 border-primary bg-accent py-3 pl-2"
        onClick={() => {
          setSelectedMainCatLink("");
          setSelectedMainCat("");
        }}
      >
        <ChevronLeft className="size-8" />
        <span>{selectedMainCat}</span>
      </button>
      {SUB_CATEGORIES.map(
        (subCat, i) =>
          subCat.mainCatName === selectedMainCat &&
          (subCat.name ? (
            <SubCategoryItems
              key={subCat.mainCatName + subCat.name}
              subCat={subCat}
              mainCat={selectedMainCat}
              mainCatLink={mainCatLink}
            />
          ) : (
            <div
              key={subCat.mainCatName + i}
              className="flex flex-col gap-y-4 py-4"
            >
              {subCat.items.map((item) => (
                <SheetCloseChild key={item.name} asChild>
                  <Link
                    to={`catalog/${mainCatLink}/${item.link}`}
                    className="flex items-center text-nowrap border-b pb-4 font-medium last:border-none hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </SheetCloseChild>
              ))}
            </div>
          )),
      )}
    </>
  );
};
export default SubCategoryMobile;
