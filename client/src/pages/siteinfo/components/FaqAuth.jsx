import { Link, Outlet, useLocation } from "react-router-dom";

const FaqAuth = () => {
  const { pathname } = useLocation();
  const crumbs = pathname.split("/");

  const isIndex = crumbs.pop() === "registracia-angarishis-martva";
  return isIndex ? (
    <>
      <h2 className="pb-8 text-lg sm:text-xl">რეგისტრაცია/ანგარიშის მართვა</h2>
      <div className="flex flex-col gap-y-4">
        <Link to="rogor-davregistrirde" className="text-blue-600">
          როგორ დავრეგისტრირდე?
        </Link>
        <Link to="rogor-davaredaqtiro-angarishi" className="text-blue-600">
          როგორ დავარედაქტირო ანგარიში?
        </Link>
        <Link to="rogor-aRvadgino-angarishi" className="text-blue-600">
          როგორ აღვადგინო ანგარიში?
        </Link>
      </div>
    </>
  ) : (
    <Outlet />
  );
};
export default FaqAuth;
