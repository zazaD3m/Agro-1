import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SubCategoryMobile from "./SubCategoryMobile";
import { SheetCloseChild } from "../ui/sheet";
import { MAIN_CATEGORIES } from "@/data/categories";

const MainCategoryItem = ({ id, name, link, icon, setSelectedMainCatId }) => {
  return (
    <div className="border-b py-5 first:pt-8 last:border-none">
      <div className="flex w-full items-center">
        <SheetCloseChild asChild>
          <Link
            to={`catalog/${id}/${link}`}
            className="flex items-center gap-x-4 text-sm font-medium"
          >
            <img src={"/" + icon} className="h-6" alt={name} />
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

const MainCategoriesMobile = () => {
  const [selectedMainCatId, setSelectedMainCatId] = useState(null);

  const mainCat = selectedMainCatId
    ? MAIN_CATEGORIES.find((mainCat) => mainCat.id === selectedMainCatId)
    : null;

  return (
    <nav className="h-full overflow-auto px-4 pb-12">
      {selectedMainCatId ? (
        <SubCategoryMobile
          mainCat={mainCat}
          setSelectedMainCatId={setSelectedMainCatId}
        />
      ) : (
        MAIN_CATEGORIES.map((mainCat) => (
          <MainCategoryItem
            key={mainCat.id}
            id={mainCat.id}
            name={mainCat.name}
            link={mainCat.link}
            icon={mainCat.icon}
            setSelectedMainCatId={setSelectedMainCatId}
          />
        ))
      )}
    </nav>
  );
};
export default MainCategoriesMobile;
