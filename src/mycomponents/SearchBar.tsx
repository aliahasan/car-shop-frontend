import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("searchTerm") || ""
  );

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      const newParams = new URLSearchParams(searchParams.toString());
      if (searchTerm) {
        newParams.set("searchTerm", searchTerm);
      } else {
        newParams.delete("searchTerm");
      }
      setSearchParams(newParams);
    }, 500);

    return () => clearTimeout(delaySearch);
  }, [searchParams, searchTerm, setSearchParams]);

  return (
    <div className="w-full my-10">
      <form>
        <div className="flex w-full items-center gap-2">
          <Input
            name="search"
            type="text"
            value={searchTerm}
            placeholder="Search Car"
            className="flex-1 w-full px-4 py-4 rounded-full border  border-gray-400"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
