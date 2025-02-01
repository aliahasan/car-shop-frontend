import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CarCardProps } from "@/types";
import { Link } from "react-router-dom";

const CarCard = ({ car }: CarCardProps) => {
  return (
    <Card
      className="bg-[#0a0a0a] text-white shadow-lg rounded-xl overflow-hidden 
      border border-gray-800"
    >
      <CardHeader className="p-0 relative">
        <img
          src={car?.images[0]}
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

      {/* View Details Button */}
      <CardFooter className="p-6 pt-0">
        <Link to={`/car/${car?._id}`} className="w-full">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
