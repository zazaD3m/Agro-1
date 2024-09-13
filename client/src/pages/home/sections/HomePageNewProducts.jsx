import ProductsCarousel from "@/components/ProductsCarousel";
import { products } from "@/constants/constants";
import { cn } from "@/lib/utils";

const HomePageNewProducts = ({ className }) => {
  const newProducts = products;
  return (
    <div className={cn("", className)}>
      <ProductsCarousel products={newProducts} title={"ახალი განცხადებები"} />
    </div>
  );
};
export default HomePageNewProducts;
