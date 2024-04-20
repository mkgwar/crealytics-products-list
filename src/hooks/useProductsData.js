import { useState, useEffect } from "react";
import { usePapaParse } from "react-papaparse";

const useProductData = () => {
  const [data, setData] = useState([]);
  const { readRemoteFile } = usePapaParse();

  const parseData = () => {
    readRemoteFile("/products.csv", {
      header: true,
      Worker: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  };

  useEffect(() => {
    parseData();
  }, []);

  return { data };
};

export default useProductData;
