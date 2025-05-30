"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import blogDetails from "@/app/myblogdetails/images/banner2.png";
import img from "@/app/myblogdetails/images/myimage.png"
import Aos from "aos";

const BlogDetails = () => {
    useEffect(()=>{
           Aos.init(
            {
                duration: 1000,
                easing:"ease"
            }
           )
          }, [])
  return (
    <section className="pt-50 bg-[#FFE9D9] mb-24 max-h-[570px]">
      <div className="container">
        <div data-aos="flip-down"
            data-aos-delay="300">
          <div className="grid grid-cols-1 pb-12 items-center mt-10 md:mt-0">
           
              <h1 className="font-syne font-bold text-[24px] mr-0 lg:mr-[327px] sm:text-[30px] md:text-[35px] lg:text-[44px] leading-[30px] md:leading-[44px] lg:leading-[54px] ">
                Designing the perfect feature comparison table
              </h1>
         
           
          </div>
          <div className="grid grid-cols-1  mb-12">
            <Image src={blogDetails} className="rounded-2xl w-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 pb-6">
            <div>
              <div className="flex gap-9">
                <div className="flex gap-2">
                    <div>
                    <Image src={img} alt="img" className="w-12 h-12 rounded-full object-cover overflow-hidden"/>
                    </div>
                  <div  className="flex flex-col">
                  <p className="font-normal text-[14px] leading-5 text-[#080808CC]">
                  Written by
                  </p>
                  <h4 className="font-bold text-[15px] leading-4 text-[#080808] pt-2">
                   MD Rakib
                  </h4>
                  </div>
                </div>

                <div className="flex flex-col">
                  <p className="font-normal text-[14px] leading-5 text-[#080808CC]">
                  Category
                  </p>
                  <h4 className="font-bold text-[15px] leading-4 text-[#080808] pt-2">
                  User Experience
                  </h4>
                </div>

                <div className="flex flex-col">
                  <p className="font-normal text-[14px] leading-5 text-[#080808CC]">
                  Date
                  </p>
                  <h4 className="font-bold text-[15px] leading-4 text-[#080808] pt-2">
                  01/05/2025
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
