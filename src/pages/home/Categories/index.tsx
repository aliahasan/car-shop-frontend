import Loading from "@/mycomponents/layout/Loading";
import { useGetAllCarCategoriesQuery } from "@/redux/features/car/carApi";
import SectionTitle from "@/shared/SectionTitle";
import { ICategories } from "@/types";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";

const CategorySection = () => {
  const navigate = useNavigate();
  const {
    data: categoriesData,
    isError,
    isLoading,
  } = useGetAllCarCategoriesQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <div>Something Went wrong</div>;
  }

  const categories: ICategories[] = categoriesData?.data || [];

  const handleNavigate = (value: string) => {
    navigate(`/all-products?category=${value}`);
  };

  return (
    <div className="py-6 lg:py-12">
      <div className="text-center py-10">
        <SectionTitle title="Choose car category" heading="Categories" />
      </div>
      <div>
        <Marquee
          direction="left"
          speed={50}
          pauseOnHover={true}
          autoFill={true}
        >
          <div className="flex items-center gap-10 px-10 ">
            {categories.map((category: ICategories, i) => (
              <div
                onClick={() => handleNavigate(category.category)}
                key={i}
                className="flex-shrink-0 bg-gray-100 p-4 rounded hover:cursor-pointer"
              >
                <img
                  src={category.image[0]}
                  alt={category.category}
                  className="w-36 h-24 rounded"
                />
                <h1 className="text-center pt-2">{category?.category}</h1>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default CategorySection;
