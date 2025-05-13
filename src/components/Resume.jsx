"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import person from "@/Assets/person_2.png";
import { MdArrowOutward } from "react-icons/md";
import Aos from "aos";

const Resume = () => {
  useEffect(() => {
      Aos.init({
        duration: 1000,
        easing: "ease-in-out-back"
      })
  }, [])
  return (
    <section className="mb-[46px]"
    data-aos="zoom-out"
    data-aos-delay="300"
    >
      <div className="container ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[55px]">
          <div>
            <div className="relative">
              <div className="">
              <Image src={person} alt="person" />
              </div>
              <span className="absolute right-0 md:right-17 md:bottom-7 -bottom-3 flex flex-col ">
                <span className="text-black-800 text-[35px] xl:text-[80px] font-bold font-Syne leading-[40px]  relative before:rounded-full before:bg-amber-400 before:block before:absolute before:top-[50%] before:left-[-8px] before:-z-[1] before:w-[95px] lg:before:w-[100px] xl:before:w-[110px] before:h-[95px] lg:before:h-[100px] xl:before:h-[110px] before:translate-y-[-50%] z-2">
                  12+
                </span>
                <span className=" mt-10 text-[18px] md:text-[35px] lg:text-[40px] text-[#08080866]  font-syne font-bold flex flex-col">
                  Years of <span>experience</span>
                </span>
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-[#FF9330] text-5 leading-7 font-bold font-syne ml-1 mb-2">Hello I’m</h4>
            <h1 className="text-[26px] lg:text-[64px]  font-syne text-black-800  xl:text-[80px] font-bold font-Syne leading-none  relative before:rounded-full before:bg-amber-400 before:block before:absolute before:top-[18%] before:left-[-16px] before:-z-[1] before:w-[30px] lg:before:w-[80px] xl:before:w-[90px] before:h-[30px] lg:before:h-[100px] xl:before:h-[90px] before:translate-y-[-50%] z-2 ">Abdullah<span className="flex flex-col">Product</span> Designer </h1>
            <h3 className="text-[24px] md:text-[40px] lg:text-[44px] leading-[54px] font-bold font-syne">Based in Bangladesh</h3>
            <p className="text-[#08080899] text-[18px] leading-[28px] font-medium">
              That is where I come in. A lover of words, a wrangler of copy.
              Here to create copy that not only reflects who you are and what
              you stand for, but words that truly land with those that read
              them, calling your audience in and making them .
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-[41px] mt-6">
              <div>
                <h3 className="text-[32px] font-bold font-syne leading-[40px]">08</h3>
                <p className="tex-[18px] font-normal leading-7 text-[#080808]">Award winne</p>
              </div>
              <div>
                <h3 className="text-[32px] font-bold font-syne leading-[40px]">1.2k</h3>
                <p className="tex-[18px] font-normal leading-7 text-[#080808]">Worldwide client</p>
              </div>
              <div>
                <h3 className="text-[32px] font-bold font-syne leading-[40px]">3.5k</h3>
                <p className="tex-[18px] font-normal leading-7 text-[#080808]">Job done successfully</p>
              </div>
            </div>
           <a href="/AbdullahResume.pdf">
           <button className="flex items-center cursor-pointer gap-3 bg-black text-white text-[15px] leading-[15px] font-bold py-3 lg:py-5 lg:px-8 px-5 rounded-[10px] mt-12 hover:bg-transparent hover:text-black border-2 border-black">Download My Resume <span><MdArrowOutward/></span></button>
           </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
