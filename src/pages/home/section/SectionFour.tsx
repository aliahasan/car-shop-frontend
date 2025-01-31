import { Skeleton } from "@/components/ui/skeleton";
import CarCard from "@/pages/CarCard";
import { useGetAllCarsQuery } from "@/redux/features/car/carApi";
import SectionTitle from "@/shared/SectionTitle";
import { TCar } from "@/types";

const SectionFour = () => {
  const { data: cars, isError, isLoading } = useGetAllCarsQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Skeleton className="w-16 h-16 rounded-full" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-500 mt-10">
        <h2>Failed to load cars. Please try again later.</h2>
      </div>
    );
  }

  return (
    <div className="py-6 lg:py-16">
      <section className="text-center">
        <SectionTitle title="Featured cars" heading="Our featured cars" />
      </section>
      <section>
        <div className="py-6">
          {
            <div>
              {cars?.data?.length === 0 ? (
                <div className="flex flex-col items-center justify-center min-h-[50vh]">
                  <h2 className="text-xl font-semibold text-gray-300">
                    No cars found. Try adjusting your search or filters.
                  </h2>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {cars?.data?.slice(0, 4)?.map((car: TCar) => (
                    <CarCard key={car._id} car={car} />
                  ))}
                </div>
              )}
            </div>
          }
        </div>
      </section>
    </div>
  );
};

export default SectionFour;
