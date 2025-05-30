"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import footer from "@/Assets/footer.png";
import { MdArrowOutward } from "react-icons/md";
import { IoIosArrowRoundUp } from "react-icons/io";
import { FaBehance, FaDribbble, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Aos from "aos";

const Footer = () => {
  
 useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out-back",
    });
  }, []);
  return (
    <section className="bg-black py-[100px]">
      <div className="container">
        <div data-aos="flip-down" data-aos-delay="200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-white">
              <h2 className=" max-w-[416px] font-syne font-bold text-[40px] md:text-[50px] lg:text-[64px] leading-[50px] md:leading-[60px] lg:leading-[70px] pb-[40px]">Let’s work together</h2>
              <h3 className="flex gap-[11px] items-center">
                Based in Bangladesh | 
                <span className="flex gap-4">
                  <FaBehance />
                  <FaLinkedinIn />
                  <FaDribbble />
                  <FaGithub />
                </span>
              </h3>
            </div>
            <div className="py-[36px] px-[28px] flex flex-col justify-between border-1 border-[#FFFFFF33]">
              <h3 className="text-white text-[20px] font-bold font-syne leading-7 mr-10">Looking for a hectic designer?</h3>
              <p className=" flex justify-between font-syne font-bold text-6 leading-8 text-[#FFB646] gap-[28px]">rakib@gmail.com <span className="flex items-center text-white"><MdArrowOutward className="w-[20px] h-[20px]"/></span></p>
            </div>
            <div className="py-[36px] px-[28px] flex flex-col justify-between border-1 border-[#FFFFFF33]">
              <h3 className="text-white text-[20px] font-bold font-syne leading-7 ">Want a more in-depth look at my history?</h3>
              <p className=" flex justify-between font-syne font-bold text-6 leading-8 text-[#FFB646] gap-[28px]">013XXXXXXXX <span className="flex items-center text-white"><MdArrowOutward className="w-[20px] h-[20px]"/></span></p>
            </div>
          
          </div>
          {/* Middle  */}
          <div className="py-[72px]">
            <Image src={footer} alt="image"/>
          </div>
          {/* bottom  */}
          <div className="border-t-[2px] border-[#FFFFFF33] ">
            <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
              <div>
                <h1 className="text-white text-center md:text-left text-sm md:text-base">©2023 Mark Henry, All Rights Reserved</h1>
              </div>
              <div aria-label="scroll up" className="cursor-pointer mt-4 md:mt-0">
                {/* <Link href={"/"}> */}
                <p className="text-white flex items-center text-sm md:text-base" >Back To Top <span><IoIosArrowRoundUp className="w-6 h-6 text-[#FFB646]"/></span></p>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
