import { baseApi } from "@/redux/api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyAllOrders: builder.query({
      query: () => ({
        url: "/order/get-my-orders",
        method: "GET",
      }),
    }),
    cancelOrder: builder.mutation({
      query: (order_id) => ({
        url: `/order/cancel-order/${order_id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetMyAllOrdersQuery, useCancelOrderMutation } = userApi;
