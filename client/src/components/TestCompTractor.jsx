import { cn } from "@/lib/utils";
import {
  CheckCircle,
  FileCheck,
  Handshake,
  PersonStanding,
  PhoneCall,
  Search,
} from "lucide-react";
import { useInView } from "react-intersection-observer";

const TestCompTractor = ({ className }) => {
  const { ref, inView } = useInView({
    // threshold: 0,
    // triggerOnce: true,
  });

  const circles = [
    {
      title: "ვიზიტორი",
      icon: (
        <PersonStanding className="size-6 text-white sm:size-8 md:size-10 2xl:size-12" />
      ),
    },
    {
      title: "ძიება",
      icon: (
        <Search className="size-6 text-white sm:size-8 md:size-10 2xl:size-12" />
      ),
    },
    {
      title: "შერჩევა",
      icon: (
        <FileCheck className="size-6 text-white sm:size-8 md:size-10 2xl:size-12" />
      ),
    },
    {
      title: "დაკავშირება",
      icon: (
        <PhoneCall className="size-6 text-white sm:size-8 md:size-10 2xl:size-12" />
      ),
    },
    {
      title: "შეთანხმება",
      icon: (
        <Handshake className="size-6 text-white sm:size-8 md:size-10 2xl:size-12" />
      ),
    },
    {
      title: "შეძენა",
      icon: (
        <CheckCircle className="size-6 text-white sm:size-8 md:size-10 2xl:size-12" />
      ),
    },
  ];

  return (
    <>
      <div className={cn("", className)} ref={ref}>
        <div className="flex flex-col items-center gap-y-6 pt-12">
          <h2
            className={cn(
              "text-center text-3xl font-medium opacity-0 lg:text-4xl 2xl:text-5xl",
              inView && "heroH",
            )}
          >
            ჩვენი საიტის <span className="text-[#68A249]">იდეა</span>
          </h2>
          <p
            className={cn(
              "pb-10 text-center text-sm opacity-0 sm:w-4/5 sm:text-base 2xl:text-lg",
              inView && "heroP",
            )}
          >
            <span className="font-medium text-[#68A249]">აგროეზო</span> - ონლაინ
            პლატფორმა, რომელიც აერთიანებს ადგილობრივ ფერმერს და მომხმარებელს!
            საქონლის გაყიდვა და შეძენა! ონლაინ ბაზარი, პირდაპირი კავშირი
            პროდუქტის განმთავსებელსა და მომხმარებელს შორის. საბითუმო და საცალო
            ვაჭრობა. გამოგზავნით და ადგილზე შეძენით
          </p>
          <div className="relative flex h-36 w-5/6 justify-between overflow-hidden md:w-4/5 lg:w-2/3">
            <div
              className={cn(
                "absolute flex w-full justify-between opacity-0",
                inView && "animateD opacity-100",
              )}
            >
              {circles.map((e, i) => (
                <div
                  key={e.title}
                  className={cn(
                    "relative z-10 flex justify-center",
                    // inView && `c-${i + 1}`,
                  )}
                >
                  <div
                    className={cn(
                      "flex items-center justify-center rounded-full bg-[#3F444D] p-4 md:p-5 lg:p-6",
                      (i === 0 || i === 5) && "bg-[#68A249]",
                    )}
                  >
                    {e.icon}
                  </div>
                  <div className="absolute -bottom-8">
                    <span
                      className={cn(
                        "text-xs text-[#3F444D] sm:text-sm 2xl:text-base",
                        (i === 0 || i === 5) && "text-[#68A249]",
                      )}
                    >
                      {e.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div
              className={cn(
                "absolute h-32 w-full opacity-0",
                inView && "animateT opacity-100",
              )}
            >
              <div className={cn("size-28 bg-transparent")}>
                <img
                  src="tractor.png"
                  className="size-full bg-transparent object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TestCompTractor;
