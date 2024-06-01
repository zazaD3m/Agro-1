import { cn } from "@/lib/utils";
import { Heart, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { convertToEnglish } from "@/helpers/translateString";
import FavoriteButton from "./FavoriteButton";
import CallNumberButton from "./CallNumberButton";

const ListingCard = ({ listing, isMobile }) => {
  const { id, mainCategory, subCategory, category, title } = listing;

  return (
    <div
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-md border-2 bg-background p-4 shadow-md transition-shadow hover:shadow-black/25",
        isMobile && "h-1/2 p-2 pb-3",
      )}
    >
      <Link
        className={cn(
          "mb-4 flex grow flex-col",
          isMobile && " flex-row gap-x-2",
        )}
        to={`/product/${id}/${mainCategory}${subCategory ? `/${subCategory}` : ""}/${category}/${convertToEnglish(title)}`}
      >
        <div
          className={cn(
            "w-full",
            isMobile
              ? "flex w-1/4 items-center"
              : "mb-4 aspect-[3/2] overflow-hidden rounded-md",
          )}
        >
          <img
            src={"/product_images/" + listing.img}
            className={cn(
              "border object-cover",
              isMobile ? "aspect-square rounded-md" : "size-full",
            )}
          />
        </div>
        <div className="flex grow flex-col max-sm:w-3/4">
          <h2 className="mb-1 line-clamp-2 pr-10 font-semibold sm:pr-0">
            {listing.title}
          </h2>
          <div className="mb-2 flex grow items-start gap-x-1 opacity-60">
            <MapPin size={18} strokeWidth={2} className="-ml-px" />
            <span className="text-xs font-semibold">{listing.city}</span>
          </div>
          <p className="font-normal">
            <span>₾ </span>
            {listing.price}
          </p>
        </div>
      </Link>
      <div className="flex items-center justify-between rounded-full border-2 border-action p-1 font-medium">
        <h2 className="line-clamp-1 break-words pl-2 text-sm sm:pl-1 sm:text-xs">
          {listing.author.firstName}
        </h2>
        <CallNumberButton
          phoneNumber={listing.author.phoneNumber}
          variant="carousel"
        />
      </div>
      <FavoriteButton productId={listing.id} productTitle={listing.title}>
        <button
          className={cn(
            "group absolute -right-2 -top-16 rounded-b-md border  bg-background p-1 pb-2 pl-2 pr-4 pt-4 transition-all duration-300 group-hover:-top-2 data-[isfavorite=true]:-top-2",
            isMobile && "-top-2",
          )}
        >
          <Heart
            className="text-action transition-all hover:scale-105 group-data-[isfavorite=true]:fill-action group-data-[isfavorite=true]:text-white"
            size={28}
          />
        </button>
      </FavoriteButton>
    </div>
  );
};
export default ListingCard;
