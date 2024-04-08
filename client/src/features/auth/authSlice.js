import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  // state.auth
  name: "auth",
  initialState: { token: null },
  reducers: {
    // state.token === state.auth.token
    setToken: (state, action) => {
      const { accessToken } = action.payload;
      state.token = accessToken;
    },
    // eslint-disable-next-line no-unused-vars
    clearToken: (state, action) => {
      state.token = null;
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state) => state.auth.token;
