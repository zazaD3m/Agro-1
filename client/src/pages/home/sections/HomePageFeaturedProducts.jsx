import ListingsCarousel from "@/components/ListingsCarousel";
import { listings } from "@/constants/constants";
import { cn } from "@/lib/utils";

const HomePageFeaturedProducts = ({ className }) => {
  const newListings = listings();
  return (
    <div className={cn("", className)}>
      <ListingsCarousel listings={newListings} title={"რჩეული განცხადებები"} />
    </div>
  );
};
export default HomePageFeaturedProducts;
