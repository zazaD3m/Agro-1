import { Outlet, useLocation, ScrollRestoration } from "react-router-dom";
import Header from "../navigation/Header";
import Footer from "../navigation/Footer";
import { Toaster } from "../ui/toaster";
import Breadcrumbs from "../Breadcrumbs";

const RootLayout = () => {
  const location = useLocation();

  const breadCrumbsPages = ["/catalog"];
  const shouldBreadCrumbsRender = breadCrumbsPages.some((page) =>
    location.pathname.includes(page),
  );

  return (
    <>
      <Header />
      {shouldBreadCrumbsRender ? (
        <Breadcrumbs pathname={location.pathname} />
      ) : null}
      <main className="bg-accent">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
      <ScrollRestoration />
    </>
  );
};
export default RootLayout;
