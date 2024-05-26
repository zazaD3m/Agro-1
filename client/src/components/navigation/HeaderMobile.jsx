import { Link } from "react-router-dom";
import HeaderSearch from "./HeaderSearch";
import { Separator } from "../ui/separator";

const HeaderMobile = () => {
  return (
    <>
      <div className="flex h-11 items-center justify-center px-2 py-px">
        <Link to="/">
          <span className="cursor-pointer text-2xl font-semibold text-primary">
            Agroezo
          </span>
        </Link>
      </div>
      <Separator />
      <div className="flex items-center justify-center px-2 py-2">
        <HeaderSearch />
      </div>
    </>
  );
};
export default HeaderMobile;
