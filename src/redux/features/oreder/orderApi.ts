import { baseApi } from "@/redux/api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    crateOrder: builder.mutation({
      query: (orderInfo) => ({
        url: "/order/create-order",
        method: "POST",
        body: orderInfo,
      }),
    }),
    verifyOrder: builder.query({
      query: (order_id) => ({
        url: "/order/verify",
        method: "GET",
        params: { order_id },
      }),
    }),
  }),
});

export const { useCrateOrderMutation, useVerifyOrderQuery } = orderApi;
