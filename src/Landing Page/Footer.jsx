import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        

        <div>
          <h1 className="text-2xl font-bold text-blue-900">Zerodha</h1>
          <p className="mt-4 text-sm">
            Invest in everything. Online platform to invest in stocks, derivatives, mutual funds, and more.
          </p>
        </div>

 
        <div>
          <h2 className="text-lg font-semibold mb-4">Company</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-600">About</a></li>
            <li><a href="#" className="hover:text-blue-600">Products</a></li>
            <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
            <li><a href="#" className="hover:text-blue-600">Careers</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
    

        <div>
          <h2 className="text-lg font-semibold mb-4">Support</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-600">Support Portal</a></li>
            <li><a href="#" className="hover:text-blue-600">Z-Connect Blog</a></li>
            <li><a href="#" className="hover:text-blue-600">Downloads</a></li>
            <li><a href="#" className="hover:text-blue-600">List of Charges</a></li>
          </ul>
        </div>


        <div>
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li>
              Email:{" "}
              <a href="mailto:support@zerodha.com" className="hover:text-blue-600">
                support@zerodha.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+91-80-4718-1888" className="hover:text-blue-600">
                +91 80 4718 1888
              </a>
            </li>
            <li>Address: Bengaluru, India</li>
          </ul>
        </div>
      </div>

  
      <div className="border-t border-gray-300 mt-6 py-4 text-center text-sm">
        © {new Date().getFullYear()} Zerodha. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
