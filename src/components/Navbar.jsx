// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link

// const Navbar = ({ isTransparent }) => {
//   return (
//     <nav className={`flex items-center justify-between px-6 position:fixed-top lg:px-16 py-6 transition-all ${isTransparent ? 'bg-transparent' : 'bg-white'}`}>
//       <Link to="/" className="w-18 lg:w-22 bg-white p-1 rounded-lg">
//         <img src="/images/logo.jpg" alt="Logo" className="w-full" />
//       </Link>

//       <div className="hidden md:flex space-x-12 items-center font-black">
//         {/* Dynamic Links */}
//         <Link to="/" className="hover:text-sweet-pink transition">HOME</Link>
//         <Link to="/about" className="hover:text-sweet-pink transition">ABOUT US</Link>
//         <Link to="/program" className="hover:text-sweet-pink transition">PROGRAM</Link>
//         <Link to="/faq" className="hover:text-sweet-pink transition">FAQ</Link>
//       </div>

//       <button className="bg-white px-8 py-3 rounded-full shadow-xl font-black text-black hover:scale-105 transition cursor-pointer">
//         APPLY NOW
//       </button>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isTransparent }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-6 lg:px-16 py-1 lg:py-3 transition-all ${isTransparent && !isOpen ? 'bg-transparent' : 'bg-white shadow-md'}`}>
      
      {/* Logo */}
      <Link to="/" className="w-16 lg:w-22 bg-white p-1 rounded-lg relative z-[110]">
        <img src="/images/logo.jpg" alt="Logo" className="w-full" />
      </Link>

      {/* Desktop Links (Hidden on Mobile) */}
      <div className="hidden md:flex space-x-12 items-center font-black text-black">
        <Link to="/" className="hover:text-sweet-pink transition">HOME</Link>
        <Link to="/about" className="hover:text-sweet-pink transition">ABOUT US</Link>
        <Link to="/program" className="hover:text-sweet-pink transition">PROGRAM</Link>
        <Link to="/faq" className="hover:text-sweet-pink transition">FAQ</Link>
      </div>

      {/* Action Area (Apply Button + Mobile Toggle) */}
      <div className="flex items-center space-x-4 relative z-[110]">
        <button className="hidden sm:block bg-white px-6 lg:px-8 py-2 lg:py-3 rounded-full shadow-xl font-black text-black hover:scale-105 transition cursor-pointer border border-gray-100">
          APPLY NOW
        </button>

        {/* Hamburger Toggle (Visible only on Mobile) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none cursor-pointer"
        >
          <span className={`block w-8 h-1 bg-black rounded transition-transform ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`block w-8 h-1 bg-black rounded transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-8 h-1 bg-black rounded transition-transform ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`
        fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col space-y-8 items-center font-black text-2xl text-black">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-sweet-pink">HOME</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-sweet-pink">ABOUT US</Link>
          <Link to="/program" onClick={() => setIsOpen(false)} className="hover:text-sweet-pink">PROGRAM</Link>
          <Link to="/faq" onClick={() => setIsOpen(false)} className="hover:text-sweet-pink">FAQ</Link>
          <button className="bg-[#81DDFB] text-white px-10 py-4 rounded-full shadow-lg font-black cursor-pointer">
            APPLY NOW
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;