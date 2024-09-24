import { cn } from "@/lib/utils";
import HomePageHeroCarousel from "../components/HomePageHeroCarousel";
import HomePageHeroCategories from "../components/HomePageHeroCategories";

const HomePageHero = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <div className="lg:flex lg:flex-row lg:gap-8">
        <HomePageHeroCarousel />
      </div>
      <HomePageHeroCategories />
    </div>
  );
};
export default HomePageHero;
