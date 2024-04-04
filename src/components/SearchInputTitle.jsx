import { useState } from "react";

const SearchInputTitle = ({ onSearch }) => {
  const [searchTitle, setSearchTitle] = useState("");

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTitle(searchTerm);

    debounce(() => onSearch(searchTerm), 500);
  };

  const debounce = (func, delay) => {
    clearTimeout(debounce.timer);
    debounce.timer = setTimeout(func, delay);
  };

  return (
    <div>
      <label
        htmlFor="title"
        className="block mb-2 text-base font-semibold text-gray-900">
        title / subtitle:
      </label>
      <input
        type="text"
        id="title"
        value={searchTitle}
        onChange={handleInputChange}
        placeholder="search across title and subtitle"
        className="shadow-sm border outline-none border-gray-800 text-gray-900 placeholder:text-[13px] rounded-lg block w-full p-2"
      />
    </div>
  );
};

export default SearchInputTitle;
