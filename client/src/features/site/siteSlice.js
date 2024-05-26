/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const siteSlice = createSlice({
  name: "site",
  initialState: {
    desktopCat: false,
    mobileCat: false,
  },
  reducers: {
    toggleDesktopCat: (state, action) => {
      state.desktopCat = !state.desktopCat;
    },
    toggleMobileCat: (state, action) => {
      state.mobileCat = !state.mobileCat;
    },
    closeMobileCat: (state, action) => {
      state.mobileCat = false;
    },
  },
});

export const { toggleDesktopCat, toggleMobileCat, closeMobileCat } =
  siteSlice.actions;

export default siteSlice.reducer;

export const selectDesktopCat = (state) => state.site.desktopCat;
export const selectMobileCat = (state) => state.site.mobileCat;
