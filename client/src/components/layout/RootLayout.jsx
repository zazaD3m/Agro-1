import { Outlet } from "react-router-dom";
import MainNavigation from "../navigation/MainNavigation";
import { Toaster } from "../ui/toaster";
import Breadcrumbs from "../Breadcrumbs";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      {/* <Breadcrumbs /> */}
      <main className="bg-accent pb-16">
        <Outlet />
      </main>
      <Toaster />
    </>
  );
};
export default RootLayout;
