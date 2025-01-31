import { Skeleton } from "@/components/ui/skeleton";
import SearchFilter from "@/mycomponents/form/SearchFilter";
import { useGetAllCarsQuery } from "@/redux/features/car/carApi";
import Container from "@/shared/Container";
import { TCar } from "@/types";
import { useState } from "react";
import CarCard from "./CarCard";

const AllProducts = () => {
  const [filters, setFilters] = useState([
    { name: "searchTerm", value: "" },
    { name: "category", value: "" },
    { name: "brand", value: "" },
    { name: "sortBy", value: "" },
    { name: "sortOrder", value: "" },
  ]);

  const { data: cars, isError, isLoading } = useGetAllCarsQuery(filters);

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
    <Container>
      <div>
        <section>
          <SearchFilter setFilters={setFilters} />
        </section>
        <section>
          <div>
            {cars?.data?.length === 0 ? (
              <div className="flex flex-col items-center justify-center min-h-[50vh]">
                <h2 className="text-xl font-semibold text-gray-300">
                  No cars found. Try adjusting your search or filters.
                </h2>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cars?.data?.map((car: TCar) => (
                  <CarCard key={car._id} car={car} />
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </Container>
  );
};

export default AllProducts;
