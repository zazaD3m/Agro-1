import { apiSlice } from "../api/apiSlice";
import { PRODUCT_IMAGES_URL } from "@/constants/urls";

const imagesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    uploadProductImage: builder.mutation({
      query: (data) => ({
        url: `${PRODUCT_IMAGES_URL}/upload-temp-image`,
        method: "POST",
        body: data,
        formData: true,
      }),
    }),
    deleteImage: builder.mutation({
      query: (data) => ({
        url: `${PRODUCT_IMAGES_URL}`,
        method: "DELETE",
        body: data,
      }),
    }),
  }),
});

export const { useUploadProductImageMutation, useDeleteImageMutation } =
  imagesApiSlice;
