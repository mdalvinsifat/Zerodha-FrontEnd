import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import imagesOne from "../../images/kite.png"
import imagesTwo from "../../images/coin.png"
import imagesThree from "../../images/varsity.png"
import imagesFour from "../../images/console.png"
import imagesSix from "../../images/kiteconnect.png"
import RightSection from './RightSection';
import { HiArrowRight } from "react-icons/hi";
import Universe from './Universe';

const ProductPage = () => {
    return (
        <div>
           <Hero/> 
           <LeftSection  
           
              image={imagesOne}
              productName="Kite"
               productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices"
                tryDemo ="try demo"
                learnMore= "Learn More"
        
           />



           <RightSection  
           
              image={imagesFour}
              productName="Kite"
               productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices"
                tryDemo ="try demo"
                learnMore= "Learn More"
        
           />






           <LeftSection  
           
              image={imagesTwo}
              productName="Coin"
               productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.

"
                tryDemo ="Coin"
        
           />

           <RightSection  
           
              image={imagesSix}
              productName="Kite"
               productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices"
                tryDemo ="try demo"
                learnMore= "Learn More"
        
           />






           <LeftSection  
           
              image={imagesThree}
              productName="Varsity mobile
"
               productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.

"
                tryDemo ="try demo"
                learnMore= "Learn More"
        
           />



<Universe/>


        </div>
    );
};

export default ProductPage;