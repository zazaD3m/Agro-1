import useWindowSize from "@/hooks/useWindowSize";
import { cn } from "@/lib/utils";
import {
  CheckCircle,
  FileCheck,
  Handshake,
  PersonStanding,
  PhoneCall,
  Search,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const TestComp4 = ({ className }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  const alreadyAnimated = useRef(null);

  console.log(inView);

  useEffect(() => {
    if (inView && !alreadyAnimated.current) {
      alreadyAnimated.current = true;
    }
  }, [inView]);

  const { width } = useWindowSize();
  const isMobile = width < 640;

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

  const shouldAnimate = inView;
  // && !alreadyAnimated.current;

  return (
    <div ref={ref} className={cn("", className)}>
      <div className="flex flex-col items-center gap-y-6 pb-8 pt-16 sm:pb-0">
        <h2
          className={cn(
            "opac text-center text-3xl font-medium lg:text-4xl 2xl:text-5xl",
            shouldAnimate && "heroH",
            alreadyAnimated.current && "opacity-100",
          )}
        >
          ჩვენი საიტის <span className="text-[#68A249]">იდეა</span>
        </h2>
        <p
          className={cn(
            "pb-10 text-center text-sm sm:w-4/5 sm:text-base 2xl:text-lg",
            shouldAnimate && "heroP",
            alreadyAnimated.current && "opacity-100",
          )}
        >
          <span className="font-medium text-[#68A249]">აგროეზო</span> - ონლაინ
          პლატფორმა, რომელიც აერთიანებს ადგილობრივ ფერმერს და მომხმარებელს!
          საქონლის გაყიდვა და შეძენა! ონლაინ ბაზარი, პირდაპირი კავშირი პროდუქტის
          განმთავსებელსა და მომხმარებელს შორის. საბითუმო და საცალო ვაჭრობა.
          გამოგზავნით და ადგილზე შეძენით
        </p>
        {isMobile ? (
          <div className="flex w-full flex-col items-center gap-y-12 px-2">
            <div className="relative flex w-full justify-between">
              {circles.slice(0, 3).map((e, i) => (
                <div
                  key={e.title}
                  className="relative z-10 flex justify-center"
                >
                  <div
                    className={cn(
                      "flex items-center justify-center rounded-full bg-[#3F444D] p-4",
                      i === 0 && "bg-[#68A249]",
                    )}
                  >
                    {e.icon}
                  </div>
                  <div className="absolute -bottom-7 text-center">
                    <span
                      className={cn(
                        "text-xs text-[#3F444D] sm:text-sm 2xl:text-base",
                        (i === 0 || i === 4) && "text-[#68A249]",
                      )}
                    >
                      {e.title}
                    </span>
                  </div>
                </div>
              ))}
              <div
                className={cn(
                  "absolute top-1/2 z-0 h-1 -translate-y-1/2 bg-[#68A249]",
                  shouldAnimate && "animate-widthMobile1",
                  alreadyAnimated.current && "opacity-100",
                )}
              />
            </div>
            <div className="relative flex w-2/3 justify-between">
              {circles.slice(3, 5).map((e, i) => (
                <div
                  key={e.title}
                  className="relative z-10 flex justify-center"
                >
                  <div
                    className={cn(
                      "flex items-center justify-center rounded-full bg-[#3F444D] p-4",
                      i === 1 && "bg-[#68A249]",
                    )}
                  >
                    {e.icon}
                  </div>
                  <div className="absolute -bottom-7 text-center">
                    <span
                      className={cn(
                        "text-xs text-[#3F444D] sm:text-sm 2xl:text-base",
                        i === 1 && "text-[#68A249]",
                      )}
                    >
                      {e.title}
                    </span>
                  </div>
                </div>
              ))}
              <div
                className={cn(
                  "absolute top-1/2 z-0 h-1 -translate-y-1/2 bg-[#68A249]",
                  inView && "animate-widthMobile2",
                )}
              />
            </div>
          </div>
        ) : (
          <div className="grid w-5/6 grid-cols-6 md:w-4/5 lg:w-2/3">
            {circles.map((e, i) => (
              <div
                key={e.title}
                className={cn(
                  "flex flex-col items-center justify-center gap-2",
                  shouldAnimate && `c-${i + 1}`,
                  alreadyAnimated.current && "opacity-100",
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
                <div className="">
                  <span
                    className={cn(
                      "text-xs text-[#3F444D] sm:text-sm 2xl:text-base",
                      (i === 0 || i === 5) && "text-[#68A249]",
                    )}
                  >
                    {e.title}
                  </span>
                </div>
                {/* <div
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
                </div> */}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default TestComp4;