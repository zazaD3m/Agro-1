import { toggleDesktopCat, toggleMobileCat } from "@/features/site/siteSlice";
import { cn } from "@/lib/utils";
import { AlignLeft } from "lucide-react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const HomePageCategoryCard = ({
  id,
  link,
  name,
  icon,
  isMobile,
  isAllCategories,
}) => {
  const dispatch = useDispatch();
  const handleCatOpen = () => {
    if (!isMobile) {
      dispatch(toggleDesktopCat());
    } else {
      dispatch(toggleMobileCat());
    }
  };

  return isAllCategories ? (
    <button
      onClick={handleCatOpen}
      className={cn(
        "group flex size-full flex-col gap-y-2 rounded-md border bg-background p-4 shadow-md transition-shadow hover:shadow-black/25",
      )}
    >
      <AlignLeft strokeWidth={1.75} className="-ml-1 -mt-1 size-10" />
      <h2 className="break-words text-start text-xs font-semibold tracking-wide sm:text-sm">
        ყველა <br /> კატეგორია
      </h2>
    </button>
  ) : (
    <Link
      to={`catalog/${id}/${link}`}
      className={cn(
        "group relative block size-full overflow-hidden rounded-md border bg-background p-2 shadow-md transition-all hover:shadow-black/25",
      )}
    >
      <h2 className="break-words text-xs font-semibold tracking-wide sm:text-sm">
        {name}
      </h2>
      <div className="absolute bottom-1 right-1">
        <img
          src={icon}
          className="size-10 transition-all group-hover:scale-110"
        />
      </div>
    </Link>
  );
};
export default HomePageCategoryCard;
