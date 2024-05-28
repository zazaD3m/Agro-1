import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { listings } from "@/constants/constants";
import {
  addToFavorites,
  removeFromFavorites,
  selectFavoriteListings,
} from "@/features/user/userSlice";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Clock, Eye, Heart, MapPin, Phone, Store, User } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const ProductPage = () => {
  const [showNumber, setShowNumber] = useState(false);
  let { productId } = useParams();
  const { toast } = useToast();
  const dispatch = useDispatch();

  const product = listings().find((listing) => listing.id == productId);
  const favoriteListings = useSelector(selectFavoriteListings);

  const isFavorite = favoriteListings.includes(product.id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(product.id));
      toast({
        title: `${product.title}, წაშლილია ფავორიტებიდან!`,
      });
    } else {
      dispatch(addToFavorites(product.id));
      toast({
        title: `${product.title}, შენახულია ფავორიტებში!`,
      });
    }
  };

  const handlePhoneNumberClick = () => {
    if (!showNumber) {
      setShowNumber(true);
    }
  };

  return (
    <div className="container px-2 py-8 lg:px-4">
      <div className="flex gap-x-4">
        <section className="w-4/12 space-y-4">
          <div className="flex flex-col gap-y-4">
            <div className="aspect-[4/3] w-full rounded-md border-2">
              <img
                className="aspect-[4/3] w-full object-contain"
                src={"/product_images/" + product.img}
              />
            </div>
            <div className="flex w-full gap-x-2">
              <div className="aspect-[4/3] w-1/4 overflow-hidden rounded-md border-2 border-action/50">
                <img
                  className="size-full object-cover"
                  src={"/product_images/" + product.img}
                />
              </div>
              <div className="aspect-[4/3] w-1/4 overflow-hidden rounded-md border-2">
                <img
                  className="size-full object-cover"
                  src={"/product_images/" + product.img}
                />
              </div>
              <div className="aspect-[4/3] w-1/4 overflow-hidden rounded-md border-2">
                <img
                  className="size-full object-cover"
                  src={"/product_images/" + product.img}
                />
              </div>
              <div className="aspect-[4/3] w-1/4 overflow-hidden rounded-md border-2">
                <img
                  className="size-full object-cover"
                  src={"/product_images/" + product.img}
                />
              </div>
            </div>
          </div>
          <ul className="flex gap-x-6 text-xs font-medium">
            <li className="flex items-center gap-x-2 ">
              <Clock strokeWidth={1.25} className="stroke size-4" />
              <span>{format(product.createdAt, "dd/MM/yyyy HH:mm")}</span>
            </li>
            <li className="flex items-center gap-x-2 ">
              <Eye strokeWidth={1.25} className="stroke size-5" />
              <span>{product.viewCount} ნახვა</span>
            </li>
          </ul>
        </section>
        <section className="w-5/12">
          <div className="mb-2 border-b pb-3">
            <h1 className="break-all text-xl font-semibold">{product.title}</h1>
          </div>
          <div className="flex w-min items-center gap-x-2 text-nowrap rounded-full bg-accent px-2 py-1 text-[10px] tracking-wider">
            <MapPin className="size-3.5" />
            <span>{product.city}</span>
          </div>
          <div className="pt-2 font-semibold tracking-wider text-primary">
            <p>{product.price}.00 ₾</p>
          </div>
          <div className="pt-4 text-sm font-light">
            <p>{product.description}</p>
          </div>
          <div className="mt-6 flex gap-x-4 border-t pt-3">
            <Button
              onClick={handlePhoneNumberClick}
              className=""
              variant="primary"
              size="lg"
            >
              <a
                href={`tel:${product.author.phoneNumber}`}
                className="flex items-center gap-x-1"
              >
                <Phone size={16} />
                <span className="">
                  {showNumber
                    ? product.author.phoneNumber
                    : `${product.author.phoneNumber.slice(0, 6)}-**-**`}
                </span>
                {!showNumber && (
                  <span className="text-[10px]">ნომრის ნახვა</span>
                )}
              </a>
            </Button>
            <Button
              variant={isFavorite ? "action" : "actionOutline"}
              className={cn(
                "size-12 border-2 p-0 duration-300",
                isFavorite && "border-0",
              )}
              onClick={handleFavoriteToggle}
            >
              <Heart />
            </Button>
          </div>
        </section>
        <section className="h-min w-3/12 rounded-md border drop-shadow-md">
          <div className="bg-accent py-4">
            <h4 className="text-center">გამყიდველის შესახებ</h4>
          </div>
          <div className="flex flex-col gap-y-2 p-4 text-xs">
            <div className="flex w-min items-center gap-x-2 text-nowrap rounded-full bg-accent px-2 py-1 text-[10px] tracking-wider">
              {product.author.role === "ფიზიკური პირი" ? (
                <User className="size-3.5" />
              ) : (
                <Store className="size-3.5" />
              )}
              <span>{product.author.role}</span>
            </div>
            <span className="text-base tracking-wider">
              {product.author.firstName}
            </span>
            <Link
              to={"/"}
              className="w-min text-nowrap opacity-60 hover:underline"
            >
              {Math.floor(Math.random() * 20) + 1} განცხადება
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
export default ProductPage;
