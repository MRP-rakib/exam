import Image from "next/image";
import React from "react";
import footer from "@/Assets/footer.png";
import { MdArrowOutward } from "react-icons/md";
import { IoIosArrowRoundUp } from "react-icons/io";
import { FaBehance, FaDribbble, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-black py-[100px]">
      <div className="container">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-white">
              <h2 className=" w-[416px] font-syne font-bold text-[40px] md:text-[50px] lg:text-[64px] leading-[50px] md:leading-[60px] lg:leading-[70px] pb-[40px]">Let’s work together</h2>
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
              <p className=" flex justify-between font-syne font-bold text-6 leading-8 text-[#FFB646] gap-[28px]">web.abdullah20@gmail.com <span className="flex items-center text-white"><MdArrowOutward className="w-[20px] h-[20px]"/></span></p>
            </div>
            <div className="py-[36px] px-[28px] flex flex-col justify-between border-1 border-[#FFFFFF33]">
              <h3 className="text-white text-[20px] font-bold font-syne leading-7 ">Want a more in-depth look at my history?</h3>
              <p className=" flex justify-between font-syne font-bold text-6 leading-8 text-[#FFB646] gap-[28px]">01903530401 <span className="flex items-center text-white"><MdArrowOutward className="w-[20px] h-[20px]"/></span></p>
            </div>
          
          </div>
          {/* Middle  */}
          <div className="py-[72px]">
            <Image src={footer} alt="image"/>
          </div>
          {/* bottom  */}
          <div className="border-t-[2px] border-[#FFFFFF33] ">
            <div className="pt-10 flex justify-between items-center">
              <div>
                <h1 className="text-white">©2023 Mark Henry, All Rights Reserved</h1>
              </div>
              <div>
                <p className="text-white flex items-center">Back To Top <span><IoIosArrowRoundUp className="w-6 h-6  text-[#FFB646]"/></span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
