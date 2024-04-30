import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import { SUB_CATEGORIES } from "./categories-data";
import { Link } from "react-router-dom";
import { SheetCloseChild } from "../ui/sheet";
import { Fragment, useState } from "react";

const SubCategoryItems = ({ subCat, mainCat, mainCatLink }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = subCat.items
    ? showAll
      ? subCat.items
      : subCat.items.slice(0, 7)
    : null;

  const toggleShowAll = () => {
    setShowAll((p) => !p);
  };

  return subCat.mainCatName === mainCat ? (
    <div className="flex flex-col gap-y-4 py-4 last:border-none">
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
      {visibleItems
        ? visibleItems.map((item) => (
            <Fragment key={item.name}>
              <SheetCloseChild asChild>
                <Link
                  to={`catalog/${mainCatLink}/${subCat.link}/${item.link}`}
                  className="border-b pb-4 pl-2 text-sm transition-colors last:border-none hover:text-primary"
                >
                  {item.name}
                </Link>
              </SheetCloseChild>
            </Fragment>
          ))
        : null}
      {subCat?.items.length > 7 ? (
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
  ) : null;
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
        {selectedMainCat}
      </button>
      {SUB_CATEGORIES.map((subCat) => (
        <SubCategoryItems
          key={subCat.mainCatName + subCat.name}
          subCat={subCat}
          mainCat={selectedMainCat}
          mainCatLink={mainCatLink}
        />
      ))}
    </>
  );
};
export default SubCategoryMobile;
