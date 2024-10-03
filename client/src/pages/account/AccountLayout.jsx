import useWindowSize from "@/hooks/useWindowSize";
import { Outlet } from "react-router-dom";
import AccountNavigation from "./components/AccountNavigation";

const AccountLayout = () => {
  const { isDesktop } = useWindowSize();
  return (
    <div className="bg-accent-dark pb-12 pt-4 lg:pt-6">
      <div className="container flex px-2 sm:px-4 lg:gap-x-8">
        {isDesktop && (
          <aside className="h-min w-min shrink-0 rounded-md bg-background shadow-sm">
            <AccountNavigation />
          </aside>
        )}
        <Outlet />
      </div>
    </div>
  );
};
export default AccountLayout;