import { Link } from "react-router-dom";
import { SUB_CATEGORIES } from "./categories-data";
import { DialogClose } from "../ui/dialog";

const SubCategoryDesktop = ({ mainCat, mainCatLink }) => {
  return (
    <>
      <div className="mb-4 block w-full border-b-2 border-primary-light pb-2 text-xl font-semibold transition-colors ">
        <DialogClose asChild>
          <Link to={`catalog/${mainCatLink}`} className="hover:text-action">
            {mainCat}
          </Link>
        </DialogClose>
      </div>
      <nav className="h-full overflow-y-auto">
        <ul className="flex flex-wrap gap-x-16 gap-y-8">
          {SUB_CATEGORIES.map((subCat) =>
            subCat.mainCatName === mainCat ? (
              <li key={subCat.name} className="space-y-4">
                <DialogClose asChild>
                  <Link
                    to={`catalog/${mainCatLink}/${subCat.link}`}
                    className="font-semibold hover:text-primary"
                  >
                    {subCat.name}
                  </Link>
                </DialogClose>
                {subCat.items ? (
                  <ul className="space-y-3">
                    {subCat.items.map((item) => (
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
                  </ul>
                ) : null}
              </li>
            ) : null,
          )}
        </ul>
      </nav>
    </>
  );
};
export default SubCategoryDesktop;
