import { cn } from "@/lib/utils";
import { MapPin, Store, User } from "lucide-react";
import { Link } from "react-router-dom";
import FavoriteButton from "@/components/FavoriteButton";
import { LocationFilter, SellerFilter } from "@/data/filters-data";

const CatalogPageProductCard = ({ product, className, viewType }) => {
  return (
    <Link
      className={cn(
        "group flex rounded-md bg-background py-2 shadow-sm transition-shadow hover:shadow-black/25",
        viewType === "grid" && "flex-col",
        viewType === "list" && "h-40 flex-row sm:h-48 lg:h-56",
        className,
      )}
      to={"/product" + product.slug}
    >
      <div
        className={cn(
          "mx-2 shrink-0 overflow-hidden rounded-md",
          viewType === "grid" && "aspect-[6/5]",
          viewType === "list" && "aspect-square h-full",
        )}
      >
        <img
          src={"/product_images/" + product.img}
          className={cn("size-full rounded-md border object-cover")}
        />
      </div>
      <div
        className={cn(
          "flex grow flex-col",
          viewType === "grid" && "",
          viewType === "list" && "sm:flex-row",
        )}
      >
        <div
          className={cn(
            "textContent flex grow flex-col px-2",
            viewType === "grid" && "pb-2",
            viewType === "list" && "pl-0",
            viewType === "list" && product.description && "justify-between",
          )}
        >
          <div
            className={cn(
              "",
              viewType === "grid" && "grow pb-2 pt-1",
              viewType === "list" && "flex flex-col overflow-hidden",
            )}
          >
            <h2
              className={cn(
                "line-clamp-3 text-sm font-semibold sm:text-base",
                viewType === "grid" && "pb-2 pt-1",
                viewType === "list" && "shrink-0",
              )}
            >
              {product.title}
            </h2>
            {viewType === "list" && product.description && (
              <div className="pt-2 max-sm:hidden">
                <p className="line-clamp-3 text-xs font-light lg:text-sm">
                  {product.description}
                </p>
              </div>
            )}
          </div>
          <div
            className={cn(
              "flex shrink-0",
              viewType === "grid" && "flex-col gap-y-2",
              viewType === "list" && "flex-row gap-x-2",
              viewType === "list" && product.description && "pt-2",
            )}
          >
            <div className="flex items-start gap-x-1">
              <MapPin size={18} strokeWidth={2} className="-ml-px opacity-60" />
              <span className="text-xs font-light">
                {LocationFilter.nameMap[product.LocId]}
              </span>
            </div>
            <div className="flex items-start gap-x-1">
              {product.SellerType === 2 ? (
                <User size={18} strokeWidth={2} className="-ml-px opacity-60" />
              ) : (
                <Store
                  size={18}
                  strokeWidth={2}
                  className="-ml-px opacity-60"
                />
              )}
              <span className="truncate text-xs font-light">
                {SellerFilter.nameMap[product.SellerType]}
              </span>
            </div>
          </div>
        </div>
        <div
          className={cn(
            "flex shrink-0 items-center justify-between pt-2",
            viewType === "grid" &&
              "border-t px-2 xs:flex-col md:flex-row md:justify-between",
            viewType === "list" &&
              "flex-row pl-0 pr-2 sm:w-32 sm:flex-col sm:items-end sm:border-l lg:w-36",
          )}
        >
          <p
            className={cn(
              "font-semibold",
              viewType === "grid" && "text-center xs:pb-2 md:pb-0",
              viewType === "list" && "text-start xs:text-end",
            )}
          >
            {product.price < 50 ? (
              <span className="text-xs max-xs:truncate sm:text-sm">
                ფასი შეთანხმებით
              </span>
            ) : (
              <span className="text-sm">{product.price}.00 ₾</span>
            )}
          </p>
          <FavoriteButton
            productId={product.id}
            productTitle={product.title}
            variant="catalogPage"
          />
        </div>
      </div>
    </Link>
  );
};
export default CatalogPageProductCard;
