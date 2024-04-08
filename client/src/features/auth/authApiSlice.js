import { apiSlice } from "../api/apiSlice";
import { clearToken, setToken } from "./authSlice";
import { clearUser, setUser } from "../user/userSlice";
import { AUTH_URL } from "../../lib/constants";
import { userApiSlice } from "../user/userApiSlice";

// this will inject endpoints into main apiSlice
const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInput) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        body: { ...userInput },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          const { accessToken } = res.data;
          dispatch(setToken({ accessToken }));
          dispatch(userApiSlice.endpoints.getMe.initiate());
        } catch (err) {
          console.log("devERR:", err);
          dispatch(clearToken());
          dispatch(clearUser());
        }
      },
    }),
    adminLogin: builder.mutation({
      query: (userInput) => ({
        url: `${AUTH_URL}/admin-login`,
        method: "POST",
        body: { ...userInput },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          const { accessToken } = res.data;
          dispatch(setToken({ accessToken }));
          dispatch(userApiSlice.endpoints.getMe.initiate());
        } catch (err) {
          console.log("devERR:", err);
          dispatch(clearToken());
          dispatch(clearUser());
        }
      },
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${AUTH_URL}/logout`,
        method: "POST",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(clearToken());
          dispatch(clearUser());
          dispatch(apiSlice.util.resetApiState());
        } catch (err) {
          console.log("devERR:", err);
          dispatch(clearToken());
          dispatch(clearUser());
        }
      },
    }),
    register: builder.mutation({
      query: (userInput) => ({
        url: `${AUTH_URL}/register`,
        method: "POST",
        body: { ...userInput },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          const { accessToken } = res.data;
          dispatch(setToken({ accessToken }));
          dispatch(userApiSlice.endpoints.getMe.initiate());
        } catch (err) {
          console.log("devErr:", err);
          dispatch(clearToken());
          dispatch(clearUser());
        }
      },
    }),
    updateUser: builder.mutation({
      query: (userInput) => ({
        url: `${AUTH_URL}/update`,
        method: "PUT",
        body: { ...userInput },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          const { userInfo } = res.data;
          dispatch(setUser({ userInfo }));
        } catch (err) {
          console.log("devErr:", err);
        }
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useAdminLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
} = authApiSlice;
