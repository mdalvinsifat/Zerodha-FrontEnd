import React from 'react';
import image from "../../images/ecosystem.png";
import Logo from "../../images/pressLogos.png";
import { HiArrowRight } from "react-icons/hi";

const Awards = () => {
  return (
    <div className="mt-12 px-4 md:px-8 lg:px-16 m-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2  ">
        {/* Text Section */}
        <div className='m-auto'>
          <h1 className="text-2xl md:text-2xl font-normal">Trust with confidence</h1>

          <div className="mt-10 md:mt-16 ">
            <h2 className="text-xl md:text-2xl  font-normal ">Customer-first always</h2>
            <p className="mt-3 text-gray-700 w-100">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity
              investments and contribute to 15% of daily retail exchange volumes in India.
            </p>
          </div>

          <div className="mt-8 md:mt-10">
            <h2 className="text-xl md:text-2xl font-normal ">No spam or gimmicks</h2>
            <p className="mt-3 text-gray-700 w-93">
              No gimmicks, spam, "gamification", or annoying push notifications. High quality
              apps that you use at your pace, the way you like. Our philosophies.
            </p>
          </div>

          <div className="mt-8 md:mt-10">
            <h2 className="text-xl md:text-2xl font-normal">The Zerodha universe</h2>
            <p className="mt-3 text-gray-700 w-93">
              Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups
              offer you tailored services specific to your needs.
            </p>
          </div>

          <div className="mt-8 md:mt-10">
            <h2 className="text-xl md:text-2xl font-normal">Do better with money</h2>
            <p className="mt-3 text-gray-700 w-93">
              With initiatives like Nudge and Kill Switch, we don't just facilitate transactions,
              but actively help you do better with your money.
            </p>
          </div>
        </div>

        {/* Image & Buttons */}
        <div className="w-full flex flex-col lg:items-start">
          <img src={image} alt="ecosystem" className="w-full max-w-md lg:max-w-lg" />

          <div className="flex flex-col sm:flex-row gap-4 mt-6 lg:ml-5">
            <button className="flex items-center gap-2 text-blue-500">
              Explore Our Product <HiArrowRight />
            </button>
            <button className="flex items-center gap-2 text-blue-500">
              Try Kite demo <HiArrowRight />
            </button>
          </div>
        </div>
      </div>



      <div className="flex justify-center items-center mt-20">
        <img src={Logo} alt="Logo" />
      </div>

    </div>
  );
};

export default Awards;
