import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

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
                  className="h-80 w-full rounded-b-md object-cover brightness-[.7] sm:h-[450px]"
                />
                <div className="absolute left-0 top-0 w-full space-y-4 p-4 pt-3 sm:p-6 sm:pl-8 xl:p-8 xl:pl-12">
                  <h1 className="cursor-default text-pretty break-words font-semibold tracking-wide text-white sm:max-w-md sm:text-lg md:max-w-lg lg:text-xl xl:max-w-2xl xl:text-2xl">
                    {data.heading}
                  </h1>
                  <p className="cursor-default rounded-md bg-transparent/60 p-2 text-sm font-medium text-white sm:max-w-md sm:text-base md:max-w-lg lg:text-lg xl:max-w-2xl xl:text-xl">
                    {data.p}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
export default HomePageHeroCarousel;
