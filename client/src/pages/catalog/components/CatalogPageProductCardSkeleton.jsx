import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const CatalogPageProductCardSkeleton = ({ viewType }) => {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
    <div
      key={i}
      className={cn(
        "flex flex-col items-center rounded-md bg-background pt-8",
        viewType === "list" && "h-40 flex-row pt-4 sm:h-48 lg:h-56",
        viewType === "grid" && "max-sm:h-40 max-sm:flex-row",
      )}
    >
      <Skeleton
        className={cn(
          "mb-8 aspect-[6/5] w-3/4 rounded-xl bg-accent-dark",
          viewType === "list" &&
            "ml-4 mt-4 aspect-square h-full w-min shrink-0",
          viewType === "grid" &&
            "max-sm:ml-4 max-sm:aspect-square max-sm:h-full max-sm:w-min max-sm:shrink-0",
        )}
      />
      <div
        className={cn(
          "flex w-full flex-col items-center",
          viewType === "list" && "",
        )}
      >
        <Skeleton className="mb-4 h-4 w-5/6 bg-accent-dark" />
        <Skeleton className="mb-4 h-4 w-4/6 bg-accent-dark" />
        <Skeleton className="mb-16 h-4 w-5/6 bg-accent-dark" />
      </div>
    </div>
  ));
};
export default CatalogPageProductCardSkeleton;
