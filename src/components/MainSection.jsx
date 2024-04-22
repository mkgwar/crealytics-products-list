import React from "react";
import useGlobalContext from "../hooks/useGlobalContext";
import { ProductCard } from "./ProductCard";

const MainSection = () => {
  const { currentPage, setCurrentPage, filteredData } = useGlobalContext();

  const MAX_ITEMS_PER_PAGE = 100;
  const PAGE_COUNT = Math.ceil(filteredData.length / MAX_ITEMS_PER_PAGE);
  const BEG_INDEX = currentPage * MAX_ITEMS_PER_PAGE;
  const END_INDEX = BEG_INDEX + MAX_ITEMS_PER_PAGE;

  const handlePageNumberClick = (e) => {
    const { value } = e.target.dataset;
    if (value) setCurrentPage(parseInt(value));
  };

  return (
    <main className="w-full h-full overflow-y-auto">
      {filteredData.length ? (
        <div className="h-full flex flex-col justify-between">
          <div className="h-full grow w-full grid md:grid-cols-4 grid-cols-2 gap-2 overflow-y-auto p-4">
            {filteredData.slice(BEG_INDEX, END_INDEX).map((product) => (
              <ProductCard data={product} key={product.gtin} />
            ))}
          </div>
          <div
            className="flex items-center justify-end p-4"
            onClick={handlePageNumberClick}
          >
            {[...Array(PAGE_COUNT).keys()].map((page) => {
              return (
                <div
                  className={`text-sm w-8 aspect-square flex items-center justify-center cursor-pointer hover:bg-black hover:text-white ${
                    currentPage === page ? "bg-black text-white" : "bg-gray-100"
                  }`}
                  key={page}
                  data-value={page}
                >
                  {page + 1}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="py-4 text-center">Nothing to display</div>
      )}
    </main>
  );
};

export default MainSection;
