import React from "react";

const Header = () => {
  return (
    <header className="relative border-b-4 border-black py-4 flex justify-center items-center">
      <h1 className="logo absolute left-4 top-1/2 -translate-y-1/2 bottom-4 text-bold-upper text-2xl flex items-center">
        Crealytics
      </h1>
      <div className="search w-2/5 flex items-center">
        <input
          type="text"
          className="border-2 border-black px-2 h-12 outline-none w-full"
          placeholder="Type to search..."
        />
        <button className="h-12 bg-black text-xs-white px-4">search</button>
      </div>
    </header>
  );
};

export default Header;
