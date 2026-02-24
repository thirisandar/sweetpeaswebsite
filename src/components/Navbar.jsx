// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = ({ isTransparent, showForm , setShowForm }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showForm, setShowForm] = useState(false);

//   const handleApplyClick = () => {
//     setShowForm(true);
//     setIsOpen(false);
//   };

//   return (
//     <>
//       <nav className={`fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-6 lg:px-16 py-1 lg:py-3 transition-all ${isTransparent && !isOpen ? 'bg-transparent' : 'bg-white shadow-md'}`}>
        
//         {/* Logo */}
//         <Link to="/" className="w-16 lg:w-22 bg-white p-1 rounded-lg relative z-[110]">
//           <img src="/images/logo.jpg" alt="Logo" className="w-full" />
//         </Link>

//         {/* Desktop Links */}
//         <div className="hidden md:flex space-x-12 items-center font-black text-black">
//           <Link to="/" className="hover:text-sweet-pink transition">HOME</Link>
//           <Link to="/about" className="hover:text-sweet-pink transition">ABOUT US</Link>
//           <Link to="/program" className="hover:text-sweet-pink transition">PROGRAM</Link>
//           <Link to="/faq" className="hover:text-sweet-pink transition">FAQ</Link>
//         </div>

//         {/* Action Area */}
//         <div className="flex items-center space-x-4 relative z-[110]">
//           <button 
//             onClick={handleApplyClick}
//             className="hidden sm:block bg-white px-6 lg:px-8 py-2 lg:py-3 rounded-full shadow-xl font-black text-black hover:scale-105 transition cursor-pointer border border-gray-100"
//           >
//             APPLY NOW
//           </button>

//           {/* Hamburger Toggle */}
//           <button 
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none cursor-pointer"
//           >
//             <span className={`block w-8 h-1 bg-black rounded transition-transform ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
//             <span className={`block w-8 h-1 bg-black rounded transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
//             <span className={`block w-8 h-1 bg-black rounded transition-transform ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
//           </button>
//         </div>

//         {/* Mobile Menu Drawer */}
//         <div className={`
//           fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden
//           ${isOpen ? 'translate-x-0' : 'translate-x-full'}
//         `}>
//           <div className="flex flex-col space-y-8 items-center font-black text-2xl text-black">
//             <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-sweet-pink">HOME</Link>
//             <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-sweet-pink">ABOUT US</Link>
//             <Link to="/program" onClick={() => setIsOpen(false)} className="hover:text-sweet-pink">PROGRAM</Link>
//             <Link to="/faq" onClick={() => setIsOpen(false)} className="hover:text-sweet-pink">FAQ</Link>
//             <button 
//               onClick={handleApplyClick}
//               className="bg-[#81DDFB] text-white px-10 py-4 rounded-full shadow-lg font-black cursor-pointer"
//             >
//               APPLY NOW
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* --- JOTFORM MODAL --- */}
//       {showForm && (
//         <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
//           <div className="relative w-full max-w-4xl bg-white rounded-[30px] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
//             <button 
//               onClick={() => setShowForm(false)}
//               className="absolute top-4 right-6 text-3xl font-black text-black hover:text-sweet-pink z-50 cursor-pointer"
//             >
//               ✕
//             </button>

//             <div className="overflow-y-auto p-6 pt-12">
//               <JotFormEmbed />
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// // Sub-component with Loading Spinner
// const JotFormEmbed = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://form.jotform.com/jsform/232234500679050";
//     script.type = "text/javascript";
//     script.async = true;
    
//     // When the script finishes loading, hide the spinner
//     script.onload = () => {
//       setLoading(false);
//     };

//     document.getElementById("jotform-container").appendChild(script);
//   }, []);

//   return (
//     <div className="relative min-h-[500px]">
//       {loading && (
//         <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
//           {/* SweetPeas Theme Spinner */}
//           <div className="w-16 h-16 border-8 border-[#ADF1FF] border-t-[#F1808F] rounded-full animate-spin"></div>
//           <p className="mt-4 font-black text-[#81DDFB] uppercase tracking-widest animate-pulse">
//             Loading Form...
//           </p>
//         </div>
//       )}
//       <div id="jotform-container"></div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// We remove the local 'const [showForm, setShowForm] = useState(false)' 
// because these are now coming in as props from your Parent (Home/App)
const Navbar = ({ isTransparent, showForm, setShowForm }) => {
  const [isOpen, setIsOpen] = useState(false);

  // This function now uses the 'setShowForm' prop passed from the parent
  const handleApplyClick = () => {
    setShowForm(true); // Triggers the global state
    setIsOpen(false);  // Closes the mobile drawer if it's open
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-6 lg:px-16 py-1 lg:py-3 transition-all ${isTransparent && !isOpen ? 'bg-transparent' : 'bg-white shadow-md'}`}>
        
        {/* Logo */}
        <Link to="/" className="w-16 lg:w-22 bg-white p-1 rounded-lg relative z-[110]">
          <img src="/images/logo.jpg" alt="Logo" className="w-full" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-12 items-center font-black text-black">
          <Link to="/" className="hover:text-sweet-pink transition">HOME</Link>
          <Link to="/about" className="hover:text-sweet-pink transition">ABOUT US</Link>
          <Link to="/program" className="hover:text-sweet-pink transition">PROGRAM</Link>
          <Link to="/faq" className="hover:text-sweet-pink transition">FAQ</Link>
        </div>

        {/* Action Area */}
        <div className="flex items-center space-x-4 relative z-[110]">
            <a href="https://form.jotform.com/232234500679050" target="_blank" rel="noopener noreferrer" className="hidden sm:block bg-white px-6 lg:px-8 py-2 lg:py-3 rounded-full shadow-xl font-black text-black hover:scale-105 transition cursor-pointer border border-gray-100 text-center">
              APPLY NOW
            </a>

          {/* Hamburger Toggle */}
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
            <button 
              onClick={handleApplyClick}
              className="bg-[#81DDFB] text-white px-10 py-4 rounded-full shadow-lg font-black cursor-pointer"
            >
              APPLY NOW
            </button>
          </div>
        </div>
      </nav>

      {/* --- JOTFORM MODAL --- */}
      {showForm && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl bg-white rounded-[30px] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
            <button 
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-6 text-3xl font-black text-black hover:text-sweet-pink z-50 cursor-pointer"
            >
              ✕
            </button>

            <div className="overflow-y-auto p-6 pt-12">
              <JotFormEmbed />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Sub-component with Loading Spinner
const JotFormEmbed = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://form.jotform.com/jsform/232234500679050";
    script.type = "text/javascript";
    script.async = true;
    
    script.onload = () => {
      setLoading(false);
    };

    const container = document.getElementById("jotform-container");
    if (container) {
      container.appendChild(script);
    }
  }, []);

  return (
    <div className="relative min-h-[500px]">
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
          <div className="w-16 h-16 border-8 border-[#ADF1FF] border-t-[#F1808F] rounded-full animate-spin"></div>
          <p className="mt-4 font-black text-[#81DDFB] uppercase tracking-widest animate-pulse">
            Loading Form...
          </p>
        </div>
      )}
      <div id="jotform-container"></div>
    </div>
  );
};

export default Navbar;