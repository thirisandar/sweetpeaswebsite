// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link

// const Footer = ({ isTransparent }) => {
//   const socialLinks = {
//     fb: "https://www.facebook.com/sweetpeas.mm",
//     linkedin: "https://www.linkedin.com/company/sweet-peas-montessori-preschool-mandalay",
//     gmail: "https://www.gmail.com/sweetpeas.school.mm@gmail.com"
//   };

//   const currentYear = new Date().getFullYear();

//   return (
    
//         <footer className="relative pt-12 bg-sweet-pink mt-40">
          
//             {/* The Big White Wave Transition */}
//             <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-[99%]">
//               <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px] lg:h-[150px] fill-white">
//                 <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C49.49,24.19,152.09,42.7,321.39,56.44Z"></path>
//               </svg>
//             </div>

//             {/* THE OVERLAPPING SCHOOL PHOTO (Creates the 3D look) */}
//             <div className="container mx-auto px-6 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
//               <div className="max-w-5xl mx-auto">
//                 <div className="bg-white p-3 lg:p-5 rounded-[40px] lg:rounded-[60px] shadow-2xl overflow-hidden relative border-4 border-white">
//                   <div className="rounded-[30px] lg:rounded-[50px] overflow-hidden aspect-video lg:aspect-[21/9]">
//                     <img 
//                       src="./public/images/headerimg.png" 
//                       alt="Mandalay Campus" 
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   {/* Floating Logo Badge */}
//                   <div className="absolute top-6 right-6 bg-white p-3 rounded-2xl shadow-lg flex items-center gap-2">
//                     <img src="/images/logo.png" className="w-8 h-8 object-contain" />
//                     <span className="font-black text-xs uppercase text-slate-800">Mandalay</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
           
//             <div className="container mx-auto px-6 lg:px-20 mt-30 lg:mt-52">
//               {/* Heading */}
//               <div className="text-center mb-16">
//                 <h2 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter">
//                   Where to reach us?
//                 </h2>
//               </div>

//               {/* Three Column Info Grid */}
//               <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-12 text-white border-b border-white/20 pb-12 mb-8">
                
//                 {/* Col 1: Address */}
//                 <div className="text-center md:text-left space-y-2">
//                   <p className="font-black text-lg lg:text-2xl uppercase leading-tight">
//                     Corner of 41A & 60A,<br /> Mandalay
//                   </p>
//                   <div className="flex justify-center md:justify-start gap-4 pt-4">
//                     {/* Social Icons with white circles */}
//                     {['fb', 'linkedin', 'gmail'].map(icon =>{
//                         const isExternal = socialLinks[icon].startsWith('http');
//                         return (
//                           <a 
//                             key={icon} 
//                             href={socialLinks[icon]} 
//                             target={isExternal ? "_blank" : undefined}
//                             rel={isExternal ? "noopener noreferrer" : undefined}
//                             className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center font-black text-xs hover:bg-white hover:text-sweet-pink transition-all"
//                           >
//                             {icon}
//                           </a>
//                         );
//                     })}
//                   </div>
//                 </div>

//                 {/* Col 2: Identity */}
//                 <div className="text-center py-6 border-y md:border-y-0 md:border-x border-white/10">
//                   <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tighter">SweetPeas</h3>
//                   <p className="font-black text-2xl mt-2 tracking-widest">09-401811122</p>
//                 </div>

//                 {/* Col 3: Slogan */}
//                 <div className="text-center md:text-right">
//                   <p className="text-xl lg:text-2xl font-black uppercase leading-tight italic">
//                     Make your child's <br /> future brighter <br /> with us
//                   </p>
//                 </div>
//               </div>

//               {/* Bottom Bar */}
//               <div className="text-center text-white opacity-60 pb-10">
//                 <p className="font-bold text-[11px] lg:text-sm uppercase tracking-[0.3em]">
//                   © <span className="font-extrabold text-[15px]">{currentYear}</span> SweetPeas Montessori Preschool. All Rights Reserved.
//                 </p>
//               </div>
//             </div>
//         </footer>
//   );
// };

