import { cn } from "@/lib/utils";
import HomePageHeroCarousel from "../components/HomePageHeroCarousel";
import HomePageHeroCategories from "../components/HomePageHeroCategories";
import StatCounter from "../components/StatCounter";

// const HOME_PAGE_CARD_LINKS = [
//   {
//     link: "/catalog/nergebi",
//     text: "აქ",
//     img: "seeds.webp",
//   },
//   {
//     link: "/catalog/cxovelebi-da-frinvelebi",
//     text: "რამე",
//     img: "cow.webp",
//   },
//   {
//     link: "/catalog/soflis-nobaTi",
//     text: "მოიფიქრე",
//     img: "basket.webp",
//   },
// ];

const HomePageHero = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <div className="lg:flex lg:flex-row lg:gap-8">
        <HomePageHeroCarousel className="lg:w-3/4" />
        <div className="hidden lg:block lg:w-1/4">
          {/* <aside className="grid grid-cols-2 grid-rows-2 gap-4 sm:grid-cols-4 sm:grid-rows-1 lg:h-[450px] lg:grid-cols-1 lg:grid-rows-3 lg:gap-8">
            {HOME_PAGE_CARD_LINKS.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className={cn(
                  "group flex items-center gap-2 rounded-md border-2 border-white bg-white p-2 shadow transition-colors hover:border-primary sm:px-4 lg:items-start lg:justify-between lg:first:rounded-t-none",
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
          </aside> */}
          <aside className="flex h-[450px] cursor-default flex-col justify-around gap-y-4 rounded-b-md border-2 border-white bg-white p-2 px-8 text-green-900 drop-shadow-md">
            <div className="flex flex-row items-center justify-between">
              <div>
                <h3 className="text-center text-xl font-semibold sm:mb-2 sm:text-start md:text-2xl lg:text-4xl">
                  <StatCounter
                    start={0}
                    end={21487}
                    delay={0}
                    duration={2000}
                  />
                  +
                </h3>
                <span className="text-sm lg:text-base">განცხადება</span>
              </div>
              <img
                src="/homepage_stats_listings.webp"
                className="size-12 md:size-14 lg:size-16"
              />
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="">
                <h3 className="text-center text-xl font-semibold sm:mb-2 sm:text-start md:text-2xl lg:text-4xl">
                  <StatCounter start={0} end={791} delay={0} duration={2000} />+
                </h3>
                <span className="text-sm lg:text-base">გამყიდველი</span>
              </div>
              <img
                src="/homepage_stats_seller.webp"
                className="size-12 md:size-14 lg:size-16"
              />
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="">
                <h3 className="text-center text-xl font-semibold sm:mb-2 sm:text-start md:text-2xl lg:text-4xl">
                  <StatCounter start={0} end={1248} delay={0} duration={2000} />
                  +
                </h3>
                <span className="text-sm lg:text-base">ვიზიტორი</span>
              </div>
              <img
                src="/homepage_stats_deal.webp"
                className="size-12 md:size-14 lg:size-16"
              />
            </div>
          </aside>
        </div>
      </div>
      <HomePageHeroCategories />
    </div>
  );
};
export default HomePageHero;
