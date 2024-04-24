import { Home, List, Plus, Star, User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const BottomNavigation = () => {
  return (
    <nav className="relative grid h-full grid-cols-5 text-[#717171]">
      <NavLink
        to="/"
        end
        className="flex size-full flex-col items-center justify-center gap-1 whitespace-nowrap text-xs font-medium transition-colors duration-200 active:bg-accent aria-[current=page]:text-primary"
      >
        <Home strokeWidth={1.5} />
        <span>მთავარი</span>
      </NavLink>
      <button className="flex size-full flex-col items-center justify-center gap-1 whitespace-nowrap text-xs font-medium transition-colors duration-200 active:bg-accent">
        <List strokeWidth={1.5} />
        <span>კატალოგი</span>
      </button>
      <Link
        to="profile/add-new"
        className="flex h-full flex-col items-center justify-center gap-1 whitespace-nowrap text-xs font-medium transition-colors duration-200 active:bg-accent"
      >
        <div className="absolute -top-5 flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Plus strokeWidth={1.5} size={30} className="animate-pulse" />
        </div>
        <span className="size-6" />
        <span>დამატება</span>
      </Link>
      <NavLink
        to="profile/favorites"
        end
        className="flex size-full flex-col items-center justify-center gap-1 whitespace-nowrap text-xs font-medium transition-colors duration-200 active:bg-accent aria-[current=page]:text-primary"
      >
        <Star strokeWidth={1.5} />
        <span>ფავორიტები</span>
      </NavLink>
      <Link
        to="auth/login"
        className="flex size-full flex-col items-center justify-center gap-1 whitespace-nowrap text-xs font-medium transition-colors duration-200 active:bg-accent aria-[current=page]:text-primary"
      >
        <User strokeWidth={1.5} />
        <span>შესვლა</span>
      </Link>
    </nav>
  );
};
export default BottomNavigation;
