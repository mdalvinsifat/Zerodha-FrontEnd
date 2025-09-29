import React from "react";
import { Link } from "react-router-dom";
import AdminLayout from "./AdminLayout";

const Funds = () => {
  return (
    <div>
      {/* Funds Section */}
      <div className="w-full text-right flex items-center justify-end mb-8">
        <p className="text-sm text-gray-400 mr-2">
          Instant, zero-cost fund transfers with UPI
        </p>
        <Link className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-sm mx-1 transition-colors">
          Add funds
        </Link>
        <Link className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-sm mx-1 transition-colors">
          Withdraw
        </Link>
      </div>

      {/* Main Content Row */}
      <div className="w-full flex items-center justify-between mt-12">
        {/* Equity Column */}
        <div className="w-1/2">
          <div className="flex items-center mb-4">
            <span className="text-xl font-light">Equity</span>
          </div>

          {/* Equity Table */}
          <div className="border border-gray-300 p-8 rounded">
            {/* Available Margin */}
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-500">Available margin</p>
              <p className="text-blue-500 text-2xl font-medium">4,043.10</p>
            </div>
            
            {/* Used Margin */}
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-500">Used margin</p>
              <p className="text-2xl font-medium">3,757.30</p>
            </div>
            
            {/* Available Cash */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-500">Available cash</p>
              <p className="text-2xl font-medium">4,043.10</p>
            </div>

            <hr className="border-gray-300 mb-6" />

            {/* Opening Balances */}
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-500">Opening Balance</p>
              <p>4,043.10</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-500">Opening Balance</p>
              <p>3736.40</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-500">Payin</p>
              <p>4064.00</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-500">SPAN</p>
              <p>0.00</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-500">Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-500">Exposure</p>
              <p>0.00</p>
            </div>
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-500">Options premium</p>
              <p>0.00</p>
            </div>

            <hr className="border-gray-300 mb-6" />

            {/* Collateral Section */}
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-500">Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-500">Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-500">Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        {/* Commodity Column */}
        <div className="w-1/2">
          <div className="p-8 text-center">
            <p className="text-gray-400 mb-8">You don't have a commodity account</p>
            <Link className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-sm transition-colors">
              Open Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;