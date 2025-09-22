import React, { useState } from 'react';

const CreateTicket = () => {
  const [activeCategory, setActiveCategory] = useState('account');
  const [expandedItems, setExpandedItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Toggle expansion of FAQ item
  const toggleItem = (id) => {
    if (expandedItems.includes(id)) {
      setExpandedItems(expandedItems.filter(item => item !== id));
    } else {
      setExpandedItems([...expandedItems, id]);
    }
  };

  // FAQ data organized by categories
  const faqData = {
    account: [
      {
        id: 'account-1',
        question: 'How do I open an account with Zerodha?',
        answer: 'You can open an account online by visiting our website and completing the account opening process. You will need your PAN card, Aadhaar card, bank details, and a cancelled cheque.'
      },
      {
        id: 'account-2',
        question: 'How long does it take to open an account?',
        answer: 'The account opening process typically takes 24-48 hours once all documents are submitted and verified.'
      },
      {
        id: 'account-3',
        question: 'What are the documents required for account opening?',
        answer: 'You need PAN card, Aadhaar card, bank account details, and a cancelled cheque. For non-individual accounts, additional documents may be required.'
      },
      {
        id: 'account-4',
        question: 'Can I open an NRI account with Zerodha?',
        answer: 'Yes, we do support NRI accounts. The process is similar but requires additional documentation related to your NRI status.'
      }
    ],
    trading: [
      {
        id: 'trading-1',
        question: 'What are the market hours for equity trading?',
        answer: 'The normal market hours are from 9:15 AM to 3:30 PM IST, Monday to Friday. Pre-open session is from 9:00 AM to 9:15 AM.'
      },
      {
        id: 'trading-2',
        question: 'What is the minimum amount needed to start trading?',
        answer: 'There is no minimum amount required to start trading. You can start with any amount you are comfortable with.'
      },
      {
        id: 'trading-3',
        question: 'How do I place a trade on Kite?',
        answer: 'After logging into Kite, select the scrip you want to trade, choose order type (market/limit), enter quantity, and place the order.'
      }
    ],
    charges: [
      {
        id: 'charges-1',
        question: 'What are the brokerage charges at Zerodha?',
        answer: 'Zerodha charges ₹20 or 0.03% (whichever is lower) per executed order for equity delivery. There are no brokerage charges for equity intraday and F&O trades.'
      },
      {
        id: 'charges-2',
        question: 'Are there any account maintenance charges?',
        answer: 'No, there are no account maintenance charges. However, there are certain transaction charges and statutory charges levied by exchanges.'
      }
    ],
    technical: [
      {
        id: 'technical-1',
        question: 'What should I do if I cannot login to Kite?',
        answer: 'First, check your internet connection. If the problem persists, try resetting your password. If you still cannot login, contact our support team.'
      },
      {
        id: 'technical-2',
        question: 'How do I reset my Kite password?',
        answer: 'You can reset your password by clicking on "Forgot password" on the login page and following the instructions sent to your registered email and mobile number.'
      }
    ]
  };

  // Filter FAQs based on search query
  const filteredFaqs = Object.entries(faqData).reduce((acc, [category, items]) => {
    if (searchQuery) {
      const filteredItems = items.filter(item => 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (filteredItems.length > 0) {
        acc[category] = filteredItems;
      }
    } else {
      acc[category] = items;
    }
    return acc;
  }, {});

  // Get category title
  const getCategoryTitle = (category) => {
    const titles = {
      account: 'Account Opening & Management',
      trading: 'Trading & Investments',
      charges: 'Charges & Fees',
      technical: 'Technical Support'
    };
    return titles[category] || category;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
      
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for questions..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8 overflow-x-auto">
          {Object.keys(faqData).map(category => (
            <button
              key={category}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeCategory === category
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {getCategoryTitle(category)}
            </button>
          ))}
        </nav>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {searchQuery ? (
          // Show all categories when searching
          Object.entries(filteredFaqs).map(([category, items]) => (
            <div key={category} className="mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">{getCategoryTitle(category)}</h3>
              <div className="space-y-4">
                {items.map(item => (
                  <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
                      onClick={() => toggleItem(item.id)}
                    >
                      <span className="font-medium text-gray-900">{item.question}</span>
                      <svg
                        className={`h-5 w-5 text-gray-500 transform ${expandedItems.includes(item.id) ? 'rotate-180' : ''}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    {expandedItems.includes(item.id) && (
                      <div className="p-4 bg-white">
                        <p className="text-gray-700">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          // Show only active category when not searching
          filteredFaqs[activeCategory]?.map(item => (
            <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
                onClick={() => toggleItem(item.id)}
              >
                <span className="font-medium text-gray-900">{item.question}</span>
                <svg
                  className={`h-5 w-5 text-gray-500 transform ${expandedItems.includes(item.id) ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {expandedItems.includes(item.id) && (
                <div className="p-4 bg-white">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))
        )}

        {/* No results message */}
        {searchQuery && Object.keys(filteredFaqs).length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No results found for "{searchQuery}"</p>
            <button 
              className="mt-2 text-blue-600 hover:underline"
              onClick={() => setSearchQuery('')}
            >
              Clear search
            </button>
          </div>
        )}
      </div>

      {/* Still need help section */}
      <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Still need help?</h3>
        <p className="text-gray-700 mb-4">
          If you couldn't find the answer to your question, you can create a support ticket and our team will get back to you.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
          Create a Ticket
        </button>
      </div>
    </div>
  );
};

export default CreateTicket;