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
};

const siteSlice = createSlice({
  name: "site",
  initialState,
  reducers: {
    toggleDesktopCat: (state, action) => {
      state.desktopCat = !state.desktopCat;
    },
    closeDesktopCat: (state, action) => {
      state.desktopCat = false;
    },
    toggleMobileCat: (state, action) => {
      state.mobileCat = !state.mobileCat;
    },
    closeMobileCat: (state, action) => {
      state.mobileCat = false;
    },
    setBreadcrumbs: (state, action) => {
      state.breadCrumbs = action.payload;
    },
    resetBreadcrumbs: (state, action) => {
      state.breadCrumbs = initialState.breadCrumbs;
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
} = siteSlice.actions;

export default siteSlice.reducer;

export const selectDesktopCat = (state) => state.site.desktopCat;
export const selectMobileCat = (state) => state.site.mobileCat;
export const selectBreadcrumbs = (state) => state.site.breadCrumbs;
