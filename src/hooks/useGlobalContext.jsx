import React, { useEffect } from "react";
import { useState, createContext, useContext } from "react";
import useProductData from "./useProductsData";

const GlobalContext = createContext({});

export const GlobalContextWrapper = ({ children }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const { data } = useProductData();

  const filterData = (filterString, current) => {
    const startIndex = current * 100;
    const tempFilteredData = [];

    let i = startIndex;

    while (i < data.length && tempFilteredData.length < 100) {
      if (data[i].title.toLowerCase().includes(filterString.toLowerCase())) {
        tempFilteredData.push(data[i]);
      }

      i += 1;
    }

    setFilteredData(tempFilteredData);
  };

  useEffect(() => {
    if (data) filterData("", 0);
  }, [data]);

  const store = {
    filteredData,
    setFilteredData,
    searchString,
    setSearchString,
    filterData,
    currentPage,
    setCurrentPage,
  };

  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export default useGlobalContext;
