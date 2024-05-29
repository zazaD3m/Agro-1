import ListingsCarousel from "@/components/ListingsCarousel";
import { listings } from "@/constants/constants";
import { cn } from "@/lib/utils";

const ProductPageSimilarProducts = ({ className }) => {
  const newListings = listings();

  return (
    <div className={cn("", className)}>
      <ListingsCarousel
        listings={newListings}
        title={"მსგავსი პროდუქცია"}
        showAllListings={false}
      />
    </div>
  );
};
export default ProductPageSimilarProducts;
