import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import HeaderSearch from "./HeaderSearch";
import { Button } from "../ui/button";

const HeaderDesktopMiddle = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <div className="mx-auto flex h-full max-w-[1920px] gap-4 px-4">
        <div className="flex items-center justify-center">
          <Link
            to="/"
            className="cursor-pointer text-3xl font-semibold text-primary"
          >
            Agroezo
          </Link>
        </div>
        <div className="flex max-w-xl grow items-center justify-center">
          <HeaderSearch />
        </div>
        <div className="ml-auto flex items-center justify-center">
          <Button asChild size="lg" variant="primary" className="text-sm">
            <Link to="profile/add-new">განცხადების დამატება</Link>
          </Button>
        </div>
        <div className="flex items-center justify-center">
          <Button asChild size="lg" className="text-sm">
            <Link to="profile/add-new">შესვლა / რეგისტრაცია</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default HeaderDesktopMiddle;
