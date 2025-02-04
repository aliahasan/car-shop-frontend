import { baseApi } from "@/redux/api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyAllOrders: builder.query({
      query: (email) => ({
        url: `/order/get-my-orders/?email=${email}`,
        method: "GET",
      }),
      providesTags: ["my-orders"],
    }),
    cancelOrder: builder.mutation({
      query: (orderId) => ({
        url: `/order/cancel-order/?orderId=${orderId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["my-orders", "orders"],
    }),
    getMyself: builder.query({
      query: (email) => ({
        url: `/user/get-me/?email=${email}`,
        method: "GET",
      }),
      providesTags: ["me"],
    }),
    updateMyself: builder.mutation({
      query: ({ email, ...payload }) => ({
        url: `/user/update-myself/?email=${email}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["me", "users"],
    }),
  }),
});

export const {
  useGetMyAllOrdersQuery,
  useCancelOrderMutation,
  useGetMyselfQuery,
  useUpdateMyselfMutation,
} = userApi;
