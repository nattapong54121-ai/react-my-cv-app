//import React from "react";
import NavBar from "../components/NavBar";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import p2 from "../assets/p2.png";
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
      <div className="flex justify-between items-center pt-20 px-80">
        <div className="flex flex-col gap-2">
          <span className="text-white text-6xl font-bold">Full Stack Web</span>
          <span className="text-white text-6xl font-bold">Developer !</span>
          <span className="text-white text-2xl">
            I'm TeaTea SAU. A passionate Full Stack Web Developer based in Thailand.
          </span>
          <div className="flex gap-4">
            <FaLinkedinIn className="text-green-400 text-4xl" />
            <FaGithub className="text-green-400 text-4xl" />
          </div>
        </div>

        <div>
          <img
            src={p2}
            alt="Profile Picture"
            className="w-[450px] h-[450px] rounded-full border-4 border-green-400 object-cover"
          />
        </div>
      </div>

      {/* Tech Stack (อยู่นอก Hero Section) */}
      <div className="flex justify-center pt-20">
        <p className="text-white text-2xl font-bold">🎊 My Tech Stack 🎊</p>
      </div>
      <div className="flex items-center justify-center gap-10 pt-10">
        <img src={html} alt="HTML" className="w-11" />
        <img src={css} alt="CSS" className="w-12" />
        <img src={node} alt="Node" className="w-13" />
        <img src={react} alt="React" className="w-14" />
        <img src={spring} alt="Spring" className="w-15" />
        <img src={java} alt="Java" className="w-16" />
        <img src={figma} alt="Figma" className="w-17" />
        <img src={firebase} alt="Firebase" className="w-17" />
      </div>
    </>
  );
}