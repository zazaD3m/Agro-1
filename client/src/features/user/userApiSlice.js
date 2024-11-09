/* eslint-disable no-unused-vars */
import { apiSlice } from "../api/apiSlice";
import { USERS_URL } from "@/constants/urls";
import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { clearUser, setUser } from "./userSlice";
import { clearToken } from "../auth/authSlice";

const usersAdapter = createEntityAdapter({
  selectId: (user) => user._id,
});

const initialState = usersAdapter.getInitialState();

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => `${USERS_URL}`,
      transformResponse: (responseData) => {
        return usersAdapter.setAll(initialState, responseData);
      },
      providesTags: (result, error, arg) =>
        result
          ? [
              { type: "Users", id: "LIST" },
              ...result.ids.map((id) => ({ type: "Users", id })),
            ]
          : [{ type: "Users", id: "LIST" }],
    }),
    getMe: builder.query({
      query: () => `${USERS_URL}/user`,
      providesTags: ["GetMe"], // Adds the 'GetMe' tag to this query
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          dispatch(setUser({ userInfo: res.data.userInfo }));
        } catch (error) {
          console.log("devERR:", error);
          dispatch(clearUser());
          dispatch(clearToken());
        }
      },
    }),
  }),
});

export const { useGetAllUsersQuery, useGetMeQuery } = userApiSlice;

export const selectUsersResult =
  userApiSlice.endpoints.getAllUsers.select("getAllUsers");

export const selectUsersData = createSelector(
  selectUsersResult,
  (usersResult) => usersResult.data,
);

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectEntities: selectUserEntities,
  selectIds: selectUserIds,
  selectTotal: selectTotalUsers,
} = usersAdapter.getSelectors(
  (state) => selectUsersData(state) ?? initialState,
);
