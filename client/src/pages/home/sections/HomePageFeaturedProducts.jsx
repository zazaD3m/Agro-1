import ListingsCarousel from "@/components/ListingsCarousel";
import { listings } from "@/constants/constants";
import { cn } from "@/lib/utils";

const HomePageFeaturedProducts = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <ListingsCarousel listings={listings} title={"რჩეული განცხადებები"} />
    </div>
  );
};
export default HomePageFeaturedProducts;
