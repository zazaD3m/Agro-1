import { Link } from "react-router-dom";
import HeaderSearch from "./HeaderSearch";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetClose,
  SheetCloseChild,
  SheetContent,
  SheetTrigger,
} from "../ui/sheet";
import { AlignJustify } from "lucide-react";
import ColorTester from "../ColorTester";
import { useState } from "react";
import { Button } from "../ui/button";

const HeaderMobile = () => {
  const [showColor, setShowColor] = useState(false);
  const showColors = () => {
    setShowColor(true);
  };
  const hideColors = () => {
    setShowColor(false);
  };

  return (
    <>
      <div className="flex h-11 items-center justify-between pl-2 pr-4">
        <Link to="/">
          <img src="/AGROEZO.GE (2).png" className="h-9" />
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <button className="flex items-center justify-center active:bg-accent">
              <AlignJustify strokeWidth={1} size={32} />
            </button>
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-y-3 p-4">
            <h5 className="pb-4 font-extralight">მენიუ</h5>
            <SheetCloseChild asChild>
              <Link to="about-us">ჩვენ შესახებ</Link>
            </SheetCloseChild>
            <SheetCloseChild asChild>
              <Button to="about-us" onClick={showColors}>
                ფერის შეცვლა
              </Button>
            </SheetCloseChild>
            <SheetCloseChild asChild>
              <Link to="info/faq">დახმარება</Link>
            </SheetCloseChild>
            <SheetCloseChild asChild>
              <Link to="info/contact">დაგვიკავშირდით</Link>
            </SheetCloseChild>
            <SheetCloseChild asChild>
              <Link to="blog">ბლოგი</Link>
            </SheetCloseChild>
            <SheetClose className="right-3 top-3 size-10 rounded-full bg-accent-dark p-2" />
          </SheetContent>
        </Sheet>
        <ColorTester hidden={showColor} hideColors={hideColors} />
      </div>
      <Separator />
      <div className="flex items-center justify-center px-2 py-2">
        <HeaderSearch />
      </div>
    </>
  );
};
export default HeaderMobile;
