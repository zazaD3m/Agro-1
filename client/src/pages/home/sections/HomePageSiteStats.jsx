import { cn } from "@/lib/utils";

const HomePageSiteStats = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <div className="flex w-full cursor-default justify-evenly rounded-none border-2 bg-background p-2 text-green-900 shadow-md sm:py-8 md:mx-auto md:w-3/4">
        <div className="flex flex-col items-center gap-x-3 gap-y-2 sm:flex-row">
          <div>
            <h3 className="text-center text-xl font-semibold sm:mb-2 sm:text-start md:text-2xl lg:text-4xl">
              20 000+
            </h3>
            <span className="text-sm lg:text-base">განცხადება</span>
          </div>
          <img
            src="/homepage_stats_listings.webp"
            className="size-12 md:size-14 lg:size-16"
          />
        </div>
        <div className="flex flex-col items-center gap-x-3 gap-y-2 sm:flex-row">
          <div className="">
            <h3 className="text-center text-xl font-semibold sm:mb-2 sm:text-start md:text-2xl lg:text-4xl">
              500+
            </h3>
            <span className="text-sm lg:text-base">გამყიდველი</span>
          </div>
          <img
            src="/homepage_stats_seller.webp"
            className="size-12 md:size-14 lg:size-16"
          />
        </div>
        <div className="flex flex-col items-center gap-x-3 gap-y-2 sm:flex-row">
          <div className="">
            <h3 className="text-center text-xl font-semibold sm:mb-2 sm:text-start md:text-2xl lg:text-4xl">
              1000+
            </h3>
            <span className="text-sm lg:text-base">ვიზიტორი</span>
          </div>
          <img
            src="/homepage_stats_deal.webp"
            className="size-12 md:size-14 lg:size-16"
          />
        </div>
      </div>
    </div>
  );
};
export default HomePageSiteStats;
