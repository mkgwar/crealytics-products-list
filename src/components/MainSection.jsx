import React from "react";
import useGlobalContext from "../hooks/useGlobalContext";
import { ProductCard } from "./ProductCard";

const MainSection = () => {
  const { filteredData } = useGlobalContext();
  return (
    <main className="h-full overflow-y-auto">
      <div className="min-h-full">
        {filteredData.length ? (
          <div className="w-full grid gap-4 grid-cols-4 p-4">
            {filteredData.map((product) => (
              <ProductCard data={product} key={product.gtin} />
            ))}
          </div>
        ) : (
          <div className="py-4 text-center">Nothing to display</div>
        )}
      </div>
    </main>
  );
};

export default MainSection;
