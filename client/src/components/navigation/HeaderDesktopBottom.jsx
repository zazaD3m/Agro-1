import { Link } from "react-router-dom";
import HeaderSearch from "./HeaderSearch";
import { Button } from "../ui/button";
import CategoriesDesktopWrapper from "./CategoriesDesktopWrapper";

const HeaderDesktopBottom = () => {
  return (
    <div className="container flex h-20 gap-x-8 px-4">
      <div className="flex grow gap-x-8">
        <div className="flex items-center">
          <Link
            to="/"
            className="cursor-pointer text-3xl font-semibold text-primary"
          >
            Agroezo
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <CategoriesDesktopWrapper />
        </div>
        <div className="flex grow items-center justify-center">
          <HeaderSearch />
        </div>
      </div>
      <div className="flex items-center justify-end gap-x-8">
        <Button asChild size="lg" className="shrink-0 px-2 text-xs xl:text-sm">
          <Link to="auth/login">შესვლა / რეგისტრაცია</Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="primary"
          className="shrink-0 px-2 text-xs xl:text-sm"
        >
          <Link to="profile/add-new">განცხადების დამატება</Link>
        </Button>
      </div>
    </div>
  );
};
export default HeaderDesktopBottom;
