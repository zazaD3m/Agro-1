import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import HomePageSiteInfo from "../sections/HomePageSiteInfo";
import TestCompArrows from "@/components/TestCompArrows";
import TestCompOpacity from "@/components/TestCompOpacity";
import TestCompTractor from "@/components/TestCompTractor";
import TestCompFullOpacity from "@/components/TestCompFullOpacity";

const HOME_PAGE_CONTENT = [
  {
    img: "test-13.png",
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
    img: "test-15.png",
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
    img: "test-14.png",
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
    <div className={cn("overflow-hidden", className)}>
      <Carousel
        opts={{ loop: true }}
        plugins={
          [
            // Autoplay({
            //   delay: 4000,
            // }),
          ]
        }
      >
        <CarouselContent>
          {HOME_PAGE_CONTENT.map((data, i) => (
            <CarouselItem key={i}>
              <div className="flex justify-center">
                <img
                  src={data.img}
                  className="h-auto w-full bg-background object-contain sm:max-h-[400px] sm:w-auto 2xl:max-h-[450px]"
                />
              </div>
            </CarouselItem>
          ))}
          <CarouselItem>
            <TestCompArrows />
          </CarouselItem>
          <CarouselItem className="flex items-center">
            <HomePageSiteInfo />
          </CarouselItem>
          <CarouselItem>
            <TestCompOpacity />
          </CarouselItem>
          <CarouselItem>
            <TestCompTractor />
          </CarouselItem>
          <CarouselItem>
            <TestCompFullOpacity />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};
export default HomePageHeroCarousel;

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

// {
//   img: "test-9.png",
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
//   img: "test-8.png",
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
//   img: "test-7.png",
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
//   img: "test-5.png",
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
//   img: "test-12.png",
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
//   img: "test-11.png",
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
//   img: "test-10.png",
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
//   img: "test-6.png",
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
