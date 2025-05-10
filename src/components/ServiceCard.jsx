import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const ServiceCard = ({item, titleWidth}) => {
  return (
    <>
    <Link href={"/project"}>
    <div className="px-6 py-10 group bg-[#0808080A] rounded-3xl group hover:bg-white cursor-pointer hover:shadow-2xl ">
      <div className="bg-white h-12 w-12 rounded-full flex items-center justify-center group-hover:bg-gray-100">
        <Image src={item.img} alt="image"/>
      </div>
      <div className="mt-8 flex items-center gap-4 justify-between group-hover:text-[#FFB646]">
        <h2 className="flex  flex-col text-5 font-syne font-bold leading-7 group-hover:text-[#FFB646]">
          {item.title} 
        </h2>
        <span className="">
          <MdArrowOutward className="h-6 w-6 text-[30px] transform transition-all duration-300  group-hover:-translate-y-[6px] group-hover:translate-x-[6px]  group-hover:scale-125" />
        </span>
      </div>
    </div>
    </Link>
    </>
  );
};

export default ServiceCard;
