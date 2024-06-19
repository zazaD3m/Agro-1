import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Header from "../navigation/Header";
import Footer from "../navigation/Footer";
import { Toaster } from "../ui/toaster";
import Breadcrumbs from "../Breadcrumbs";

const RootLayout = () => {
  const { pathname } = useLocation();
  const allowedPagesForBreadCrumbs = ["catalog", "product"];
  const shouldBreadCrumbsRender = allowedPagesForBreadCrumbs.some(
    (page) => pathname.split("/")[1] === page,
  );

  return (
    <>
      <Header />
      {shouldBreadCrumbsRender ? <Breadcrumbs /> : null}
      <main className="bg-background">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
      <ScrollRestoration />
    </>
  );
};
export default RootLayout;
