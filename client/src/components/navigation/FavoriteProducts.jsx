import { products } from "@/constants/constants";
import { LocationFilter, SellerFilter } from "@/data/filters-data";
import {
  removeFromFavorites,
  selectFavoriteProducts,
} from "@/features/user/userSlice";
import { MapPin, Store, Trash2, User } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SheetCloseChild } from "../ui/sheet";
import { Button } from "../ui/button";

const FavoriteProductCard = ({ l }) => {
  const dispatch = useDispatch();
  return (
    <SheetCloseChild asChild>
      <Link
        className="group flex h-40 flex-row rounded-md border-2 bg-background py-2 shadow-sm transition-shadow hover:shadow-black/25"
        to={"/product" + l.slug}
      >
        <div className="mx-2 aspect-square shrink-0 overflow-hidden rounded-md">
          <img
            src={"/product_images/" + l.img}
            className="size-full rounded-md border object-cover"
          />
        </div>
        <div className="relative flex size-full flex-col justify-between">
          <div className="pr-2">
            <h2 className="line-clamp-3 font-semibold">{l.title}</h2>
            <div className="flex items-start gap-x-1 py-1">
              <MapPin size={18} strokeWidth={2} className="-ml-px opacity-60" />
              <span className="text-xs font-light">
                {LocationFilter.nameMap[l.LocId]}
              </span>
            </div>
            <div className="flex items-start gap-x-1">
              {l.SellerType === 2 ? (
                <User size={18} strokeWidth={2} className="-ml-px opacity-60" />
              ) : (
                <Store
                  size={18}
                  strokeWidth={2}
                  className="-ml-px opacity-60"
                />
              )}
              <span className="text-xs font-light">
                {SellerFilter.nameMap[l.SellerType]}
              </span>
            </div>
          </div>
          <p className="text-sm font-semibold">
            {l.price < 50 ? "ფასი შეთანხმებით" : l.price + ".00 ₾"}
          </p>
          <Button
            size="icon"
            variant="ghost"
            className="absolute -bottom-3 -right-1 m-2 size-10 rounded-full bg-accent text-destructive/50 hover:bg-accent-dark hover:text-destructive/80"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              dispatch(removeFromFavorites(l.id));
            }}
          >
            <Trash2 size={22} />
          </Button>
        </div>
      </Link>
    </SheetCloseChild>
  );
};

const FavoriteProducts = () => {
  const productIds = useSelector(selectFavoriteProducts);

  return productIds.length ? (
    <div className="h-full pb-10 pt-2 lg:pb-8">
      <div className="h-full space-y-4 overflow-auto pr-2">
        {productIds
          .map((id) => {
            return products.find((product) => product.id === id);
          })
          .map((l) => (
            <FavoriteProductCard key={l.id} l={l} />
          ))}
      </div>
    </div>
  ) : null;
};
export default FavoriteProducts;
