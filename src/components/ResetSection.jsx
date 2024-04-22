import React from "react";
import useGlobalContext from "../hooks/useGlobalContext";

const ResetSection = () => {
  const {
    filterDataGender,
    filterDataOnSale,
    genderFilter,
    setGenderFilter,
    onSaleFilter,
    setOnSaleFilter,
  } = useGlobalContext();

  const handleGenderSelection = (event) => {
    setGenderFilter(event.target.value);
    filterDataGender(event.target.value);
  };

  const handleOnSaleSelection = () => {
    filterDataOnSale(!onSaleFilter);
    setOnSaleFilter(!onSaleFilter);
  };

  return (
    <div className="p-4">
      <h1 className="text-bold-upper mb-4">Filter</h1>
      <div className="flex gap-2 items-center">
        <label htmlFor="gender" className="text-bold-upper text-xs">
          Gender:
        </label>
        <select
          name="gender"
          className="px-2 py-1 bg-white border-2 border-black"
          onChange={handleGenderSelection}
          value={genderFilter}
          data-testid="gender-select"
        >
          <option value="">None</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="unisex">Unisex</option>
        </select>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <input
          type="checkbox"
          name="sale"
          className="h-4 aspect-square"
          checked={onSaleFilter}
          onChange={handleOnSaleSelection}
          data-testid="onSale-check"
        />
        <label htmlFor="sale" className="text-bold-upper text-xs">
          On sale
        </label>
      </div>
    </div>
  );
};

export default ResetSection;
