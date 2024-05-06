import {
  addToFavorites,
  removeFromFavorites,
  selectFavoriteListings,
} from "@/features/user/userSlice";
import { cn } from "@/lib/utils";
import { Heart, MapPin } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ListingCard = ({ listing, isMobile }) => {
  const dispatch = useDispatch();
  const favoriteListings = useSelector(selectFavoriteListings);
  const isFavorite = favoriteListings.includes(listing.id);

  const handleFavoriteToggle = () => {
    const { id } = listing;
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites(id));
    }
  };

  return (
    <div
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-md border-2 p-4 shadow-md transition-shadow hover:shadow-black/25",
        isMobile && "h-1/2 p-2 pb-3",
      )}
    >
      <Link className={cn("mb-4 grow", isMobile && "flex gap-x-2")} to={"/"}>
        <div
          className={cn(
            "w-full",
            isMobile
              ? "flex w-3/12 items-center"
              : "mb-4 aspect-[3/2] overflow-hidden rounded-md",
          )}
        >
          <img
            src={"hero-sidebar-1.webp"}
            className={cn(
              "object-cover",
              isMobile ? "aspect-square rounded-md" : "size-full",
            )}
          />
        </div>
        <div className={isMobile && "w-9/12"}>
          <h2 className="mb-1 line-clamp-2 pr-9 font-semibold sm:text-lg">
            {listing.title}
          </h2>
          <div className="mb-2 flex items-center gap-x-1 opacity-60">
            <MapPin size={18} strokeWidth={2} className="-ml-px" />
            <span className="text-sm font-semibold">{listing.city}</span>
          </div>
          {/* <h2 className="">{listing.review}</h2> */}
          <p className="line-clamp-2 text-sm font-normal sm:line-clamp-3">
            {listing.description}
          </p>
        </div>
      </Link>
      <div className="flex items-center justify-between rounded-full border-2 border-action p-1 font-medium">
        <h2 className="pl-2 text-sm sm:pl-1 sm:text-xs">
          {listing.author.firstName}
        </h2>
        <button className="rounded-full bg-primary/90 p-2 text-sm text-primary-foreground">
          <a href={`tel:${listing.author.phoneNumber}`}>
            {listing.author.phoneNumber}
          </a>
        </button>
      </div>
      <button
        className={cn(
          "absolute -right-2  rounded-b-md border bg-background  p-1 pb-2 pl-2 pr-4 pt-4 transition-all duration-300 group-hover:-top-2",
          isFavorite ? "-top-2" : "-top-16",
          isMobile && "-top-2",
        )}
        onClick={handleFavoriteToggle}
      >
        <Heart
          className={cn(
            "text-action transition-all hover:scale-105",
            isFavorite && "fill-action text-white",
          )}
          size={28}
        />
      </button>
    </div>
  );
};
export default ListingCard;
