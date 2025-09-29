import React from "react";
import AdminLayout from "./AdminLayout";

const WatchList = () => {
  return (
    <div className="flex-1 h-full box-border shadow-[0px_0px_4px_1px_rgb(236,235,235)] overflow-y-auto relative">
      {/* Search Container */}
      <div className="flex items-center justify-evenly relative">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="w-full h-[6%] border-none py-4 px-5 text-sm font-normal text-gray-300 border-b border-gray-200 focus:outline-none"
        />
        <span className="absolute right-5 text-sm font-normal text-gray-400">
          9 / 50
        </span>
      </div>

      {/* Watch List */}
      <ul className="list-none pb-12"></ul>
    </div>
  );
};

export default WatchList;