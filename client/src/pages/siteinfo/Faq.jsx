import { ChevronLeft } from "lucide-react";
import { Outlet, useLocation, Link } from "react-router-dom";

const Faq = () => {
  const location = useLocation();
  const crumbs = location.pathname.split("/");

  const isIndexPage = crumbs.length < 4;
  const backLink = crumbs.slice(0, -1).join("/");

  return (
    <div className="min-h-[700px] bg-accent pt-12">
      <div className="container px-2 xs:px-4 sm:px-12">
        <div className="flex items-center gap-x-8 pb-8">
          {!isIndexPage && (
            <Link
              to={backLink}
              className="flex items-center gap-x-2 opacity-70"
            >
              <ChevronLeft strokeWidth={2} />
              უკან
            </Link>
          )}
          <h2 className="text-2xl font-medium sm:text-3xl">დახმარება</h2>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
export default Faq;
