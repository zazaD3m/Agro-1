import CallNumberButton from "@/components/CallNumberButton";
import FavoriteButton from "@/components/FavoriteButton";
import { products } from "@/constants/constants";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Clock, Eye, MapPin, Store, User } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import ImageGallery from "../components/ImageGallery";
import { LocationFilter, SellerFilter } from "@/data/filters-data";

const ProductPageProductDetails = ({ className }) => {
  let { productId } = useParams();

  const product = products.find((product) => product.id == productId);

  return (
    <section
      className={cn("flex flex-col gap-x-4 gap-y-4 lg:flex-row", className)}
    >
      <section className="w-full space-y-4 lg:w-4/12">
        <ImageGallery images={product.images} title={product.title} />
        <ul className="flex gap-x-6 text-xs font-medium">
          <li className="flex items-center gap-x-2">
            <Clock strokeWidth={1.25} className="stroke size-4" />
            <span>{format(product.createdAt, "dd/MM/yyyy HH:mm")}</span>
          </li>
          <li className="flex items-center gap-x-2">
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
          <span>{LocationFilter.nameMap[product.LocId]}</span>
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
          <FavoriteButton
            productId={product.id}
            productTitle={product.title}
            variant="productPage"
          />
        </div>
      </section>
      <section className="h-min w-full rounded-md border drop-shadow-md lg:w-3/12">
        <div className="bg-accent py-4">
          <h4 className="text-center">გამყიდველის შესახებ</h4>
        </div>
        <div className="flex flex-col gap-y-2 p-4 text-xs">
          <div className="flex w-min items-center gap-x-2 text-nowrap rounded-full bg-accent px-2 py-1 text-[10px] tracking-wider">
            {product.SellerType === 2 ? (
              <User className="size-3.5" />
            ) : (
              <Store className="size-3.5" />
            )}
            <span>{SellerFilter.nameMap[product.SellerType]}</span>
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
