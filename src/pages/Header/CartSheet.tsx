/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  selectCurrentToken,
  selectedUser,
} from "@/redux/features/auth/authSlice";
import {
  removeFromCart,
  updateQuantity,
} from "@/redux/features/cart/CartSlice";
import { useCrateOrderMutation } from "@/redux/features/oreder/orderApi";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { ShoppingBag } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CartSheet = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector(selectedUser);
  const cartData = useAppSelector((state) => state.cart);
  const token = useAppSelector(selectCurrentToken);
  const orderInfo = cartData?.items.map((item) => ({
    car: item.car,
    quantity: item.quantity,
  }));
  const [createOrder, { isLoading }] = useCrateOrderMutation();

  const handlePlaceOrder = async () => {
    if (!user || !token) {
      toast.error("Please login before to place an order");
      navigate("/login");
      return;
    }

    const order = {
      cars: orderInfo,
    };

    const toastId = toast.loading("Processing your order...");

    try {
      const response = await createOrder(order).unwrap();
      if (response?.data) {
        toast.success("Order placed successfully!", { id: toastId });
        window.location.href = response.data;
      }
    } catch (error: any) {
      if (error.data && error.data.error) {
        const errorMessage = error.data.message || "Failed to place order";
        toast.error(errorMessage, { id: toastId });
      } else {
        toast.error("Failed to place order", { id: toastId });
      }
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="relative cursor-pointer">
          <ShoppingBag className="h-6 w-6 text-white mr-4 lg:mr-6 items-centers" />
          {cartData.totalQuantity > 0 && (
            <Badge className="absolute -top-4 right-2 bg-white text-black rounded-full text-xs p-1 min-w-[24px] min-h-[24px] flex items-center justify-center shadow-lg">
              {cartData.totalQuantity}
            </Badge>
          )}
        </div>
      </SheetTrigger>

      <SheetContent className="flex flex-col gap-4 p-6 bg-white max-w-md">
        <SheetHeader className="border-b pb-4">
          <SheetTitle className="text-xl font-semibold">
            Your Shopping Cart
          </SheetTitle>
          <SheetDescription className="text-sm text-gray-500">
            Review your items and proceed to checkout.
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto">
          {cartData.items.length > 0 ? (
            <ul className="space-y-4">
              {cartData.items.map((item) => (
                <li key={item.car} className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">{item?.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              id: item.car,
                              quantity: Math.max(item.quantity - 1, 1),
                            })
                          )
                        }
                        className="w-6 h-6 bg-gray-200 text-black rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              id: item.car,
                              quantity: Math.min(
                                item?.quantity + 1,
                                item?.stock
                              ),
                            })
                          )
                        }
                        className="w-6 h-6 bg-gray-200 text-black rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-gray-800">
                    ${(item?.quantity * item?.price)?.toFixed(2)}
                  </p>
                  <button
                    onClick={() => dispatch(removeFromCart(item.car))}
                    className="text-red-600 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500">
              Your cart is currently empty.
            </p>
          )}

          <div className="border-b my-3"></div>

          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-700">
              Total Quantity:
            </span>
            <span className="text-lg font-bold">{cartData.totalQuantity}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-700">
              Total Price:
            </span>
            <span className="text-lg font-bold">
              ${cartData?.totalPrice?.toFixed(2)}
            </span>
          </div>
        </div>

        {cartData.items.length > 0 && (
          <SheetFooter className="border-t pt-4">
            {/* <SheetClose asChild> */}
            <Button
              onClick={handlePlaceOrder}
              className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Proceed to checkout"}
            </Button>
            {/* </SheetClose> */}
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
