export type TCar = {
  brand: string;
  category: string;
  color: string[];
  description: string;
  discount: number;
  engineCapacity: number;
  features: string[];
  fuelType: string;
  images: string[];
  isStock: boolean;
  mileage: number;
  model: string;
  name: string;
  price: number;
  quantity: number;
  rating: number;
  seatingCapacity: number;
  transmission: string;
  warranty: string;
  year: number;
  _id: string;
};

export interface CarCardProps {
  car: {
    brand: string;
    category: string;
    color: string[];
    description: string;
    discount: number;
    engineCapacity: number;
    features: string[];
    fuelType: string;
    images: string[];
    isStock: boolean;
    mileage: number;
    model: string;
    name: string;
    price: number;
    quantity: number;
    rating: number;
    seatingCapacity: number;
    transmission: string;
    warranty: string;
    year: number;
    _id: string;
  };
}
