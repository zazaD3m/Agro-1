import { Heart, Home, List, Plus, User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import MainCategoriesMobile from "./MainCategoriesMobile";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/features/user/userSlice";
import ProfileSheetMobile from "./ProfileSheetMobile";
import { useEffect, useState } from "react";

const BottomNavigation = () => {
  const [onCatalogOpen, setOnCatalogOpen] = useState(false);
  const userInfo = useSelector(selectCurrentUser);

  // useEffect(() => {
  //   // Function to log events
  //   const logEvent = (event) => {
  //     alert(String(event.type));
  //     // You can also log additional event properties if needed
  //     // console.log('Event Target:', event.target);
  //     // console.log('Event Details:', event);
  //   };

  //   // Add event listeners for all possible events
  //   const eventTypes = [
  //     "abort",
  //     "afterprint",
  //     "animationend",
  //     "animationiteration",
  //     "animationstart",
  //     "appinstalled",
  //     "auxclick",
  //     "beforeinstallprompt",
  //     "beforeprint",
  //     "beforeunload",
  //     "blur",
  //     "cancel",
  //     "canplay",
  //     "canplaythrough",
  //     "change",
  //     "click",
  //     "close",
  //     "contextmenu",
  //     "cuechange",
  //     "dblclick",
  //     "drag",
  //     "dragend",
  //     "dragenter",
  //     "dragleave",
  //     "dragover",
  //     "dragstart",
  //     "drop",
  //     "durationchange",
  //     "emptied",
  //     "ended",
  //     "error",
  //     "focus",
  //     "focusin",
  //     "focusout",
  //     "formdata",
  //     "gotpointercapture",
  //     "hashchange",
  //     "input",
  //     "invalid",
  //     "keydown",
  //     "keypress",
  //     "keyup",
  //     "languagechange",
  //     "levelchange",
  //     "load",
  //     "loadeddata",
  //     "loadedmetadata",
  //     "loadstart",
  //     "lostpointercapture",
  //     "mousedown",
  //     "mouseenter",
  //     "mouseleave",
  //     "mousemove",
  //     "mouseout",
  //     "mouseover",
  //     "mouseup",
  //     "mousewheel",
  //     "offline",
  //     "online",
  //     "pagehide",
  //     "pageshow",
  //     "paste",
  //     "pause",
  //     "play",
  //     "playing",
  //     "pointercancel",
  //     "pointerdown",
  //     "pointerenter",
  //     "pointerleave",
  //     "pointerlockchange",
  //     "pointerlockerror",
  //     "pointermove",
  //     "pointerout",
  //     "pointerover",
  //     "pointerup",
  //     "progress",
  //     "ratechange",
  //     "reset",
  //     "resize",
  //     "scroll",
  //     "securitypolicyviolation",
  //     "seeked",
  //     "seeking",
  //     "selectionchange",
  //     "selectstart",
  //     "stalled",
  //     "submit",
  //     "suspend",
  //     "timeupdate",
  //     "toggle",
  //     "touchcancel",
  //     "touchend",
  //     "touchmove",
  //     "touchstart",
  //     "transitioncancel",
  //     "transitionend",
  //     "transitionrun",
  //     "transitionstart",
  //     "unload",
  //     "volumechange",
  //     "waiting",
  //     "webkitanimationend",
  //     "webkitanimationiteration",
  //     "webkitanimationstart",
  //     "webkitfullscreenchange",
  //     "webkitfullscreenerror",
  //     "webkittransitionend",
  //     "wheel",
  //   ];

  //   eventTypes.forEach((eventType) => {
  //     window.addEventListener(eventType, logEvent);
  //   });

  //   // Clean up the event listeners when the component unmounts
  //   return () => {
  //     eventTypes.forEach((eventType) => {
  //       window.removeEventListener(eventType, logEvent);
  //     });
  //   };
  // }, []);

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
      <Sheet open={onCatalogOpen} onOpenChange={setOnCatalogOpen}>
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
          <MainCategoriesMobile setOnCatalogOpen={setOnCatalogOpen} />
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
      <Sheet>
        <SheetTrigger asChild>
          <button className="flex size-full flex-col items-center justify-center gap-1 whitespace-nowrap text-xxs font-medium transition-colors duration-200 active:bg-accent sm:text-xs md:text-sm">
            <Heart strokeWidth={1.5} />
            <span>რჩეულები</span>
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
};
export default BottomNavigation;
