import React, { useState } from "react";
import { HiMenuAlt3, HiX, HiChevronDown } from "react-icons/hi";
import Logo from "../images/logo.svg"
import { NavLink } from "react-router-dom";

export default function Navber() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const toggleMobile = () => setMobileOpen((s) => !s);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-gray-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
     
       <NavLink to="/" className="flex items-center gap-2 shrink-0" aria-label="Home">
          <img src={Logo} alt="" srcset="" className="w-40" />
        </NavLink>

    
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/login" className="text-sm text-gray-700 hover:text-black transition">Signup</NavLink>
          <NavLink to="/about" className="text-sm text-gray-700 hover:text-black transition">About</NavLink>
          <NavLink to="/product" className="text-sm text-gray-700 hover:text-black transition">Product </NavLink>

    
     

          <NavLink to="/pricing" className="text-sm text-gray-700 hover:text-black transition">Pricing</NavLink>
          <NavLink to="/support" className="text-sm text-gray-700 hover:text-black transition">Support</NavLink>

          <NavLink to="/login" className="ml-2 rounded-2xl border border-gray-300 px-4 py-1.5 text-sm text-gray-800 hover:bg-gray-50">Login</NavLink>
        </div>

   
        <button
          className="md:hidden inline-flex items-center justify-center rounded-xl p-2 hover:bg-gray-100"
          onClick={toggleMobile}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </nav>


      <div
        className={`md:hidden border-t border-gray-200 overflow-hidden transition-[max-height] duration-300 ${
          mobileOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8 py-3 space-y-1 bg-white">
          <NavLink to="/login" className="block rounded-xl px-3 py-2 text-sm hover:bg-gray-50">Signup</NavLink>
          <NavLink to="/about" className="block rounded-xl px-3 py-2 text-sm hover:bg-gray-50">About</NavLink>
         <NavLink  to="/product" className="block rounded-xl px-3 py-2 text-sm hover:bg-gray-50">Product</NavLink>

         <NavLink  to="/pricing" className="block rounded-xl px-3 py-2 text-sm hover:bg-gray-50">Pricing</NavLink>
         <NavLink  to="/support" className="block rounded-xl px-3 py-2 text-sm hover:bg-gray-50">Support</NavLink>
         <NavLink  to="/login" className="block rounded-xl px-3 py-2 text-sm hover:bg-gray-50">Login</NavLink>
        </div>
      </div>
    </header>
  );
}
