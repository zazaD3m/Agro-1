import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { convertToEnglish } from "@/helpers/translateString";
import CallNumberButton from "@/components/CallNumberButton";
import FavoriteButton from "@/components/FavoriteButton";

const CatalogPageListingCard = ({ listing, isMobile, className }) => {
  const { id, mainCategory, subCategory, category, title } = listing;

  return (
    <div
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-md border-2 bg-background p-4 shadow-md transition-shadow hover:shadow-black/25",
        isMobile && "h-1/2 p-2 pb-3",
        className,
      )}
    >
      <Link
        className={cn(
          "mb-4 flex grow flex-col",
          isMobile && "flex-row gap-x-2",
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
      <FavoriteButton
        productId={listing.id}
        productTitle={listing.title}
        variant="carousel"
        isMobile={isMobile}
      />
    </div>
  );
};
export default CatalogPageListingCard;
