/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

export const defaultFilter = {
  SortId: 1,
  SellerType: 1,
  LocId: 1,
  PriceFrom: "",
  PriceTo: "",
  Page: 1,
};

const initialState = {
  ...defaultFilter,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    resetFilter: (state, action) => {
      return {
        ...initialState,
        SortId: action.payload?.keepSort ? state.SortId : initialState.SortId,
      };
    },
  },
});

export const { setFilter, resetFilter } = filterSlice.actions;

export default filterSlice.reducer;

export const selectFilter = (state) => state.filter;
export const selectSortId = (state) => state.filter.SortId;
export const selectSellerType = (state) => state.filter.SellerType;
export const selectLocId = (state) => state.filter.LocId;
export const selectPriceFrom = (state) => state.filter.PriceFrom;
export const selectPriceTo = (state) => state.filter.PriceTo;
export const selectPage = (state) => state.filter.Page;
