import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../navigation/Header";
import Footer from "../navigation/Footer";
import { Toaster } from "../ui/toaster";
import Breadcrumbs from "../Breadcrumbs";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Breadcrumbs />
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
