import React, { useState, useEffect } from "react";
import useGlobalContext from "../hooks/useGlobalContext";

const Header = () => {
  const [searchString, setSearchString] = useState("");

  const { filterData } = useGlobalContext();

  const handleInputChange = (event) => {
    setSearchString(event.target.value);
    filterData(event.target.value);
  };

  return (
    <header className="border-b-4 border-black py-4 flex justify-center items-center">
      <div className="search w-4/5 flex items-center">
        <input
          type="text"
          className="border-2 border-black px-2 h-12 outline-none w-full"
          placeholder="Type to search..."
          value={searchString}
          onChange={handleInputChange}
        />
      </div>
    </header>
  );
};

export default Header;
