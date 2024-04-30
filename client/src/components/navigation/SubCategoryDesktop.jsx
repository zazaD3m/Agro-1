import { Link } from "react-router-dom";
import { SUB_CATEGORIES } from "./categories-data";
import { DialogClose } from "../ui/dialog";
import { useState } from "react";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";

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
    <li key={subCat.name} className="space-y-4">
      <DialogClose asChild>
        <Link
          to={`catalog/${mainCatLink}/${subCat.link}`}
          className="font-semibold hover:text-primary"
        >
          {subCat.name}
        </Link>
      </DialogClose>
      {visibleItems ? (
        <ul className="relative space-y-3">
          {visibleItems.map((item) => (
            <li
              key={item.name}
              className="border-primary pl-2 hover:border-l-2 hover:pl-1.5"
            >
              <DialogClose asChild>
                <Link
                  to={`catalog/${mainCatLink}/${subCat.link}/${item.link}`}
                  className="text-sm hover:text-primary"
                >
                  {item.name}
                </Link>
              </DialogClose>
            </li>
          ))}
          {subCat?.items.length > 7 ? (
            <li className="pb-4">
              <button
                onClick={toggleShowAll}
                className="group/mainCatItem absolute flex items-center gap-x-1 text-nowrap pl-2 text-sm font-semibold hover:opacity-90"
              >
                <span>{showAll ? "ნაკლების ნახვა" : "მეტის ნახვა"}</span>
                <span className="rounded-md bg-background-green p-1 group-hover/mainCatItem:text-action">
                  {showAll ? (
                    <ChevronUp className="size-4" />
                  ) : (
                    <ChevronDown className="size-4" />
                  )}
                </span>
              </button>
            </li>
          ) : null}
        </ul>
      ) : null}
    </li>
  ) : null;
};

const SubCategoryDesktop = ({ mainCat, mainCatLink }) => {
  return (
    <>
      <div className="mb-4 block w-full border-b-2 border-primary-light pb-2 text-xl font-semibold transition-colors ">
        <DialogClose asChild>
          <Link
            to={`catalog/${mainCatLink}`}
            className="flex w-max items-center gap-x-2 hover:text-action"
          >
            {mainCat}
            <span className="rounded-md bg-background-green p-1">
              <ChevronRight className="" />
            </span>
          </Link>
        </DialogClose>
      </div>
      <nav className="h-full overflow-y-auto">
        <ul className="grid grid-cols-2 gap-x-16 gap-y-8 lg:grid-cols-3">
          {SUB_CATEGORIES.map((subCat) => (
            <SubCategoryItems
              key={subCat.mainCatName + subCat.name}
              subCat={subCat}
              mainCat={mainCat}
              mainCatLink={mainCatLink}
            />
          ))}
        </ul>
      </nav>
    </>
  );
};
export default SubCategoryDesktop;
