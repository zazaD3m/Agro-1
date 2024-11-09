import useWindowSize from "@/hooks/useWindowSize";
import { Link, Outlet } from "react-router-dom";
import BottomNavigation from "../navigation/BottomNavigation";

const AuthLayout = () => {
  const { isMobile } = useWindowSize();
  return (
    <>
      <main className="relative w-full lg:grid lg:grid-cols-2">
        <section className="mx-auto flex max-w-md flex-col px-2 sm:min-w-[26rem]">
          <Link to="/" className="mx-auto py-12">
            <img src="/logo-1.png" className="h-10" />
          </Link>
          <Outlet />
        </section>
        <section className="fixed left-1/2 top-0 hidden h-screen lg:block">
          <img
            src="/test-5.png"
            alt="Image"
            className="h-full object-cover object-left"
          />
        </section>
      </main>
      {isMobile && (
        <nav className="fixed bottom-0 left-0 z-50 h-16 w-full border-t-2 bg-white shadow-sm">
          <BottomNavigation />
        </nav>
      )}
    </>
  );
};
export default AuthLayout;
