import Image from "next/image";
import React from "react";
import heroBg from "@/Assets/hero.png";
import { MdArrowOutward } from "react-icons/md";
import { FaBehance } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section>
      <div className="bg-[#FFE9D9] h-[850px] w-full">
        {/* Left side: Image Section */}
        <div className="relative">
          <Image className="absolute top-0 right-0" src={heroBg} alt="Hero Image" />
        </div>

        {/* Main Content */}
        <div className="container pt-[140px]">
          <h2 className="flex items-center gap-5 text-[32px] font-bold">
            <hr className="w-[65px]" /> Hello, I’m✌
          </h2>
          <h1 className="relative font-syne text-[120px] font-bold w-[400px] pt-2 after:content-[''] after:size-[120px] after:rounded-full after:bg-yellow-400 after:absolute after:top-[6px] after:-left-[10px] after:z-[-1]">
            <span className="bg-amber-300 w-[70px] h-[70px]"></span>
            <span>Abdullah </span> Mamun
          </h1>
          <p className="font-syne text-[24px] font-bold leading-8 mt-6">
            Product Designer | Based in Germany
          </p>

          {/* Buttons Section */}
          <div className="flex gap-3 pt-[30px]">
            <button className="bg-black py-4 px-8 text-white rounded-[8px] flex gap-2 items-center hover:bg-transparent hover:text-black border transition-all duration-75">
              Let’s Talk <span><MdArrowOutward /></span>
            </button>
            <button className="bg-black py-4 px-8 text-white rounded-[8px] flex gap-2 items-center hover:bg-transparent hover:text-black border transition-all duration-75">
              My Work <span><MdArrowOutward /></span>
            </button>
          </div>

          {/* Client and Social Media Section */}
          <div className="md:flex mt-[120px] items-center">
            <div className="mr-[64px] flex items-center gap-3">
              <h2 className="font-syne text-[44px] leading-[54px] font-bold pb-4 lg:pb-0">1.2k+</h2>
              <p>Worldwide clients</p>
              <span className="md:pl-9 hidden md:block">|</span>
            </div>

            <div className="flex gap-4">
              <FaBehance />
              <FaLinkedinIn />
              <FaDribbble />
              <FaGithub />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
