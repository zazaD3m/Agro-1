import { cn } from "@/lib/utils";
import {
  CheckCircle,
  ChevronRight,
  FileCheck,
  Handshake,
  PersonStanding,
  PhoneCall,
  Search,
} from "lucide-react";
import { Fragment, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const TestCompArrows = ({ className }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    // triggerOnce: true,
  });

  const alreadyAnimated = useRef(null);

  useEffect(() => {
    if (inView && !alreadyAnimated.current) {
      alreadyAnimated.current = true;
    }
  }, [inView]);

  const circles = [
    {
      title: "ვიზიტორი",
      icon: (
        <PersonStanding className="size-4 text-white sm:size-8 md:size-9 2xl:size-10" />
      ),
    },
    {
      title: "ძიება",
      icon: (
        <Search className="size-4 text-white sm:size-8 md:size-9 2xl:size-10" />
      ),
    },
    {
      title: "შერჩევა",
      icon: (
        <FileCheck className="size-4 text-white sm:size-8 md:size-9 2xl:size-10" />
      ),
    },
    {
      title: "დაკავშირება",
      icon: (
        <PhoneCall className="size-4 text-white sm:size-8 md:size-9 2xl:size-10" />
      ),
    },
    {
      title: "შეთანხმება",
      icon: (
        <Handshake className="size-4 text-white sm:size-8 md:size-9 2xl:size-10" />
      ),
    },
    {
      title: "შეძენა",
      icon: (
        <CheckCircle className="size-4 text-white sm:size-8 md:size-9 2xl:size-10" />
      ),
    },
  ];

  const shouldAnimate = inView;
  // && !alreadyAnimated.current;

  return (
    <div ref={ref} className={cn("", className)}>
      <div className="flex flex-col items-center gap-y-6 pb-8 pt-16 sm:pb-0">
        <h2
          className={cn(
            "opac text-center text-3xl font-medium lg:text-4xl 2xl:text-5xl",
            shouldAnimate && "heroH5",
            alreadyAnimated.current && "opacity-100",
          )}
        >
          ჩვენი საიტის <span className="text-[#68A249]">იდეა</span>
        </h2>
        <p
          className={cn(
            "pb-10 text-center text-sm sm:w-4/5 sm:text-base 2xl:text-lg",
            shouldAnimate && "heroP5",
            alreadyAnimated.current && "opacity-100",
          )}
        >
          <span className="font-medium text-[#68A249]">აგროეზო</span> - ონლაინ
          პლატფორმა, რომელიც აერთიანებს ადგილობრივ ფერმერს და მომხმარებელს!
          საქონლის გაყიდვა და შეძენა! ონლაინ ბაზარი, პირდაპირი კავშირი პროდუქტის
          განმთავსებელსა და მომხმარებელს შორის. საბითუმო და საცალო ვაჭრობა.
          გამოგზავნით და ადგილზე შეძენით
        </p>
        <div
          className={cn(
            "relative flex w-5/6 justify-between overflow-hidden pb-10 md:w-4/5 lg:w-2/3",
            shouldAnimate && "showDiv5",
          )}
        >
          {circles.map((e, i) => (
            <Fragment key={e.title}>
              <div
                className={cn(
                  "relative z-50 flex flex-col items-center justify-center gap-2 bg-background-green",
                  // shouldAnimate && `c-${i + 1}-5`,
                  // alreadyAnimated.current && "opacity-100",
                )}
              >
                <div
                  className={cn(
                    "flex items-center justify-center overflow-hidden rounded-full bg-[#3F444D] p-4 md:p-5 lg:p-6",
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
              <div className="relative flex items-center">
                {i !== 5 && (
                  <ChevronRight
                    className={cn(
                      `absolute left-1/4 top-1/2 size-7 -translate-x-1/2 -translate-y-1/2 text-[#68a249] opacity-0`,
                      shouldAnimate && `arrow-${i}-${1} `,
                    )}
                  />
                )}
                {i !== 5 && (
                  <ChevronRight
                    className={cn(
                      `size-7 text-[#68a249] opacity-0`,
                      shouldAnimate && `arrow-${i}-${2} `,
                    )}
                  />
                )}

                {i !== 5 && (
                  <ChevronRight
                    className={cn(
                      `absolute left-3/4 top-1/2 size-7 -translate-x-1/2 -translate-y-1/2 text-[#68a249] opacity-0`,
                      shouldAnimate && `arrow-${i}-${3} `,
                    )}
                  />
                )}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TestCompArrows;
