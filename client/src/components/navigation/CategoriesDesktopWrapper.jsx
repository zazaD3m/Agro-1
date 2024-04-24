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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogPortal,
  DialogTrigger,
} from "../ui/dialog";

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
      <Dialog className="">
        <DialogTrigger asChild>
          <Button
            size="lg"
            variant="primary"
            className="shrink-0 gap-x-2 px-2 text-xs xl:text-sm"
          >
            <AlignLeft />
            კატეგორიები
          </Button>
        </DialogTrigger>
        <DialogContent className="h-[95%] max-h-[680px] w-[95%] max-w-[1280px] p-6">
          <CategoriesDesktop />
        </DialogContent>
      </Dialog>
    </>
  );
};
export default CategoriesDesktopWrapper;
