import React from "react";
import AdminLayout from "./AdminLayout";

const Menu = () => {
  const handleProfileClick = () => {
    
    console.log("Profile clicked");
  };

  return (
    <div className="w-full h-full flex items-center justify-between px-5 py-2 box-border">
      {/* Logo */}
      <img 
        src="logo.png" 
        alt="Logo" 
        className="w-12 h-auto" 
      />
      
      {/* Menus and Profile */}
      <div className="flex items-center justify-evenly">
        {/* Navigation Menu */}
        <ul className="flex items-center list-none">
          <li className="mr-8">
            <p className="text-sm font-normal text-gray-700 hover:text-orange-500 cursor-pointer transition-colors">
              Dashboard
            </p>
          </li>
          <li className="mr-8">
            <p className="text-sm font-normal text-gray-700 hover:text-orange-500 cursor-pointer transition-colors">
              Orders
            </p>
          </li>
          <li className="mr-8">
            <p className="text-sm font-normal text-gray-700 hover:text-orange-500 cursor-pointer transition-colors">
              Holdings
            </p>
          </li>
          <li className="mr-8">
            <p className="text-sm font-normal text-gray-700 hover:text-orange-500 cursor-pointer transition-colors">
              Positions
            </p>
          </li>
          <li className="mr-8">
            <p className="text-sm font-normal text-gray-700 hover:text-orange-500 cursor-pointer transition-colors">
              Funds
            </p>
          </li>
          <li className="mr-8">
            <p className="text-sm font-normal text-gray-700 hover:text-orange-500 cursor-pointer transition-colors">
              Apps
            </p>
          </li>
        </ul>
        
        {/* Divider */}
        <hr className="border-l border-gray-200 h-8 mx-5" />
        
        {/* Profile Section */}
        <div 
          className="flex items-center justify-evenly ml-5 cursor-pointer hover:username:hover:text-orange-400"
          onClick={handleProfileClick}
        >
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-50 text-purple-300 text-xs font-normal mr-2">
            ZU
          </div>
          <p className="text-sm font-light">USERID</p>
        </div>
      </div>
      </div>
  );
};

export default Menu;