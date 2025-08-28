import React from "react";
import { HiArrowRight } from "react-icons/hi";
import image from "../../images/pricingEquity.svg";
import imageOne from "../../images/intradayTrades.svg";

const Pricing = () => {
    return (
        <div className="mt-40 px-5 md:px-20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
                <div className="text-center md:text-left max-w-lg m-auto ml-30">
                    <h1 className="text-2xl md:text-3xl font-semibold">Unbeatable pricing</h1>
                    <p className="text-gray-600 mt-4 mb-5 ">
                        We pioneered the concept of discount broking and price transparency in India.
                        Flat fees and no hidden charges.
                    </p>
                    <button className="flex items-center gap-2 text-blue-500 mx-auto md:mx-0">
                        See Pricing <HiArrowRight />
                    </button>
                </div>

                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full md:w-auto m-auto mr-50">
             
                    <div className="flex flex-col items-center text-center">
                        <img src={image} alt="Free Account" className="w-20 md:w-24" />
                        <p className="mt-3 text-sm">
                            Free account <br /> opening
                        </p>
                    </div>

       
                    <div className="flex flex-col items-center text-center">
                        <img src={image} alt="Free Delivery" className="w-20 md:w-24" />
                        <p className="mt-3 text-sm">
                            Free equity delivery <br /> and direct mutual funds
                        </p>
                    </div>

             
                    <div className="flex flex-col items-center text-center">
                        <img src={imageOne} alt="Intraday Trades" className="w-20 md:w-24" />
                        <p className="mt-3 text-sm">
                            Intraday and <br /> F&amp;O
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
