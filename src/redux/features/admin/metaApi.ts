import { baseApi } from "@/redux/api/baseApi";

const adminMtaApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdminMeat: builder.query({
      query: () => ({
        url: "/admin-meta",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAdminMeatQuery } = adminMtaApi;
