import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useGetCarByIdQuery } from "@/redux/features/car/carApi";
import { useParams } from "react-router-dom";

const CarDetails = () => {
  const { id } = useParams();
  const { data: carData } = useGetCarByIdQuery(id);

  const car = carData?.data;
  if (!car) return <div>Car not found</div>;

  return (
    <div className="min-h-screen  py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64  lg:h-[70vh]">
            <img
              src={car.images[0]}
              alt={`${car.name} ${car.model}`}
              className="w-full h-full object-cover bg-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h1 className="text-4xl font-bold">
                {car.name} {car.model}
              </h1>
              <p className="text-lg mt-2">
                {car.brand} - {car.category}
              </p>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Car Images */}
          <div className="space-y-4">
            {car.images.slice(1).map((image: string, index: number) => (
              <div
                key={index}
                className="relative h-64 lg:h-[50vh] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={image}
                  alt={`${car.name} ${index + 2}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Car Specifications */}
          <div className="space-y-8">
            {/* Price and Stock Status */}
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-my-btn_clr">
                ${car.price}
              </span>
              <Badge variant={car.isStock ? "success" : "destructive"}>
                {car.isStock ? "In Stock" : "Out of Stock"}
              </Badge>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-my-text_clr leading-relaxed">
                {car?.description}
              </p>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">Rating:</span>
                <span className="text-yellow-500">★ {car?.rating}</span>
              </div>
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <span className="text-sm text-my-text_clr">
                  Engine Capacity
                </span>
                <p className="font-semibold">{car?.engineCapacity}L</p>
              </div>
              <div>
                <span className="text-sm text-my-text_clr">Fuel Type</span>
                <p className="font-semibold">{car?.fuelType}</p>
              </div>
              <div>
                <span className="text-sm text-my-text_clr">Mileage</span>
                <p className="font-semibold">{car?.mileage} MPG</p>
              </div>
              <div>
                <span className="text-sm text-my-text_clr">Transmission</span>
                <p className="font-semibold">{car?.transmission}</p>
              </div>
              <div>
                <span className="text-sm text-my-text_clr">
                  Seating Capacity
                </span>
                <p className="font-semibold">{car?.seatingCapacity}</p>
              </div>
              <div>
                <span className="text-sm text-my-text_clr">Warranty</span>
                <p className="font-semibold">{car?.warranty}</p>
              </div>
            </div>

            {/* Available Colors */}
            <div className="space-y-4">
              <span className="text-sm text-my-text_clr">Available Colors</span>
              <div className="flex space-x-2">
                {car?.color.map((color: string, index: number) => (
                  <div
                    key={index}
                    className="w-8 h-8 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <span className="text-sm text-my-text_clr">Features</span>
              <div className="flex flex-wrap gap-2">
                {car.features.map((feature: string, index: number) => (
                  <Badge key={index} variant="outline" className="text-white">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Buy Now Button */}
            <div className="flex justify-end">
              <Button className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
