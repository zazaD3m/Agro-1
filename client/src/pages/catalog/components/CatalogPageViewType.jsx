import { Button } from "@/components/ui/button";
import {
  selectCatalogViewType,
  toggleCatalogViewType,
} from "@/features/site/sitePersistedSlice";
import { cn } from "@/lib/utils";
import { LayoutGrid, LayoutList } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const CatalogPageViewType = ({ isDesktop }) => {
  const dispatch = useDispatch();
  const viewType = useSelector(selectCatalogViewType);
  const isGrid = viewType === "grid";

  const handleViewTypeChange = () => {
    dispatch(toggleCatalogViewType(isGrid ? "list" : "grid"));
  };

  return (
    <Button
      size={isDesktop && "icon"}
      variant="blank"
      className={cn(
        "",
        isDesktop
          ? "mr-2 shrink-0 border hover:bg-accent"
          : "ml-2 h-7 shrink-0 rounded-none border-l border-gray-300 p-0 pl-2 duration-100 active:text-primary",
      )}
      onClick={handleViewTypeChange}
    >
      {isGrid ? (
        <LayoutList className="size-5" strokeWidth={isDesktop ? 2 : 1.7} />
      ) : (
        <LayoutGrid className="size-5" strokeWidth={isDesktop ? 2 : 1.7} />
      )}
    </Button>
  );
};
export default CatalogPageViewType;
