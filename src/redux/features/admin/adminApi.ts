import { baseApi } from "@/redux/api/baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCar: builder.mutation({
      query: (payload) => ({
        url: "/cars/create-car",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["cars"],
    }),
    updateCar: builder.mutation({
      query: ({ carId, ...payload }) => ({
        url: `/cars/update/${carId}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["cars"],
    }),
    deleteCar: builder.mutation({
      query: (id) => ({
        url: `/cars/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cars"],
    }),
    getAllOrders: builder.query({
      query: () => ({
        url: "/admin/all-orders",
        method: "GET",
      }),
      providesTags: ["orders"],
    }),
    updateOrderStatus: builder.mutation({
      query: ({ orderId, ...data }) => ({
        url: `/admin/update-order-status/?orderId=${orderId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["orders"],
    }),

    getAllUsers: builder.query({
      query: () => ({
        url: "/admin/all-users",
        method: "GET",
      }),
      providesTags: ["users"],
    }),
    blockUser: builder.mutation({
      query: ({ userId, ...payload }) => ({
        url: `/admin/change-status/${userId}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["users"],
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
