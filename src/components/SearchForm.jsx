import React, { useState } from "react";
import { Search } from "../assets";
const SearchForm = ({ styles, placeholder }) => {
  const [searchItem, setSearchItem] = useState("");
  const handleInputChange = (e) => {
    const item = e.target.value;
    setSearchItem(item);
    console.log("Searching for:", item);
  };
  return (
    <div
      className={`flex justify-start items-center bg-[#F3F3F3] rounded-[20px] p-4 px-4 ${styles}`}
    >
      <img src={Search} alt="Search" />
      <input
        type="text"
        name="search"
        id="search"
        placeholder={placeholder ? placeholder : "Search"}
        value={searchItem}
        onChange={handleInputChange}
        className="pl-4 text-black w-full"
      />
    </div>
  );
};
export default SearchForm;
