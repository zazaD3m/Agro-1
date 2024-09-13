/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  desktopCat: false,
  mobileCat: false,
  desktopFavoritesModal: false,
  mobileFavoritesModal: false,
  breadCrumbs: {
    mainCat: null,
    subCat: null,
    cat: null,
    title: null,
  },
  totalProductCount: 20,
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
    toggleDesktopFavoritesModal: (state) => {
      state.desktopFavoritesModal = !state.desktopFavoritesModal;
    },
    closeDesktopFavoritesModal: (state) => {
      state.desktopFavoritesModal = false;
    },
    toggleMobileFavoritesModal: (state) => {
      state.mobileFavoritesModal = !state.mobileFavoritesModal;
    },
    closeMobileFavoritesModal: (state) => {
      state.mobileFavoritesModal = false;
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
    setTotalProductCount: (state, action) => {
      state.totalProductCount = action.payload;
    },
  },
});

export const {
  toggleDesktopCat,
  closeDesktopCat,
  toggleMobileCat,
  closeMobileCat,
  toggleDesktopFavoritesModal,
  closeDesktopFavoritesModal,
  toggleMobileFavoritesModal,
  closeMobileFavoritesModal,
  setBreadcrumbs,
  resetBreadcrumbs,
  setTotalProductCount,
} = siteSlice.actions;

export default siteSlice.reducer;

export const selectDesktopCat = (state) => state.site.desktopCat;
export const selectMobileCat = (state) => state.site.mobileCat;
export const selectDesktopFavoritesModal = (state) =>
  state.site.desktopFavoritesModal;
export const selectMobileFavoritesModal = (state) =>
  state.site.mobileFavoritesModal;
export const selectBreadcrumbs = (state) => state.site.breadCrumbs;
export const selectTotalProductCount = (state) => state.site.totalProductCount;
