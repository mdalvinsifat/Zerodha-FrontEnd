import React from 'react';
import image from "../../images/homeHero.png"
const Hero = () => {
    return (
        <div className=''>
            <img className='w-250 m-auto' src={image} alt="" srcset=""  />

<div className='text-center '>
    
            <h1 className='text-5xl '>Invest in everything</h1>
            <p className='text-2xl mt-3'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button className='mt-8 bg-blue-500  px-10 text-white py-2 hover:bg-black'> Sign Up for Free </button>
</div>



        </div>
    );
};

export default Hero;