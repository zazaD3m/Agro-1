import { Heart, Home, List, PlusCircle, User } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import MainCategoriesMobile from "./MainCategoriesMobile";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "@/features/user/userSlice";
import ProfileSheetMobile from "./ProfileSheetMobile";
import { memo, useEffect, useState } from "react";
import {
  closeMobileCat,
  selectMobileCat,
  toggleMobileCat,
} from "@/features/site/siteSlice";
import FavoriteProducts from "./FavoriteProducts";

const BottomNavigation = memo(() => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const mobileCat = useSelector(selectMobileCat);
  const userInfo = useSelector(selectCurrentUser);
  const [onFavoritesOpen, setOnFavoritesOpen] = useState(false);

  const isCatalogPath = pathname.split("/")[1] === "catalog" ? true : false;
  const isAccountPath =
    pathname.split("/")[1] === "account"
      ? pathname.split("/")[2] !== "add-new-product"
        ? true
        : false
      : false;

  useEffect(() => {
    dispatch(closeMobileCat());
    setOnFavoritesOpen(false);
  }, [pathname]);

  return (
    <nav className="relative grid h-full grid-cols-5 text-[#717171]">
      <NavLink
        to="/"
        end
        className="flex size-full flex-col items-center justify-center gap-1 whitespace-nowrap text-xxs font-medium transition-colors duration-200 active:bg-accent aria-[current=page]:text-primary sm:text-xs md:text-sm"
      >
        <Home strokeWidth={1.5} />
        <span>მთავარი</span>
      </NavLink>
      <Sheet open={mobileCat} onOpenChange={() => dispatch(toggleMobileCat())}>
        <SheetTrigger asChild>
          <button
            className={`flex size-full flex-col items-center justify-center gap-1 whitespace-nowrap text-xxs font-medium transition-colors duration-200 active:bg-accent sm:text-xs md:text-sm ${isCatalogPath && "text-primary"}`}
          >
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
      <NavLink
        to="/account/add-new-product"
        className="flex size-full flex-col items-center justify-center gap-1 whitespace-nowrap text-xxs font-medium transition-colors duration-200 active:bg-accent aria-[current=page]:text-primary sm:text-xs md:text-sm"
      >
        <PlusCircle strokeWidth={1.5} />
        <span>დამატება</span>
      </NavLink>
      <Sheet open={onFavoritesOpen} onOpenChange={setOnFavoritesOpen}>
        <SheetTrigger asChild>
          <button className="flex size-full flex-col items-center justify-center gap-1 whitespace-nowrap text-xxs font-medium transition-colors duration-200 active:bg-accent sm:text-xs md:text-sm">
            <Heart strokeWidth={1.5} />
            <span>შენახული</span>
          </button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-full max-h-screen py-4 pl-2">
          <h2 className="ml-2 mr-4 border-b-2 border-primary pb-4 text-lg font-medium">
            შენახული განცხადებები
          </h2>
          <SheetClose className="right-3 top-3 size-10 p-2" />
          <FavoriteProducts />
        </SheetContent>
      </Sheet>
      {userInfo ? (
        <Sheet>
          <SheetTrigger asChild>
            <button
              className={`flex size-full flex-col items-center justify-center gap-1 whitespace-nowrap text-xxs font-medium transition-colors duration-200 active:bg-accent sm:text-xs md:text-sm ${isAccountPath && "text-primary"}`}
            >
              <User strokeWidth={1.5} />
              <span>პროფილი</span>
            </button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-auto max-h-screen py-4">
            <ProfileSheetMobile user={userInfo} />
          </SheetContent>
        </Sheet>
      ) : (
        <NavLink
          to="/auth"
          className="flex size-full flex-col items-center justify-center gap-1 whitespace-nowrap text-xxs font-medium transition-colors duration-200 active:bg-accent aria-[current=page]:text-primary sm:text-xs md:text-sm"
        >
          <User strokeWidth={1.5} />
          <span>შესვლა</span>
        </NavLink>
      )}
    </nav>
  );
});
BottomNavigation.displayName = "BottomNavigation";
export default BottomNavigation;
