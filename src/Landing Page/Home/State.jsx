import React from "react";
import image from "../../images/education.svg";
import { HiArrowRight } from "react-icons/hi";

const State = () => {
    return (
        <div className="px-5 md:px-20">
      
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-20">
                <div className="flex justify-center md:justify-start">
                    <img src={image} alt="Education" className="w-72 md:w-96" />
                </div>

        
                <div className="text-center md:text-left">
                    <h1 className="text-2xl md:text-3xl font-semibold mb-6">
                        Free and open market education
                    </h1>

                    <p className="text-gray-600 mb-4 max-w-md mx-auto md:mx-0">
                        Varsity, the largest online stock market education book in the world
                        covering everything from the basics to advanced trading.
                    </p>
                    <button className="flex items-center gap-2 text-blue-500 mx-auto md:mx-0">
                        Varsity <HiArrowRight />
                    </button>

           
                    <p className="text-gray-600 mt-6 mb-4 max-w-md mx-auto md:mx-0">
                        TradingQ&A, the most active trading and investment community in
                        India for all your market related queries.
                    </p>
                    <button className="flex items-center gap-2 text-blue-500 mx-auto md:mx-0">
                        TradingQ&A <HiArrowRight />
                    </button>
                </div>
            </div>


            <div className="text-center mt-20">
                <h1 className="text-2xl md:text-3xl font-semibold">
                    Open a Zerodha account
                </h1>
                <p className="text-gray-600 mt-6 mb-10 max-w-xl mx-auto">
                    Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
                    F&amp;O trades.
                </p>
                <button className="bg-blue-500 px-8 md:px-12 py-3 text-white rounded-lg hover:bg-black transition">
                    Sign Up for Free
                </button>
            </div>
        </div>
    );
};

export default State;
