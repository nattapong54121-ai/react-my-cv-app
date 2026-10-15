import React from "react";
import NavBar from "../components/NavBar";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import p2 from "../assets/p2.jpg"; // แก้จาก .png เป็น .jpg เรียบร้อยแล้ว
import html from "../assets/html.png";
import css from "../assets/css.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import spring from "../assets/spring.png";
import java from "../assets/java.png";
import figma from "../assets/figma.png";
import firebase from "../assets/Firebase.png";

export default function Home() {
  return (
    <>
      <NavBar pname="h" colorLinkNavBar="#FFF714" />

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-20 px-8 md:px-20 lg:px-40 xl:px-80 gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-white text-5xl md:text-6xl font-bold">Full Stack Web</span>
          <span className="text-white text-5xl md:text-6xl font-bold">Developer !</span>
          <span className="text-white text-xl md:text-2xl mt-2">
            I'm Nattapong Choedsaeng. A passionate Full Stack Web Developer based in Thailand.
          </span>
          <div className="flex gap-4 mt-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn className="text-green-400 text-4xl hover:scale-110 transition-transform" />
            </a>
            <a href="https://github.com/nattapong54121-ai" target="_blank" rel="noreferrer">
              <FaGithub className="text-green-400 text-4xl hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        <div>
          <img
            src={p2}
            alt="Profile Picture"
            className="w-80 h-80 lg:w-[450px] lg:h-[450px] rounded-full border-4 border-green-400 object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Tech Stack */}
      <div className="flex justify-center pt-20">
        <p className="text-white text-2xl font-bold">🎊 My Tech Stack 🎊</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10 pt-10 pb-16">
        <img src={html} alt="HTML" className="w-12 h-auto object-contain" />
        <img src={css} alt="CSS" className="w-12 h-auto object-contain" />
        <img src={node} alt="Node" className="w-12 h-auto object-contain" />
        <img src={react} alt="React" className="w-12 h-auto object-contain" />
        <img src={spring} alt="Spring" className="w-12 h-auto object-contain" />
        <img src={java} alt="Java" className="w-12 h-auto object-contain" />
        <img src={figma} alt="Figma" className="w-12 h-auto object-contain" />
        <img src={firebase} alt="Firebase" className="w-12 h-auto object-contain" />
      </div>
    </>
  );
}