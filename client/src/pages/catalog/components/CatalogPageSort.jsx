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
  setFilter,
} from "@/features/filter/filterSlice";
import { memo } from "react";

const CatalogPageSort = memo(() => {
  const dispatch = useDispatch();
  const SortId = useSelector(selectSortId);

  const handleSortChange = (id) => {
    if (parseInt(id, 10) === SortId) {
      // skip users click on the value that is already set
      return;
    }
    dispatch(setFilter({ SortId: parseInt(id, 10) }));
  };

  return (
    <Select
      defaultValue={String(defaultFilter.SortId)}
      value={String(SortId)}
      onValueChange={handleSortChange}
    >
      <SelectTrigger
        className="w-min shrink-0 gap-x-1 text-nowrap bg-inherit px-0 max-lg:flex-row-reverse max-lg:font-semibold lg:m-2 lg:ml-auto lg:w-[180px] lg:px-3"
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
