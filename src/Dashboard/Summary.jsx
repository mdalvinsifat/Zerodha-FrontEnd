import React from "react";
import AdminLayout from "./AdminLayout";

const Summary = () => {
  return (
    <div>
      {/* Username Section */}
      <div className="mb-6">
        <h6 className="text-lg font-normal text-gray-700 mb-5">Hi, User!</h6>
        <hr className="border-none bg-gray-300 h-px my-5" />
      </div>

      {/* Equity Section */}
      <div className="pb-4 mb-6">
        <div className="flex items-center mb-4">
          <p className="text-xl font-light">Equity</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-center">
            <h3 className="text-3xl font-light text-gray-700">3.74k</h3>
            <p className="text-gray-500 text-sm mt-1">Margin available</p>
          </div>
          
          <hr className="border-l border-gray-200 h-16 mx-6" />
          
          <div className="space-y-2">
            <p className="text-gray-500 text-sm whitespace-nowrap">
              Margins used <span className="ml-4 text-gray-700 text-base">0</span>
            </p>
            <p className="text-gray-500 text-sm whitespace-nowrap">
              Opening balance <span className="ml-4 text-gray-700 text-base">3.74k</span>
            </p>
          </div>
        </div>
        
        <hr className="border-none bg-gray-300 h-px mt-6" />
      </div>

      {/* Holdings Section */}
      <div className="pb-4">
        <div className="flex items-center mb-4">
          <p className="text-xl font-light">Holdings (13)</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-center">
            <h3 className="text-3xl font-light text-green-500">
              1.55k <small className="text-green-500 text-sm">+5.20%</small>
            </h3>
            <p className="text-gray-500 text-sm mt-1">P&L</p>
          </div>
          
          <hr className="border-l border-gray-200 h-16 mx-6" />
          
          <div className="space-y-2">
            <p className="text-gray-500 text-sm whitespace-nowrap">
              Current Value <span className="ml-4 text-gray-700 text-base">31.43k</span>
            </p>
            <p className="text-gray-500 text-sm whitespace-nowrap">
              Investment <span className="ml-4 text-gray-700 text-base">29.88k</span>
            </p>
          </div>
        </div>
        
        <hr className="border-none bg-gray-300 h-px mt-6" />
      </div>
    </div>
  );
};

export default Summary;