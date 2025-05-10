"use client";
import Image from "next/image";
import React from "react";
import heroBg from "@/Assets/hero.png";
import { MdArrowOutward } from "react-icons/md";
import { FaBehance } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import CountUp from "react-countup";
import circle from "@/Assets/Circle.png";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  useGSAP(() => {
    gsap.from(".left_content", {
      x: -50,
      duration: 1,
      autoAlpha: 0,
    });
  });
  useGSAP(() => {
    gsap.from(".right_content", {
      x: 50,
      duration: 1,
      autoAlpha: 0.5,
    });
  });
  useGSAP(() => {
    gsap.from(".box", {
      rotate: 99999,
      duration: 5000,
      repeat: -1,
      opacity: 1,
    });
  });

  return (
    <section>
      <div className="bg-[#FFE9D9] pb-[70px] md:pb-[90px] lg:pb-[110px] xl:pb-[120px] w-full">
        {/* Left side: Image Section */}
        <div className="relative hidden xl:block">
          <Image
            className="absolute top-0 right-0 right_content"
            src={heroBg}
            alt="Hero Image"
          />
          <div className=" absolute top-145 right-40  ">
            <div>
           <Link href={"/contact"}>
          <div className="absolute left-1/2 top-1/2 flex justify-center items-center -translate-x-1/2 -translate-y-1/2
               z-10 bg-[#FFB646] p-3 w-[66px] h-[66px] text-black rounded-full">
          <FaArrowDown  className="w-[23px] h-[31px]"/>
          </div>
           </Link>
            </div>

            <Image src={circle} alt="circel " className="box" />
          </div>
        </div>

        {/* Main Content */}
        <div className="container lg:pt-[180px] pt-[130px] left_content">
          <div className="">
            <h2 className="flex items-center gap-2 lg:gap-5 text-[22px] lg:text-[32px] font-bold ml-0 lg:ml-6 lg:mb-6">
              <hr className="w-[25px] lg:w-[65px]" /> Hello, I’m ✌
            </h2>
            <h1 className="text-[26px] lg:text-[74px]  font-syne text-black-800  xl:text-[100px] font-bold font-Syne leading-none  relative before:rounded-full before:bg-amber-400 before:block before:absolute before:top-[18%] before:left-[-6px] before:-z-[1] before:w-[30px] lg:before:w-[80px] xl:before:w-[90px] before:h-[30px] lg:before:h-[100px] xl:before:h-[90px] before:translate-y-[-50%] z-2 ">
              Abdullah<span className="flex flex-col">Product</span> Designer{" "}
            </h1>
            <p className="font-syne lg:text-[24px] font-bold leading-8 mt-6">
              Web Designer | Based in Bangladesh
            </p>
          </div>

          {/* Buttons Section */}
          <div className="sm:flex gap-3 pt-[30px]">
           <Link href={"/contact"}>
           <button className="bg-black py-4 cursor-pointer px-8 text-white rounded-[8px] flex gap-2 items-center hover:bg-transparent hover:text-black border transition-all duration-75">
              Let’s Talk
              <span>
                <MdArrowOutward />
              </span>
            </button>
           </Link>
            <Link href={"/project"}>
              <button className="bg-black cursor-pointer py-4 px-8 text-white rounded-[8px] flex gap-2 items-center hover:bg-transparent hover:text-black border transition-all duration-75">
                My Work
                <span>
                  <MdArrowOutward />
                </span>
              </button>
            </Link>
          </div>

        
          <div className="md:flex mt-[60px] lg:mt-[120px] items-center">
            <div className="mr-[64px] flex items-center gap-3">
              <h2 className="font-syne text-[44px] leading-[54px] font-bold pb-4 lg:pb-0">
                <CountUp end={1.2} duration={5} decimals={1} suffix="k" />
              </h2>
              <p>Worldwide clients</p>
              <span className="md:pl-9 hidden md:block">|</span>
            </div>

            <div className="flex gap-4 ">
              <a href="">
              <FaBehance className="cursor-pointer w-6 h-6"/>
              </a>
              <a href="https://www.linkedin.com/in/abdullah2020/">
              <FaLinkedinIn className="cursor-pointer w-6 h-6"/>
              </a>
             <a href="">
             <FaDribbble className="cursor-pointer w-6 h-6"/>
             </a>
             <a href="https://github.com/MD-ABDULLAH24">
             <FaGithub className="cursor-pointer w-6 h-6"/>
             </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
