import { Button } from "@/components/ui/button";
import { useGetAllCarsQuery } from "@/redux/features/car/carApi";
import { Plus } from "lucide-react";
import CarsTable from "./CarsTable";

const AllCars = () => {
  const { data: carsData, isLoading } = useGetAllCarsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const cars = carsData?.data || [];

  const handleDelete = (carId: string) => {
    console.log("Delete car:", carId);
    // Add your delete logic here
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto ">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">All Cars</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add New Car
        </Button>
      </div>
      <CarsTable cars={cars} onDelete={handleDelete} />
    </div>
  );
};

export default AllCars;
