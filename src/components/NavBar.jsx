import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ pname, colorLinkNavBar }) {
  return (
    <nav className="flex justify-between items-center px-8 md:px-20 lg:px-40 xl:px-80 py-6 text-white">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold tracking-tight">
        <span className="text-green-400">&gt;_</span>Nattapong SAU
      </Link>

      {/* Nav Links */}
      <div className="flex items-center gap-8 font-medium">
        <Link
          to="/"
          style={{ color: pname === "h" ? colorLinkNavBar : "#FFFFFF" }}
          className="hover:text-yellow-300 transition-colors"
        >
          Home
        </Link>
        <Link
          to="/about"
          style={{ color: pname === "a" ? colorLinkNavBar : "#FFFFFF" }}
          className="hover:text-yellow-300 transition-colors"
        >
          About
        </Link>
        <Link
          to="/portfolio"
          style={{ color: pname === "p" ? colorLinkNavBar : "#FFFFFF" }}
          className="hover:text-yellow-300 transition-colors"
        >
          Portfolio
        </Link>

        {/* ปุ่ม Let's Talk: เปลี่ยนเป็นสีแดงเมื่อ pname === "c" */}
        <Link
          to="/contact"
          style={{ color: pname === "c" ? "#ff4d4d" : "#FFFFFF" }}
          className={`px-5 py-1.5 border rounded-full transition-all duration-300 ml-2 ${
            pname === "c"
              ? "border-red-500 bg-white text-red-500 font-bold"
              : "border-white hover:bg-white hover:text-black"
          }`}
        >
          Let's talk
        </Link>
      </div>
    </nav>
  );
}