/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const siteSlice = createSlice({
  name: "site",
  initialState: {
    desktopCat: false,
  },
  reducers: {
    toggleDesktopCat: (state, action) => {
      state.desktopCat = !state.desktopCat;
    },
  },
});

export const { toggleDesktopCat } = siteSlice.actions;

export default siteSlice.reducer;

export const selectDesktopCat = (state) => state.site.desktopCat;
