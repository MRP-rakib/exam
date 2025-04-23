import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const ServiceCard = ({item, titleWidth}) => {
  return (
    <div className="px-6 py-7 bg-[#0808080A] rounded-3xl group hover:bg-white cursor-pointer hover:shadow-2xl ">
      <div className="bg-white h-12 w-12 rounded-full flex items-center justify-center group-hover:bg-gray-100">
        <Image src={item.img} alt="image"/>
      </div>
      <div className="mt-8 flex items-center gap-4 justify-between">
        <h2 className="flex flex-col text-5 font-syne font-bold leading-7 group-hover:text-[#FFB646]">
          {item.title} 
        </h2>
        <span className="">
          <MdArrowOutward className="h-6 w-6 text-[30px] " />
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
