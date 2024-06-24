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
  selectCatalogFilter,
  selectSortId,
  setCatalogFilter,
} from "@/features/site/siteSlice";
import { Button } from "@/components/ui/button";
import { sortFilter } from "@/data/filters-data";

const CatalogPageSort = () => {
  const dispatch = useDispatch();
  const sortId = useSelector(selectSortId);

  const handleSortChange = (id) => {
    if (sortFilter.options.includes(id)) {
      dispatch(setCatalogFilter({ sortId: id }));
    }
  };

  return (
    <>
      <Select
        defaultValue={sortFilter.default}
        value={sortId}
        onValueChange={handleSortChange}
      >
        <SelectTrigger className="ml-auto w-[180px]">
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
      <Button onClick={() => handleSortChange("4")}>click</Button>
    </>
  );
};
export default CatalogPageSort;
