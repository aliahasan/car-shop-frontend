import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { addToCart } from "@/redux/features/cart/CartSlice";
import { useAppDispatch } from "@/redux/hook";
import { CarCardProps } from "@/types";
import { ShoppingCart } from "lucide-react";
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
    toast.success("Car added to the cart!", { id: toastId });
  };

  return (
    <Card
      className="bg-gray-50 text-white shadow-sm round-xl overflow-hidden 
   border "
    >
      <CardHeader className="p-0 relative">
        <img
          src={car?.images?.[0] ?? ""}
          alt={car?.name}
          className="w-full h-44 object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-black/70 px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
          <span>⭐</span>
          <span>{car?.rating}</span>
        </div>
      </CardHeader>
      <CardContent className="p-3 space-y-3">
        <div className="space-y-1">
          <h2 className="text-xl text-my-text_clr font-bold">{car.name}</h2>
          <p className="text-gray-900 text-sm">
            {car?.brand} | {car?.model}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-md font-semibold text-my-text_clr">
            ${car?.price}
          </p>

          {car?.carStatus ? (
            <span>
              <Badge>{car?.carStatus && car.carStatus}</Badge>
            </span>
          ) : (
            <span>
              {" "}
              <Badge>New car</Badge>
            </span>
          )}
        </div>
      </CardContent>

      {/* View Details and Add to Cart Buttons */}
      <CardFooter className="p-2 pt-0">
        <div className="flex gap-4 w-full pb-1">
          <Link to={`/car/${car?._id}`} className="w-full">
            <Button className=" px-3 rounded-full bg-my-btn_clr text-sm  text-white font-semibold py-2">
              View Details
            </Button>
          </Link>
          <Button
            onClick={() => handleAddToCart(car._id)}
            className=" p-3 tw text-sm text-white font-semibold py-1 rounded-full bg-my-btn_clr"
          >
            <ShoppingCart />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
