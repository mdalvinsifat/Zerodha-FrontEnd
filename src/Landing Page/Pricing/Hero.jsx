import React from "react";
import image from "../../images/pricingEquity.svg"
import image1 from "../../images/intradayTrades.svg"
function Hero() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Top heading section */}
      <div className="p-5 mt-8 border-b text-center">
        <h1 className="text-3xl font-bold">Pricing</h1>
        <h3 className="text-base text-gray-500 mt-3">
          Free equity investments and flat ₹20 traday and F&O trades
        </h3>
      </div>

      {/* Cards section */}
      <div className="p-5 mt-8 text-center">
        <div className="flex flex-col md:flex-row md:-mx-4">
          {/* Card 1 */}
          <div className="md:w-1/3 md:px-4 p-4">
            <img
              src={image}
              alt="pricing equity"
              className="mx-auto mb-4 w-28 h-28 object-contain"
            />
            <h2 className="text-2xl font-semibold">Free equity delivery</h2>
            <p className="text-gray-500 mt-2">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>

          {/* Card 2 */}
          <div className="md:w-1/3 md:px-4 p-4">
            <img
              src={image1}
              alt="intraday trades"
              className="mx-auto mb-4 w-28 h-28 object-contain"
            />
            <h2 className="text-2xl font-semibold">Intraday and F&O trades</h2>
            <p className="text-gray-500 mt-2">
              Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
            </p>
          </div>

          {/* Card 3 */}
          <div className="md:w-1/3 md:px-4 p-4">
            <img
              src={image}
              alt="direct mutual funds"
              className="mx-auto mb-4 w-28 h-28 object-contain"
            />
            <h2 className="text-2xl font-semibold">Free direct MF</h2>
            <p className="text-gray-500 mt-2">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
