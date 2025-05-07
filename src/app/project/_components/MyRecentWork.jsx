import Image from "next/image";
import React from "react";
import project1 from "@/app/project/images/project1.png";
import project2 from "@/app/project/images/project2.png";
import project3 from "@/app/project/images/project3.png";
import project4 from "@/app/project/images/project4.png";
import project5 from "@/app/project/images/project5.png";
import project6 from "@/app/project/images/project6.png";
import { MdArrowOutward } from "react-icons/md";

const MyRecentWork = () => {
  return (
    <section className="pt-[80px] pb-[120px]">
      <div className="container">
        <div className="flex flex-col justify-center items-center pb-12">
          <h1 className="font-syne font-bold text-[20px] leading-7 pb-[10px] text-[#FF9330]">
            Portfolio
          </h1>
          <h2 className="font-syne font-bold text-[40px] sm:text-[45px] md:text-[55px] lg:text-[64px] leading-[40px] md:leading-[55px] lg:leading-[72px]">
            My recent work
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6">
        <div className="relative ">
            <Image src={project1} />
            <div className="absolute bottom-[15px] left-0 right-0 px-4">
              <div className="flex justify-between items-center text-white  group  bg-opacity-50 p-2 rounded-lg">
                <h2 className="text-base font-bold font-syne text-6 sm:text-[28px] md:text-[30px] leading-[40px] group-hover:text-[#FF9330]">
                  Oxilex Dashboard design
                </h2>
                <MdArrowOutward className="text-xl group-hover:text-[#FF9330]" />
              </div>
            </div>
          </div>
          <div className="relative ">
            <Image src={project2} />
            <div className="absolute bottom-[15px] left-0 right-0 px-4">
              <div className="flex justify-between items-center text-white  group  bg-opacity-50 p-2 rounded-lg">
                <h2 className="text-base font-bold font-syne text-6 sm:text-[28px] md:text-[30px]  leading-[40px] group-hover:text-[#FF9330]">
                  Oxilex Dashboard design
                </h2>
                <MdArrowOutward className="text-xl group-hover:text-[#FF9330]" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-7">
          <div className="relative ">
            <Image src={project3} />
            <div className="absolute bottom-[15px] left-0 right-0 px-4">
              <div className="flex justify-between items-center text-white  group  bg-opacity-50 p-2 rounded-lg">
                <h2 className="text-base font-bold font-syne text-6 sm:text-[28px] md:text-[30px] leading-[40px] group-hover:text-[#FF9330]">
                  Oxilex Dashboard 
                </h2>
                <MdArrowOutward className="text-xl group-hover:text-[#FF9330]" />
              </div>
            </div>
          </div>
          <div className="relative">
            <Image src={project4} />
            <div className="absolute bottom-[15px] left-0 right-0 px-4">
              <div className="flex justify-between items-center text-white  group  bg-opacity-50 p-2 rounded-lg">
                <h2 className="text-base font-bold font-syne text-6 sm:text-[28px] md:text-[30px]  leading-[40px] group-hover:text-[#FF9330]">
                  Oxilex Dashboard 
                </h2>
                <MdArrowOutward className="text-xl group-hover:text-[#FF9330]" />
              </div>
            </div>
          </div>
          <div className="relative">
            <Image src={project5} />
            <div className="absolute bottom-[15px] left-0 right-0 px-4 ">
              <div className="flex justify-between items-center text-white  group  group-hover:bottom-6 bg-opacity-50 p-2 rounded-lg ">
                <h2 className="text-base font-bold font-syne text-6 sm:text-[28px] md:text-[30px] leading-[40px] group-hover:text-[#FF9330]">
                  Oxilex Apps
                </h2>
                <MdArrowOutward className="text-xl group-hover:text-[#FF9330]" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6">
         <div className="relative">
         <Image src={project2} />
          <div className="absolute bottom-[15px] left-0 right-0 px-4">
              <div className="flex justify-between items-center text-white  group  bg-opacity-50 p-2 rounded-lg">
                <h2 className="text-base font-bold font-syne text-6 sm:text-[28px] md:text-[30px]  leading-[40px] group-hover:text-[#FF9330]">
                  Oxilex Dashboard design
                </h2>
                <MdArrowOutward className="text-xl group-hover:text-[#FF9330]" />
              </div>
            </div>
         </div>
         <div className="relative">
         <Image src={project6} />
          <div className="absolute bottom-[15px] left-0 right-0 px-4">
              <div className="flex justify-between items-center text-white hover:text-[#FF9330] bg-opacity-50 p-2 rounded-lg">
                <h2 className="text-base font-bold font-syne text-6 sm:text-[28px] md:text-[30px] leading-[40px] group-hover:text-[#FF9330]">
                  Oxilex Dashboard design
                </h2>
                <MdArrowOutward className="text-xl" />
              </div>
            </div>
         </div>
        </div>
      </div>
    </section>
  );
};

export default MyRecentWork;
