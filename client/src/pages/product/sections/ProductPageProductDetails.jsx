import CallNumberButton from "@/components/CallNumberButton";
import FavoriteButton from "@/components/FavoriteButton";
import { Button } from "@/components/ui/button";
import { listings } from "@/constants/constants";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Clock, Eye, Heart, MapPin, Store, User } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const ProductPageProductDetails = ({ className }) => {
  let { productId } = useParams();

  const product = listings().find((listing) => listing.id == productId);

  return (
    <section
      className={cn("flex flex-col gap-x-4 gap-y-4 lg:flex-row", className)}
    >
      <section className="w-full space-y-4 lg:w-4/12">
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
      <section className="w-full lg:flex lg:w-5/12 lg:flex-col">
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
        <div className="pt-4 text-sm font-light lg:grow">
          <p>{product.description}</p>
        </div>
        <div className="mt-6 flex gap-x-4 border-t pt-3">
          <CallNumberButton
            phoneNumber={product.author.phoneNumber}
            variant="productPage"
          />
          <FavoriteButton productId={product.id} productTitle={product.title}>
            <Button
              variant="action"
              className="size-12 shrink-0 p-0 duration-300 data-[isfavorite=false]:border-2 data-[isfavorite=false]:border-action data-[isfavorite=false]:bg-background data-[isfavorite=false]:text-action data-[isfavorite=false]:active:bg-action data-[isfavorite=false]:active:text-primary-foreground data-[isfavorite=false]:lg:hover:bg-action data-[isfavorite=false]:lg:hover:text-primary-foreground"
            >
              <Heart />
            </Button>
          </FavoriteButton>
        </div>
      </section>
      <section className="h-min w-full rounded-md border drop-shadow-md lg:w-3/12">
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
    </section>
  );
};
export default ProductPageProductDetails;
