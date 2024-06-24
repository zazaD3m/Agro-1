import { countryFilter, sortFilter } from "@/data/filters-data";
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
    prev.set(filter, catalogFilter[filter]);
  } else {
    prev.delete(filter);
  }
};

const CatalogFilterStateAndUrlManager = memo(() => {
  const isFirstRender = useRef(true);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const catalogFilter = useSelector(selectCatalogFilter);

  const sortId = searchParams.get("sortId");
  const country = searchParams.get("country");

  useEffect(() => {
    // when user navigates to different page catalog => catalog/... filter state resets. (except initial render)
    if (isFirstRender.current) return;

    dispatch(resetCatalogFilter());
  }, [location.pathname, dispatch]);

  useEffect(() => {
    // when state changes this appends state into url (except initial render)
    if (isFirstRender.current) return;

    setSearchParams(
      (prev) => {
        stateToUrl(prev, "sortId", catalogFilter);
        stateToUrl(prev, "country", catalogFilter);
        return prev;
      },
      { preventScrollReset: true },
    );
  }, [catalogFilter]);

  useEffect(() => {
    if (!isFirstRender.current) return;
    // on initial load of catalog/... page check url and if there are filter parameters assign them to filter state

    const filters = {
      ...defaultFilter,
    };

    if (countryFilter.validate(country)) {
      filters.country = country;
    }
    if (sortFilter.validate(sortId)) {
      filters.sortId = sortId;
    }

    dispatch(setCatalogFilter(filters));
    isFirstRender.current = false;
  }, []);

  return null;
});

CatalogFilterStateAndUrlManager.displayName = "CatalogFilterStateAndUrlManager";
export default CatalogFilterStateAndUrlManager;
