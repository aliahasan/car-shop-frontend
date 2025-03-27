import { baseApi } from "@/redux/api/baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllService: builder.query({
      query: () => ({
        url: "/blog/blog",
      }),
      providesTags: ["blog"],
    }),
    createService: builder.mutation({
      query: (data) => ({
        url: "/blog/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["blog"],
    }),

    getSingleService: builder.query({
      query: (blogId) => ({
        url: `/blog/${blogId}`,
        method: "GET",
      }),
      providesTags: ["blog"],
    }),
    updateService: builder.mutation({
      query: (blogId) => ({
        url: `/blog/${blogId}`,
        method: "PATCH",
        providesTags: ["blog"],
      }),
    }),
    deleteService: builder.query({
      query: (blogId) => ({
        url: `/blog/${blogId}`,
        method: "DELETE",
        providesTags: ["blog"],
      }),
    }),
  }),
});

export const {
  useGetAllServiceQuery,
  useCreateServiceMutation,
  useUpdateServiceMutation,
  useGetSingleServiceQuery,
  useDeleteServiceQuery,
} = blogApi;
