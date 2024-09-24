import { apiSlice } from "../api/apiSlice";
import { GENERAL_URL } from "@/constants/urls";

// this will inject endpoints into main apiSlice
const generalApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    contact: builder.mutation({
      query: (data) => ({
        url: `${GENERAL_URL}/contact`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useContactMutation } = generalApiSlice;
