import React from "react";
import NavBar from "../components/NavBar";
import aboutShape from "../assets/about-shape.png"; // เปลี่ยนเป็นนำเข้าเกี่ยวกับภาพ about-shape.png

export default function About() {
  return (
    <>
      {/* ใช้ NavBar เดียวกับหน้า Home พร้อมตั้งค่าปุ่มไฮไลต์หน้า About */}
      <NavBar pname="a" colorLinkNavBar="#FFF714" />

      {/* Container หลักจัดวาง Layout ฝั่งซ้าย-ขวา */}
      <div className="min-h-[calc(100vh-80px)] text-white px-8 md:px-20 lg:px-40 xl:px-80 pt-16 flex flex-col justify-between pb-12">
        {/* ส่วนเนื้อหาหลัก */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* ฝั่งซ้าย: หัวข้อ About Me และ รูปภาพ about-shape.png */}
          <div className="flex flex-col items-start gap-10 w-full md:w-1/2">
            <h1 className="text-6xl font-serif font-medium tracking-tight">
              About Me
            </h1>

            {/* แสดงผลรูปภาพ about-shape.png */}
            <div className="w-56 h-56 flex items-center justify-center">
              <img
                src={aboutShape}
                alt="About Graphic"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* ฝั่งขวา: รายละเอียดข้อความ */}
          <div className="flex flex-col gap-6 w-full md:w-1/2 pt-4">
            <h2 className="text-xl md:text-2xl font-bold leading-snug">
              Hi, I'm Nattapong Choedsaeng. A passionate Full Stack Web Developer based in Thailand.
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem
              odit labore unde nemo omnis sequi hic sit laudantium repellendus
              recusandae vitae ea laborum, ipsa nisi eos autem. Blanditiis
              consequuntur velit nesciunt aperiam odit excepturi repellat libero in
              enim praesentium! Ex dicta est suscipit ipsam voluptate tempora
              voluptatum quam distinctio minus saepe nobis nulla amet fugiat sit
              autem deserunt asperiores vitae ea, libero sed! Libero fugit non,
              placeat nulla quae odio asperiores ratione! Accusantium placeat
              dolorem minus eos excepturi modi.
            </p>
          </div>
        </div>

        {/* ปุ่ม Download CV ด้านล่าง */}
        <div className="flex justify-center pt-16">
          <a
            href="/cv.pdf"
            download
            className="px-8 py-3 border border-white rounded-full text-white text-base font-medium hover:bg-white hover:text-black transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Download CV
          </a>
        </div>
      </div>
    </>
  );
}