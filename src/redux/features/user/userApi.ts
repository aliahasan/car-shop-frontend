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
      invalidatesTags: ["orders", "my-orders"],
    }),
  }),
});

export const { useGetMyAllOrdersQuery, useCancelOrderMutation } = userApi;
