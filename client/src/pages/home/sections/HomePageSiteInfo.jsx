import { cn } from "@/lib/utils";
import { Handshake, PersonStanding, PhoneCall, Search } from "lucide-react";
import { useInView } from "react-intersection-observer";

const HomePageSiteInfo = ({ className }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div ref={ref} className={cn("", className)}>
      <div className="flex flex-col">
        <h2 className="mb-6 text-wrap text-center text-3xl font-medium lg:text-4xl 2xl:text-5xl">
          ჩვენი საიტის <span className="text-[#68A249]">იდეა</span>
        </h2>
        <p className="mb-8 text-center text-sm sm:px-14 sm:text-base md:px-16 lg:px-32 xl:px-40 2xl:text-lg">
          <span className="font-medium text-[#68A249]">აგროეზო</span> - ონლაინ
          პლატფორმა, რომელიც აერთიანებს ადგილობრივ ფერმერს და მომხმარებელს!
          საქონლის გაყიდვა და შეძენა! ონლაინ ბაზარი, პირდაპირი კავშირი პროდუქტის
          განმთავსებელსა და მომხმარებელს შორის. საბითუმო და საცალო ვაჭრობა.
          გამოგზავნით და ადგილზე შეძენით
        </p>
        <div className="flex w-full flex-col justify-center gap-y-14 px-8 pb-10 sm:flex-row">
          <div className="relative flex w-full justify-between sm:w-3/5">
            {[
              {
                title: "ვიზიტორი",
                icon: (
                  <PersonStanding className="size-6 text-white sm:size-10 2xl:size-12" />
                ),
              },
              {
                title: "შეარჩიე",
                icon: (
                  <Search className="size-6 text-white sm:size-10 2xl:size-12" />
                ),
              },
              {
                title: "დაურეკე",
                icon: (
                  <PhoneCall className="size-6 text-white sm:size-10 2xl:size-12" />
                ),
              },
            ].map((e, i) => (
              <div
                key={e.title}
                className="relative z-10 flex flex-col items-center gap-4"
              >
                <div
                  className={cn(
                    "flex size-12 items-center justify-center rounded-full bg-[#3F444D] sm:size-20 2xl:size-24",
                    i === 0 && "bg-[#68A249]",
                  )}
                >
                  {e.icon}
                </div>
                <div className="absolute -bottom-8">
                  <span
                    className={cn(
                      "text-xs text-[#3F444D] sm:text-sm 2xl:text-base",
                      i === 0 && "text-[#68A249]",
                    )}
                  >
                    {e.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="relative flex w-full justify-evenly sm:w-2/5">
            {[
              {
                title: "შეთანხმდით",
                icon: (
                  <Handshake className="size-6 text-white sm:size-10 2xl:size-12" />
                ),
              },
              {
                title: "გამყიდველი",
                icon: (
                  <PersonStanding className="size-6 text-white sm:size-10 2xl:size-12" />
                ),
              },
            ].map((e, i) => (
              <div
                key={e.title}
                className="relative z-10 flex flex-col items-center gap-4"
              >
                <div
                  className={cn(
                    "flex size-12 items-center justify-center rounded-full bg-[#3F444D] sm:size-20 2xl:size-24",
                    i === 1 && "bg-[#68A249]",
                  )}
                >
                  {e.icon}
                </div>
                <div className="absolute -bottom-8">
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePageSiteInfo;

{
  /* <div className="relative mb-8 flex w-full justify-between sm:w-5/6 sm:px-0 lg:w-2/3">
  {[
    {
      title: "ვიზიტორი",
      icon: (
        <PersonStanding className="size-6 text-white sm:size-10 2xl:size-12" />
      ),
    },
    {
      title: "შეარჩიე",
      icon: <Search className="size-6 text-white sm:size-10 2xl:size-12" />,
    },
    {
      title: "დაურეკე",
      icon: <PhoneCall className="size-6 text-white sm:size-10 2xl:size-12" />,
    },
    {
      title: "შეთანხმდით",
      icon: <Handshake className="size-6 text-white sm:size-10 2xl:size-12" />,
    },
    {
      title: "გამყიდველი",
      icon: (
        <PersonStanding className="size-6 text-white sm:size-10 2xl:size-12" />
      ),
    },
  ].map((e, i) => (
    <div
      key={e.title}
      className="relative z-10 flex flex-col items-center gap-4"
    >
      <div
        className={cn(
          "flex size-12 items-center justify-center rounded-full bg-[#3F444D] sm:size-20 2xl:size-24",
          (i === 0 || i === 4) && "bg-[#68A249]",
        )}
      >
        {e.icon}
      </div>
      <div className="absolute -bottom-8">
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
  <div className="absolute top-1/2 z-0 h-0.5 w-full -translate-y-1/2 pr-16">
    <div
      className={cn("h-full w-full bg-[#68A249]", inView && "animate-width")}
    />
  </div>
</div>; */
}
