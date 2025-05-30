"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css"; 

const ServiceCard = ({ item }) => {

  
  useEffect(() => {
    AOS.init({
      duration: 2000,  
      easing: "ease-in-out-back", 
    });
  }, []);

  return (
    <Link href="/project">
      <div
        className="px-4 md:px-6 py-8 md:py-10 group card bg-[#0808080A] rounded-3xl hover:bg-white cursor-pointer hover:shadow-2xl flex flex-col h-full min-h-[220px] md:min-h-[260px]"
        data-aos="fade-up"
        data-aos-offset="300"
      >
        <div className="bg-white h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center group-hover:bg-gray-100 mx-auto md:mx-0">
          <Image src={item.img} alt="image" />
        </div>
        <div className="mt-6 md:mt-8 flex items-center gap-4 justify-between group-hover:text-[#FFB646]">
          <h2 className="flex flex-col text-base md:text-lg font-syne font-bold leading-7 group-hover:text-[#FFB646]">
            {item.title}
          </h2>
          <span>
            <MdArrowOutward className="h-5 w-5 md:h-6 md:w-6 text-[24px] md:text-[30px] transform transition-all duration-300 group-hover:-translate-y-[6px] group-hover:translate-x-[6px] group-hover:scale-125" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
