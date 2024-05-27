import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import HomePageBlogCard from "./HomePageBlogCard";

const HomePageBlogCarousel = ({ blogs }) => {
  return (
    <Carousel opts={{ align: "start", slidesToScroll: "auto", dragFree: true }}>
      <div className="mb-8 flex items-center justify-between border-b-2 border-primary-light pb-1">
        <h2 className="text-lg font-semibold text-black sm:text-xl">
          აგრო ბლოგი
        </h2>
        <CarouselPrevious className="ml-auto mr-2" />
        <CarouselNext />
      </div>
      <CarouselContent className="-ml-8">
        {blogs.map((blog, i) => (
          <CarouselItem
            key={i}
            className="basis-4/5 py-1 pl-8 sm:basis-2/5 lg:basis-1/3 2xl:basis-1/4"
          >
            <HomePageBlogCard blog={blog} />
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
          <Link to="/blog">ყველა სტატიის ნახვა</Link>
        </Button>
      </div>
    </Carousel>
  );
};

export default HomePageBlogCarousel;
