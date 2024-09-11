import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";
import siteReducer from "../features/site/siteSlice";
import filterReducer from "../features/filter/filterSlice";
import sitePersistedReducer from "../features/site/sitePersistedSlice";
import { apiSlice } from "../features/api/apiSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  site: siteReducer,
  sitePersisted: sitePersistedReducer,
  filter: filterReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export default rootReducer;
