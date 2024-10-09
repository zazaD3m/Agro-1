import TestComp from "@/components/TestComp";
import TestComp2 from "@/components/TestComp2";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

const HOME_PAGE_CONTENT = [
  // {
  //   img: "test-3.png",
  //   heading:
  //     "აგროეზო - ონლაინ პლატფორმა, რომელიც აერთიანებს ადგილობრივ ფერმერს და მომხმარებელს! საქონლის გაყიდვა და შეძენა!",
  //   p: "ონლაინ ბაზარი, პირდაპირი კავშირი პროდუქტის განმთავსებელსა და მომხმარებელს შორის. საბითუმო და საცალო ვაჭრობა. გამოგზავნით და ადგილზე შეძენით",
  //   buttons: [
  //     {
  //       linkText: "იყიდე",
  //       link: "/catalog",
  //     },
  //     {
  //       linkText: "გაყიდე",
  //       link: "/account/add-new-product",
  //     },
  //     {
  //       linkText: "ჩვენი ბლოგი",
  //       link: "/blog",
  //     },
  //   ],
  // },
  // {
  //   img: "test-2.png",
  //   heading: `მყიდველებს - იყიდეთ ნებისმიერი პროდუქტი აგროსფეროდან აგროეზოში, შუამავლის, ფასნამატის და საკომისიოს გარეშე! შეუზღუდავი არჩევანი!`,
  //   p: "ორგანული საკვები ზაფხულის მაცხოვრებლებისა და ფერმერებისგან. მიტანით და პიკაპით. საბითუმო და საცალო ვაჭრობა.",
  //   buttons: [
  //     {
  //       linkText: "კატალოგი",
  //       link: "/catalog",
  //     },
  //   ],
  // },
  // {
  //   img: "test-1.png",
  //   heading: "გამყიდველებისთვის - დაამატეთ თქვენი პროდუქტები სრულიად უფასოდ!",
  //   p: "არანაირი საკომისიო. ჩვენი საიტი კარგად არის ინდექსირებული საძიებო სისტემებში. მოსახერხებელი პირადი ანგარიში, საქონლის მარტივი დამატება, საქონლის შეკვეთა ვებგვერდზე.",
  //   buttons: [
  //     {
  //       linkText: "გაყიდე",
  //       link: "/account/add-new-product",
  //     },
  //     {
  //       linkText: "ინსტრუქცია",
  //       link: "/info/add-product",
  //     },
  //   ],
  // },
  // {
  //   img: "test-4.png",
  //   heading: "გამყიდველებისთვის - დაამატეთ თქვენი პროდუქტები სრულიად უფასოდ!",
  //   p: "არანაირი საკომისიო. ჩვენი საიტი კარგად არის ინდექსირებული საძიებო სისტემებში. მოსახერხებელი პირადი ანგარიში, საქონლის მარტივი დამატება, საქონლის შეკვეთა ვებგვერდზე.",
  //   buttons: [
  //     {
  //       linkText: "გაყიდე",
  //       link: "/account/add-new-product",
  //     },
  //     {
  //       linkText: "ინსტრუქცია",
  //       link: "/info/add-product",
  //     },
  //   ],
  // },
  {
    img: "test-9.png",
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
  {
    img: "test-8.png",
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
  {
    img: "test-7.png",
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
  {
    img: "test-5.png",
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
  {
    img: "test-6.png",
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

const images = [
  1, 2, 3,
  // 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
];

const HomePageHeroCarousel = ({ className }) => {
  return (
    <div className={cn("overflow-hidden rounded-b-md", className)}>
      <Carousel
        opts={{ loop: true }}
        // plugins={[
        //   Autoplay({
        //     delay: 4000,
        //   }),
        // ]}
      >
        <CarouselContent>
          {HOME_PAGE_CONTENT.map((data, i) => (
            <CarouselItem key={i}>
              <div className="relative flex justify-center">
                <img
                  src={data.img}
                  className="h-80 w-auto bg-background object-contain sm:h-[450px]"
                />
                {/* <div className="absolute left-0 top-0 w-full space-y-4 p-4 pt-3 sm:p-6 sm:pl-8 xl:p-8 xl:pl-12">
                  <h1 className="cursor-default text-pretty break-words font-semibold tracking-wide text-white sm:max-w-md sm:text-lg md:max-w-lg lg:text-xl xl:max-w-2xl xl:text-2xl">
                    {data.heading}
                  </h1>
                  <p className="cursor-default rounded-md bg-transparent/60 p-2 text-sm font-medium text-white sm:max-w-md sm:text-base md:max-w-lg lg:text-lg xl:max-w-2xl xl:text-xl">
                    {data.p}
                  </p>
                </div> */}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
export default HomePageHeroCarousel;
