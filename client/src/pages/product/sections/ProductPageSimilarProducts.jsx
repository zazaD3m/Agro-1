import ProductsCarousel from "@/components/ProductsCarousel";
import { products } from "@/constants/constants";
import { cn } from "@/lib/utils";

const ProductPageSimilarProducts = ({ className }) => {
  const newProducts = products;

  return (
    <div className={cn("", className)}>
      <ProductsCarousel
        products={newProducts}
        title={"მსგავსი პროდუქცია"}
        showAllProducts={false}
      />
    </div>
  );
};
export default ProductPageSimilarProducts;
