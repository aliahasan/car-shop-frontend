import Loading from "@/mycomponents/layout/Loading";
import CarCard from "@/pages/allProducts/CarCard";
import { useGetReconditionCarsQuery } from "@/redux/features/car/carApi";
import SectionTitle from "@/shared/SectionTitle";
import { TCar } from "@/types";

const ReconditionCars = () => {
  const { data, isLoading, isError } = useGetReconditionCarsQuery(undefined);
  const reconditionCars = data?.data || [];
  console.log(reconditionCars);

  if (isLoading) {
    <Loading />;
  }

  if (isError) {
    <div className="text-red-500">Something went wrong</div>;
  }
  return (
    <div className="py-6 lg:py-12">
      <div className="py-10 text-center">
        <SectionTitle
          heading="Recondition & used cars"
          title="Recondition & used cars"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {reconditionCars?.map((car: TCar, idx: number) => (
          <CarCard car={car} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default ReconditionCars;
