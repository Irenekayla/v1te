// Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
<nav className="bg-black text-white p-4 flex items-center justify-end">
      <div className="container mx-auto ">
        <a href="#about" className="mr-4 hover:text-gray-300">
          About
        </a>
        <a href="#projects" className="mr-4 hover:text-gray-300">
          Projects
        </a>
        <a href="#contacts" className="ml-auto hover:text-gray-300">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
