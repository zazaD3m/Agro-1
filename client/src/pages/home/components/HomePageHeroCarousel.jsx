import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  // CarouselDotButtons,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";

const HOME_PAGE_CONTENT = [
  {
    img: "hero-3.webp",
    heading:
      "აგროეზო - ონლაინ პლატფორმა, რომელიც აერთიანებს ადგილობრივ ფერმერს და მომხმარებელს! საქონლის გაყიდვა და შეძენა!",
    p: "ონლაინ ბაზარი, პირდაპირი კავშირი პროდუქტის განმთავსებელსა და მომხმარებელს შორის. საბითუმო და საცალო ვაჭრობა. გამოგზავნით და ადგილზე შეძენით",
    buttons: [
      {
        linkText: "იყიდე",
        link: "/catalog",
      },
      {
        linkText: "გაყიდე",
        link: "/account/add-new-product",
      },
      {
        linkText: "ჩვენი ბლოგი",
        link: "/blog",
      },
    ],
  },
  {
    img: "hero-1.webp",
    heading: `მყიდველებს - იყიდეთ ნებისმიერი პროდუქტი აგროსფეროდან აგროეზოში, შუამავლის, ფასნამატის და საკომისიოს გარეშე! შეუზღუდავი არჩევანი!`,
    p: "ორგანული საკვები ზაფხულის მაცხოვრებლებისა და ფერმერებისგან. მიტანით და პიკაპით. საბითუმო და საცალო ვაჭრობა.",
    buttons: [
      {
        linkText: "კატალოგი",
        link: "/catalog",
      },
    ],
  },
  {
    img: "hero-2.webp",
    heading: "გამყიდველებისთვის - დაამატეთ თქვენი პროდუქტები სრულიად უფასოდ!",
    p: "არანაირი საკომისიო. ჩვენი საიტი კარგად არის ინდექსირებული საძიებო სისტემებში. მოსახერხებელი პირადი ანგარიში, საქონლის მარტივი დამატება, საქონლის შეკვეთა ვებგვერდზე.",
    buttons: [
      {
        linkText: "გაყიდე",
        link: "/account/add-new-product",
      },
      {
        linkText: "ინსტრუქცია",
        link: "/info/add-product",
      },
    ],
  },
];

const HomePageHeroCarousel = ({ className }) => {
  return (
    <div className={cn("overflow-hidden rounded-b-md", className)}>
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          {HOME_PAGE_CONTENT.map((data, i) => (
            <CarouselItem key={i}>
              <div className="relative">
                <img
                  src={data.img}
                  className="h-80 w-full object-cover brightness-[.7] sm:h-[450px]"
                />
                <div className="absolute left-0 top-0 w-full space-y-4 p-4 pt-3 sm:p-6 sm:pl-8 xl:p-8 xl:pl-12">
                  <h1 className="cursor-default text-pretty break-words font-semibold tracking-wide text-white sm:max-w-md sm:text-lg md:max-w-lg lg:text-xl xl:max-w-2xl xl:text-2xl">
                    {data.heading}
                  </h1>
                  <p className="cursor-default rounded-md bg-transparent/60 p-2 text-sm font-medium text-white sm:max-w-md sm:text-base md:max-w-lg lg:text-lg xl:max-w-2xl xl:text-xl">
                    {data.p}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 flex h-16 w-full items-center gap-x-2 bg-transparent/50 pl-4 sm:gap-x-4 md:h-20">
                  {data.buttons.map((button) => (
                    <Button
                      key={button.link}
                      variant="blank"
                      className="items-center justify-center rounded-full border border-white bg-transparent/10 px-2 pb-3 tracking-wide text-white hover:border-opacity-50 hover:bg-opacity-85 sm:px-4 md:h-12 md:px-8 md:text-lg"
                      asChild
                    >
                      <Link to={button.link}>
                        <span>{button.linkText}</span>
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <div className="absolute bottom-20 left-1/2 -translate-x-1/2 md:bottom-24">
          <CarouselThumbContent className="gap-x-2">
            {HOME_PAGE_CONTENT.map((_, i) => (
              <CarouselIndicator key={i} index={i} />
            ))}
          </CarouselThumbContent>
        </div> */}
        {/* <CarouselPrevious
          iconProps={{ size: 32 }}
          className="bottom-4 right-16 hidden size-12 border-white bg-transparent/10 text-white hover:border-white/50 hover:bg-transparent/10 sm:inline-flex"
        />
        <CarouselNext
          iconProps={{ size: 32 }}
          className="bottom-4 right-2 hidden size-12 border-white bg-transparent/10 text-white hover:border-white/50 hover:bg-transparent/10 sm:inline-flex"
        /> */}
      </Carousel>
    </div>
  );
};
export default HomePageHeroCarousel;
