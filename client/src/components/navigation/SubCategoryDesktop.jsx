import { Link } from "react-router-dom";
import { DialogClose } from "../ui/dialog";
import { useState } from "react";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import { CATEGORIES, SUB_CATEGORIES } from "@/data/categories";

const SubCategoryItems = ({ subCat, mainCatLink }) => {
  const [showAll, setShowAll] = useState(false);
  const filteredCategories = CATEGORIES.filter(
    (cat) => cat.subCatId === subCat.id,
  );
  const visibleItems = showAll
    ? filteredCategories
    : filteredCategories.slice(0, 7);

  const toggleShowAll = () => {
    setShowAll((p) => !p);
  };

  return (
    <li className="space-y-4">
      <DialogClose asChild>
        <Link
          to={`catalog/${subCat.id}/${mainCatLink}/${subCat.link}`}
          className="font-semibold hover:text-primary"
        >
          {subCat.name}
        </Link>
      </DialogClose>
      {visibleItems ? (
        <ul className="relative space-y-3">
          {visibleItems.map((cat) => (
            <li
              key={cat.id}
              className="border-primary pl-2 hover:border-l-2 hover:pl-1.5"
            >
              <DialogClose asChild>
                <Link
                  to={`catalog/${cat.id}/${mainCatLink}/${subCat.link}/${cat.link}`}
                  className="block w-full text-sm hover:text-primary"
                >
                  {cat.name}
                </Link>
              </DialogClose>
            </li>
          ))}
          {filteredCategories.length > 7 ? (
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
  );
};

const SubCategoryDesktop = ({ mainCat }) => {
  return (
    <>
      <div className="mb-4 block w-full border-b-2 border-primary-light pb-2 text-xl font-semibold transition-colors">
        <DialogClose asChild>
          <Link
            to={`catalog/${mainCat.id}/${mainCat.link}`}
            className="flex w-max items-center gap-x-2 hover:text-action"
          >
            {mainCat.name}
            <span className="rounded-md bg-background-green p-1">
              <ChevronRight />
            </span>
          </Link>
        </DialogClose>
      </div>
      <nav className="h-full overflow-y-auto">
        <ul className="grid grid-cols-2 gap-x-16 gap-y-8 lg:grid-cols-3">
          {SUB_CATEGORIES.map((subCat) =>
            subCat.mainCatId === mainCat.id ? (
              subCat.name ? (
                <SubCategoryItems
                  key={subCat.id}
                  subCat={subCat}
                  mainCatLink={mainCat.link}
                />
              ) : (
                <li key={subCat.id}>
                  <ul className="space-y-3">
                    {CATEGORIES.map((cat) =>
                      cat.subCatId === subCat.id ? (
                        <li
                          key={cat.id}
                          className="font-semibold hover:text-primary"
                        >
                          <DialogClose asChild>
                            <Link
                              to={`catalog/${cat.id}/${mainCat.link}/${cat.link}`}
                              className="block w-full text-sm"
                            >
                              {cat.name}
                            </Link>
                          </DialogClose>
                        </li>
                      ) : null,
                    )}
                  </ul>
                </li>
              )
            ) : null,
          )}
        </ul>
      </nav>
    </>
  );
};
export default SubCategoryDesktop;
