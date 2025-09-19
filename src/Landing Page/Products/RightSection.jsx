import React from 'react';
import { HiArrowRight } from "react-icons/hi";
import Logo from "../../images/googlePlayBadge.svg" 
import Logo1 from "../../images/appstoreBadge.svg" 
const RightSection = ({ image, productName, productDescription, tryDemo, learnMore }) => {
    return (
        <div className="py-10 px-5 flex justify-center mt-10">
            <div className="max-w-5xl  w-full grid grid-cols-1 md:grid-cols-[auto_1fr] items-center gap-40 mx-auto">

<div className="text-center md:text-left ">
                    <h1 className="text-4xl font-semibold">{productName}</h1>
                    <p className="max-w-md my-6 leading-8 text-gray-700 mx-auto md:mx-0 w-90">
                        {productDescription}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
                        <button className="flex items-center gap-2 text-blue-500 hover:underline">
                            {tryDemo} <HiArrowRight />
                        </button>
                        <button className="flex items-center gap-2 text-blue-500 hover:underline">
                            {learnMore} <HiArrowRight />
                        </button>
                    </div>



                     <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
                        <button className="flex items-center gap-2 text-blue-500 hover:underline">
                        
                        <img src={Logo} alt="" srcset="" />
                        </button>
                        <button className="flex items-center gap-2 text-blue-500 hover:underline">
                
                <img src={Logo1} alt="" srcset="" />
                  </button>
                    </div>



                </div>




                <div className="flex justify-center">
                    <img
                        src={image}
                        alt="Kite trading platform"
                        className="max-w-sm w-full h-auto"
                    />
                </div>

                

            </div>
        </div>
    );
};

export default RightSection;
