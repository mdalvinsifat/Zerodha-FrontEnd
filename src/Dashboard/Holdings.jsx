import React from "react";

const Holdings = () => {
  return (
    <div>
      {/* Title */}
      <h3 className="text-xl font-light text-gray-700 mb-4">Holdings (13)</h3>

      {/* Table */}
      <div className="w-full mb-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-t border-b border-gray-200">
              <th className="text-right py-4 px-3 text-gray-500 font-light text-sm border-r border-gray-100">Instrument</th>
              <th className="text-right py-4 px-3 text-gray-500 font-light text-sm">Qty.</th>
              <th className="text-right py-4 px-3 text-gray-500 font-light text-sm">Avg. cost</th>
              <th className="text-right py-4 px-3 text-gray-500 font-light text-sm border-r border-gray-100">LTP</th>
              <th className="text-right py-4 px-3 text-gray-500 font-light text-sm">Cur. val</th>
              <th className="text-right py-4 px-3 text-gray-500 font-light text-sm">P&L</th>
              <th className="text-right py-4 px-3 text-gray-500 font-light text-sm">Net chg.</th>
              <th className="text-right py-4 px-3 text-gray-500 font-light text-sm text-xs">Day chg.</th>
            </tr>
          </thead>
          {/* Add table rows here when you have data */}
        </table>
      </div>

      {/* Summary Row */}
      <div className="w-full flex items-center justify-between mt-12">
        <div className="w-1/3">
          <h5 className="text-2xl font-light text-gray-700">
            29,875.<span className="font-light text-sm">55</span>
          </h5>
          <p className="text-gray-500 text-sm font-light mt-1">Total investment</p>
        </div>
        <div className="w-1/3">
          <h5 className="text-2xl font-light text-gray-700">
            31,428.<span className="font-light text-sm">95</span>
          </h5>
          <p className="text-gray-500 text-sm font-light mt-1">Current value</p>
        </div>
        <div className="w-1/3">
          <h5 className="text-2xl font-light text-green-500">1,553.40 (+5.20%)</h5>
          <p className="text-gray-500 text-sm font-light mt-1">P&L</p>
        </div>
      </div>
    </div>
  );
};

export default Holdings;