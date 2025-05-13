"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import mobile from "@/images/servicesImage/mobile.png";
import uiUx from "@/images/servicesImage/uiUx.png";
import website from "@/images/servicesImage/website.png";
import webflow from "@/images/servicesImage/webflow.png";
import brand from "@/images/servicesImage/brandIden.png";
import interaction from "@/images/servicesImage/interAction.png";
import ServiceCard from "./ServiceCard";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out-back",
      once: true,
    });
  }, []);
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
  return (
    <section className="lg:my-[120px] my-[80px]">
      <div className="container">
        {/* top side  */}
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center">
          <div>
            <h5 className="text-1xl lg:text-3xl font-bold text-[#FF9330] lg:mb-2 lg:ml-[6px]">
              Services
            </h5>
            <h1 className="text-[26px] lg:text-[44px]  font-syne text-black-800  xl:text-[60px] font-bold font-Syne leading-none  relative before:rounded-full before:bg-amber-400 before:block before:absolute before:top-[52%] before:left-[-4px] before:-z-[1] before:w-[30px] lg:before:w-[40px] xl:before:w-[75px] before:h-[30px] lg:before:h-[40px] xl:before:h-[75px] before:translate-y-[-50%] z-2 ">
              My specialties
            </h1>
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
        <div className="lg:grid grid-cols-1 sm:grid-cols-[auto_1fr] block gap-6 mt-12  ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-6">
            {serviceItem?.map((item) => {
              return <ServiceCard key={item.id} item={item} titleWidth={80} />;
            })}
          </div>

          <div
            className="bg-black rounded-3xl mt-3 lg:mt-0 cursor-pointer text-white "
            data-aos="zoom-in"
            data-aos-delay="1000"
          >
            <div className="py-9 px-6 flex flex-col  justify-between  h-full">
              <div className=" flex justify-end">
                <Link href={"/contact"}>
                  <button className="flex flex-wrap cursor-pointer">
                    <MdArrowOutward className="text-[#FFB646] text-[20px] lg:text-3xl justify-end w-[40px] h-[40px] lg:w-[80px] lg:h-[80px]" />
                  </button>
                </Link>
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
