/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

export const defaultFilter = {
  SortId: "1",
  SellerType: "1",
  country: "ge",
};

const initialState = {
  desktopCat: false,
  mobileCat: false,
  breadCrumbs: {
    mainCat: null,
    subCat: null,
    cat: null,
    title: null,
  },
  catalogFilter: defaultFilter,
};

const siteSlice = createSlice({
  name: "site",
  initialState,
  reducers: {
    toggleDesktopCat: (state) => {
      state.desktopCat = !state.desktopCat;
    },
    closeDesktopCat: (state) => {
      state.desktopCat = false;
    },
    toggleMobileCat: (state) => {
      state.mobileCat = !state.mobileCat;
    },
    closeMobileCat: (state) => {
      state.mobileCat = false;
    },
    setBreadcrumbs: (state, action) => {
      state.breadCrumbs = action.payload;
    },
    resetBreadcrumbs: (state) => {
      state.breadCrumbs = initialState.breadCrumbs;
    },
    setCatalogFilter: (state, action) => {
      state.catalogFilter = {
        ...state.catalogFilter,
        ...action.payload,
      };
    },
    resetCatalogFilter: (state) => {
      state.catalogFilter = initialState.catalogFilter;
    },
  },
});

export const {
  toggleDesktopCat,
  closeDesktopCat,
  toggleMobileCat,
  closeMobileCat,
  setBreadcrumbs,
  resetBreadcrumbs,
  setCatalogFilter,
  resetCatalogFilter,
} = siteSlice.actions;

export default siteSlice.reducer;

export const selectDesktopCat = (state) => state.site.desktopCat;
export const selectMobileCat = (state) => state.site.mobileCat;
export const selectBreadcrumbs = (state) => state.site.breadCrumbs;
// Filters
export const selectCatalogFilter = (state) => state.site.catalogFilter;
export const selectSortId = (state) => state.site.catalogFilter.SortId;
export const selectSellerType = (state) => state.site.catalogFilter.SellerType;
export const selectCountry = (state) => state.site.catalogFilter.country;
