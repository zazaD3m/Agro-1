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

const circles = [
  {
    title: "ვიზიტორი",
    icon: <PersonStanding className="size-8 text-white 2xl:size-10" />,
  },
  {
    title: "ძიება",
    icon: <Search className="size-8 text-white 2xl:size-10" />,
  },
  {
    title: "შერჩევა",
    icon: <FileCheck className="size-8 text-white 2xl:size-10" />,
  },
  {
    title: "დაკავშირება",
    icon: <PhoneCall className="size-8 text-white 2xl:size-10" />,
  },
  {
    title: "შეთანხმება",
    icon: <Handshake className="size-8 text-white 2xl:size-10" />,
  },
  {
    title: "შეძენა",
    icon: <CheckCircle className="size-8 text-white 2xl:size-10" />,
  },
];

const HeroCircles = ({ className }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "flex h-full flex-col items-center pt-20 2xl:pt-28",
        className,
      )}
    >
      <h4
        className={cn(
          "w-3/4 text-center opacity-0 2xl:text-lg",
          inView && "heroCirclesHeader",
        )}
      >
        <span className="font-semibold text-[#68A249]">
          &quot;აგროეზო&quot;
        </span>{" "}
        ონლაინ პლატფორმა სოფლის მეურნეობასთან დაკავშირებული პროდუქციისა და
        სერვისებისთვის, რომელიც გამყიდველებს და პოტენციურ მყიდველებს საშუალებას
        აძლევს, პირდაპირ დაუკავშირდნენ ერთმანეთს.
      </h4>
      <div className="relative flex w-2/3 justify-between pb-10 pt-16 2xl:pt-20">
        {circles.map((e, i) => (
          <div
            key={e.title}
            className={cn(
              "relative flex items-center justify-center opacity-0",
              inView && `heroCircle-${i + 1} heroCircles`,
            )}
          >
            <div
              className={cn(
                "flex items-center justify-center rounded-full bg-[#3F444D] p-5 2xl:p-6",
                (i === 0 || i === 5) && "bg-[#68A249]",
              )}
            >
              {e.icon}
            </div>
            <div className="absolute -bottom-8">
              <span
                className={cn(
                  "text-sm text-[#3F444D] 2xl:text-base",
                  (i === 0 || i === 5) && "text-[#68A249]",
                )}
              >
                {e.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HeroCircles;
