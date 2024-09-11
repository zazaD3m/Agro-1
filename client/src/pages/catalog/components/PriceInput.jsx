import { Input } from "@/components/ui/input";
import { PriceFilter } from "@/data/filters-data";
import {
  selectPriceFrom,
  selectPriceTo,
  setFilter,
} from "@/features/filter/filterSlice";
import { useDebounce } from "@/hooks/useDebounce";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const PriceInput = ({ variant = "from", ...props }) => {
  const dispatch = useDispatch();
  const PriceState = useSelector(
    variant === "from" ? selectPriceFrom : selectPriceTo,
  );
  const [searchParams] = useSearchParams();
  const defaultPrice = PriceFilter.validate(
    searchParams.get(variant === "from" ? "PriceFrom" : "PriceTo"),
  )
    ? searchParams.get(variant === "from" ? "PriceFrom" : "PriceTo")
    : "";
  const [localValue, setLocalValue] = useState(defaultPrice);
  const debouncedValue = useDebounce(localValue, 500);
  const isInitialRender = useRef(true);

  const handleInputChange = (e) => {
    const v = e.target.value;
    // Only update if the new value consists of digits or is empty
    if (v === "" || /^\d+$/.test(v)) {
      setLocalValue(v);
    }
  };

  useEffect(() => {
    if (isInitialRender.current) {
      return;
    }
    if (PriceState !== debouncedValue) {
      // when price state changes by going back or forward or navigating page update input's local value to updated state value
      setLocalValue(PriceState);
    }
  }, [PriceState]);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    if (debouncedValue !== PriceState) {
      // dispatch inputs value to redux's state if it's new value
      dispatch(
        setFilter(
          variant === "from"
            ? { PriceFrom: debouncedValue }
            : { PriceTo: debouncedValue },
        ),
      );
    }
  }, [debouncedValue, dispatch]);

  return (
    <Input
      type="text"
      variant="ghost"
      value={localValue}
      onChange={handleInputChange}
      className="rounded-none text-center"
      {...props}
    />
  );
};
export default PriceInput;
