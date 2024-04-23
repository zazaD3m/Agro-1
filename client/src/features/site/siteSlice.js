/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const siteSlice = createSlice({
  name: "site",
  initialState: {
    isDesktopCatOpen: false,
  },
  reducers: {
    toggleDesktopCat: (state, action) => {
      state.isDesktopCatOpen = !state.isDesktopCatOpen;
    },
  },
});

export const { toggleDesktopCat } = siteSlice.actions;

export default siteSlice.reducer;

export const selectDesktopCatInfo = (state) => state.site.isDesktopCatOpen;
