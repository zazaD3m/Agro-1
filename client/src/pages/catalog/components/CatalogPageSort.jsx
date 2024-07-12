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

const CatalogPageSort = () => {
  const dispatch = useDispatch();
  const SortId = useSelector(selectSortId);

  const handleSortChange = (id) => {
    if (SortFilter.validate(id)) {
      dispatch(setCatalogFilter({ SortId: id }));
    }
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
};
export default CatalogPageSort;
