import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";
import siteReducer from "../features/site/siteSlice";
import { apiSlice } from "../features/api/apiSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  site: siteReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export default rootReducer;
