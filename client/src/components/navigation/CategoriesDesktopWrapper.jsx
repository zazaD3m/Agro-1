import { AlignLeft, X } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDesktopCatInfo,
  toggleDesktopCat,
} from "@/features/site/siteSlice";
import { cn } from "@/lib/utils";
import CategoriesDesktop from "./CategoriesDesktop";

const CategoriesDesktopWrapper = () => {
  const isMainCatOpen = useSelector(selectDesktopCatInfo);
  const dispatch = useDispatch();

  const handleClickOutside = (e) => {
    if (e.target.id === "mainCatOverlay") {
      dispatch(toggleDesktopCat());
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Button
        size="lg"
        variant="primary"
        className="shrink-0 gap-x-2 px-2 text-xs xl:text-sm"
        onClick={() => dispatch(toggleDesktopCat())}
      >
        {isMainCatOpen ? <X /> : <AlignLeft />}
        კატეგორიები
      </Button>
      <div
        className={cn(
          "absolute left-0 right-0 top-[110px] z-[999] rounded-b-lg bg-white py-10",
          isMainCatOpen ? "animate-slideDown block" : "hidden",
        )}
      >
        <nav className="container px-4">
          <CategoriesDesktop />
        </nav>
      </div>
      <div
        id="mainCatOverlay"
        className={cn(
          "hidden",
          isMainCatOpen &&
            "fixed inset-0 top-[120px] z-[900] block h-full w-full bg-black opacity-30",
        )}
      />
    </>
  );
};
export default CategoriesDesktopWrapper;
