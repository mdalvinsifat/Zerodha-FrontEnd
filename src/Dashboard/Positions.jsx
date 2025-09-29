import React from "react";
import AdminLayout from "./AdminLayout";

const Positions = () => {
  return (
    <div>
      {/* Title */}
      <h3 className="text-xl font-light text-gray-700 mb-4">Positions (2)</h3>

      {/* Table */}
      <div className="w-full">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-t border-b border-gray-200">
              <th className="text-left py-4 px-3 text-gray-500 font-light text-sm">Product</th>
              <th className="text-left py-4 px-3 text-gray-500 font-light text-sm">Instrument</th>
              <th className="text-right py-4 px-3 text-gray-500 font-light text-sm">Qty.</th>
              <th className="text-right py-4 px-3 text-gray-500 font-light text-sm">Avg.</th>
              <th className="text-right py-4 px-3 text-gray-500 font-light text-sm">LTP</th>
              <th className="text-right py-4 px-3 text-gray-500 font-light text-sm">P&L</th>
              <th className="text-right py-4 px-3 text-gray-500 font-light text-sm">Chg.</th>
            </tr>
          </thead>
          {/* Add table rows here when you have data */}
        </table>
      </div>
    </div>
  );
};

export default Positions;