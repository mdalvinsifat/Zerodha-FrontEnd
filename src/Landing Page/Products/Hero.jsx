import React from 'react';
import { HiArrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div className="text-center py-10">
      <h1 className="text-3xl font-bold mb-4">Zerodha Products</h1>
      <h3 className="text-lg text-gray-700 mb-6">
        Sleek, modern, and intuitive trading platforms
      </h3>


<div className='flex justify-center m-2'>
    <p>Check out our</p>
      <a 
        href="https://zerodha.com/products/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex ml-4 items-center gap-2 text-blue-500 hover:text-blue-700 font-medium transition"
      >
        Explore Our Product <HiArrowRight />
      </a>

</div>

    </div>
  );
};

export default Hero;
