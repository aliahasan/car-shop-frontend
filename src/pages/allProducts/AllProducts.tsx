import Pagination from "@/components/core/Pagination";
import SearchBar from "@/mycomponents/SearchBar";
import SearchFilter from "@/mycomponents/SearchFilter";
import Loading from "@/mycomponents/layout/Loading";
import {
  useGetAllCarCategoriesQuery,
  useGetAllCarsQuery,
} from "@/redux/features/car/carApi";
import Container from "@/shared/Container";
import PageTitle from "@/shared/PageTitle";
import { ICategories, TCar } from "@/types";
import { useSearchParams } from "react-router-dom";
import CarCard from "./CarCard";

const AllProducts = () => {
  const [searchParams] = useSearchParams();
  const query = Object.fromEntries(searchParams.entries());
  const {
    data: categoriesData,
    isError: cIsError,
    isLoading: cIsLoading,
  } = useGetAllCarCategoriesQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const categories: ICategories[] = categoriesData?.data;
  const { data, isError, isLoading } = useGetAllCarsQuery(query, {
    refetchOnMountOrArgChange: true,
  });
  const cars = data?.data;

  if (isLoading || cIsLoading) {
    return <Loading />;
  }

  if (isError || cIsError) {
    return (
      <div className="text-center text-red-500 mt-10">
        <h2>Failed to load cars. Please try again later.</h2>
      </div>
    );
  }

  return (
    <>
      <PageTitle title="Cars" />
      <Container>
        <div className="relative w-full">
          <div>
            <img
              src="https://i.ibb.co.com/2Y0nxnnN/car-banner.png"
              alt="car_image"
              className="object-cover bg-center lg:h-[60vh]  rounded-b w-full"
            />
          </div>
        </div>

        <section>
          <SearchBar />
          <div className="my-10 flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-[280px] shrink-0">
              <SearchFilter categories={categories} />
            </div>
            <div className="flex-1">
              <div className="w-full">
                {cars?.data?.length === 0 ? (
                  <div className="flex flex-col items-center justify-center min-h-[50vh]">
                    <h2 className="text-xl font-semibold text-gray-300">
                      No cars found. Try adjusting your search or filters.
                    </h2>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {cars?.map((car: TCar) => (
                      <CarCard key={car._id} car={car} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </Container>
      <div className="text-center flex items-center justify-center mt-10">
        <Pagination totalPage={data?.meta?.totalPage} />
      </div>
    </>
  );
};

export default AllProducts;
