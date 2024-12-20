/* eslint-disable no-unused-vars */
import { apiSlice } from "../api/apiSlice";
import { PRODUCTS_URL } from "@/constants/urls";
import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";

const productsAdapter = createEntityAdapter({
  selectId: (product) => product._id,
});

const initialState = productsAdapter.getInitialState();

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `${PRODUCTS_URL}`,
      transformResponse: (responseData) => {
        return productsAdapter.setAll(initialState, responseData);
      },
      providesTags: (result, error, arg) =>
        result
          ? [
              { type: "Products", id: "LIST" },
              ...result.ids.map((id) => ({ type: "Products", id })),
            ]
          : [{ type: "Products", id: "LIST" }],
    }),
    getMyProducts: builder.query({
      query: () => `${PRODUCTS_URL}/user-products`,
      providesTags: ["GetMyProducts"],
    }),
    addNewProduct: builder.mutation({
      query: (userInput) => ({
        url: `${PRODUCTS_URL}`,
        method: "POST",
        body: { ...userInput },
      }),
      invalidatesTags: ["GetMyProducts", "GetMe"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useAddNewProductMutation,
  useGetMyProductsQuery,
} = productApiSlice;

export const selectProductsResult =
  productApiSlice.endpoints.getAllProducts.select("getAllProducts");

export const selectProductsData = createSelector(
  selectProductsResult,
  (productsResult) => productsResult.data,
);

export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  selectEntities: selectProductEntities,
  selectIds: selectProductIds,
  selectTotal: selectTotalProducts,
} = productsAdapter.getSelectors(
  (state) => selectProductsData(state) ?? initialState,
);
