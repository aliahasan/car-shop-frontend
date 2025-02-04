import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { addToCart } from "@/redux/features/cart/CartSlice";
import { useAppDispatch } from "@/redux/hook";
import { CarCardProps } from "@/types";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const CarCard = ({ car }: CarCardProps) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (id: string) => {
    const toastId = "cart";
    const cartData = {
      car: id,
      name: car.name,
      price: car.price,
      quantity: 1,
      image: car?.images?.[0] ?? "",
      stock: car.quantity,
    };
    dispatch(addToCart(cartData));
    toast.success("car added to the cart", { id: toastId });
  };

  return (
    <Card
      className="bg-[#0a0a0a] text-white shadow-lg rounded-xl overflow-hidden 
      border border-gray-800"
    >
      <CardHeader className="p-0 relative">
        <img
          src={car?.images?.[0] ?? ""}
          alt={car?.name}
          className="w-full h-60 object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-black/70 px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
          <span>⭐</span>
          <span>{car?.rating}</span>
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-3">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">{car.name}</h2>
          <p className="text-gray-400 text-sm">
            {car?.brand} | {car?.model}
          </p>
        </div>
        <p className="text-lg font-semibold text-blue-500">${car?.price}</p>

        {/* Features (Optional) */}
        <div className="flex space-x-2 text-sm text-gray-400">
          <span>🚗 {car?.transmission}</span>
          <span>⛽ Electric</span>
          <span>💺 {car?.seatingCapacity}</span>
        </div>
      </CardContent>

      {/* View Details and Add to Cart Buttons */}
      <CardFooter className="p-6 pt-0">
        <div className="flex gap-4 w-full">
          <Link to={`/car/${car?._id}`} className="w-full">
            <button className="w-full bg-my-btn_clr  text-white font-semibold py-2 rounded-lg ">
              View Details
            </button>
          </Link>
          <button
            onClick={() => handleAddToCart(car._id)}
            className="w-full bg-white  text-gray-500 font-semibold py-1 rounded-lg"
          >
            Add to Cart
          </button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
