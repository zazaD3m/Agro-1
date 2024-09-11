/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  desktopCat: false,
  mobileCat: false,
  breadCrumbs: {
    mainCat: null,
    subCat: null,
    cat: null,
    title: null,
  },
  totalListingCount: 20,
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
    setTotalListingCount: (state, action) => {
      state.totalListingCount = action.payload;
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
  setTotalListingCount,
} = siteSlice.actions;

export default siteSlice.reducer;

export const selectDesktopCat = (state) => state.site.desktopCat;
export const selectMobileCat = (state) => state.site.mobileCat;
export const selectBreadcrumbs = (state) => state.site.breadCrumbs;
export const selectTotalListingCount = (state) => state.site.totalListingCount;
