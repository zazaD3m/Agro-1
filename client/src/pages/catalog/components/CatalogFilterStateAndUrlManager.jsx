import { countryFilter, SellerFilter, SortFilter } from "@/data/filters-data";
import {
  resetCatalogFilter,
  setCatalogFilter,
  defaultFilter,
  selectCatalogFilter,
} from "@/features/site/siteSlice";
import { memo, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";

const stateToUrl = (prev, filter, catalogFilter) => {
  if (defaultFilter[filter] !== catalogFilter[filter]) {
    // we only set state to url if it isn't equal to default value
    prev.set(filter, catalogFilter[filter]);
  } else {
    if (prev.has(filter)) {
      // if state changed from some value to default value we remove
      // it from url... SortId=4 => SortId=1(default).. we remove SortId=4
      prev.delete(filter);
    }
  }
};

const urlToState = (searchParams) => {
  const filters = { ...defaultFilter };
  const country = searchParams.get("country");
  const SortId = searchParams.get("SortId");
  const SellerType = searchParams.get("SellerType");

  if (countryFilter.validate(country)) {
    filters.country = country;
  }
  if (SortFilter.validate(SortId)) {
    filters.SortId = SortId;
  }
  if (SellerFilter.validate(SellerType)) {
    filters.SellerType = SellerType;
  }

  return filters;
};

/*
  =========== useEffect #1 ===========
  runs when url changes 
  ### /catalog => /catalog/1 ### 
  // resets state to default

  =========== useEffect #2 ===========
  runs when state changes (except when it changes from useEffect #3)
  // sets searchParams from state
            
  =========== useEffect #3 ===========
  runs when searchParams change (only when changed using back or forward button)
  // sets state from searchParams

  =========== useEffect #4 ===========
  runs on onMount and on unMount
  // if there are searchParams sets them to state
  // resets state to default on unMount

*/

const CatalogFilterStateAndUrlManager = memo(() => {
  const isFirstRender = useRef(true); // onMount allows only useEffect #4 to run
  const isSecondRender = useRef(false); // onMount when useEffect #4 changes state this makes useEffect #2 to skip running
  const shouldUrlToStateRun = useRef(false); // after useEffect #2 sets searchParams prevents useEffect #3 from running
  const shouldStateToUrlRun = useRef(true); // after useEffect #3 sets state prevents useEffect #2 from running
  const location = useLocation();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const catalogFilter = useSelector(selectCatalogFilter);

  // useEffect #1
  useEffect(() => {
    // when user navigates to different page catalog/1 => catalog/2 filter state resets. (except initial render)
    if (isFirstRender.current) return;

    shouldUrlToStateRun.current = false; // prevent useEffect #2 running after state reset
    dispatch(resetCatalogFilter());
  }, [location.pathname, dispatch]);

  // useEffect #2
  useEffect(() => {
    // when state changes this appends state into url (except initial render)
    if (isFirstRender.current) return;
    if (isSecondRender.current) {
      // skip this useEffect when useEffect #4 sets initial state from url
      isSecondRender.current = false;
      if (searchParams.size !== 0) {
        return;
      }
    }
    if (!shouldStateToUrlRun.current) {
      // skip this useEffect when useEffect #3 sets state from url
      shouldStateToUrlRun.current = true;
      return;
    }

    setSearchParams(
      (prev) => {
        stateToUrl(prev, "SortId", catalogFilter);
        stateToUrl(prev, "SellerType", catalogFilter);
        stateToUrl(prev, "country", catalogFilter);
        shouldUrlToStateRun.current = false; // prevent useEffect #3 from running
        return prev;
      },
      { preventScrollReset: true },
    );
  }, [catalogFilter]);

  // useEffect #3
  useEffect(() => {
    // runs only when back or forward button are pressed
    if (!shouldUrlToStateRun.current) {
      shouldUrlToStateRun.current = true;
      return;
    }

    shouldStateToUrlRun.current = false; // prevents useEffect #2 from running after this changes state
    const filters = urlToState(searchParams);
    dispatch(setCatalogFilter(filters));
  }, [location.search]);

  // useEffect #4
  useEffect(() => {
    // on initial load of catalog/... page check url and if there are filter parameters assign them to filter state
    if (!isFirstRender.current) return;

    if (searchParams.size > 0) {
      const filters = urlToState(searchParams);
      dispatch(setCatalogFilter(filters));
    }

    isFirstRender.current = false;
    isSecondRender.current = true;
    return () => {
      // when user goes to different route other than /catalog* we reset filter
      dispatch(resetCatalogFilter());
    };
  }, []);

  return null;
});

CatalogFilterStateAndUrlManager.displayName = "CatalogFilterStateAndUrlManager";
export default CatalogFilterStateAndUrlManager;
