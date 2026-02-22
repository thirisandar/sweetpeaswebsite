import React from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

const Program = () => {
    const programs = [
        {
          age: "2 to 3 Years",
          title: "PlayGroup Program",
          description: "Montessori is a scientifically founded method of educating children founded on the belief",
          bgColor: "bg-[#FF7A00]", // Vibrant Orange
          badgeColor: "bg-black"
        },
        {
          age: "3 to 4 Years",
          title: "Nursery Program",
          description: "Montessori is a scientifically founded method of educating children founded on the belief",
          bgColor: "bg-[#8E7DFF]", // Soft Purple
          badgeColor: "bg-black"
        },
        {
          age: "4 to 5 Years",
          title: "Lower Kindergarten Program",
          description: "Montessori is a scientifically founded method of educating children founded on the belief",
          bgColor: "bg-[#D9FF30]", // Lime Green
          badgeColor: "bg-black"
        }
      ];

      const activities = [
        { title: "ART & CRAFT", icon: "★" },
        { title: "DANCE AND MOVEMENT", icon: "📦" },
        { title: "SAND & WATERPLAY", icon: "⚙️" },
        { title: "GARDENING", icon: "★" },
        { title: "READING", icon: "📦" },
        { title: "COOKING", icon: "⚙️" },
        { title: "YOGA & Meditation", icon: "★" },
        { title: "PE", icon: "📦" },
      ];
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar with dark text */}
      <Navbar isTransparent={false} />
      <div className="pt-20"></div>
      <header className="py-8 lg:py-12 px-6 lg:px-20 overflow-hidden">
        <div className="max-w-[1600px] mx-auto flex flex-col items-start space-y-2 lg:space-y-4">
          
          {/* Row 1: PLAY [OVAL 1] IS (sweet22.jpg) */}
          <div className="flex items-center flex-wrap gap-x-8 lg:gap-x-15 ml-10">
            <h1 className="text-4xl md:text-6xl lg:text-[10rem] font-serif font-black tracking-tighter leading-none text-black">
              PLAY
            </h1>
            
            {/* The First Oval Image */}
            <div className="w-32 md:w-64 lg:w-[35rem] h-16 md:h-32 lg:h-[12rem] rounded-full overflow-hidden border-[3px] border-black inline-block mt-2 lg:mt-8 shadow-lg">
              <img 
                src="/images/program-oval-1.jpg" 
                alt="Children playing" 
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-[10rem] font-serif font-black tracking-tighter leading-none text-black">
              IS
            </h1>
          </div>

          {/* Row 2: THE TRUE */}
          <h1 className="text-4xl md:text-6xl lg:text-[10rem] gap-x-10 lg:gap-x-20 font-serif font-black tracking-wider leading-none text-black ml-10">
                THE TRUE
          </h1>

          {/* Row 3: WORK OF [OVAL 2] (sweet23.jpg) */}
          <div className="flex items-center flex-wrap gap-x-4 lg:gap-x-10 ml-10">
            <h1 className="text-4xl md:text-6xl lg:text-[10rem] gap-x-10 lg:gap-x-20 font-serif font-black tracking-wider leading-none text-black ml-10">
                WORK OF
            </h1>
          </div>

          {/* Row 4: [OVAL 2] CHILDHOOD (sweet23.jpg) */}
          <div className="flex items-center flex-wrap gap-x-4 lg:gap-x-10 ml-10">
            {/* The Second Oval Image (School Bus/Field Trip) */}
            <div className="w-32 md:w-64 lg:w-[35rem] h-16 md:h-32 lg:h-[12rem] rounded-full overflow-hidden border-[3px] border-black inline-block mt-2 lg:mt-8 shadow-lg">
              <img 
                src="/images/program-oval-2.jpg" 
                alt="School field trip" 
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-[10rem] font-serif font-black tracking-tighter leading-none text-black">
              CHILD
            </h1>
          </div>

        </div>
      </header>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            
            {/* Section Title */}
            <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl md:text-5xl lg:text-[6rem] font-black tracking-tighter uppercase text-white drop-shadow-[0_5px_0_rgba(0,0,0,1)] stroke-black outline-title">
                Our Programs
            </h2>
            </div>

            {/* Programs Grid */}
            {/* Added 'gap-10' for mobile so cards don't touch each other vertically */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-4 lg:gap-8 max-w-[2000px] mx-auto">
            {programs.map((prog, index) => (
                <div 
                key={index} 
                /* MOBILE FIX: 
                    - Changed 'w-100' to 'w-full' so it fits mobile screens.
                    - Changed 'h-120' to 'min-h-[450px] md:h-[500px]' so text doesn't overflow on small screens.
                */
                className={`${prog.bgColor} w-full min-h-[480px] md:h-[500px] lg:h-[600px] rounded-[40px] lg:rounded-[60px] p-8 lg:p-10 flex flex-col items-start justify-between shadow-xl transition-transform hover:-translate-y-4 duration-500`}
                >
                <div>
                    {/* Age Badge */}
                    <div className={`${prog.badgeColor} px-7 py-3 rounded-full mb-6 lg:mb-10 inline-block shadow-lg`}>
                    <span className="text-white text-md lg:text-xl font-black uppercase">
                        {prog.age}
                    </span>
                    </div>

                    {/* Program Title */}
                    <h3 className="text-black text-3xl md:text-2xl lg:text-4xl font-black leading-tight mb-6 lg:mb-10">
                    {prog.title}
                    </h3>

                    {/* Description */}
                    <p className="text-black text-lg lg:text-xl font-medium leading-relaxed opacity-90 max-w-sm">
                    {prog.description}
                    </p>
                </div>

                {/* See More Button */}
                <button className="bg-black text-white px-8 py-4 md:px-5 md:py-3 rounded-full text-lg lg:text-xl font-black cursor-pointer transition-transform active:scale-95 shadow-xl mt-6">
                    See More
                </button>
                </div>
            ))}
            </div>
        </div>
      </section>

      {/* --- SECTION: PROGRAM DETAILS (sweet26.png) --- */}
      <section className="py-20 px-6 lg:px-20">
        <div className="container mx-auto flex flex-col lg:flex-row gap-10 items-stretch">
          
          <div className="w-full lg:w-1/3 bg-[#FFD600] rounded-[60px] lg:rounded-[80px] p-6 lg:p-10 flex flex-col justify-between shadow-lg">
             <div>
                <div className="bg-black inline-block px-6 py-2 rounded-full mb-10">
                  <span className="text-white text-lg font-black uppercase">5 to 6 Years</span>
                </div>
                <h3 className="text-2xl lg:text-3xl leading-12 mb-6">
                  Upper Kindergarten Program
                </h3>
                <p className="text-black text-lg leading-relaxed">
                  Montessori is a scientifically founded method of educating children founded on the belief
                </p>
             </div>
             <button className="bg-black text-white w-fit px-7 py-3 rounded-full text-lg font-black mt-10">
                See More
             </button>
          </div>

          <div className="w-full lg:w-2/3 bg-[#F8F8F8] rounded-[60px] lg:rounded-[80px] p-10 lg:p-20 flex flex-col justify-center">
            <h2 className="text-black text-2xl lg:text-5xl font-black mb-10 tracking-tight">
              Program Details
            </h2>
            <p className=" text-lg lg:text-2xl font-medium leading-[1.6] text-justify">
              All the programs are Montessori method-based, emphasizing hands-on learning, 
              individualized instruction, and the development of independence, responsibility, 
              and critical thinking skills in a child-centered environment. All the programs 
              are Montessori responsibility, and critical thinking skills in a child-centered environment.
            </p>
          </div>

        </div>
      </section>
    

        {/* Extra Activities section */}
       <section className="py-12 lg:py-20 bg-white">
        {/* Added px-4 for mobile to keep laptop's lg:px-20 untouched */}
        <div className="container mx-auto px-4 lg:px-20">
            
            {/* Section Header */}
            <div className="mb-10 lg:mb-16">
            <span className="text-sweet-pink text-lg lg:text-2xl font-black uppercase tracking-widest mb-2 lg:mb-4 block">
                EXTRA ACTIVITIES
            </span>
            {/* Adjusted text size for mobile (text-3xl) while keeping lg:text-5xl */}
            <h2 className="text-black text-3xl lg:text-5xl font-black leading-tight lg:leading-[1.5] max-w-3xl">
                Preschool Activities Spark Creativity and Growth
            </h2>
            </div>

            <hr className="border-t border-gray-400 mb-12 lg:mb-20" />

            {/* Activities Grid */}
            {/* Grid naturally stacks on mobile with grid-cols-1; kept gap-x-12 for laptop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 lg:gap-y-16 gap-x-12">
            {activities.map((activity, index) => (
                <div key={index} className="flex items-start gap-4 lg:gap-6 group">
                
                {/* Pink Circle Icon */}
                {/* Kept lg:w-14 for laptop; slightly enlarged mobile size to w-10 for better visibility */}
                <div className="flex-shrink-0 w-10 h-10 lg:w-14 lg:h-14 bg-[#F1808F] rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <span className="text-white text-xl lg:text-2xl">
                    {activity.icon}
                    </span>
                </div>

                {/* Text Content */}
                <div className="flex flex-col">
                    {/* Added lg:text-xl for laptop, kept text-lg for mobile readability */}
                    <h4 className="text-black text-lg lg:text-xl font-black uppercase mb-2 lg:mb-3">
                    {activity.title}
                    </h4>
                    {/* Kept lg:text-md and leading-[1.8] for laptop; adjusted mobile leading for tight screens */}
                    <p className="text-gray-600 text-base lg:text-md leading-relaxed lg:leading-[1.8] max-w-sm">
                    Tellus tristique habitant non orci ante ipsum quis. Donec etiam hac in ultrices sed dictumst.
                    </p>
                </div>
                </div>
            ))}
            </div>
        </div>
       </section>

        {/* Photo Section */}
       <section className="pb-18 lg:pb-30 pt-6 lg:pt-10 bg-white">
        <div className="container mx-auto px-4 lg:px-2">
            
            <div className={`
            w-full overflow-hidden shadow-2xl border-[4px] lg:border-8 border-slate-50
            aspect-[4/3] md:aspect-video lg:h-[55rem] 
            rounded-[20px] lg:rounded-[40px] 
            `}>
            <img 
                src="/images/child-1.jpg" 
                alt="SweetPeas students in activity" 
                className="w-full h-full object-cover"
            />
            </div>

        </div>
       </section>


       <section className="relative pt-20 lg:pt-40 pb-50 lg:pb-100 bg-white overflow-hidden">
            
            {/* --- OVERLAPPING CIRCLES BACKGROUND --- */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Yellow Circle (Left) */}
                <div className="absolute w-[280px] h-[280px] lg:w-[500px] lg:h-[450px] bg-[#FFD600] rounded-full -translate-x-1/3 lg:-translate-x-1/2 translate-y-10 opacity-90"></div>
                
                {/* Pink Circle (Top Center) */}
                <div className="absolute w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-[#F1808F] rounded-full -translate-y-20 lg:-translate-y-40 z-0 opacity-90"></div>
                
                {/* Blue Circle (Right) */}
                <div className="absolute w-[320px] h-[320px] lg:w-[520px] lg:h-[520px] bg-[#4CC9F0] rounded-full translate-x-1/4 lg:translate-x-40 translate-y-15 lg:translate-y-30 z-10 opacity-90"></div>
            </div>

            <div className="container mx-auto px-6 relative z-20 text-center lg:text-left">
                
                {/* Text Content Container */}
                <div className="flex flex-col mb-5 items-center lg:items-start">
                    {/* "NO" Text: Centered on mobile, original ml-100 on laptop */}
                    <h2 className="text-white text-7xl md:text-[3rem] lg:text-[8rem] font-black uppercase tracking-tighter outline-title leading-none lg:ml-100 mb-6 lg:mb-100">
                    NO
                    </h2>
                    
                    {/* Registration Fees Text */}
                    <div className="space-y-0 -mt-2 lg:-mt-90">
                        <h3 className="text-white text-3xl md:text-[0.5rem] lg:text-[4rem] font-black uppercase tracking-tighter outline-title leading-none lg:ml-100 mb-2 lg:mb-10">
                        REGISTRATION
                        </h3>
                        <h3 className="text-white text-3xl md:text-[0.5rem] lg:text-[4rem] font-black uppercase tracking-tighter outline-title leading-none lg:ml-100">
                        FEES
                        </h3>
                    </div>
                </div>

                {/* APPLY NOW Button */}
                <div className="mt-8 lg:-mt-20 lg:ml-150 flex justify-center lg:justify-start">
                    <button className="bg-white text-black px-7 lg:px-5 py-2 lg:py-4 rounded-full text-xl lg:text-xl font-black uppercase shadow-2xl transition-transform active:scale-95 cursor-pointer">
                        APPLY NOW
                    </button>
                </div>

            </div>
            
            <style jsx>{`
                .outline-title {
                -webkit-text-stroke: 2px black;
                paint-order: stroke fill;
                }
                @media (min-width: 1024px) {
                .outline-title { -webkit-text-stroke: 4px black; }
                }
            `}</style>
       </section>

    
      <Footer />

    </div>
  );
};

export default Program;