// export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
// ✅ Import real brand icons from react-icons
import { FaFacebookF, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Footer = ({ isTransparent }) => {
  const socialLinks = {
    fb: "https://www.facebook.com/sweetpeas.mm",
    linkedin: "https://www.linkedin.com/company/sweet-peas-montessori-preschool-mandalay",
    // ✅ Fixed: Use mailto: for email links
    gmail: "mailto:sweetpeas.school.mm@gmail.com"
  };

  const currentYear = new Date().getFullYear();

  // ✅ Helper component to render the correct icon
  const SocialIcon = ({ name }) => {
    switch(name) {
      case 'fb': return <FaFacebookF className="w-4 h-4" />;
      case 'linkedin': return <FaLinkedinIn className="w-4 h-4" />;
      case 'gmail': return <FaEnvelope className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <footer className="relative pt-12 bg-sweet-pink mt-24 lg:mt-48">
      
      {/* The Big White Wave Transition */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-[99%]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px] lg:h-[150px] fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C49.49,24.19,152.09,42.7,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* THE OVERLAPPING SCHOOL PHOTO (Creates the 3D look) */}
      <div className="container mx-auto px-6 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-3 lg:p-5 rounded-[40px] lg:rounded-[60px] shadow-2xl overflow-hidden relative border-4 border-white">
            <div className="rounded-[30px] lg:rounded-[50px] overflow-hidden aspect-video lg:aspect-[21/9]">
              {/* ✅ Fixed: Removed './public' from path */}
              <img 
                src="/images/headerimg.png" 
                alt="Mandalay Campus" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Logo Badge */}
            <div className="absolute top-6 right-6 bg-white p-3 rounded-2xl shadow-lg flex items-center gap-2">
              <img src="/images/logo.png" className="w-8 h-8 object-contain" alt="Logo" />
              <span className="font-black text-xs uppercase text-slate-800">Mandalay</span>
            </div>
          </div>
        </div>
      </div>
     
      <div className="container mx-auto px-6 lg:px-20 mt-32 lg:mt-52">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter">
            Where to reach us?
          </h2>
        </div>

        {/* Three Column Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-12 text-white border-b border-white/20 pb-12 mb-8">
          
          {/* Col 1: Address + Social Icons */}
          <div className="text-center md:text-left space-y-2">
            <p className="font-black text-lg lg:text-2xl uppercase leading-tight">
              Corner of 41A & 60A,<br /> Mandalay
            </p>
            <div className="flex justify-center md:justify-start gap-4 pt-4">
              {['fb', 'linkedin', 'gmail'].map(icon => {
                const isExternal = socialLinks[icon].startsWith('http');
                return (
                  <a 
                    key={icon} 
                    href={socialLinks[icon]} 
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-sweet-pink transition-all duration-300"
                    aria-label={icon === 'fb' ? 'Facebook' : icon === 'linkedin' ? 'LinkedIn' : 'Email'}
                  >
                    {/* ✅ Real Icons Rendered Here */}
                    <SocialIcon name={icon} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Identity */}
          <div className="text-center py-6 border-y md:border-y-0 md:border-x border-white/10">
            <h3 className="font-black text-lg lg:text-2xl uppercase leading-tight">SweetPeas</h3>
            <p className="font-black text-2xl mt-2 tracking-widest">09-401811122</p>
          </div>

          {/* Col 3: Slogan */}
          <div className="text-center md:text-right">
            <p className="font-black text-lg lg:text-2xl uppercase leading-tight">
              Make your child's <br /> future brighter <br /> with us
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center text-white opacity-60 pb-10">
          <p className="font-bold text-[11px] lg:text-sm uppercase tracking-[0.3em]">
            © <span className="font-extrabold text-[17px]">{currentYear}</span> SweetPeas Montessori Preschool. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;