import { createSlice } from "@reduxjs/toolkit";
// site slice that gets persisted in local storage

const sitePersistedSlice = createSlice({
  name: "sitePersisted",
  initialState: { CatalogViewType: "grid" },
  reducers: {
    toggleCatalogViewType: (state, action) => {
      state.CatalogViewType = action.payload;
    },
  },
});

export const { toggleCatalogViewType } = sitePersistedSlice.actions;

export default sitePersistedSlice.reducer;

export const selectCatalogViewType = (state) =>
  state.sitePersisted.CatalogViewType;
