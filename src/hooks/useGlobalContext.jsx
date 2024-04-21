import React, { useEffect } from "react";
import { useState, createContext, useContext } from "react";
import useProductData from "./useProductsData";

const GlobalContext = createContext({});

export const GlobalContextWrapper = ({ children }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [genderFilter, setGenderFilter] = useState("");
  const [onSaleFilter, setOnSaleFilter] = useState(false);
  const [searchString, setSearchString] = useState("");

  const { data } = useProductData();

  const filterDataGender = (value) =>
    filterData(searchString, value, onSaleFilter);

  const filterDataOnSale = (value) =>
    filterData(searchString, genderFilter, value);

  const filterData = (filterString, gender, onSale) => {
    let tempFilteredData = [];

    if (gender && onSale) {
      tempFilteredData = data.filter(
        (product) =>
          product.title.toLowerCase().includes(filterString.toLowerCase()) &&
          product.gender === gender &&
          product.sale_price < product.price
      );
    } else if (gender) {
      tempFilteredData = data.filter(
        (product) =>
          product.title.toLowerCase().includes(filterString.toLowerCase()) &&
          product.gender === gender
      );
    } else if (onSale) {
      tempFilteredData = data.filter(
        (product) =>
          product.title.toLowerCase().includes(filterString.toLowerCase()) &&
          product.sale_price < product.price
      );
    } else {
      tempFilteredData = data.filter((product) =>
        product.title.toLowerCase().includes(filterString.toLowerCase())
      );
    }

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
    filterDataGender,
    filterDataOnSale,
    genderFilter,
    setGenderFilter,
    onSaleFilter,
    setOnSaleFilter,
    searchString,
    setSearchString,
  };

  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export default useGlobalContext;
