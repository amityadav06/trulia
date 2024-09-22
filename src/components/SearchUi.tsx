import  { useEffect, useState } from "react";
import { TiLocationArrowOutline } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";
import { FaCar } from "react-icons/fa";

const SearchUi = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isResultVisible, setIsResultVisible] = useState<boolean>(false);
  const [cache, setCache] = useState<Record<string, string[]>>({});

  useEffect(() => {
    // Debouncing
    const s = setTimeout(() => {
      fetchData();
    }, 300);
    return () => clearTimeout(s);
  }, [searchText]);

  const fetchData = async () => {
    if (cache[searchText]) {
      setSearchResults(cache[searchText]);
    } else {
      try {
        const response = await fetch(
          `https://www.google.com/complete/search?client=firefox&q=${searchText}`
        );
        const json: [any, string[]] = await response.json();
        setCache((prev) => ({ ...prev, [searchText]: json[1] }));
        setSearchResults(json[1]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  return (
    <div className="m-6 relative">
      <div className="relative input_wrap rounded-md">
        <input
          type="text"
          className={`border border-black p-4 w-[350px] lg:w-[400px] rounded-l-md shadow-lg`}
          placeholder="Atlanta, GA"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => setIsResultVisible(true)}
          onBlur={() => setIsResultVisible(false)}
          />
          {
            isResultVisible ? (
              <div className="search-cancel">
                CANCEL
              </div>
            ) : (
              <div className="search-wrap">
                <IoIosSearch className="text-white font-bold" height={24} width={24} />
              </div>
            )
          }
        </div>
      { isResultVisible && (
        <ul className="p-2 border bg-white w-[420px] lg:w-[470px] absolute z-10 shadow-2xl h-[300px]">
          <li className="hover:bg-gray-200 text-customGreen flex gap-2 text-left p-2 items-center cursor-pointer" >
          <TiLocationArrowOutline />
            Current Location
          </li>
          <li className="hover:bg-gray-200 text-customGreen flex gap-2 items-center text-left p-2 cursor-pointer">
          <FaCar />
            Search by commute time
          </li>
          {searchResults.map((result) => (
            <li className="hover:bg-gray-200 text-left p-2 cursor-pointer" key={result}>
              {result}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchUi;
