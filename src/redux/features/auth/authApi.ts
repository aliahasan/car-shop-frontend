import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/user/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/user/register",
        method: "POST",
        body: userInfo,
      }),
    }),
    logout: builder.query({
      query: () => ({
        url: "/user/logout",
        method: "POST",
      }),
    }),
    changePassword: builder.mutation({
      query: (changePasswordInfo) => ({
        url: "/user/auth/update-password",
        method: "POST",
        body: changePasswordInfo,
      }),
    }),
  }),
});
export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutQuery,
  useChangePasswordMutation,
} = authApi;
export default authApi;
