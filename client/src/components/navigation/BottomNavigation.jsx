import { Home, List, Plus, Star, User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import MainCategoriesMobile from "./MainCategoriesMobile";

const BottomNavigation = () => {
  return (
    <nav className="relative grid h-full grid-cols-5 text-[#717171]">
      <NavLink
        to="/"
        end
        className="flex size-full flex-col items-center justify-center gap-1 whitespace-nowrap text-xs font-medium transition-colors duration-200 active:bg-accent aria-[current=page]:text-primary"
      >
        <Home strokeWidth={1.5} />
        <span>მთავარი</span>
      </NavLink>
      <Sheet>
        <SheetTrigger asChild>
          <button className="flex size-full flex-col items-center justify-center gap-1 whitespace-nowrap text-xs font-medium transition-colors duration-200 active:bg-accent">
            <List strokeWidth={1.5} />
            <span>კატალოგი</span>
          </button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-full max-h-screen py-4">
          <h2 className="mx-4 border-b-2 border-primary pb-4 text-lg font-medium">
            კატეგორიები
          </h2>
          <MainCategoriesMobile />
          <SheetClose className="right-3 top-3 size-10 p-2" />
        </SheetContent>
      </Sheet>
      <Link
        to="profile/add-new"
        className="flex h-full flex-col items-center justify-center gap-1 whitespace-nowrap text-xs font-medium transition-colors duration-200 active:bg-accent"
      >
        <div className="absolute -top-5 flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Plus strokeWidth={1.5} size={30} className="animate-pulse" />
        </div>
        <span className="size-6" />
        <span>დამატება</span>
      </Link>
      <NavLink
        to="profile/favorites"
        end
        className="flex size-full flex-col items-center justify-center gap-1 whitespace-nowrap text-xs font-medium transition-colors duration-200 active:bg-accent aria-[current=page]:text-primary"
      >
        <Star strokeWidth={1.5} />
        <span>ფავორიტები</span>
      </NavLink>
      <Link
        to="auth/login"
        className="flex size-full flex-col items-center justify-center gap-1 whitespace-nowrap text-xs font-medium transition-colors duration-200 active:bg-accent aria-[current=page]:text-primary"
      >
        <User strokeWidth={1.5} />
        <span>შესვლა</span>
      </Link>
    </nav>
  );
};
export default BottomNavigation;
