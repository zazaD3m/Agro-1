import { cn } from "@/lib/utils";
import { Handshake, PersonStanding, PhoneCall, Search } from "lucide-react";

const circles = [
  {
    title: "ვიზიტორი",
    icon: <PersonStanding className="size-14 text-white" />,
  },
  {
    title: "ძიება",
    icon: <Search className="size-14 text-white" />,
  },
  {
    title: "შერჩევა",
    icon: <Search className="size-14 text-white" />,
  },
  {
    title: "დაკავშირება",
    icon: <PhoneCall className="size-14 text-white" />,
  },
  {
    title: "შეთანხმება",
    icon: <Handshake className="size-14 text-white" />,
  },
  {
    title: "შეძენა",
    icon: <PersonStanding className="size-14 text-white" />,
  },
];

const TestComp = () => {
  return (
    <div className="grid h-80 w-full place-items-center bg-background-green sm:h-[450px]">
      <div className="relative size-[450px] bg-background-green">
        {/* <div className="centerAbsolute ball-0 absolute size-24 rounded-full bg-green-400 text-center">
          0
        </div>
        <div className="centerAbsolute ball-1 absolute size-24 rounded-full bg-green-500 text-center">
          1
        </div> */}
        <div className="ball center"></div>
        {circles.map((c, i) => (
          <div key={i} className={`ball center star ball${i + 1}`}>
            <div className="relative flex size-full justify-center">
              <div
                className={cn(
                  "flex size-20 items-center justify-center rounded-full bg-[#3F444D]",
                  i === 0 && "bg-[#68A249]",
                  i === 5 && "bg-[#68A249]",
                )}
              >
                {c.icon}
              </div>
              <div className="absolute -bottom-7 text-center">
                <span
                  className={cn(
                    "z-50 text-base font-medium text-[#3F444D]",
                    i === 0 && "text-[#68A249]",
                    i === 5 && "text-[#68A249]",
                  )}
                >
                  {c.title}
                </span>
              </div>
            </div>
          </div>
        ))}

        <div className="circle center"></div>
        <div className="cutCircleBottom center bg-background-green"></div>
      </div>
    </div>
  );
};
export default TestComp;
