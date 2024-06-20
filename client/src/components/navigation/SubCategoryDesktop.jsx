import { Link } from "react-router-dom";
import { DialogClose } from "../ui/dialog";
import { useState } from "react";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import {
  MAIN_CAT_ID_TO_SUB_CAT_IDS,
  SUB_CAT_ID_TO_CAT_IDS,
  CATEGORIES,
} from "@/data/categories-data";

const SubCategoryItems = ({ subCat, subCatId, mainCatLink }) => {
  const [showAll, setShowAll] = useState(false);

  const catIds = SUB_CAT_ID_TO_CAT_IDS[subCatId];
  const visibleItemIds = showAll ? catIds : catIds.slice(0, 7);

  const toggleShowAll = () => {
    setShowAll((p) => !p);
  };

  return (
    <li className="space-y-4">
      <DialogClose asChild>
        <Link
          to={`catalog/${subCatId}/${mainCatLink}/${subCat.link}`}
          className="font-semibold hover:text-primary"
        >
          {subCat.name}
        </Link>
      </DialogClose>
      {visibleItemIds ? (
        <ul className="relative space-y-3">
          {visibleItemIds.map((id) => {
            const cat = CATEGORIES[id];
            return (
              <li
                key={id}
                className="border-primary pl-2 hover:border-l-2 hover:pl-1.5"
              >
                <DialogClose asChild>
                  <Link
                    to={`catalog/${id}/${mainCatLink}/${subCat.link}/${cat.link}`}
                    className="block w-full text-sm hover:text-primary"
                  >
                    {cat.name}
                  </Link>
                </DialogClose>
              </li>
            );
          })}
          {catIds.length > 7 ? (
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

const SubCategoryDesktop = ({ mainCat, mainCatId }) => {
  return (
    <>
      <div className="mb-4 block w-full border-b-2 border-primary-light pb-2 text-xl font-semibold transition-colors">
        <DialogClose asChild>
          <Link
            to={`catalog/${mainCatId}/${mainCat.link}`}
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
          {MAIN_CAT_ID_TO_SUB_CAT_IDS[mainCatId].map((subCatId) => {
            const subCat = CATEGORIES[subCatId];
            return subCat.name ? (
              <SubCategoryItems
                key={subCatId}
                subCat={subCat}
                subCatId={subCatId}
                mainCatLink={mainCat.link}
              />
            ) : (
              <li key={subCatId}>
                <ul className="space-y-3">
                  {SUB_CAT_ID_TO_CAT_IDS[subCatId].map((catId) => {
                    const cat = CATEGORIES[catId];
                    return (
                      <li
                        key={catId}
                        className="font-semibold hover:text-primary"
                      >
                        <DialogClose asChild>
                          <Link
                            to={`catalog/${catId}/${mainCat.link}/${cat.link}`}
                            className="block w-full text-sm"
                          >
                            {cat.name}
                          </Link>
                        </DialogClose>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
export default SubCategoryDesktop;
