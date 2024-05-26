import { apiSlice } from "../api/apiSlice";
import { clearToken, setToken } from "./authSlice";
import { clearUser, setUser } from "../user/userSlice";
import { AUTH_URL } from "@/constants/urls";
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
    sendPasswordResetEmail: builder.mutation({
      query: (email) => ({
        url: `${AUTH_URL}/forgot-password/send-email`,
        method: "POST",
        body: { email },
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ token, newPassword, email }) => ({
        url: `${AUTH_URL}/forgot-password/reset-password`,
        method: "POST",
        body: { token, newPassword, email },
      }),
    }),
    resetPasswordCheck: builder.mutation({
      query: ({ token }) => ({
        url: `${AUTH_URL}/forgot-password/check`,
        method: "POST",
        body: { token },
      }),
    }),
    verifyGoogleLogin: builder.mutation({
      query: (token) => ({
        url: `${AUTH_URL}/google/verify`,
        method: "POST",
        body: { googleToken: token },
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
    verifyFacebookLogin: builder.mutation({
      query: (token) => ({
        url: `${AUTH_URL}/facebook/verify`,
        method: "POST",
        body: { facebookToken: token },
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
  }),
});

export const {
  useLoginMutation,
  useAdminLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
  useResetPasswordMutation,
  useResetPasswordCheckMutation,
  useSendPasswordResetEmailMutation,
  useVerifyGoogleLoginMutation,
  useVerifyFacebookLoginMutation,
} = authApiSlice;
