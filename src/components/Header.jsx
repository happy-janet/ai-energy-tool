// components/Header.js
import React from 'react';


const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <div>
       <img src="/logo.png" alt="Logo" className="w-24 h-auto" />
      </div>

      {/* Navigation Links */}
      <nav className="space-x-6 text-gray-700 font-medium hidden md:flex">
        <a href="#home" className="hover:text-blue-600 transition">Home</a>
        <a href="#about" className="hover:text-blue-600 transition">About</a>
        <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
      </nav>

      {/* Sign In Button */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
        Sign In
      </button>
    </header>
  );
};

export default Header;