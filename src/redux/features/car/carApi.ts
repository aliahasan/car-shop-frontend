import { baseApi } from "@/redux/api/baseApi";
import { TQueryParam } from "@/types";

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCars: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            if (item.value) {
              params.append(item.name, item.value as string);
            }
          });
        }
        return {
          url: "/cars/all-cars",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["cars"],
    }),
    getCarById: builder.query({
      query: (id) => ({
        url: `/cars/${id}`,
        method: "GET",
        providesTags: ["cars"],
      }),
    }),
  }),
});

export const { useGetAllCarsQuery, useGetCarByIdQuery } = carApi;
