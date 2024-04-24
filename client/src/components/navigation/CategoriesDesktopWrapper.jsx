import { AlignLeft } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import MainCategoriesDesktop from "./MainCategoriesDesktop";

const CategoriesDesktopWrapper = () => {
  return (
    <>
      <Dialog>
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
          <MainCategoriesDesktop />
        </DialogContent>
      </Dialog>
    </>
  );
};
export default CategoriesDesktopWrapper;
