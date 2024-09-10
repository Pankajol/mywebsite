import React from 'react';
import Link from 'next/link';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Title */}
        <h1 className="text-white text-xl md:text-2xl font-bold">
          Pankaj Yadav
        </h1>
        {/* Icons */}
        <div className="flex space-x-4">
          <Link href="/signin">
            <div className="text-white flex items-center space-x-1 hover:underline text-sm md:text-base">
              <FaSignInAlt className="text-lg md:text-xl" /> 
              <span>Sign In</span>
            </div>
          </Link>
          <Link href="/register">
            <div className="text-white flex items-center space-x-1 hover:underline text-sm md:text-base">
              <FaUserPlus className="text-lg md:text-xl" />
              <span>Register</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
