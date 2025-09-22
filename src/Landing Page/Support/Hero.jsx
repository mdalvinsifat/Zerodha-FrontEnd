import React, { useState } from 'react';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('help');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-auto"
                  src="https://zerodha.com/static/images/logo.svg"
                  alt="Zerodha"
                />
              </div>
              <nav className="hidden md:ml-6 md:flex space-x-8">
                <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                  Signup
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                  About
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                  Products
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                  Pricing
                </a>
                <a href="#" className="text-gray-900 border-b-2 border-green-500 px-3 py-2 text-sm font-medium">
                  Support
                </a>
              </nav>
            </div>
            <div className="flex items-center">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Support Hero Section */}
      <section className="w-full bg-white" id="supportHero">
        {/* Support Header */}
        <div className="p-6 bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <h4 className="text-xl font-semibold text-gray-800">Support Portal</h4>
            <a
              href="#"
              className="text-blue-600 hover:underline font-medium text-sm"
            >
              Track Tickets
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Search & Quick Links */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Eg. How do I activate F&O"
                className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Track account opening
              </a>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Track segment activation
              </a>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Intraday margins
              </a>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Kite user manual
              </a>
            </div>
          </div>

          {/* Right Column: Featured or Updates */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Featured</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-800">
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Current Takeovers and Delisting – January 2024
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Latest Intraday leverages – MIS & CO
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="bg-white border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex">
            <button
              className={`px-6 py-4 font-medium text-sm ${activeTab === 'help' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('help')}
            >
              Help
            </button>
            <button
              className={`px-6 py-4 font-medium text-sm ${activeTab === 'tickets' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('tickets')}
            >
              Tickets
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Categories */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-600 hover:underline block py-2">
                  Getting started
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline block py-2">
                  Account management
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline block py-2">
                  Kite & trading
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline block py-2">
                  Console
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline block py-2">
                  Funds
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline block py-2">
                  Charges & margins
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline block py-2">
                  Reports & taxes
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline block py-2">
                  Kite Connect API
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column - Articles */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Popular articles</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <a href="#" className="text-lg font-medium text-blue-600 hover:underline">
                  How to activate F&O, Commodity, and Currency segments?
                </a>
                <p className="text-gray-600 mt-2">Steps to activate F&O, Commodity, and Currency segments in your account.</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <a href="#" className="text-lg font-medium text-blue-600 hover:underline">
                  How to update bank account details?
                </a>
                <p className="text-gray-600 mt-2">Steps to add or change bank account details for payouts.</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <a href="#" className="text-lg font-medium text-blue-600 hover:underline">
                  How to place orders using Kite?
                </a>
                <p className="text-gray-600 mt-2">Learn how to place different types of orders on Kite.</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <a href="#" className="text-lg font-medium text-blue-600 hover:underline">
                  How to reset Kite password?
                </a>
                <p className="text-gray-600 mt-2">Steps to reset your Kite password if you've forgotten it.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

    
    </div>
  );
};

export default Hero;