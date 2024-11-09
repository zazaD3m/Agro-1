import FullSizeLoader from "@/components/FullSizeLoader";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useGetMyProductsQuery } from "@/features/product/productApiSlice";
import useUserInfo from "@/hooks/useUserInfo";
import { cn } from "@/lib/utils";
import { FileArchive, FileCheck, Files } from "lucide-react";
import { useEffect } from "react";
import { Link, Navigate, NavLink, Outlet, useLocation } from "react-router-dom";

const MyProductsPage = () => {
  const { userInfo } = useUserInfo();
  const { toast } = useToast();
  const { pathname, state: redirectState } = useLocation();
  const currRoute =
    pathname.split("/")[3] === "active"
      ? "active"
      : pathname.split("/")[3] === "archive"
        ? "archive"
        : "root";
  const isRootRoute = currRoute === "root";

  useEffect(() => {
    if (redirectState) {
      if (redirectState.message === "new product added") {
        toast({
          title: "განცხადება დამატებულია!",
        });
      }
      if (redirectState.message === "no free slots remaining") {
        toast({
          title: "თქვენი უფასო განცხადებების ლიმიტი ამოიწურა!",
          variant: "destructive",
        });
      }
    }
  }, [redirectState]);

  const { data, isLoading, isSuccess } = useGetMyProductsQuery();

  return (
    <div className="w-full animate-fadeIn duration-300 lg:max-w-[768px]">
      <div className="pb-8">
        <h2 className="text-xl font-semibold max-sm:pb-2">ჩემი განცხადებები</h2>
        <span className="flex w-min items-center gap-x-1 text-nowrap rounded-md border bg-background px-3 py-2 text-xs sm:hidden">
          <Files
            className={cn(
              "text-action",
              userInfo.freeSlots === 0 && "text-destructive",
            )}
          />
          უფასო ლიმიტი: {userInfo.freeSlots}
        </span>
      </div>
      <div className="mb-4 flex gap-x-4 rounded-md border bg-background p-2 shadow-md lg:p-4">
        <NavLink
          to="active"
          className="group flex items-center gap-x-1 rounded-md border bg-background px-3 py-2 text-sm opacity-60 transition-all aria-[current=page]:border-primary-light aria-[current=page]:opacity-100"
        >
          <FileCheck className="transition-all group-aria-[current=page]:text-primary-light" />
          <span>აქტიური: {isSuccess ? data.products.length : ""}</span>
        </NavLink>
        <NavLink
          to="archive"
          className="group flex items-center gap-x-1 rounded-md border bg-background px-3 py-2 text-sm opacity-60 transition-all aria-[current=page]:border-primary-light aria-[current=page]:opacity-100"
        >
          <FileArchive className="transition-all group-aria-[current=page]:text-primary-light" />
          არქივი: {isSuccess ? data.archivedProducts.length : ""}
        </NavLink>
        <span className="ml-auto flex items-center gap-x-1 rounded-md border bg-background px-3 py-2 text-sm max-sm:hidden">
          <Files
            className={cn(
              "text-action",
              userInfo.freeSlots === 0 && "text-destructive",
            )}
          />
          უფასო ლიმიტი: {userInfo.freeSlots}
        </span>
      </div>
      <div
        className={cn(
          "flex min-h-96 items-center justify-center rounded-md border bg-background p-2 shadow-md lg:p-4",
          isSuccess && !isRootRoute && "min-h-0 items-start justify-start",
        )}
      >
        {isLoading && <FullSizeLoader noText />}
        {isSuccess && isRootRoute && data.products.length > 0 && (
          <Navigate to="active" replace />
        )}
        {isSuccess && isRootRoute && data.products.length === 0 && (
          <div className="flex w-full flex-col items-center justify-center space-y-4">
            <h2 className="text-center font-medium">
              შენ არ გაქვს განცხადებები
            </h2>
            <p className="text-center text-sm font-light">
              განცხადების დამატების შემდეგ შეგეძლება მართო იგი ამ გვერდიდან
            </p>
            <Button asChild size="lg">
              <Link to="/account/add-new-product">განცხადების დამატება</Link>
            </Button>
          </div>
        )}
        {isSuccess && !isRootRoute && (
          <Outlet
            context={{
              products:
                currRoute === "active" ? data.products : data.archivedProducts,
            }}
          />
        )}
      </div>
    </div>
  );
};
export default MyProductsPage;
