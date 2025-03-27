import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("searchTerm") || ""
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const newParams = new URLSearchParams(searchParams.toString());
    if (searchTerm) {
      newParams.set("searchTerm", searchTerm);
    } else {
      newParams.delete("searchTerm");
    }
    setSearchParams(newParams);
  };

  const handleReset = () => {
    setSearchTerm("");
    setSearchParams(new URLSearchParams());
  };

  return (
    <div className="w-full my-10">
      <form onSubmit={handleSearch}>
        <div className="flex w-full items-center gap-2 relative">
          {/* Search Input */}
          <Input
            name="search"
            type="text"
            value={searchTerm}
            placeholder="Search Car"
            className="flex-1 w-full px-4 py-4 rounded-full border border-gray-400"
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Search Button */}
          <Button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-full"
          >
            <Search />
          </Button>

          {/* Reset Button */}
          <Button
            type="button"
            onClick={handleReset}
            className="px-4 py-2 bg-red-500 hover:bg-red-500 text-white rounded-full"
          >
            <X />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
