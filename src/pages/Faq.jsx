import React,{useState} from 'react';
import Navbar from '../components/Navbar'; 
import Footer from "../components/Footer";

const Faq = () => {
  const activities = [
    { src: "/images/logo.jpg", alt: "Child in chef costume" },
    { src: "/images/logo.jpg", alt: "Child in orange costume" },
    { src: "/images/logo.jpg", alt: "Child in pear costume" },
    { src: "/images/logo.jpg", alt: "Child in durian costume" },
    { src: "/images/logo.jpg", alt: "Child in penguin costume" },
    { src: "/images/logo.jpg", alt: "Child in strawberry costume" },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "Common Question 1",
      answer: "Here are three ways to purchase your courses:",
      steps: [
        "Click the 'Try it now' button above to purchase your Trial Lessons;",
        "Purchase courses on the official website;"
      ]
    },
    {
      question: "Common Question 2",
      answer: "Our Montessori program is designed to support individualized learning and independence for children aged 3 to 6 years.",
      steps: []
    },
    {
      question: "Common Question 3",
      answer: "Enrollment is open year-round based on availability. Please contact our administration for current opening dates.",
      steps: []
    },
    {
      question: "Common Question 4",
      answer: "Enrollment is open year-round based on availability. Please contact our administration for current opening dates.",
      steps: []
    },
    {
      question: "Common Question 5",
      answer: "Enrollment is open year-round based on availability. Please contact our administration for current opening dates.",
      steps: []
    },
    {
      question: "Common Question 6",
      answer: "Enrollment is open year-round based on availability. Please contact our administration for current opening dates.",
      steps: []
    },
    {
      question: "Common Question 7",
      answer: "Enrollment is open year-round based on availability. Please contact our administration for current opening dates.",
      steps: []
    }
  ];


  return (
    <div className="relative min-h-screen flex flex-col bg-white overflow-x-hidden">
      
      {/* --- HEADER SECTION --- */}
      <section className="relative min-h-[70vh] lg:min-h-screen flex flex-col bg-gradient-to-b from-[#81DDFB] to-[#ADF1FF] pb-20 lg:pb-40">
        <Navbar isTransparent={true} />
        <div className="pt-20"></div>

        <div className="container mx-auto px-6 pt-20 lg:pt-32 flex flex-col lg:flex-row items-center justify-between relative z-10">
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-1/2 text-left lg:ml-20 mb-12 lg:mb-0">
            <h2 className="text-white text-3xl lg:text-5xl font-black uppercase leading-tight tracking-tight drop-shadow-md mb-4">
              ABC TO CREATIVITY
            </h2>
            <h2 className="text-white text-3xl lg:text-5xl font-black uppercase leading-tight tracking-tight drop-shadow-md mb-4">
              SWEETPEAS
            </h2>
            <h2 className="text-[#F1808F] text-4xl lg:text-7xl font-black uppercase leading-tight tracking-tight drop-shadow-md mb-4">
              MONTESSORI
            </h2>
            
            <p className="mt-5 text-white text-lg lg:text-xl font-medium max-w-2xl leading-relaxed">
              Have questions? We have answers. Explore our frequently asked questions to learn more about our Montessori approach and community.
            </p>

            <button className="relative mt-10 bg-[#81DDFB] border-4 border-white px-10 py-3 rounded-full text-2xl text-white font-black shadow-xl hover:bg-[#F1808F] transition-all z-50 cursor-pointer">
              Join
            </button>
          </div>

          {/* Right Side: Hero Image */}
          <div className="w-full lg:w-1/2 relative flex justify-end items-end">
            <img 
              src="/images/headerimg.png" 
              alt="Children with school supplies" 
              className="w-full max-w-2xl lg:max-w-4xl object-contain"
            />
          </div>
        </div>

        {/* --- RE-POSITIONED CLOUD MASK --- */}
        {/* Changed z-index to 30 to stay above the next white section */}
        <div className="absolute bottom-[-1px] left-0 w-full leading-[0] z-30">
          <svg 
              viewBox="0 0 1440 320" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
          >
              <path 
                fill="white" 
                d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
              <g fill="white">
                <circle cx="0" cy="320" r="120" />
                <circle cx="150" cy="300" r="100" />
                <circle cx="320" cy="320" r="140" />
                <circle cx="600" cy="330" r="150" />
                <circle cx="750" cy="280" r="90" />
                <circle cx="950" cy="310" r="130" />
                <circle cx="1200" cy="320" r="160" />
                <circle cx="1350" cy="290" r="110" />
                <circle cx="1440" cy="320" r="130" />
              </g>
          </svg>
        </div>
      </section>

      {/* --- GALLERY SECTION --- */}
      <section className="bg-white py-12 lg:pt-10 lg:pb-10 px-4 lg:px-20 relative z-10">
          <div className="max-w-[1400px] mx-auto">
            
            {/* ROW 1: WATCH THEM GROW */}
            {/* Removed ml-10 on mobile to prevent horizontal overflow */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 lg:ml-10 mb-6 lg:mb-8">
              
              {/* Watch Them Grow Card */}
              <div className="lg:col-span-7 bg-[#81DDFB] rounded-[40px] lg:rounded-[80px] p-8 lg:p-15 relative overflow-hidden flex flex-col justify-start min-h-[350px] lg:min-h-[650px]">
                <h2 className="text-white text-3xl lg:text-[3rem] font-black uppercase leading-[1.2] tracking-tighter z-10 mt-8 lg:mt-12 ml-2 lg:ml-5">
                  WATCH THEM <br /> GROW
                </h2>
                {/* Adjusted bottom image positioning for mobile vs laptop */}
                <div className="absolute bottom-0 left-1/2 lg:left-2/3 -translate-x-1/2 w-[80%] lg:w-full max-w-[500px]">
                  <img src="/images/child-1.jpg" alt="Child peeking" className="w-full h-auto object-contain" />
                </div>
              </div>

              {/* Right Column: Image + Quality Care */}
              <div className="h-full lg:col-span-5 overflow-hidden">
                  <div className="flex flex-col items-center lg:items-start">
                      {/* Top Image: Fixed size for laptop, full width for mobile */}
                      <div className="w-full lg:w-90 h-64 lg:h-80 mb-6 lg:mb-10">
                          <img src="/images/headerimg.png" alt="Caring hands" className="w-full h-full object-cover rounded-[30px] lg:rounded-[40px]" />
                      </div>                    
                      
                      {/* Quality Care Card: Fixed width for laptop, full width for mobile */}
                      <div className="bg-[#F1808F] rounded-[40px] lg:rounded-[80px] p-8 lg:p-14 flex flex-col justify-between items-start w-full lg:w-90 min-h-[200px] lg:min-h-[80px]">
                          <h2 className="text-white text-3xl lg:text-[3rem] font-black uppercase leading-[0.9] tracking-tighter">
                              QUALITY <br /> CARE
                          </h2>
                          <div className="w-full mt-4">
                              <img src="/images/headerimg.png" alt="Caring hands" className="w-full h-auto object-contain" />
                          </div>
                      </div>
                  </div>
              </div>
            </div>

            {/* ROW 2: IMAGES */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 lg:ml-10 mb-6 lg:mb-8">
              {/* Small Image Card */}
              {/* Removed fixed h-110 on mobile to prevent stretching */}
              <div className="lg:col-span-4 rounded-[40px] lg:rounded-[80px] h-64 lg:h-110">
                  <img src="/images/headerimg.png" alt="Caring hands" className="w-full h-full object-cover rounded-[30px] lg:rounded-[40px]" />
              </div> 
              
              {/* Large Image Card */}
              <div className="lg:col-span-8 rounded-[40px] lg:rounded-[80px] overflow-hidden bg-[#81DDFB] h-64 lg:h-110">
                  <img src="/images/headerimg.png" alt="Caring hands" className="w-full h-full object-cover rounded-[30px] lg:rounded-[40px]" />
              </div>
            </div>

          </div>
      </section>

      {/* Photo section */}
      <section className="bg-white py-12 lg:py-24 overflow-hidden">
          <div className="container mx-auto px-4 lg:px-6">
            
            {/* --- LEARNING PROCESS HEADER (sweet37.png) --- */}
            <div className="text-center max-w-4xl mx-auto mb-10 lg:mb-20">
              {/* Header text scaled slightly better for small screens */}
              <h2 className="text-black text-2xl lg:text-4xl font-normal leading-tight mb-4 lg:mb-6">
                Learning process support are <br />
                <span className="text-[#F1808F] italic font-medium">comfortable</span> and 
                <span className="text-[#F1808F] italic font-medium"> dedicated</span>
              </h2>
              <p className="text-gray-500 text-sm lg:text-md max-w-md mx-auto">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.
              </p>

              {/* Floating Value Labels */}
              {/* On mobile, we reduce the scale of the swirl and labels so they don't overlap text */}
              <div className="relative mt-12 lg:mt-20 h-48 lg:h-60 flex justify-center items-center">
                {/* Background Swirl Decorative Line */}
                <div className="absolute w-[280px] lg:w-[600px] h-16 lg:h-32 border-2 border-gray-100 rounded-[100%] rotate-[-15deg]"></div>
                
                {/* Friendly Label (Blue) */}
                <div className="absolute top-2 lg:-top-1 bg-[#81DDFB] text-black px-4 lg:px-5 py-1 rounded-full text-sm lg:text-md shadow-sm z-10">
                  #friendly
                </div>
                
                {/* Smart Label (Pink) */}
                {/* Changed left-50 to responsive positioning so it doesn't fly off-screen on mobile */}
                <div className="absolute top-24 lg:top-20 left-4 lg:left-50 bg-[#F1808F] text-white px-4 lg:px-5 py-1 rounded-full text-sm lg:text-md shadow-sm z-10">
                  #smart
                </div>
                
                {/* Responsible Label (Yellow) */}
                {/* Changed right-50 to responsive positioning */}
                <div className="absolute bottom-6 lg:bottom-10 right-4 lg:right-50 bg-[#FFD600] text-black px-4 lg:px-5 py-1 rounded-full text-sm lg:text-md shadow-sm z-10">
                  #responsible
                </div>
              </div>
            </div>

            {/* --- FASHION SHOW GRID (sweet38.jpg) --- */}
            {/* Removed ml-20 on mobile to prevent horizontal scrolling */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 lg:ml-20 justify-items-center">
              {activities.map((item, index) => (
                <div 
                  key={index} 
                  /* Mobile: w-full with max-width | Laptop: Fixed w-80 h-80 */
                  className="w-full max-w-[320px] lg:w-80 h-80 aspect-square rounded-[25px] lg:rounded-[40px] overflow-hidden shadow-lg border-4 lg:border-8 border-white transition-transform duration-500"
                >
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

          </div>
      </section>

      {/* Faq Section */}
      <section className="bg-white py-16 lg:py-24 px-4 lg:px-20">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center">
          
          {/* --- SECTION HEADER (sweet39.png) --- */}
          <div className="mb-5 lg:mb-10">
            <h2 className="text-[#81DDFB] text-3xl lg:text-[5rem] font-black uppercase tracking-tighter text-center">
              FAQs
            </h2>
          </div>

          {/* --- ACCORDION LIST --- */}
          <div className="w-full space-y-6">
            {faqData.map((item, index) => (
              <div 
                key={index}
                className={`
                  border-[2px] border-black rounded-[30px] lg:rounded-[50px] overflow-hidden transition-all duration-300
                  ${openIndex === index ? 'bg-[#81DDFB]' : 'bg-[#ADF1FF]'}
                `}
              >
                {/* Question Header */}
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full px-4 lg:px-8 py-2 lg:py-5 flex items-center justify-between text-left group cursor-pointer"
                >
                  <span className="text-black text-lg lg:text-[2rem] font-black tracking-tight leading-none">
                    {item.question}
                  </span>
                  
                  {/* Arrow Icon - Rotates when open */}
                  <div className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg 
                      width="10" height="10" viewBox="0 0 48 28" fill="none" xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-2 lg:w-8 lg:h-5"
                    >
                      <path d="M4 4L24 24L44 4" stroke="black" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>

                {/* Answer Body - Animated collapse */}
                <div 
                  className={`
                    transition-all duration-300 ease-in-out
                    ${openIndex === index ? 'max-h-[500px] opacity-100 pb-10 lg:pb-16' : 'max-h-0 opacity-0'}
                  `}
                >
                  <div className="px-8 lg:px-12">
                    <p className="text-black text-lg lg:text-3xl font-medium mb-4">
                      {item.answer}
                    </p>
                    {item.steps.length > 0 && (
                      <ol className="list-decimal list-inside space-y-2 lg:space-y-4">
                        {item.steps.map((step, sIndex) => (
                          <li key={sIndex} className="text-black text-lg lg:text-2xl font-normal leading-relaxed">
                            {step}
                          </li>
                        ))}
                      </ol>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
      <style jsx>{`
        h1, h2 {
          font-family: 'Bubblegum Sans', cursive, sans-serif;
        }
      `}</style>

      
    </div>
  );
};

export default Faq;