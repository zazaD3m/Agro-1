import { cn } from "@/lib/utils";
import HomePageHeroCarousel from "../components/HomePageHeroCarousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HOME_PAGE_CARD_LINKS = [
  {
    link: "/catalog/nergebi",
    text: "ნერგები",
    img: "seeds.webp",
  },
  {
    link: "/catalog/cxovelebi-da-frinvelebi",
    text: "ცხოველები და ფრინველები",
    img: "cow.webp",
  },
  {
    link: "/catalog/soflis-nobaTi",
    text: "სოფლის ნობათი",
    img: "basket.webp",
  },
  {
    link: "/catalog/soflis-nobaTi",
    text: "სოფლის ნობათი",
    img: "basket.webp",
  },
];

const HomePageHero = ({ className }) => {
  return (
    <section className={cn("", className)}>
      <div className="container flex flex-col gap-8 px-2 lg:flex-row lg:px-4">
        <div className="w-full lg:w-3/4">
          <HomePageHeroCarousel />
        </div>
        <div className="w-full lg:w-1/4">
          <aside className="grid grid-cols-2 grid-rows-2 gap-4 sm:grid-cols-4 sm:grid-rows-1 lg:h-[450px] lg:grid-cols-1 lg:grid-rows-3 lg:gap-8">
            {HOME_PAGE_CARD_LINKS.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className={cn(
                  "group flex items-center gap-2 rounded-md border-2 border-white bg-white p-2 shadow transition-colors hover:border-primary lg:items-start lg:justify-between lg:px-4 lg:first:rounded-t-none",
                  i > 2 && "lg:hidden",
                )}
              >
                <div className="lg:flex lg:h-full lg:flex-col lg:justify-between">
                  <h2 className="min-w-0 break-words text-xs font-semibold tracking-wide sm:text-sm  lg:text-base xl:text-lg">
                    {item.text}
                  </h2>
                  <Button
                    variant="blank"
                    className="hidden w-min items-center justify-center rounded-full border-2 border-black/30 bg-transparent pt-1 text-base tracking-wide text-black hover:border-opacity-50 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground lg:inline-flex"
                  >
                    გადასვლა
                  </Button>
                </div>
                <div className="order-first flex size-12 min-w-12  items-center justify-center rounded-full bg-accent-dark lg:order-last lg:size-14 lg:min-w-14 xl:size-16 xl:min-w-16">
                  <img
                    src={item.img}
                    className="size-10 rounded-full lg:size-10 xl:size-12"
                  />
                </div>
              </Link>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
};
export default HomePageHero;