import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import {
  defaultFilter,
  selectSortId,
  setCatalogFilter,
} from "@/features/site/siteSlice";
import { SortFilter } from "@/data/filters-data";
import { useSearchParams } from "react-router-dom";
import { memo } from "react";

const CatalogPageSort = memo(() => {
  const dispatch = useDispatch();
  const SortId = useSelector(selectSortId);
  const [, setSearchParams] = useSearchParams();

  const handleSortChange = (id) => {
    if (id === SortId) {
      // skip users click on the value that is already set
      return;
    }
    dispatch(setCatalogFilter({ SortId: id }));
    setSearchParams(
      (prev) => {
        if (id === SortFilter.default) {
          // if id user selected is default value
          if (prev.has("SortId")) {
            // if there was some value of filter remove it as default value doesn't require url filter
            prev.delete("SortId");
          }
        } else {
          // if new id isn't default value append id to searchParams
          prev.set("SortId", id);
        }
        return prev;
      },
      { preventScrollReset: true },
    );
  };

  return (
    <Select
      defaultValue={defaultFilter.SortId}
      value={SortId}
      onValueChange={handleSortChange}
    >
      <SelectTrigger
        className="w-min shrink-0 gap-x-1 text-nowrap bg-inherit px-0 max-lg:flex-row-reverse max-lg:font-semibold lg:m-2 lg:ml-4 lg:w-[180px] lg:px-3"
        iconClassName="max-lg:translate-y-0.5 max-lg:opacity-100"
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="1">თარიღი კლებადი</SelectItem>
          <SelectItem value="2">თარიღი ზრდადი</SelectItem>
          <SelectItem value="3">ფასი კლებადი</SelectItem>
          <SelectItem value="4">ფასი ზრდადი</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
});
CatalogPageSort.displayName = "CatalogPageSort";
export default CatalogPageSort;
