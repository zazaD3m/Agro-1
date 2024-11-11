import { Link, useLocation, useNavigate } from "react-router-dom";
import HeaderSearch from "./HeaderSearch";
import { Button } from "../ui/button";
import CategoriesDesktopWrapper from "./CategoriesDesktopWrapper";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/features/user/userSlice";
import { Heart, LogOut, ScrollText, Settings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { Icons } from "../icons";
import { useLogoutMutation } from "@/features/auth/authApiSlice";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { memo } from "react";
import FavoriteProducts from "./FavoriteProducts";

const HeaderDesktopBottom = memo(() => {
  const userInfo = useSelector(selectCurrentUser);
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLogout = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (pathname.split("/")[1] === "account") {
      navigate("/");
    }
    logout();
  };

  return (
    <div className="container flex h-20 gap-x-4 px-4 xl:gap-x-8">
      <div className="flex grow gap-x-4 xl:gap-x-8">
        <div className="flex items-center">
          <Link to="/" className="-translate-y-1 cursor-pointer">
            <img src="/logo-f.png" className="h-9" />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <CategoriesDesktopWrapper />
        </div>
        <div className="flex grow items-center justify-center">
          <HeaderSearch />
        </div>
      </div>
      <div className="flex items-center justify-end gap-x-4 xl:gap-x-8">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="relative size-12 shrink-0 rounded-full bg-background-green p-0 text-action data-[state=open]:border-2 data-[state=open]:border-primary"
            >
              <Heart />
            </Button>
          </SheetTrigger>
          <SheetContent className="max-w-[400px] p-6 pr-0">
            <h2 className="mr-6 cursor-default border-b-2 border-primary pb-2 text-lg">
              შენახული განცხადებები
            </h2>
            <SheetClose />
            <FavoriteProducts />
          </SheetContent>
        </Sheet>
        {userInfo ? (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="size-12 shrink-0 rounded-full p-0 hover:bg-background data-[state=open]:border-2 data-[state=open]:border-primary"
                >
                  <Icons.userProfile />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 p-0 pb-1">
                <DropdownMenuItem
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="mb-4 cursor-auto justify-center bg-accent p-4 text-lg"
                >
                  <span className="">{`${userInfo.firstName} ${userInfo?.lastName}`}</span>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="account/my-products"
                    className="flex w-full items-center justify-start gap-x-4 px-4 py-2"
                  >
                    <ScrollText size="16" strokeWidth="1.5" />
                    <span>ჩემი განცხადებები</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="account/edit/info"
                    className="flex w-full items-center justify-start gap-x-4 px-4 py-2"
                  >
                    <Settings size="16" strokeWidth="1.5" />
                    <span>ანგარიშის რედაქტირება</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="mt-4 h-0.5" />
                <DropdownMenuItem>
                  <button
                    className="flex w-full items-center justify-start gap-x-4 px-4 py-4"
                    onClick={handleLogout}
                  >
                    <LogOut size="16" strokeWidth="1.5" />
                    <span>გასვლა</span>
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <Button
            asChild
            size="lg"
            className="shrink-0 gap-x-2 px-2 text-xs xl:text-sm"
          >
            <Link to="auth/login">შესვლა / რეგისტრაცია</Link>
          </Button>
        )}
        <Button
          asChild
          size="lg"
          variant="primary"
          className="shrink-0 px-2 text-xs xl:text-sm"
        >
          <Link to="account/add-new-product">განცხადების დამატება</Link>
        </Button>
      </div>
    </div>
  );
});

HeaderDesktopBottom.displayName = "HeaderDesktopBottom";
export default HeaderDesktopBottom;
