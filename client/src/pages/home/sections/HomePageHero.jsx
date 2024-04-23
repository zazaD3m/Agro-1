import { cn } from "@/lib/utils";
import HomePageHeroCarousel from "../components/HomePageHeroCarousel";

const HomePageHero = ({ className }) => {
  return (
    <section className={cn("flex flex-col gap-x-8 lg:flex-row", className)}>
      <div className="min-h-20 basis-1/4 bg-red-200"></div>
      <div className="basis-3/4">
        <HomePageHeroCarousel />
      </div>
    </section>
  );
};
export default HomePageHero;
