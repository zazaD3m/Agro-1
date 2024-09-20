import { Icons } from "@/components/icons";
import { selectCurrentUser } from "@/features/user/userSlice";
import { Plus, ScrollText, User } from "lucide-react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const AccountNavigationItem = ({ icon, text, link }) => {
  return (
    <NavLink
      to={link}
      className="group flex w-full gap-x-2 border-action py-3 pl-2 pr-4 font-light hover:bg-accent hover:text-action aria-[current=page]:border-l-4 aria-[current=page]:bg-accent aria-[current=page]:pl-1 aria-[current=page]:text-action"
    >
      <span className="ml-2 rounded-md bg-accent-dark p-1.5">{icon}</span>
      <span className="text-nowrap pt-0.5 text-black">{text}</span>
    </NavLink>
  );
};

const AccountNavigation = () => {
  const user = useSelector(selectCurrentUser);
  return (
    <div className="py-4">
      <div className="flex items-center justify-center gap-x-2 pb-4">
        <span className="shrink-0">
          <Icons.userProfile />
        </span>
        {user.fullName && (
          <p className="text-nowrap font-semibold">{user.fullName}</p>
        )}
      </div>
      {[
        {
          text: "განცხადების დამატება",
          link: "add-new-product",
          icon: <Plus size={18} />,
        },
        {
          text: "ჩემი განცხადებები",
          link: "my-products",
          icon: <ScrollText size={18} />,
        },
        {
          text: "ანგარიშის რედაქტირება",
          link: "edit",
          icon: <User size={18} />,
        },
      ].map((item, i) => (
        <AccountNavigationItem
          text={item.text}
          link={item.link}
          icon={item.icon}
          key={i}
        />
      ))}
    </div>
  );
};
export default AccountNavigation;
