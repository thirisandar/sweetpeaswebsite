import React,{useState} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const About = () => {
  // 1. Define your teacher data here
  const teachers = [
    { id: 1, name: "Ms. Hnin", role: "Senior Educator" },
    { id: 2, name: "Tr. Zarni", role: "Montessori Lead" },
    { id: 3, name: "Ms. Phyu", role: "Art Specialist" },
    { id: 4, name: "Tr. Kyaw", role: "Physical Ed" },
    { id: 5, name: "Ms. Aye", role: "Music Teacher" },
    { id: 6, name: "Tr. Myo", role: "Language Arts" },
    { id: 7, name: "Ms. Thiri", role: "Science Lead" },
    { id: 8, name: "Tr. Aung", role: "Math Lead" },
    { id: 9, name: "Ms. Nu", role: "Nursery Lead" },
  ];

  const benefits = [
    { title: "Montessori-Certified", myanmar: "Teacher များမှ သင်ကြားပေးခြင်း။" },
    { title: "လုံခြုံပြီး သန့်ရှင်း", myanmar: "သပ်ရပ်သော ပတ်ဝန်းကျင်ကို ဖန်တီးထားခြင်း။" },
    { title: "ကျောင်းသား", myanmar: "ငါးယောက်လျှင် ဆရာတစ်ယောက်နှုန်းဖြင့် သင်ကြားပေးခြင်း။" },
    { title: "ကျောင်းသူ၊ ကျောင်းသား", myanmar: "အယောက် (၅၀) သာလက်ခံသင်ကြားပေးခြင်း။" },
    { title: "Registration fees", myanmar: "ပေးဆောင်စရာ မလိုခြင်း။" },
    { title: "Child Centered", myanmar: "နည်းလမ်းကို အသုံးပြုပြီး သားသားမီးမီးတစ်ယောက်စီကို အထူးဂရုပြု ပြုစုပျိုးထောင်ပေးခြင်း။" },
  ];

    const [showForm, setShowForm] = useState(false);
  

  return (
    <div className="min-h-screen bg-white">
      {/* 1. We increase height to h-screen on mobile to ensure room for the big button */}
      <header className="relative h-screen lg:h-[100vh] w-full flex flex-col">
        
        {/* 2. Background Image - Ensure z-0 */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/about-header.jpg" 
            alt="SweetPeas Playground" 
            className="w-full h-full object-cover"
          />
          {/* Slightly darker overlay to help white text visibility */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* 3. Navbar - Must be z-50 to stay on top */}
        <div className="relative z-50">
          <Navbar isTransparent={true} showForm={showForm} setShowForm={setShowForm} />
        </div>

        {/* 4. Content Area - We use flex-1 to fill the middle space */}
        <div className="relative z-30 flex-1 flex flex-col items-center justify-center text-center px-4 pb-20">
          
          <div className="mt-10 mb-6 lg:mb-10">
            <h1 className="text-3xl md:text-5xl lg:text-[6rem] font-black text-white uppercase leading-[0.85] drop-shadow-2xl tracking-tighter">
              THE FUTURE
            </h1>
            <h1 className="text-3xl md:text-5xl lg:text-[6rem] font-black text-white uppercase leading-[0.85] drop-shadow-2xl tracking-tighter">
              BEGINS HERE
            </h1>
          </div>

          {/* 5. JOIN NOW BUTTON - High Z-index and bright text */}
          <div className="relative z-40 inline-block group cursor-pointer mt-4">
            {/* The Yellow Shadow/Offset layer */}
            <div className="absolute inset-0 bg-[#FFD600] translate-x-2 translate-y-2 rounded-2xl transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
            
            {/* The Main Blue Button layer */}
            <a href="https://form.jotform.com/232234500679050"  target="_blank" rel="noopener noreferrer" className="relative bg-[#71D4F4] text-white px-6 lg:px-10 py-4 lg:py-4 rounded-2xl text-xl lg:text-3xl font-black uppercase tracking-widest shadow-2xl active:translate-x-1 active:translate-y-1 transition-all cursor-pointer border-none inline-block text-center">
              JOIN NOW
            </a>
          </div>
          
          {/* Paper Plane Icon */}
          
        </div>
      </header>

     {/* PANORAMIC GALLERY SECTION (Updated for 2-Row Mobile Grid) */}
      <section className="py-16 lg:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Section Typography */}
          <div className="text-center mb-24 px-4">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-sweet-blue uppercase tracking-tighter leading-tight">
              Our Happy <span className="text-sweet-pink">Little Peas</span>
            </h2>
            <p className="text-sm md:text-lg lg:text-xl font-bold text-slate-400 uppercase tracking-[0.2em] mt-3 font-myanmar">
              ကလေးများ၏ ပျော်ရွှင်ဖွယ်ရာ လှုပ်ရှားမှုများ
            </p>
          </div>
          
          {/* Flex container: Wrap on mobile, No-wrap on Desktop */}
          <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-y-10 gap-x-2 md:gap-x-5 lg:gap-x-4 lg:-space-x-8">
            {[1, 2, 3, 4, 5, 6].map((num, index) => (
              <div 
                key={num}
                className={`
                  relative flex-shrink-0 transition-all duration-500 hover:z-50 hover:scale-110
                  
                  /* MOBILE: 3 columns (roughly 30% each) | DESKTOP: Back to Panorama (roughly 14%) */
                  w-[28%] md:w-[25%] lg:w-[15%] 
                  
                  /* PERSPECTIVE LOGIC */
                  /* Mobile: Subtle tilt for each row */
                  ${index < 3 ? 'rotate-[-3deg] lg:rotate-0' : 'rotate-[3deg] lg:rotate-0'}
                  
                  /* Desktop Panorama: Restoring the Fish-eye curve for large screens */
                  ${index === 0 ? 'lg:-rotate-[12deg] lg:translate-y-12' : ''}
                  ${index === 1 ? 'lg:-rotate-[6deg] lg:translate-y-6' : ''}
                  ${index === 2 ? 'lg:-rotate-[2deg] lg:translate-y-0 lg:scale-110' : ''}
                  ${index === 3 ? 'lg:rotate-[2deg] lg:translate-y-0 lg:scale-110' : ''}
                  ${index === 4 ? 'lg:rotate-[6deg] lg:translate-y-6' : ''}
                  ${index === 5 ? 'lg:rotate-[12deg] lg:translate-y-12' : ''}
                `}
              >
                {/* The White Frame Wrapper */}
                <div className="bg-white p-1.5 md:p-2 lg:p-3 rounded-[20px] md:rounded-[30px] lg:rounded-[45px] shadow-lg md:shadow-2xl border border-slate-50">
                  <div className="aspect-[3/4.5] overflow-hidden rounded-[15px] md:rounded-[25px] lg:rounded-[40px]">
                    <img 
                      src={`/images/child-${num}.jpg`} 
                      alt="SweetPeas Student" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

        
        </div>
      </section>

      {/* FACULTY SECTION - Professional & Sophisticated */}
      <section className="relative py-16 lg:py-24 bg-[#4CC9F0] overflow-hidden">
      
      {/* --- STICKER BACKGROUND ELEMENTS --- */}
      {/* These little stars/stickers float behind everything */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-10 left-[10%] text-white text-4xl animate-pulse">✦</div>
        <div className="absolute top-40 right-[15%] text-yellow-300 text-3xl">★</div>
        <div className="absolute bottom-20 left-[5%] text-white text-5xl">✧</div>
        <div className="absolute bottom-40 right-[10%] text-yellow-200 text-4xl animate-bounce">✦</div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 text-white/20 text-[20rem] font-black select-none">
          SWEETPEAS
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-white text-4xl md:text-6xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-4 drop-shadow-md">
            Meet Our <br className="hidden lg:block" /> Faculty
          </h2>
          <p className="text-white/90 text-xs lg:text-sm font-bold uppercase tracking-[0.3em] drop-shadow-sm">
            Professional Educators Shaping the future of Mandalay
          </p>
        </div>

        {/* --- DYNAMIC TEACHER GRID --- */}
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-12 mb-32">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="group flex flex-col items-center">
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl lg:rounded-3xl bg-white shadow-2xl border-4 border-white/20">
                <img 
                  src={`/images/teacher-${teacher.id}.jpg`} 
                  alt={teacher.name} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
              </div>
              <div className="mt-3 text-center">
                <h4 className="text-white text-[10px] md:text-sm lg:text-2xl font-black uppercase leading-tight drop-shadow-sm">
                  {teacher.name}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* --- PARENT & FAMILY PHOTO WALL (Masonry Style) --- */}
        <div className="mt-20">
          <h3 className="text-center text-white text-3xl lg:text-5xl font-black uppercase mb-12 tracking-tight">
            Our SweetPeas Families
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10">
            {/* Example Family Photo 1 (Landscape with thick white border) */}
            <div className="w-[80%] md:w-[45%] lg:w-[35%] bg-white p-3 rounded-2xl shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform">
              <img src="/images/family-1.jpg" className="w-full rounded-xl" alt="Family Moment" />
            </div>

            {/* Example Family Photo 2 (Portrait sticker style) */}
            <div className="w-[40%] md:w-[25%] lg:w-[20%] bg-white p-2 rounded-[50px] shadow-2xl rotate-[3deg] hover:rotate-0 transition-transform border-8 border-white">
              <img src="/images/family-2.jpg" className="w-full aspect-[3/4] object-cover rounded-[40px]" alt="Family Moment" />
            </div>

            {/* Example Family Photo 3 (Horizontal sticker) */}
            <div className="w-[45%] md:w-[30%] lg:w-[25%] bg-white p-2 rounded-full shadow-2xl rotate-[-4deg] border-4 border-white overflow-hidden">
               <img src="/images/family-3.jpg" className="w-full h-32 object-cover" alt="Family Moment" />
            </div>

            {/* Example Family Photo 4 (Polaroid style) */}
            <div className="w-[70%] md:w-[40%] lg:w-[30%] bg-white p-3 pb-12 rounded-sm shadow-2xl rotate-[1deg] hover:scale-105 transition-all">
              <img src="/images/family-4.jpg" className="w-full" alt="Family Moment" />
              <p className="font-myanmar text-slate-800 text-center mt-4 font-bold">Happy Thadingyut!</p>
            </div>
          </div>
        </div>
        
      </div>
      </section>

      <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: 'linear-gradient(to bottom, #71D4F4, #F1808F)' }}>
  
  {/* --- DENSE STICKER LAYER --- */}
  {/* These are absolute positioned stars scattered across the section */}
  <div className="absolute inset-0 pointer-events-none select-none">
    {/* Large Yellow Stars */}
    <div className="absolute top-[5%] left-[8%] text-yellow-300 text-6xl opacity-80 rotate-12 animate-pulse">★</div>
    <div className="absolute top-[20%] right-[12%] text-yellow-200 text-5xl opacity-70 -rotate-12">★</div>
    <div className="absolute bottom-[15%] left-[15%] text-yellow-300 text-4xl opacity-60 rotate-45">★</div>
    <div className="absolute bottom-[5%] right-[5%] text-yellow-100 text-7xl opacity-40 animate-bounce">★</div>

    {/* Small White Sparkles (✦) */}
    <div className="absolute top-[15%] left-[25%] text-white text-3xl opacity-90">✦</div>
    <div className="absolute top-[10%] right-[30%] text-white text-4xl opacity-80 animate-pulse">✦</div>
    <div className="absolute top-[45%] left-[5%] text-white text-2xl opacity-50">✦</div>
    <div className="absolute top-[60%] right-[8%] text-white text-3xl opacity-70">✦</div>
    <div className="absolute bottom-[25%] right-[25%] text-white text-4xl opacity-60">✦</div>
    
    {/* Tiny accent stars (✧) to fill gaps */}
    <div className="absolute top-1/2 left-[18%] text-white/40 text-xl">✧</div>
    <div className="absolute bottom-1/3 right-[40%] text-white/30 text-2xl animate-spin-slow">✧</div>
    <div className="absolute top-1/4 right-[5%] text-white/40 text-lg">✧</div>
  </div>

  <div className="container mx-auto px-6 text-center relative z-10">
    
    {/* Pill-shaped Outline Button/Badge */}
    <div className="inline-block mb-12">
      <div className="border-[1px] border-white/60 px-7 lg:px-12 py-3 lg:py-5 rounded-full shadow-2xl backdrop-blur-sm cursor-pointer hover:bg-white/10 transition-all">
        <span className="text-white text-md lg:text-xl font-black uppercase tracking-tight">
          We appreciate the True Words !
        </span>
      </div>
    </div>

    {/* Large Title */}
    <h2 className="text-white text-3xl lg:text-[5rem] font-black uppercase tracking-tighter leading-none mb-24 drop-shadow-[0_20px_20px_rgba(0,0,0,0.2)]">
      WHY CHOOSE US ?
    </h2>

    {/* Benefit Cards (Glassmorphism style from sweet21.jpg) */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 max-w-7xl mx-auto">
       {benefits.map((item, index) => (
          <div 
            key={index} 
            className="bg-white/15 backdrop-blur-xl border border-white/30 p-10 lg:p-14 rounded-[50px] lg:rounded-[80px] shadow-2xl text-left transition-all duration-500 hover:bg-white/25 hover:-translate-y-4 group relative"
          >
             {/* Mini sticker on the card itself */}
             <div className="absolute -top-4 -right-4 text-yellow-300 text-4xl opacity-0 group-hover:opacity-100 transition-opacity">★</div>

             <h4 className="text-white text-2xl lg:text-4xl font-black uppercase mb-6 leading-tight group-hover:text-yellow-200 transition-colors">
                {item.title}
             </h4>
             <p className="text-white/95 font-myanmar text-xl lg:text-3xl font-bold leading-relaxed">
                {item.myanmar}
             </p>
          </div>
       ))}
    </div>
  </div>
      </section>

       <Footer />
    </div>
  );
};

export default About;