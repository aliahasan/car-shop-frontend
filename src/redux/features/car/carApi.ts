import { baseApi } from "@/redux/api/baseApi";

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCars: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item) => {
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
    }),
  }),
});

export const { useGetAllCarsQuery } = carApi;
