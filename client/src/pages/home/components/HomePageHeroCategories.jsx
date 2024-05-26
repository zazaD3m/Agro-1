import { MAIN_CATEGORIES } from "@/components/navigation/categories-data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useWindowSize from "@/hooks/useWindowSize";
import { cn } from "@/lib/utils";
import HomePageCategoryCard from "./HomePageCategoryCard";

const HomePageHeroCategories = () => {
  const { width } = useWindowSize();
  const isMobile = width < 640 || false;

  return (
    <div className="group/main mt-8">
      <Carousel opts={{ slidesToScroll: 2, dragFree: true }}>
        <div className="mb-6 flex items-center justify-between border-b-2 border-primary-light pb-1">
          <h2 className="text-lg font-semibold text-black sm:text-xl">
            {isMobile ? "ძებნა კატეგორიით" : "ძებნა კატეგორიის მიხედვით"}
          </h2>
          <CarouselPrevious className="ml-auto mr-2 bg-transparent" />
          <CarouselNext className="bg-transparent" />
        </div>
        <CarouselContent className="-ml-4">
          <CarouselItem
            className={cn(
              "basis-1/5 py-1 md:basis-1/6 lg:basis-[13%]",
              isMobile && "basis-2/5",
            )}
          >
            <HomePageCategoryCard isMobile={isMobile} isAllCategories={true} />
          </CarouselItem>
          {MAIN_CATEGORIES.map((category, i) => (
            <CarouselItem
              key={i}
              className={cn(
                "basis-1/4 py-1 md:basis-1/5 lg:basis-[15%]",
                isMobile && "basis-[45%]",
              )}
            >
              <HomePageCategoryCard isMobile={isMobile} category={category} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
export default HomePageHeroCategories;
