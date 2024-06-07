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
import { MAIN_CATEGORIES } from "@/data/categories";

const HomePageHeroCategories = () => {
  const { width } = useWindowSize();
  const isMobile = width < 1024 || false;

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
            className={"max-w-40 basis-2/5 py-1 sm:basis-1/4 lg:basis-[13%]"}
          >
            <HomePageCategoryCard isMobile={isMobile} isAllCategories={true} />
          </CarouselItem>
          {MAIN_CATEGORIES.map((mainCat) => (
            <CarouselItem
              key={mainCat.id}
              className={cn(
                "max-w-48 basis-[45%] py-1 md:basis-1/5 lg:basis-[15%]",
              )}
            >
              <HomePageCategoryCard
                isMobile={isMobile}
                id={mainCat.id}
                name={mainCat.name}
                link={mainCat.link}
                icon={mainCat.icon}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
export default HomePageHeroCategories;
