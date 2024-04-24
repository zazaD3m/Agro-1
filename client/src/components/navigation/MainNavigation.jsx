import useScrollDirection from "@/hooks/useScrollDirection";
import { cn } from "@/lib/utils";
import HeaderMobile from "./HeaderMobile";
import useWindowSize from "@/hooks/useWindowSize";
import BottomNavigation from "./BottomNavigation";
import HeaderDesktopTop from "./HeaderDesktopTop";
import HeaderDesktopBottom from "./HeaderDesktopBottom";
import { Separator } from "../ui/separator";

const MainNavigation = () => {
  const scrollDirection = useScrollDirection();
  const { width } = useWindowSize();

  return (
    <>
      <header
        className={cn(
          "sticky z-40 h-[109px]  bg-white shadow-md transition-all  duration-300 lg:h-[120px] lg:rounded-b-lg lg:shadow-lg",
          scrollDirection === "down"
            ? "-top-[109px] lg:-top-[120px]"
            : "-top-[45px] lg:-top-[41px]",
        )}
      >
        {width >= 1024 && (
          <>
            <HeaderDesktopTop />
            <Separator />
            <HeaderDesktopBottom />
          </>
        )}
        {width < 1024 && <HeaderMobile />}
      </header>
      {/* == mobile bottom navigation start == */}
      {width < 1024 && (
        <nav className="fixed bottom-0 left-0 z-50 h-16 w-full border-t-2 bg-white shadow-sm">
          <BottomNavigation />
        </nav>
      )}
    </>
  );
};
export default MainNavigation;
