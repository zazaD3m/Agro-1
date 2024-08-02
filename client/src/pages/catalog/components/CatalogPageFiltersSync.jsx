import {
  LocationFilter,
  PageFilter,
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
import { useLocation, useSearchParams } from "react-router-dom";

const getFilterStateFromSearchParams = (searchParams) => {
  const filters = { ...defaultFilter };
  const SellerType = searchParams.get("SellerType");
  const SortId = searchParams.get("SortId");
  const LocId = searchParams.get("LocId");
  const PriceFrom = searchParams.get("PriceFrom");
  const PriceTo = searchParams.get("PriceTo");
  const Page = searchParams.get("Page");

  if (SellerFilter.validate(SellerType)) {
    filters.SellerType = SellerType;
  }
  if (SortFilter.validate(SortId)) {
    filters.SortId = SortId;
  }
  if (LocationFilter.validate(LocId)) {
    filters.LocId = LocId;
  }
  if (PriceFilter.validate(PriceFrom)) {
    filters.PriceFrom = PriceFrom;
  }
  if (PriceFilter.validate(PriceTo)) {
    filters.PriceTo = PriceTo;
  }
  if (PageFilter.validate(Page)) {
    filters.Page = parseInt(Page, 10);
  }

  return filters;
};

const stateToUrl = (prev, filter, filtersState) => {
  if (defaultFilter[filter] !== filtersState[filter]) {
    // we only set state to url if it isn't equal to default value
    prev.set(filter, filtersState[filter]);
  } else {
    if (prev.has(filter)) {
      // if state changed from some value to default value we remove
      // it from url... SortId=4 => SortId=1(default).. we remove SortId=4
      prev.delete(filter);
    }
  }
};

const CatalogPageFiltersSync = () => {
  const dispatch = useDispatch();
  const { search } = useLocation();
  const filtersState = useSelector(selectCatalogFilter);
  const isInitialRender = useRef(true);
  const oldFiltersUrl = useRef(null);
  const oldFiltersState = useRef(filtersState);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    return () => {
      dispatch(resetCatalogFilter());
    };
  }, []);

  useEffect(() => {
    const filtersUrl = getFilterStateFromSearchParams(searchParams);
    if (isInitialRender.current) {
      if (searchParams.size !== 0) {
        if (!shallowEqual(filtersState, filtersUrl)) {
          // on initial render if there is valid filter in url assign it to redux filter state
          dispatch(setCatalogFilter(filtersUrl));
        }
      }
      oldFiltersUrl.current = filtersUrl;
      oldFiltersState.current = filtersUrl;
      isInitialRender.current = false;
      return;
    }

    if (shallowEqual(filtersUrl, filtersState)) {
      // skip effects when state and url are already in sync
      return;
    }

    if (!shallowEqual(filtersState, oldFiltersState.current)) {
      // when redux filter state change is caused by user interaction (selecting filter) update url with redux filter state
      setSearchParams(
        (prev) => {
          stateToUrl(prev, "SellerType", filtersState);
          stateToUrl(prev, "SortId", filtersState);
          stateToUrl(prev, "LocId", filtersState);
          stateToUrl(prev, "PriceFrom", filtersState);
          stateToUrl(prev, "PriceTo", filtersState);
          stateToUrl(prev, "Page", filtersState);
          oldFiltersUrl.current = getFilterStateFromSearchParams(prev);
          return prev;
        },
        { preventScrollReset: true },
      );
      oldFiltersState.current = filtersState;
      return;
    }

    if (!shallowEqual(filtersUrl, oldFiltersUrl.current)) {
      // on browser back and forward buttons takes state from url and appends syncs with redux
      // on in site navigation using Link to /catalog... takes state from empty url and basically resets redux state to default
      dispatch(setCatalogFilter(filtersUrl));
      oldFiltersState.current = filtersUrl;
      oldFiltersUrl.current = filtersUrl;
      return;
    }
  }, [search, filtersState]);

  return null;
};

export default CatalogPageFiltersSync;
