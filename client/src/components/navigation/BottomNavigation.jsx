import { Heart, Home, List, Plus, User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import MainCategoriesMobile from "./MainCategoriesMobile";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "@/features/user/userSlice";
import ProfileSheetMobile from "./ProfileSheetMobile";
import { memo, useState } from "react";
import { selectMobileCat, toggleMobileCat } from "@/features/site/siteSlice";

const BottomNavigation = memo(() => {
  const mobileCat = useSelector(selectMobileCat);
  const [onFavoritesOpen, setOnFavoritesOpen] = useState(false);
  const userInfo = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

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
          <button className="flex size-full flex-col items-center justify-center gap-1 whitespace-nowrap text-xxs font-medium transition-colors duration-200 active:bg-accent sm:text-xs md:text-sm">
            <List strokeWidth={1.5} />
            <span>კატალოგი</span>
          </button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-full max-h-screen py-4">
          <h2 className="mx-4 border-b-2 border-primary pb-4 text-lg font-medium">
            კატეგორიები
          </h2>
          <MainCategoriesMobile setOnFavoritesOpen={setOnFavoritesOpen} />
          <SheetClose className="right-3 top-3 size-10 p-2" />
        </SheetContent>
      </Sheet>
      <Link
        to="account/add-new-product"
        className="flex h-full flex-col items-center justify-center gap-1 whitespace-nowrap text-xxs font-medium transition-colors duration-200 active:bg-accent sm:text-xs md:text-sm"
      >
        <div className="absolute -top-5 flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Plus strokeWidth={1.5} size={30} className="animate-pulse" />
        </div>
        <span className="size-6" />
        <span>დამატება</span>
      </Link>
      <Sheet open={onFavoritesOpen} onOpenChange={setOnFavoritesOpen}>
        <SheetTrigger asChild>
          <button className="flex size-full flex-col items-center justify-center gap-1 whitespace-nowrap text-xxs font-medium transition-colors duration-200 active:bg-accent sm:text-xs md:text-sm">
            <Heart strokeWidth={1.5} />
            <span>შენახული</span>
          </button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-full max-h-screen py-4">
          <h2 className="mx-4 border-b-2 border-primary pb-4 text-lg font-medium">
            შენახული განცხადებები
          </h2>
          <SheetClose className="right-3 top-3 size-10 p-2" />
        </SheetContent>
      </Sheet>
      {userInfo ? (
        <Sheet>
          <SheetTrigger asChild>
            <button className="flex size-full flex-col items-center justify-center gap-1 whitespace-nowrap text-xxs font-medium transition-colors duration-200 active:bg-accent sm:text-xs md:text-sm">
              <User strokeWidth={1.5} />
              <span>პროფილი</span>
            </button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-auto max-h-screen py-4">
            <ProfileSheetMobile user={userInfo} />
          </SheetContent>
        </Sheet>
      ) : (
        <Link
          to="auth/login"
          className="flex size-full flex-col items-center justify-center gap-1 whitespace-nowrap text-xxs font-medium transition-colors duration-200 active:bg-accent aria-[current=page]:text-primary sm:text-xs md:text-sm"
        >
          <User strokeWidth={1.5} />
          <span>შესვლა</span>
        </Link>
      )}
    </nav>
  );
});
BottomNavigation.displayName = "BottomNavigation";
export default BottomNavigation;
