import useWindowSize from "@/hooks/useWindowSize";
import ListingCard from "./ListingCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const ListingsCarousel = ({ listings, title }) => {
  const { width } = useWindowSize();
  const isMobile = width < 640 || false;

  return (
    <Carousel
      opts={{ align: "start", slidesToScroll: "auto", dragFree: !isMobile }}
    >
      <div className="mb-8 flex items-center justify-between border-b-2 border-primary-light pb-1">
        <h2 className="text-lg font-semibold text-black sm:text-xl">{title}</h2>
        <CarouselPrevious className="ml-auto mr-2" />
        <CarouselNext />
      </div>
      <CarouselContent className="-ml-4">
        {isMobile
          ? listings.map((listing, i) =>
              i % 2 === 0 ? (
                <CarouselItem
                  key={i}
                  className="mb-4 basis-full space-y-4 py-1 pl-4 transition-all"
                >
                  <ListingCard isMobile={isMobile} listing={listing} />
                  {listings[i + 1] && (
                    <ListingCard
                      isMobile={isMobile}
                      listing={listings[i + 1]}
                    />
                  )}
                </CarouselItem>
              ) : null,
            )
          : listings.map((listing, i) => (
              <CarouselItem
                key={i}
                className="basis-1/2 py-1 pl-4 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <ListingCard listing={listing} />
              </CarouselItem>
            ))}
      </CarouselContent>
      <div className="mx-auto w-min pt-8">
        <Button
          asChild
          size="lg"
          variant="blank"
          className="border-2 border-black/30 text-black hover:border-black/50"
        >
          <Link to="/catalog">ყველა განცხადების ნახვა</Link>
        </Button>
      </div>
    </Carousel>
  );
};
export default ListingsCarousel;
