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
      <SelectTrigger className="w-[180px]">
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
