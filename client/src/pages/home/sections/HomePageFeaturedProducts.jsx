import ProductsCarousel from "@/components/ProductsCarousel";
import { products } from "@/constants/constants";
import { cn } from "@/lib/utils";

const HomePageFeaturedProducts = ({ className }) => {
  const newProducts = products;
  return (
    <div className={cn("", className)}>
      <ProductsCarousel products={newProducts} title={"რჩეული განცხადებები"} />
    </div>
  );
};
export default HomePageFeaturedProducts;
