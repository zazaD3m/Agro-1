import { Home, List, Plus, Star, User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const NavItems = [
  {
    type: "regular",
    link: "/",
    icon: <Home strokeWidth={1.5} />,
    text: "მთავარი",
  },
  {
    type: "regular",
    link: "/catalog",
    icon: <List strokeWidth={1.5} />,
    text: "კატალოგი",
  },
  {
    type: "addNew",
    link: "/addnew",
    icon: <Plus strokeWidth={1.5} size={30} className="animate-pulse" />,
    text: "დამატება",
  },
  {
    type: "regular",
    link: "/favorites",
    icon: <Star strokeWidth={1.5} />,
    text: "ფავორიტები",
  },
  {
    type: "regular",
    link: "/auth/login",
    icon: <User strokeWidth={1.5} />,
    text: "შესვლა",
  },
];

const BottomNavigation = () => {
  return (
    <ul className="relative grid h-full grid-cols-5 text-[#717171]">
      {NavItems.map((item) =>
        item.type === "regular" ? (
          <li key={item.text}>
            <NavLink
              to={item.link}
              end
              className="flex size-full flex-col items-center justify-center gap-1 whitespace-nowrap text-xs font-medium transition-colors duration-200 active:bg-accent aria-[current=page]:text-primary"
            >
              {item.icon}
              {item.text}
            </NavLink>
          </li>
        ) : (
          <li key={item.text}>
            <Link
              to={item.link}
              className="flex h-full flex-col items-center justify-center gap-1 whitespace-nowrap text-xs font-medium transition-colors duration-200 active:bg-accent"
            >
              <div className="absolute -top-5 flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                {item.icon}
              </div>
              <span className="size-6" />
              დამატება
            </Link>
          </li>
        ),
      )}
      {/* {["მთავარი", "კატალოგი"].map((item) => (
        <Button
          asChild
          key={item}
          variant="ghost"
          className="flex size-full flex-col items-center justify-center text-xs aria-[current=page]:text-primary"
        >
          <NavLink to="/" className="">
            <Home strokeWidth={1.5} />
            {item}
          </NavLink>
        </Button>
      ))}
      <li className="flex flex-col items-center justify-center pt-6 text-xs">
        <div className="absolute -top-5 flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Plus size={34} strokeWidth={1.5} />
        </div>
        დამატება
      </li>
      {["ფავორიტები", "შესვლა"].map((item) => (
        <li
          key={item}
          className="flex flex-col items-center justify-center text-xs"
        >
          <Home strokeWidth={1.5} />
          {item}
        </li>
      ))} */}
    </ul>
  );
};
export default BottomNavigation;
