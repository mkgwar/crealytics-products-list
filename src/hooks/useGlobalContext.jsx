import React, { useEffect } from "react";
import { useState, createContext, useContext } from "react";
import useProductData from "./useProductsData";

const GlobalContext = createContext({});

export const GlobalContextWrapper = ({ children }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const { data } = useProductData();

  const filterData = (filterString) => {
    let tempFilteredData = [];

    if (filterString.trim()) {
      tempFilteredData = data.filter((product) =>
        product.title.toLowerCase().includes(filterString.toLowerCase())
      );
    } else tempFilteredData = data;

    setFilteredData(tempFilteredData);
    setCurrentPage(0);
  };

  useEffect(() => {
    if (data.length) setFilteredData(data);
  }, [data]);

  const store = {
    filteredData,
    setFilteredData,
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
