/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const siteSlice = createSlice({
  name: "site",
  initialState: {
    desktopCat: false,
    mobileCat: false,
    breadcrumbs: [
      {
        link: "catalog",
        name: "კატალოგი",
      },
    ],
  },
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
      state.breadcrumbs = action.payload;
    },
    resetBreadcrumbs: (state, action) => {
      state.breadcrumbs = [
        {
          link: "catalog",
          name: "კატალოგი",
        },
      ];
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
export const selectBreadcrumbs = (state) => state.site.breadcrumbs;
