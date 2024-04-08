import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import { Toaster } from "../ui/toaster";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Toaster />
    </>
  );
};
export default RootLayout;
