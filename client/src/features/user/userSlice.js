/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    favorites: [2, 5],
  },
  reducers: {
    setUser: (state, action) => {
      const { userInfo } = action.payload;
      state.userInfo = userInfo;
    },
    clearUser: (state, action) => {
      state.userInfo = null;
    },
    addToFavorites: (state, action) => {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter((fav) => fav !== action.payload);
    },
  },
});

export const { setUser, clearUser, addToFavorites, removeFromFavorites } =
  userSlice.actions;

export default userSlice.reducer;

export const selectCurrentUser = (state) => state.user.userInfo;
export const selectFavoriteListings = (state) => state.user.favorites;
