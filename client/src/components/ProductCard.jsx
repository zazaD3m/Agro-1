import { cn } from "@/lib/utils";
import { MapPin, Store, User } from "lucide-react";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";
import { LocationFilter, SellerFilter } from "@/data/filters-data";

const ProductCard = ({ product, isMobile, className }) => {
  const { slug } = product;

  return (
    <div
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-md border-2 bg-background p-4 shadow-md transition-shadow hover:shadow-black/25",
        isMobile && "h-1/2 p-2 pb-3",
        className,
      )}
    >
      <Link
        className={cn("flex grow flex-col", isMobile && "flex-row gap-x-2")}
        to={"/product" + slug}
      >
        <div
          className={cn(
            "w-full",
            isMobile
              ? "flex w-1/3 items-start"
              : "mb-2 aspect-[3/2] overflow-hidden rounded-md",
          )}
        >
          <img
            src={"/product_images/" + product.img}
            className={cn(
              "border object-cover",
              isMobile ? "aspect-square rounded-md" : "size-full",
            )}
          />
        </div>
        <div className="flex grow flex-col max-sm:w-2/3">
          <h2 className="mb-1 line-clamp-2 pr-4 font-semibold sm:line-clamp-3 sm:pr-0">
            {product.title}
          </h2>
          <div className="mb-2 flex items-end gap-x-1 opacity-60">
            <MapPin size={18} strokeWidth={2} className="-ml-px" />
            <span className="text-xs font-semibold">
              {LocationFilter.nameMap[product.LocId]}
            </span>
          </div>
          <div className="mb-2 flex items-end gap-x-1 opacity-60">
            {product.SellerType === 2 ? (
              <User size={18} strokeWidth={2} className="-ml-px" />
            ) : (
              <Store size={18} strokeWidth={2} className="-ml-px" />
            )}
            <span className="text-xs font-semibold">
              {SellerFilter.nameMap[product.SellerType]}
            </span>
          </div>
        </div>
      </Link>
      <div className="flex items-center justify-between">
        <p className="font-medium">
          {product.price < 50 ? (
            <span className="text-sm max-xs:truncate sm:text-sm">
              ფასი შეთანხმებით
            </span>
          ) : (
            <span className="font-semibold">{product.price}.00 ₾</span>
          )}
        </p>
        <FavoriteButton
          productId={product.id}
          productTitle={product.title}
          variant="carousel"
          isMobile={isMobile}
        />
      </div>
    </div>
  );
};
export default ProductCard;
