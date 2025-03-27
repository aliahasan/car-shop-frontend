import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { useGetAllBrandsQuery } from "@/redux/features/car/carApi";
import { ICategories } from "@/types";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Loading from "./layout/Loading";

interface SearchFilterProps {
  categories: ICategories[];
}

const SearchFilter = ({ categories }: SearchFilterProps) => {
  const [filterSection, setFilterSection] = useState({
    price: false,
    category: false,
    brands: false,
    rating: false,
    year: false,
  });

  const [price, setPrice] = useState([0]);
  const [year, setYear] = useState([0]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const {
    data: brandsData,
    isError,
    isLoading,
  } = useGetAllBrandsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) <Loading />;

  if (isError) {
    <div>
      <p>Something went wrong</p>
    </div>;
  }

  const brands = brandsData?.data || [];

  const handleSearchQuery = (name: string, value: string | number) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set(name, value.toString());
    setSearchParams(newParams);
  };

  const toggleSection = (section: keyof typeof filterSection) => {
    setFilterSection((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="p-6  border border-gray-400 rounded-lg w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Filter</h2>
        {searchParams.toString().length > 0 && (
          <Button onClick={() => navigate(pathname)} size="sm">
            Clear Filters
          </Button>
        )}
      </div>
      <Separator />

      {/* Filter by year */}
      <div className="my-6">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("year")}
        >
          <h2 className="text-md font-semibold">Year</h2>
          <ChevronDown
            className={`transition-transform ${
              filterSection.year ? "rotate-180" : ""
            }`}
          />
        </div>
        {filterSection.year && (
          <>
            <div className="flex items-center justify-between text-sm my-4">
              <span>2010</span>
              <span>2025</span>
            </div>
            <Slider
              max={2025}
              min={2010}
              step={1}
              onValueChange={(value) => {
                setYear(value);
                handleSearchQuery("year", value[0]);
              }}
              className="w-full"
            />
            <p className="text-sm mt-2">Selected year: ৳ {year[0]}</p>
          </>
        )}
        <Separator className="my-4" />
      </div>

      {/* Filter by Price */}
      <div className="my-6">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("price")}
        >
          <h2 className="text-md font-semibold">Price</h2>
          <ChevronDown
            className={`transition-transform ${
              filterSection.price ? "rotate-180" : ""
            }`}
          />
        </div>
        {filterSection.price && (
          <>
            <div className="flex items-center justify-between text-sm my-4">
              <span>$ 0</span>
              <span>$ 500000</span>
            </div>
            <Slider
              max={500000}
              step={1}
              onValueChange={(value) => {
                setPrice(value);
                handleSearchQuery("maxPrice", value[0]);
              }}
              className="w-full"
            />
            <p className="text-sm mt-2">Selected Price: $ {price[0]}</p>
          </>
        )}
        <Separator className="my-4" />
      </div>

      {/* Filter by Category */}
      <div className="mb-6">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("category")}
        >
          <h2 className="text-md font-semibold">Category</h2>
          <ChevronDown
            className={`transition-transform ${
              filterSection.category ? "rotate-180" : ""
            }`}
          />
        </div>
        {filterSection.category && categories.length > 0 && (
          <RadioGroup className="space-y-2 my-4">
            {categories.map((category: ICategories, idx: number) => (
              <div key={idx} className="flex items-center space-x-2">
                <RadioGroupItem
                  onClick={() =>
                    handleSearchQuery("category", category.category)
                  }
                  value={category.category}
                  id={category.category}
                />
                <Label htmlFor={category.category} className="font-medium">
                  {category.category}
                </Label>
              </div>
            ))}
          </RadioGroup>
        )}
        <Separator className="my-4" />
      </div>

      {/* Filter by Brands */}
      <div className="mb-6">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("brands")}
        >
          <h2 className="text-md font-semibold">Brands</h2>
          <ChevronDown
            className={`transition-transform ${
              filterSection.brands ? "rotate-180" : ""
            }`}
          />
        </div>
        {filterSection.brands && brands.length > 0 && (
          <RadioGroup className="space-y-2 my-4">
            {brands.map((brand: string, idx: number) => (
              <div key={idx} className="flex items-center space-x-2">
                <RadioGroupItem
                  onClick={() => handleSearchQuery("brand", brand)}
                  value={brand}
                  id={brand}
                />
                <Label htmlFor={brand} className="font-medium">
                  {brand}
                </Label>
              </div>
            ))}
          </RadioGroup>
        )}
        <Separator className="my-4" />
      </div>
    </div>
  );
};

export default SearchFilter;
