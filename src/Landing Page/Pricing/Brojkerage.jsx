import React from "react";

function Brojkerage() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="p-5 mt-8 text-center border-t flex flex-col md:flex-row">
        {/* Left column */}
        <div className="md:w-2/3 p-4 text-left">
          <a href="#" className="no-underline">
            <h3 className="text-lg font-semibold">Brokerage calculator</h3>
          </a>
          <ul className="text-gray-500 mt-3 space-y-2 text-sm leading-6">
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>

        {/* Right column */}
        <div className="md:w-1/3 p-4 flex items-start justify-center md:justify-end">
          <a href="#" className="no-underline">
            <h3 className="text-lg font-semibold">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brojkerage;
