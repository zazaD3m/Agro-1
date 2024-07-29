import { Input } from "@/components/ui/input";
import { PriceFilter } from "@/data/filters-data";
import {
  selectPriceFrom,
  selectPriceTo,
  setCatalogFilter,
} from "@/features/site/siteSlice";
import { useDebounce } from "@/hooks/useDebounce";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const PriceInput = ({ variant = "from", ...props }) => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const PriceFrom = useSelector(selectPriceFrom);
  const PriceTo = useSelector(selectPriceTo);
  const PriceUrl = searchParams.get(
    variant === "from" ? "PriceFrom" : "PriceTo",
  );
  const PriceState = variant === "from" ? PriceFrom : PriceTo;
  const [value, setValue] = useState(PriceUrl || "");
  const debouncedValue = useDebounce(value, 1000);
  const isInitialRender = useRef(true);
  const priceShouldDispatch = useRef(true);

  const handleInputChange = (e) => {
    const v = e.target.value;
    // Only update if the new value consists of digits or is empty
    if (v === "" || /^\d+$/.test(v)) {
      setValue(v);
    }
  };

  useEffect(() => {
    if (isInitialRender.current) {
      return;
    }
    console.log("PriceUrl", PriceUrl);
    console.log("debouncedValue", debouncedValue);
    if (PriceUrl !== debouncedValue) {
      setSearchParams(
        (prev) => {
          prev.set(
            variant === "from" ? "PriceFrom" : "PriceTo",
            debouncedValue,
          );
          return prev;
        },
        { preventScrollReset: true },
      );
    }
  }, [debouncedValue, PriceUrl]);

  // useEffect(() => {
  //   if (isInitialRender.current) {
  //     isInitialRender.current = false;
  //     return;
  //   }
  //   console.log("PriceUrl", PriceUrl);
  //   console.log("debouncedValue", debouncedValue);
  // }, [PriceUrl]);

  // useEffect(() => {
  //   if (isInitialRender.current) {
  //     if (PriceUrl !== value) {
  //       if (PriceFilter.validate(PriceUrl)) {
  //         setValue(PriceUrl);
  //       } else {
  //         setValue("");
  //       }
  //     }
  //     isInitialRender.current = false
  //     return;
  //   }
  // }, []);

  // useEffect(() => {
  //   if (isInitialRender.current) {
  //     isInitialRender.current = false;
  //     // on first render if we have price value in url, we set inputs value to that
  //     // and skip dispatching (by returning) to redux as it is already set
  //     // by state manager
  //     if (PriceUrl && PriceFilter.validate(PriceUrl)) {
  //       setValue(PriceUrl);
  //       priceShouldDispatch.current = false;
  //     }
  //     return;
  //   }
  //   if (!priceShouldDispatch.current) {
  //     priceShouldDispatch.current = true;
  //     return;
  //   }
  //   if (variant === "from") {
  //     dispatch(setCatalogFilter({ PriceFrom: debouncedValue }));
  //   } else if (variant === "to") {
  //     dispatch(setCatalogFilter({ PriceTo: debouncedValue }));
  //   }
  // }, [debouncedValue]);

  return (
    <Input
      type="text"
      variant="ghost"
      value={value}
      onChange={handleInputChange}
      className="rounded-none text-center"
      {...props}
    />
  );
};
export default PriceInput;
