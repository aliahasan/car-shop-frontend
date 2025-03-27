import { baseApi } from "@/redux/api/baseApi";

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCars: builder.query({
      query: (query) => {
        const params = Object.fromEntries(new URLSearchParams(query));
        return {
          url: "/cars/all-cars",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["cars"],
    }),
    getAllCarCategories: builder.query({
      query: () => ({
        url: "/cars/categories",
        method: "GET",
      }),
    }),
    getAllBrands: builder.query({
      query: () => ({
        url: "/cars/brands",
        method: "GET",
      }),
    }),
    getCarById: builder.query({
      query: (id) => ({
        url: `/cars/${id}`,
        method: "GET",
        providesTags: ["cars"],
      }),
    }),

    getReconditionCars: builder.query({
      query: () => ({
        url: "/cars/recondition",
        method: "GET",
        providesTags: ["cars"],
      }),
    }),
  }),
});

export const {
  useGetAllCarsQuery,
  useGetCarByIdQuery,
  useGetAllCarCategoriesQuery,
  useGetAllBrandsQuery,
} = carApi;
