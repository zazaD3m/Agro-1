import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { MAIN_CATEGORIES } from "./categories-data";
import { Link } from "react-router-dom";
import SubCategoryMobile from "./SubCategoryMobile";
import { SheetCloseChild } from "../ui/sheet";

const MainCategory = ({
  mainCat,
  setSelectedMainCat,
  setSelectedMainCatLink,
}) => {
  return (
    <div className="border-b py-5 first:pt-8 last:border-none">
      <div className="flex w-full items-center">
        <SheetCloseChild asChild>
          <Link
            to={`catalog/${mainCat.link}`}
            className="flex items-center gap-x-4 text-sm font-medium"
          >
            <img src={"/" + mainCat.icon} className="h-6" alt={mainCat.name} />
            {mainCat.name}
          </Link>
        </SheetCloseChild>
        <button
          className="ml-auto w-auto rounded-md bg-background-green p-1"
          onClick={() => {
            setSelectedMainCatLink(mainCat.link);
            setSelectedMainCat(mainCat.name);
          }}
        >
          <ChevronDown className="ml-auto" />
        </button>
      </div>
    </div>
  );
};

const MainCategoriesMobile = ({ setOnCatalogOpen }) => {
  const [selectedMainCat, setSelectedMainCat] = useState("");
  const [selectedMainCatLink, setSelectedMainCatLink] = useState("");

  useEffect(() => {
    const handleBackButton = () => {
      setOnCatalogOpen(false);
    };
    window.addEventListener("popstate", handleBackButton, false);
    window.addEventListener("hashchange", handleBackButton, false);
    return () => {
      window.removeEventListener("popstate", handleBackButton, false);
      window.removeEventListener("hashchange", handleBackButton, false);
    };
  }, []);

  return (
    <nav className="h-full overflow-auto px-4 pb-12">
      {selectedMainCat ? (
        <SubCategoryMobile
          selectedMainCat={selectedMainCat}
          setSelectedMainCat={setSelectedMainCat}
          setSelectedMainCatLink={setSelectedMainCatLink}
          mainCatLink={selectedMainCatLink}
        />
      ) : (
        MAIN_CATEGORIES.map((mainCat) => (
          <MainCategory
            key={mainCat.name}
            mainCat={mainCat}
            setSelectedMainCat={setSelectedMainCat}
            setSelectedMainCatLink={setSelectedMainCatLink}
          />
        ))
      )}
    </nav>
  );
};
export default MainCategoriesMobile;
