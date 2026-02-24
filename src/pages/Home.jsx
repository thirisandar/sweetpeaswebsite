import React,{useRef, useState} from 'react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // Add Navigation module
import 'swiper/css';
import 'swiper/css/navigation'; // Add Navigation CSS


const Home = () => {
  const messages = [
    { id: 1, img: "/images/msg1.jpg", text: "ဉာဏ်ကောင်းအောင် ပြုစုပေးလို့ရပါတယ်" },
    { id: 2, img: "/images/msg2.jpg", text: "အခမဲ့ (၃)ရက် တက်ကြည့်ပါ" },
    { id: 3, img: "/images/msg3.jpg", text: "ကလေးအိပ်ချိန်" },
    { id: 4, img: "/images/msg4.jpg", text: "သင်ယူမှု ပျော်ရွှင်ပါစေ" },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [showForm, setShowForm] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar sits at the top */}
      <Navbar isTransparent={true} showForm={showForm} setShowForm={setShowForm} />

      <main className="pt-20">
        {/* HERO SECTION - Mobile Optimized */}
        <section className="container mx-auto px-6 py-8 lg:py-12 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20">
          
          <div className="relative">
            <div className="w-[280px] h-[280px] lg:w-[480px] lg:h-[420px] overflow-hidden rounded-t-[60px] lg:rounded-t-[100px] rounded-bl-[60px] lg:rounded-bl-[100px] rounded-br-[20px] lg:rounded-br-[30px] border-4 border-white shadow-xl">
              <img 
                src="/images/swheader.png" 
                alt="Kids at SweetPeas" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 w-20 h-20 lg:w-28 h-28 bg-sweet-green rounded-3xl -z-10 rotate-12 shadow-sm"></div>
          </div>

          <div className="flex flex-col font-myanmar text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-[7rem] font-bold text-dark-text leading-[1.4] lg:leading-loose mb-2 lg:mb-0">
                ကလေးပျော်မှ
              </h1>
              
              <h1 className="text-5xl md:text-6xl lg:text-[9rem] font-bold text-sweet-pink leading-[1.5] lg:leading-[1.3]">
                ကျောင်းထားပါ
              </h1>
          </div>
        </section>  

        {/* GALLERY SECTION (sweet3.jpg) */}
        <section className="container mx-auto px-6 py-24">
          <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-16">
            
            {/* Circle Frame */}
            <div className="w-64 h-64 lg:w-80 lg:h-80 border-[3px] border-dark-text rounded-full overflow-hidden p-1.5 shadow-lg -rotate-2">
              <img src="/images/gallery1.png" className="w-full h-full object-cover rounded-full" />
            </div>

            {/* Rounded Box Frame */}
            <div className="w-64 h-64 lg:w-80 lg:h-80 border-[3px] border-dark-text rounded-[50px] overflow-hidden p-1.5 shadow-lg">
              <img src="/images/gallery2.png" className="w-full h-full object-cover rounded-[45px]" />
            </div>

            {/* House Shape Frame */}
            <div className="w-64 h-64 lg:w-80 lg:h-80 border-[3px] border-dark-text overflow-hidden p-1.5 shadow-lg rotate-2"
                 style={{ 
                   clipPath: 'polygon(50% 0%, 100% 20%, 100% 100%, 0 100%, 0% 20%)',
                   borderRadius: '24px' 
                 }}>
              <img src="/images/gallery3.png" className="w-full h-full object-cover" />
            </div>

          </div>
        </section>
                  
        {/* swiper section */}
        <section className="py-12 lg:py-20 relative overflow-hidden" 
                style={{ background: 'linear-gradient(135deg, #71D4F4 0%, #B8AEF2 100%)' }}>
          
          {/* Section Header Text */}
          <div className="container mx-auto px-4 lg:px-6 text-center mb-8 lg:mb-12">
            <h2 className="text-3xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-3 lg:mb-4 leading-tight">
              Discover Our Message For Parents
            </h2>
            <p className="text-white text-xs lg:text-base font-bold uppercase tracking-widest opacity-90 px-2">
              Quality care involves accepting each child at their individual developmental
            </p>
          </div>

          <div className="relative max-w-[1400px] mx-auto px-2 lg:px-10">
            {/* swiper left */}
            <button 
                ref={prevRef}
                className="absolute left-1 lg:left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 bg-sweet-pink rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition cursor-pointer disabled:opacity-50"
              >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-5 h-5 lg:w-6 lg:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* swiper right */}
            <button 
                ref={nextRef}
                className="absolute right-1 lg:right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 bg-sweet-pink rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition cursor-pointer disabled:opacity-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-5 h-5 lg:w-6 lg:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>

            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              spaceBetween={20}
              slidesPerView={1.2}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 25 },
                1024: { slidesPerView: 3, spaceBetween: 25 },
              }}
              className="px-2 lg:px-4"
            >
              {messages.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="bg-white rounded-3xl lg:rounded-[45px] overflow-hidden shadow-2xl relative aspect-[4/5] border-4 lg:border-8 border-white/20">
                    <img src={item.img} className="w-full h-full object-cover" alt="message" />
                    
                    {/* Tiny Logo in top left of card */}
                    <div className="absolute top-3 lg:top-4 left-3 lg:left-4 w-8 h-8 lg:w-10 lg:h-10 bg-white/80 rounded-full p-0.5 lg:p-1 shadow-sm">
                      <img src="/images/logo.png" className="w-full h-full object-contain" />
                    </div>

                    {/* Myanmar Text Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center p-4 lg:p-6 bg-black/5">
                      <h3 className="text-lg lg:text-3xl font-bold text-white text-center font-myanmar drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] leading-tight">
                        {item.text}
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      
        {/* CONNECTIONS SECTION (sweet5.jpg) */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            
            {/* Centered Heading with your custom blue color */}
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-2xl lg:text-5xl font-black text-sweet-blue uppercase leading-tight tracking-tight">
                Built for engaging discussions
              </h2>
              <h2 className="text-2xl lg:text-5xl font-black text-sweet-blue uppercase leading-tight tracking-tight">
                and connections
              </h2>
            </div>

            {/* Image Grid - Matching the rounded frames in sweet5.jpg */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="group cursor-pointer">
                  <div className="border-[3px] border-dark-text rounded-[50px] overflow-hidden p-2 bg-white shadow-md group-hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-square rounded-[40px] overflow-hidden">
                      <img 
                        src={`/images/sw${num}.jpg`} 
                        alt="Student activities" 
                        className="w-full h-full object-cover transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CURRICULUM SECTION (sweet6, sweet7, sweet8) */}
        <section className="py-24 bg-sweet-pink">
          <div className="container mx-auto px-6 lg:px-20">
            
            {/* Section Header (sweet6.png) */}
            {/* <div className="flex items-center gap-4 ml-30 mb-30 justify-center lg:justify-start">
                <h2 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tight">
                  SWEETPEAS mm
                </h2>
                <span className="text-3xl lg:text-5xl font-bold text-white font-myanmar">
                  ဘာတွေသင်မှာလည်း
                </span>
            </div> */}

          <div className="flex flex-col lg:flex-row items-center lg:items-end gap-2 lg:gap-4 mb-20 lg:mb-30 justify-center lg:justify-start lg:ml-10">
              {/* English Text: Smaller on mobile (text-3xl) to fit one line */}
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-white uppercase tracking-tight text-center lg:text-left">
                  SWEETPEAS
              </h2>
              
              {/* Myanmar Text: Centered and scaled down (text-2xl) for mobile */}
              <span className="text-2xl md:text-3xl lg:text-5xl font-bold text-white font-myanmar text-center lg:text-left leading-relaxed">
                  ဘာတွေသင်မှာလည်း
              </span>
          </div>

            {/* Curriculum Item 1:*/}
            <div className="flex flex-col lg:flex-row items-center gap-30 mb-32">
              <div className="w-full lg:w-1/2 relative group">
                <div className="border-[12px] border-white/30 rounded-[60px] overflow-hidden shadow-2xl -rotate-9 group-hover:rotate-0 transition-transform duration-500">
                  <div className="relative aspect-[4/3]">
                      <img src="/images/practicallife.png" alt="Practical Life" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        {/* <h3 className="text-5xl lg:text-7xl font-black text-white text-center leading-tight drop-shadow-xl uppercase italic">
                          Practical<br/>Life
                        </h3> */}
                      </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-3">
                {[
                  "Taking care of one-self & others",
                  "Taking care of environment",
                  "Grace & Courtesy",
                  "Preliminary Exercise",
                  "Control of Movement"
                ].map((text) => (
                  <div key={text} className="flex items-start gap-4 group">
                    <div className="w-5 h-5 rounded-full border-4 border-white bg-sweet-blue flex-shrink-0 mt-1 shadow-md group-hover:scale-110 transition"></div>
                    <p className="text-xl lg:text-3xl font-black text-teal-200 uppercase leading-tight tracking-wide">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum Item 2:  */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-30 mb-32">
              <div className="w-full lg:w-1/2 relative group">
                <div className="border-[12px] border-white/30 rounded-[60px] overflow-hidden shadow-2xl rotate-9 group-hover:rotate-0 transition-transform duration-500">
                  <div className="relative aspect-[4/3]">
                      <img src="/images/language.jpg" alt="Language" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <h3 className="text-5xl lg:text-7xl font-black text-white text-center drop-shadow-xl uppercase italic">
                          Language
                        </h3>
                      </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-3">
                {[
                  "Enrichment of Vocabulary",
                  "Phonics",
                  "Grammatical & Logical Analysis",
                  "Reading & Writing",
                  "Myanmar Language"
                ].map((text) => (
                  <div key={text} className="flex items-start gap-4 group">
                    <div className="w-5 h-5 rounded-full border-4 border-white bg-sweet-blue flex-shrink-0 mt-1 shadow-md group-hover:scale-110 transition"></div>
                    <p className="text-xl lg:text-3xl font-black text-teal-200 uppercase leading-tight tracking-wide">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum Item 3:*/}
            <div className="flex flex-col lg:flex-row items-center gap-30 mb-32">
              <div className="w-full lg:w-1/2 relative group">
                <div className="border-[12px] border-white/30 rounded-[60px] overflow-hidden shadow-2xl -rotate-9 group-hover:rotate-0 transition-transform duration-500">
                  <div className="relative aspect-[4/3]">
                      <img src="/images/practical-life.jpg" alt="Practical Life" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <h3 className="text-5xl lg:text-7xl font-black text-white text-center leading-tight drop-shadow-xl uppercase italic">
                          Practical<br/>Life
                        </h3>
                      </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-3">
                {[
                "Visual Discrimination",
                "Accoustic Sense",
                "Tactile Sense",
                "Olfactory Sense",
                "Gustatory Sense"
                ].map((text) => (
                  <div key={text} className="flex items-start gap-4 group">
                    <div className="w-5 h-5 rounded-full border-4 border-white bg-sweet-blue flex-shrink-0 mt-1 shadow-md group-hover:scale-110 transition"></div>
                    <p className="text-xl lg:text-3xl font-black text-teal-200 uppercase leading-tight tracking-wide">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

             {/* Curriculum Item 4: */}
             <div className="flex flex-col lg:flex-row-reverse items-center gap-30 mb-32">
              <div className="w-full lg:w-1/2 relative group">
                <div className="border-[12px] border-white/30 rounded-[60px] overflow-hidden shadow-2xl rotate-9 group-hover:rotate-0 transition-transform duration-500">
                  <div className="relative aspect-[4/3]">
                      <img src="/images/language.jpg" alt="Language" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <h3 className="text-5xl lg:text-7xl font-black text-white text-center drop-shadow-xl uppercase italic">
                          Language
                        </h3>
                      </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-3">
                {[
                  "+,-,x,÷",
                  "Counting Numbers",
                  "Compare and Contract",
                  "Decimal System",
                  "Cards & Counters (Even & Odd)"
                ].map((text) => (
                  <div key={text} className="flex items-start gap-4 group">
                    <div className="w-5 h-5 rounded-full border-4 border-white bg-sweet-blue flex-shrink-0 mt-1 shadow-md group-hover:scale-110 transition"></div>
                    <p className="text-xl lg:text-3xl font-black text-teal-200 uppercase leading-tight tracking-wide">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum Item 5:*/}
            <div className="flex flex-col lg:flex-row items-center gap-30 mb-32">
              <div className="w-full lg:w-1/2 relative group">
                <div className="border-[12px] border-white/30 rounded-[60px] overflow-hidden shadow-2xl -rotate-9 group-hover:rotate-0 transition-transform duration-500">
                  <div className="relative aspect-[4/3]">
                      <img src="/images/practical-life.jpg" alt="Practical Life" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <h3 className="text-5xl lg:text-7xl font-black text-white text-center leading-tight drop-shadow-xl uppercase italic">
                          Practical<br/>Life
                        </h3>
                      </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-3">
                {[
                "Botany",
                "Zoology",
                "Geography",
                "History",
                "Art & Music"
                ].map((text) => (
                  <div key={text} className="flex items-start gap-4 group">
                    <div className="w-5 h-5 rounded-full border-4 border-white bg-sweet-blue flex-shrink-0 mt-1 shadow-md group-hover:scale-110 transition"></div>
                    <p className="text-xl lg:text-3xl font-black text-teal-200 uppercase leading-tight tracking-wide">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

          {/* Add this at the very bottom of your Curriculum <section> */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] translate-y-1">
              <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-[#E0F7FF]">
                  <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C49.49,24.19,152.09,42.7,321.39,56.44Z"></path>
              </svg>
          </div>

        {/* VIDEO SECTION (sweet9.jpg) */}
        <section className="py-20 bg-[#E0F7FF]">
          <div className="container mx-auto px-6 text-center">
            
            {/* Heading with the blue bubbly style */}
            <div className="mb-12 relative inline-block">
              <h2 className="text-2xl lg:text-5xl font-black text-sweet-blue uppercase leading-tight tracking-tight drop-shadow-sm">
                Get to know about <br /> our school
              </h2>
              
              {/* The animated blue arrow from your screenshot */}
              <div className="hidden lg:block absolute -right-20 top-1/2 animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#71D4F4" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </div>
            </div>

            {/* Video Container - Framed like your screenshot */}
            <div className="max-w-5xl mx-auto relative">
              <div className="aspect-video rounded-[40px] lg:rounded-[60px] overflow-hidden border-[12px] border-white shadow-2xl bg-white">
                {/* Replace URL with your actual school video link */}
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
                  title="SweetPeas School Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>

                {/* Small Logo Overlay - as seen in the top right of the video in sweet9 */}
                <div className="absolute top-8 right-8 w-16 h-16 bg-white rounded-2xl p-2 shadow-lg hidden lg:flex items-center justify-center">
                  <img src="/images/logo.png" alt="Logo" className="w-full object-contain" />
                </div>
              </div>
            </div>

          </div>
        </section>

                {/* INTERMEDIATE CTA SECTION */}
      <section className="py-20 bg-[#FFF9E5] overflow-hidden relative">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-sweet-blue/10 rounded-full"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-sweet-pink/10 rounded-full"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-black text-dark-text uppercase mb-8 leading-tight">
            Ready to start <br className="lg:hidden" /> <span className="text-sweet-pink">your journey?</span>
          </h2>
          <p className="text-lg lg:text-xl font-bold text-slate-500 uppercase mb-10 max-w-2xl mx-auto">
            Visit our campus today and see how we create a brighter future for your little ones.
          </p>
          <a href="https://form.jotform.com/232234500679050" target="_blank"  rel="noopener noreferrer" className="px-10 py-5 bg-[#81DDFB] text-white font-black cursor-pointer rounded-full text-xl shadow-[0_15px_30px_rgba(113,212,244,0.4)] hover:bg-[#F1808F] transition-all duration-300 uppercase tracking-wider inline-block">Book a Tour</a>
        </div>
      </section>

      <Footer />
      </main>
    </div>
  );
};

export default Home;