import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import useWindowSize from "@/hooks/useWindowSize";
import HeroCircles from "@/pages/home/components/HeroCircles";
import Autoplay from "embla-carousel-autoplay";

const IMAGES = ["test-13.png", "test-15.png", "test-14.png"];

const HomePageHeroCarousel = ({ className }) => {
  const { isDesktop } = useWindowSize();

  return (
    <div className={cn("overflow-hidden", className)}>
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 4500,
          }),
        ]}
      >
        <CarouselContent>
          {IMAGES.map((img, i) => (
            <CarouselItem key={i}>
              <div className="flex justify-center">
                <img
                  src={img}
                  className="h-auto w-full bg-background object-contain sm:max-h-[400px] sm:w-auto 2xl:max-h-[450px]"
                />
              </div>
            </CarouselItem>
          ))}
          {isDesktop && (
            <CarouselItem>
              <HeroCircles />
            </CarouselItem>
          )}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
export default HomePageHeroCarousel;
