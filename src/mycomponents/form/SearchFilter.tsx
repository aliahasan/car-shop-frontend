/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  brandOptions,
  categoryOptions,
  sortOptions,
} from "@/constants/Car.constant";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import Select from "react-select";

const SearchFilter = ({ setFilters }: any) => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    setFilters((prev: any) =>
      prev.map((item: any) =>
        item.name === "searchTerm" ? { ...item, value: search } : item
      )
    );
  };

  const handleCategoryChange = (selectedOption: any) => {
    setFilters((prev: any) =>
      prev.map((item: any) =>
        item.name === "category"
          ? { ...item, value: selectedOption ? selectedOption.value : "" }
          : item
      )
    );
  };

  const handleBrandChange = (selectedOption: any) => {
    setFilters((prev: any) =>
      prev.map((filter: any) =>
        filter.name === "brand"
          ? { ...filter, value: selectedOption ? selectedOption.value : "" }
          : filter
      )
    );
  };

  const handleSortChange = (selectedOption: any) => {
    setFilters((prev: any) =>
      prev.map((item: any) =>
        item.name === "sortBy"
          ? { ...item, value: "price" }
          : item.name === "sortOrder"
          ? { ...item, value: selectedOption ? selectedOption.value : "asc" }
          : item
      )
    );
  };

  return (
    <div className="my-10 ">
      <div className="bg-white p-6 rounded-xl w-full mx-auto flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="w-full lg-full flex items-center gap-2">
          <div className="flex-grow">
            <Input
              name="searchTerm"
              type="text"
              placeholder="Search cars..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button
            onClick={handleSearch}
            className="bg-my-btn_clr text-white p-3 rounded-lg transition-colors duration-300"
          >
            <SearchIcon className="w-4 h-4" />
          </Button>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <Select
              name="brand"
              options={brandOptions}
              placeholder="Select brand"
              onChange={handleBrandChange}
              isClearable
            />
          </div>

          <div className="w-full">
            <Select
              name="category"
              options={categoryOptions}
              placeholder="Select category"
              onChange={handleCategoryChange}
              isClearable
            />
          </div>
          <div className="w-full">
            <Select
              name="sort"
              options={sortOptions}
              placeholder="Filter price"
              onChange={handleSortChange}
              isClearable
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchFilter;
