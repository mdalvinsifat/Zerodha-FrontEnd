import React from "react";
import { Link } from "react-router-dom";
import AdminLayout from "./AdminLayout";

const Orders = () => {
  return (
    <div className="w-full h-[90vh]">
      <div className="flex flex-col items-center justify-center h-full">
       
        <div className="text-gray-300 scale-150 mb-8">
        
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
        </div>
        
        <p className="text-gray-400 text-base font-light mb-8">
          You haven't placed any orders today
        </p>

        <Link 
          to={"/"} 
          className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded transition-colors no-underline font-medium"
        >
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;