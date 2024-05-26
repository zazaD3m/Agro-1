import ListingsCarousel from "@/components/ListingsCarousel";
import { listings } from "@/constants/constants";
import { cn } from "@/lib/utils";

const HomePageNewProducts = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <ListingsCarousel listings={listings} title={"ახალი განცხადებები"} />
    </div>
  );
};
export default HomePageNewProducts;
