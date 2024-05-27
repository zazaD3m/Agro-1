import ListingsCarousel from "@/components/ListingsCarousel";
import { listings } from "@/constants/constants";
import { cn } from "@/lib/utils";

const HomePageNewProducts = ({ className }) => {
  const newListings = listings();
  return (
    <div className={cn("", className)}>
      <ListingsCarousel listings={newListings} title={"ახალი განცხადებები"} />
    </div>
  );
};
export default HomePageNewProducts;
