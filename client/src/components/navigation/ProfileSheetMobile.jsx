import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Icons } from "../icons";
import { SheetClose, SheetCloseChild } from "../ui/sheet";
import { List, LogOut, Plus, User } from "lucide-react";
import { Separator } from "../ui/separator";
import { useLogoutMutation } from "@/features/auth/authApiSlice";

const ProfileSheetMobile = ({ user }) => {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLogout = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (pathname.split("/")[1] === "account") {
      navigate("/");
    }
    logout();
  };

  return (
    <>
      <div className="mx-4 mb-8 flex items-center gap-x-4 border-b-2 border-primary pb-4">
        <Icons.userProfile />
        <h2 className="text-lg font-medium">{`${user.firstName} ${user?.lastName}`}</h2>
        <SheetClose className="static ml-auto size-10 p-2" />
      </div>
      <div className="mx-4 flex flex-col gap-y-2">
        <SheetCloseChild asChild>
          <NavLink
            to="account/add-new-product"
            className="flex w-full items-center justify-start gap-x-4 py-2 aria-[current=page]:text-action"
          >
            <Plus
              strokeWidth="1"
              className="size-8 rounded-md bg-background-green p-1.5 text-primary"
            />
            <span className="hover:text-action">განცხადების დამატება</span>
          </NavLink>
        </SheetCloseChild>
        <SheetCloseChild asChild>
          <NavLink
            to="account/my-products"
            className="flex w-full items-center justify-start gap-x-4 py-2 aria-[current=page]:text-action"
          >
            <List
              strokeWidth="1"
              className="size-8 rounded-md bg-background-green p-1.5 text-primary"
            />
            <span className="hover:text-action">ჩემი განცხადებები</span>
          </NavLink>
        </SheetCloseChild>
        <SheetCloseChild asChild>
          <NavLink
            to="account/edit"
            className="flex w-full items-center justify-start gap-x-4 py-2 aria-[current=page]:text-action"
          >
            <User
              strokeWidth="1"
              className="size-8 rounded-md bg-background-green p-1.5 text-primary"
            />
            <span className="hover:text-action">ანგარიშის რედაქტირება</span>
          </NavLink>
        </SheetCloseChild>
        <Separator />
        <SheetCloseChild asChild>
          <button
            className="flex w-full items-center justify-start gap-x-4 py-2"
            onClick={handleLogout}
          >
            <LogOut
              strokeWidth="1"
              className="size-8 rounded-md bg-background-green p-1.5 text-primary"
            />
            <span className="hover:text-action">გასვლა</span>
          </button>
        </SheetCloseChild>
      </div>
    </>
  );
};
export default ProfileSheetMobile;
