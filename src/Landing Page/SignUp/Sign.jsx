import React, { useState } from 'react';
import Layout from '../Layout';

const Sign = () => {
  const [activeTab, setActiveTab] = useState('individual');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { mobileNumber, email });
  };

  return (
    <Layout className="min-h-screen bg-gray-50">


      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Open a free account in 10 minutes
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            India's biggest stock broker offers the lowest, cheapest brokerage rates for futures and options, commodity trading, equity, and mutual funds.
          </p>
        </div>

        {/* Account Type Tabs */}
        <div className="max-w-md mx-auto mb-8">
          <div className="flex border-b border-gray-200">
            <button
              className={`py-3 px-6 font-medium text-sm ${activeTab === 'individual' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('individual')}
            >
              Individual
            </button>
            <button
              className={`py-3 px-6 font-medium text-sm ${activeTab === 'huf' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('huf')}
            >
              HUF
            </button>
            <button
              className={`py-3 px-6 font-medium text-sm ${activeTab === 'corporate' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('corporate')}
            >
              Corporate
            </button>
          </div>
        </div>

        {/* Form Section */}
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 mb-10">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                Mobile number
              </label>
              <div className="flex">
                <div className="flex-shrink-0 z-10 inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l-md">
                  +91
                </div>
                <input
                  type="tel"
                  id="mobile"
                  className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your mobile number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign up now
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-gray-500">
            By signing up, you agree to our <a href="#" className="text-blue-600">Terms & Conditions</a> and <a href="#" className="text-blue-600">Privacy Policy</a>
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No hidden charges</h3>
            <p className="text-gray-600">No account opening charges, no maintenance fees</p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Secure</h3>
            <p className="text-gray-600">Robust security systems to protect your account</p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Fast</h3>
            <p className="text-gray-600">Quick and hassle-free account opening process</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently asked questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button className="w-full p-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center">
                <span className="font-medium text-gray-900">What documents do I need to open an account?</span>
                <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button className="w-full p-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center">
                <span className="font-medium text-gray-900">How long does it take to open an account?</span>
                <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button className="w-full p-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center">
                <span className="font-medium text-gray-900">Is there any charge for opening an account?</span>
                <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img 
                src="https://zerodha.com/static/images/logo.svg" 
                alt="Zerodha" 
                className="h-5"
              />
              <p className="text-xs text-gray-600 mt-2">© 2010 - 2024, Zerodha Broking Ltd.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Terms & Conditions</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default Sign;