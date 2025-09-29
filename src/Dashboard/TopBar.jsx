import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="w-full h-[10vh] flex items-center shadow-[0px_0px_4px_2px_rgb(236,235,235)] box-border z-10">
      {/* Indices Container */}
      <div className="h-full flex-1 border-r border-gray-300 px-5 py-2 box-border flex items-center justify-around">
        {/* Nifty */}
        <div className="flex-1 flex items-center justify-evenly z-0">
          <p className="text-xs font-medium uppercase text-gray-600 whitespace-nowrap cursor-pointer">
            NIFTY 50
          </p>
          <p className="text-xs font-medium text-red-500">100.2</p>
          <p className="text-xs font-normal text-gray-400"></p>
        </div>
        
        {/* Sensex */}
        <div className="flex-1 flex items-center justify-evenly z-0">
          <p className="text-xs font-medium uppercase text-gray-600 whitespace-nowrap cursor-pointer">
            SENSEX
          </p>
          <p className="text-xs font-medium text-red-500">100.2</p>
          <p className="text-xs font-normal text-gray-400"></p>
        </div>
      </div>

      {/* Menu Component */}
      <Menu />
    </div>
  );
};

export default TopBar;