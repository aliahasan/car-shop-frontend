/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import Loading from "@/mycomponents/layout/Loading";
import { useDeleteCarMutation } from "@/redux/features/admin/adminApi";
import { useGetAllCarsQuery } from "@/redux/features/car/carApi";
import PageTitle from "@/shared/PageTitle";
import { Plus } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import CarsTable from "./CarsTable";

const AllCars = () => {
  const { data: carsData, isLoading } = useGetAllCarsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const [deleteCar] = useDeleteCarMutation();
  const cars = carsData?.data || [];

  const handleDelete = async (carId: string) => {
    const toastId = toast.loading("Car is deleting....");
    try {
      const res = await deleteCar(carId).unwrap();
      if (res.success || res?.data?.success) {
        toast.success("Car deleted successfully", { id: toastId });
      }
    } catch (error: any) {
      if (error.data && error.data.message) {
        const errorMessage = error.data.message || "Failed to delete car";
        toast.error(errorMessage, { id: toastId });
      } else {
        toast.error("Failed to delete car", { id: toastId });
      }
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <PageTitle title="Admin-all-cars" />
      <div className="container mx-auto ">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">All Cars</h1>
          <Link to="/dashboard/add-car">
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add New Car
            </Button>
          </Link>
        </div>
        <CarsTable cars={cars} onDelete={handleDelete} />
      </div>
    </>
  );
};

export default AllCars;
