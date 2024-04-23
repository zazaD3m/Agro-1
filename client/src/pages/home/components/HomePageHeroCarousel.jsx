import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const HomePageHeroCarousel = () => {
  return (
    <div className="overflow-hidden rounded-b-md">
      <Carousel
        className=""
        opts={{ loop: true }}
        // plugins={[
        //   Autoplay({
        //     delay: 5000,
        //   }),
        // ]}
      >
        <CarouselContent className="-mr-4">
          <CarouselItem className="pl-0">
            <div className="">
              <img
                src="hero-1.webp"
                className="h-[450px] w-full object-cover"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="pr-4">
            <div className="">
              <img
                src="hero-2.webp"
                className="h-[450px] w-full object-cover"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
export default HomePageHeroCarousel;
