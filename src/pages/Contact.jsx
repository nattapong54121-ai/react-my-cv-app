import React from "react";
import NavBar from "../components/NavBar";

// นำเข้ารูปภาพ c1.png, c2.png, c3.png จากโฟลเดอร์ assets
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";

export default function Contact() {
  return (
    <>
      {/* ใช้ NavBar พร้อมกำหนดค่าไฮไลต์หน้า Contact */}
      <NavBar pname="c" colorLinkNavBar="#FFF714" />

      {/* Main Container */}
      <div className="min-h-[calc(100vh-80px)] text-white px-8 md:px-20 lg:px-40 xl:px-80 flex flex-col items-center justify-center pb-20">
        
        {/* หัวข้อและคำโปรย */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-medium tracking-tight mb-4">
            Let's talk
          </h1>
          <p className="text-gray-400 text-base md:text-lg">
            Don't be a stranger! Say hello and let's collaborate
          </p>
        </div>

        {/* ช่องทางการติดต่อ 3 ช่องทางพร้อมรูปภาพ c1, c2, c3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          
          {/* ช่องที่ 1: Email (ใช้ภาพ c1.png) */}
          <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-[#0a0a0a] border border-gray-800 hover:border-yellow-400/50 transition-all duration-300 shadow-xl gap-6">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#141414] border border-gray-700/60 p-3 overflow-hidden shadow-inner">
              <img src={c1} alt="Email Icon" className="w-full h-full object-contain" />
            </div>
            <span className="text-gray-200 text-sm md:text-base font-medium text-center break-all">
              nattapong54121@gmail.com
            </span>
          </div>

          {/* ช่องที่ 2: Location (ใช้ภาพ c2.png) */}
          <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-[#0a0a0a] border border-gray-800 hover:border-yellow-400/50 transition-all duration-300 shadow-xl gap-6">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#141414] border border-gray-700/60 p-3 overflow-hidden shadow-inner">
              <img src={c2} alt="Location Icon" className="w-full h-full object-contain" />
            </div>
            <span className="text-gray-200 text-sm md:text-base font-medium text-center">
              Thailand, Bangkok
            </span>
          </div>

          {/* ช่องที่ 3: LinkedIn (ใช้ภาพ c3.png) */}
          <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-[#0a0a0a] border border-gray-800 hover:border-yellow-400/50 transition-all duration-300 shadow-xl gap-6">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#141414] border border-gray-700/60 p-3 overflow-hidden shadow-inner">
              <img src={c3} alt="LinkedIn Icon" className="w-full h-full object-contain" />
            </div>
            <span className="text-gray-200 text-sm md:text-base font-medium text-center">
              Nattapong Choedsaeng
            </span>
          </div>

        </div>

      </div>
    </>
  );
}