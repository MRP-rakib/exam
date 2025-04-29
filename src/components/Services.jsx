"use client"
import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import mobile from "@/images/servicesImage/mobile.png";
import uiUx from "@/images/servicesImage/uiUx.png";
import website from "@/images/servicesImage/website.png";
import webflow from "@/images/servicesImage/webflow.png";
import brand from "@/images/servicesImage/brandIden.png";
import interaction from "@/images/servicesImage/interAction.png";
import ServiceCard from "./ServiceCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const Services = () => {
  const serviceItem = [
    {
      id: 1,
      img: mobile,
      title: "Mobile Apps design",
    },
    {
      id: 2,
      img: uiUx,
      title: "UI/UX design",
    },
    {
      id: 3,
      img: website,
      title: "Website design",
    },
    {
      id: 4,
      img: webflow,
      title: "Webflow development",
    },
    {
      id: 5,
      img: brand,
      title: "Brand identity",
    },
    {
      id: 6,
      img: interaction,
      title: "Interaction design",
    },
  ];

useGSAP(()=>{
  gsap.from(".top", {
      y: 60,
      duration: 1,
      autoAlpha: 0,
  })
})
useGSAP(()=>{
  gsap.from(".bottom", {
      y: 60,
      duration: 1,
      autoAlpha: 0,
  })
})
  return (
    <section className="lg:my-[120px] my-[80px]">
      <div className="container">
        {/* top side  */}
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center">
          <div className="top">
            <h5 className="text-1xl lg:text-3xl font-bold text-[#FF9330] lg:mb-2 lg:ml-[6px]">
              Services
            </h5>
            <h2 className="text-3xl lg:text-[64px] font-bold leading-[72px] font-syne">
              My specialties
            </h2>
          </div>
          <div>
            <h3 className="font-dmSans text-[#08080899]">
              Synergistically seize front-end methods of empowerment without
              extensive core competencies. Progressively repurpose alternative
              platforms{" "}
            </h3>
          </div>
        </div>
        {/* Bottom side  */}
        <div className="lg:grid grid-cols-1 sm:grid-cols-[auto_1fr] block gap-6 mt-12 bottom ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-6">
            {serviceItem?.map((item) => {
              return <ServiceCard key={item.id} item={item} titleWidth={80} />;
            })}
          </div>

            <div className="bg-black rounded-3xl text-white ">
              <div className="py-9 px-6 flex flex-col  justify-between  h-full">
               <div className=" flex justify-end">
               <button className="flex flex-wrap ">
                  <MdArrowOutward className="text-[#FFB646] text-3xl justify-end" />
                </button>
               </div>
                <div className="flex flex-col flex-wrap">
                  <h5 className="text-[18px] font-light text-[#FFB646] leading-7 font-syne">
                    SAY HELLO!
                  </h5>
                  <h1 className="text-[12px] font-syne font-bold leading-[40px]">
                    abdullah.codingmind@gmail.com
                  </h1>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
