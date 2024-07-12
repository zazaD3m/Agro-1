import { Input } from "@/components/ui/input";
import { PriceFilter } from "@/data/filters-data";
import { setCatalogFilter } from "@/features/site/siteSlice";
import { useDebounce } from "@/hooks/useDebounce";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

const PriceInput = ({ variant = "from", ...props }) => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const PriceUrl = searchParams.get(
    variant === "from" ? "PriceFrom" : "PriceTo",
  );
  const isFirstRender = useRef(true);
  const priceShouldDispatch = useRef(true);
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 1000);

  const handleInputChange = (e) => {
    const v = e.target.value;
    // Only update if the new value consists of digits or is empty
    if (v === "" || /^\d+$/.test(v)) {
      setValue(v);
    }
  };

  useEffect(() => {
    if (isFirstRender.current) {
      return;
    }
    // when using browsers back and forward buttons we check for price value in url
    // if that value isn't already set we set it and than prevent next useEffect
    // from running
    if (PriceUrl !== value) {
      if (PriceFilter.validate(PriceUrl)) {
        setValue(PriceUrl);
      } else {
        setValue("");
      }
      priceShouldDispatch.current = false;
    }
  }, [PriceUrl]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      // on first render if we have price value in url, we set inputs value to that
      // and skip dispatching (by returning) to redux as it is already set
      // by state manager
      if (PriceUrl && PriceFilter.validate(PriceUrl)) {
        setValue(PriceUrl);
        priceShouldDispatch.current = false;
      }
      return;
    }
    if (!priceShouldDispatch.current) {
      priceShouldDispatch.current = true;
      return;
    }
    if (variant === "from") {
      dispatch(setCatalogFilter({ PriceFrom: debouncedValue }));
    } else if (variant === "to") {
      dispatch(setCatalogFilter({ PriceTo: debouncedValue }));
    }
  }, [debouncedValue]);

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
