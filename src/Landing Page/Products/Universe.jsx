import React from 'react';
import imageOne from "../../images/zerodhaFundhouse.png";
import imageTwo from "../../images/sensibullLogo.svg";
import imageFour from "../../images/streakLogo.png";
import imageFive from "../../images/smallcaseLogo.png";
import imageSix from "../../images/dittoLogo.png";

const Universe = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          The Zerodha Universe
        </h1>
        <p className="text-gray-600 mb-12">
          Extend your trading and investment experience even further with our partner platforms
        </p>

        {/* Partner Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Zerodha Fundhouse */}
          <div className="flex flex-col items-center text-center">
            <img src={imageOne} alt="Zerodha Fundhouse" className="w-32 h-auto mb-4" />
            <p className="text-gray-700 leading-relaxed">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>

          {/* Sensibull */}
          <div className="flex flex-col items-center text-center">
            <img src={imageTwo} alt="Sensibull" className="w-32 h-auto mb-4" />
            <p className="text-gray-700 leading-relaxed">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>

          {/* Tijori */}
          <div className="flex flex-col items-center text-center">
            <img src="https://zerodha.com/static/images/partners/tijori.svg" alt="Tijori" className="w-32 h-auto mb-4" />
            <p className="text-gray-700 leading-relaxed">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>

          {/* Streak */}
          <div className="flex flex-col items-center text-center">
            <img src={imageFour} alt="Streak" className="w-32 h-auto mb-4" />
            <p className="text-gray-700 leading-relaxed">
              Systematic trading platform that allows you to create and
              backtest strategies without coding.
            </p>
          </div>

          {/* Smallcase */}
          <div className="flex flex-col items-center text-center">
            <img src={imageFive} alt="Smallcase" className="w-32 h-auto mb-4" />
            <p className="text-gray-700 leading-relaxed">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks and ETFs.
            </p>
          </div>

          {/* Ditto */}
          <div className="flex flex-col items-center text-center">
            <img src={imageSix} alt="Ditto Insurance" className="w-32 h-auto mb-4" />
            <p className="text-gray-700 leading-relaxed">
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Universe;
