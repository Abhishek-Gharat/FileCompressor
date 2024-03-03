// src/components/Navbar.js or src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 flex justify-between items-center">
      <div className="text-white text-2xl font-bold">
        TRixCompressor
      </div>
      <div className="space-x-4">
        <a href="#api" className="text-white hover:text-gray-200 transition duration-200">Api</a>
        <a href="#compressor-options" className="text-white hover:text-gray-200 transition duration-200">Compressor Options</a>
        <a href="#pricing" className="text-white hover:text-gray-200 transition duration-200">Pricing</a>
        <a href="#blog" className="text-white hover:text-gray-200 transition duration-200">Blog</a>
      </div>
    </nav>
  );
};

export default Navbar;
