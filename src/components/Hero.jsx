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
      <div className="bg-[#FFE9D9] pb-[70px] md:pb-[90px] lg:pb-[110px] xl:pb-[120px] w-full">
        {/* Left side: Image Section */}
        <div className="relative hidden xl:block">
          <Image
            className="absolute top-0 right-0"
            src={heroBg}
            alt="Hero Image"
          />
        </div>

        {/* Main Content */}
        <div className="container lg:pt-[180px] pt-[130px]">
         <div className="">
         <h2 className="flex items-center gap-2 lg:gap-5 text-[22px] lg:text-[32px] font-bold ml-3 lg:ml-6 lg:mb-6">
            <hr className="w-[25px] lg:w-[65px]"  /> Hello, I’m✌
          </h2>
          <h1 className="flex flex-col text-[50px] lg:text-[120px] xl:text-[140px] font-syne font-bold lg:leading-[110px]  ">
            Abdullah <span>Mamun</span>
          </h1>
          <p className="font-syne lg:text-[24px] font-bold leading-8 mt-6">
            Product Designer | Based in Germany
          </p>
         </div>


          {/* Buttons Section */}
          <div className="sm:flex gap-3 pt-[30px]">
            <button className="bg-black py-4 px-8 text-white rounded-[8px] flex gap-2 items-center hover:bg-transparent hover:text-black border transition-all duration-75">
              Let’s Talk
              <span>
                <MdArrowOutward />
              </span>
            </button>
            <button className="bg-black py-4 px-8 text-white rounded-[8px] flex gap-2 items-center hover:bg-transparent hover:text-black border transition-all duration-75">
              My Work
              <span>
                <MdArrowOutward />
              </span>
            </button>
          </div>

          {/* Client and Social Media Section */}
          <div className="md:flex mt-[60px] lg:mt-[120px] items-center">
            <div className="mr-[64px] flex items-center gap-3">
              <h2 className="font-syne text-[44px] leading-[54px] font-bold pb-4 lg:pb-0">
                1.2k+
              </h2>
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
