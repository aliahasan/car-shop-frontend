import { baseApi } from "@/redux/api/baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCar: builder.mutation({
      query: (payload) => ({
        url: "/cars/create-car",
        method: "POST",
        body: payload,
      }),
    }),
    updateCar: builder.mutation({
      query: (payload) => ({
        url: `/cars/update/`,
        method: "PUT",
        body: payload,
      }),
    }),
    deleteCar: builder.mutation({
      query: (id) => ({
        url: `/cars/delete/${id}`,
        method: "DELETE",
      }),
    }),
    getAllOrders: builder.query({
      query: () => ({
        url: "/all-orders",
        method: "GET",
      }),
    }),
    updateOrderStatus: builder.mutation({
      query: (payload) => ({
        url: "/admin/update-order-status",
        method: "PATCh",
        body: payload,
      }),
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: "/admin/get-all-users",
        method: "GET",
      }),
    }),
    blockUser: builder.mutation({
      query: (payload) => ({
        url: "/admin-change-status",
        method: "PATCH",
        body: payload,
      }),
    }),
  }),
});

export const {
  useCreateCarMutation,
  useUpdateCarMutation,
  useDeleteCarMutation,
  useGetAllOrdersQuery,
  useUpdateOrderStatusMutation,
  useGetAllUsersQuery,
  useBlockUserMutation,
} = adminApi;
