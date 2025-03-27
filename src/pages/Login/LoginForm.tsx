/* eslint-disable @typescript-eslint/no-explicit-any */
import loginImage from "@/assets/login.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { clearCart } from "@/redux/features/cart/CartSlice";
import { useAppDispatch } from "@/redux/hook";
import { verifyToken } from "@/utils/verifyToken";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "./LoginValidation";

type Credentials = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [loginData, { isLoading }] = useLoginMutation();
  const credentials = {
    user: { email: "hasan@gmail.com", password: "hasan" },
    admin: { email: "nabin@gmail.com", password: "nabin123" },
  };

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const fillCredentials = (role: keyof typeof credentials) => {
    form.setValue("email", credentials[role].email);
    form.setValue("password", credentials[role].password);
  };

  const handleSubmit = async (data: Credentials) => {
    const toastId = toast.loading("login in...");
    try {
      const res = await loginData(data).unwrap();
      const user = verifyToken(res?.data as string);
      if (!user) {
        toast.error("Invalid credentials", { id: toastId });
        return;
      }
      toast.success("Login success", { id: toastId });
      dispatch(clearCart());
      dispatch(setUser({ user: user, token: res.data }));
      navigate("/");
    } catch (error: any) {
      if (error.data && error.data.error) {
        const errorMessage = error.data.message || "Failed to login";
        toast.error(errorMessage, { id: toastId });
      } else {
        toast.error("Failed to login", { id: toastId });
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full items-center justify-center gap-6 p-4 md:p-10">
      <div>
        <img src={loginImage} alt="login image" className="w-96" />
      </div>
      <Card className="shadow-none border p-4">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">
            Sign in to your account
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-gray-700">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="your.email@example.com"
                        autoComplete="username"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="••••••••"
                        autoComplete="current-password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-2 py-3">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => fillCredentials("user")}
                  className="flex-1"
                >
                  User Credentials
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => fillCredentials("admin")}
                  className="flex-1"
                >
                  Admin Credentials
                </Button>
              </div>

              <div>
                <Button type="submit" className="w-full bg-my-btn_clr ">
                  {isLoading ? "Please wait..." : "Sign in"}
                </Button>
              </div>
            </form>
          </Form>

          <p className="px-8 text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="underline underline-offset-4 text-blue-600"
            >
              Register
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
