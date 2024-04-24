import { Outlet } from "react-router-dom";
import Header from "../navigation/Header";
import { Toaster } from "../ui/toaster";
import Breadcrumbs from "../Breadcrumbs";

const RootLayout = () => {
  return (
    <>
      <Header />
      {/* <Breadcrumbs /> */}
      <main className="bg-accent pb-16">
        <Outlet />
      </main>
      <Toaster />
    </>
  );
};
export default RootLayout;
