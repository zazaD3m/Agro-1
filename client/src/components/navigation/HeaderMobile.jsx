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

const HeaderMobile = () => {
  return (
    <>
      <div className="flex h-11 items-center justify-between px-4 py-px">
        <Link to="/">
          <span className="cursor-pointer text-2xl font-semibold text-primary">
            Agroezo
          </span>
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
      </div>
      <Separator />
      <div className="flex items-center justify-center px-2 py-2">
        <HeaderSearch />
      </div>
    </>
  );
};
export default HeaderMobile;
