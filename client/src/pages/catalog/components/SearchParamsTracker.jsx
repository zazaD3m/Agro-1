import {
  LocationFilter,
  PriceFilter,
  SellerFilter,
  SortFilter,
} from "@/data/filters-data";
import {
  defaultFilter,
  resetCatalogFilter,
  selectCatalogFilter,
  setCatalogFilter,
} from "@/features/site/siteSlice";
import { useEffect, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const getFilterStateFromSearchParams = (searchParams) => {
  const filters = { ...defaultFilter };
  const SortId = searchParams.get("SortId");
  const LocId = searchParams.get("LocId");
  const SellerType = searchParams.get("SellerType");
  const PriceFrom = searchParams.get("PriceFrom");
  const PriceTo = searchParams.get("PriceTo");

  if (SortFilter.validate(SortId)) {
    filters.SortId = SortId;
  }
  if (LocationFilter.validate(LocId)) {
    filters.LocId = LocId;
  }
  if (SellerFilter.validate(SellerType)) {
    filters.SellerType = SellerType;
  }
  if (PriceFilter.validate(PriceFrom)) {
    filters.PriceFrom = PriceFrom;
  }
  if (PriceFilter.validate(PriceTo)) {
    filters.PriceTo = PriceTo;
  }

  return filters;
};

const SearchParamsTracker = () => {
  const dispatch = useDispatch();
  const filterState = useSelector(selectCatalogFilter);
  const location = useLocation();
  const isInitialRender = useRef(true);

  useEffect(() => {
    const currentSearch = location.search;
    const searchParams = new URLSearchParams(currentSearch);
    const filters = getFilterStateFromSearchParams(searchParams);
    if (isInitialRender.current) {
      if (searchParams.size === 0) {
        // if it is initial render and there are no searchParams reset filterState to default
        console.log("resetFilter, initialRender && no searchParams");
        dispatch(resetCatalogFilter());
        isInitialRender.current = false;
      } else {
        // if it is initial render and there are searchParams dispatch filters
        console.log("setFilter, initialRender");
        dispatch(setCatalogFilter(filters));
        isInitialRender.current = false;
      }
      return;
    }
    if (shallowEqual(filters, filterState)) {
      // checks if filterState is up to date with searchParams
      // if it is no further functions are required
      console.log("skipped, shallowEqual=true");
      return;
    }

    // runs when back and forward button changes searchParams
    if (searchParams.size === 0) {
      // resets state to default
      console.log("reset, no searchParams");
      dispatch(resetCatalogFilter());
    } else {
      // if redux state is behind url dispatch new filter state
      console.log("setFilter, searchParams !== filterState");
      dispatch(setCatalogFilter(filters));
    }
  }, [location.search]);

  return null;
};
export default SearchParamsTracker;
