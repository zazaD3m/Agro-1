import { ChevronLeft, ChevronRight } from "lucide-react";
import { SUB_CATEGORIES } from "./categories-data";
import { Link } from "react-router-dom";
import { SheetCloseChild } from "../ui/sheet";
import { Fragment } from "react";

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
      {SUB_CATEGORIES.map((subCat) =>
        subCat.mainCatName === selectedMainCat ? (
          <div
            key={subCat.name}
            className="flex flex-col gap-y-4 py-4 last:border-none"
          >
            <SheetCloseChild asChild>
              <Link
                to={`catalog/${mainCatLink}/${subCat.link}`}
                className="text flex w-min items-center gap-x-2 text-nowrap font-medium hover:text-primary "
              >
                {subCat.name}
                <span className="rounded-md bg-background-green ">
                  <ChevronRight className="ml-auto" />
                </span>
              </Link>
            </SheetCloseChild>
            {subCat?.items
              ? subCat.items.map((item) => (
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
          </div>
        ) : null,
      )}
    </>
  );
};
export default SubCategoryMobile;
