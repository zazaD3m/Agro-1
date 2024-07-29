import { Input } from "@/components/ui/input";
import { PriceFilter } from "@/data/filters-data";
import { selectPriceTo, setCatalogFilter } from "@/features/site/siteSlice";
import { memo, useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

const CatalogPagePriceTo = memo(() => {
  const dispatch = useDispatch();
  const [, setSearchParams] = useSearchParams();
  const priceTo = useSelector(selectPriceTo);
  const [inputValue, setInputValue] = useState(priceTo || "");

  // Update local state when Redux state changes
  useEffect(() => {
    setInputValue(priceTo || "");
  }, [priceTo]);

  const updateFilters = useCallback(
    (value) => {
      if (PriceFilter.validate(value)) {
        dispatch(setCatalogFilter({ PriceTo: value }));
        setSearchParams(
          (prev) => {
            if (value === PriceFilter.default || value === "") {
              prev.delete("PriceTo");
            } else {
              prev.set("PriceTo", value);
            }
            return prev;
          },
          { preventScrollReset: true },
        );
      }
    },
    [dispatch, setSearchParams],
  );

  const debouncedUpdateFilters = useCallback(debounce(updateFilters, 300), [
    updateFilters,
  ]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    debouncedUpdateFilters(value);
  };

  return (
    <Input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      placeholder="Price To"
    />
  );
});

CatalogPagePriceTo.displayName = "CatalogPagePriceTo";
export default CatalogPagePriceTo;
