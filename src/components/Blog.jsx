"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import blog_1 from "@/Assets/blog1.png";
import blog_2 from "@/Assets/blog2.png";
import blog_3 from "@/Assets/blog3.png";
import blog_4 from "@/Assets/blog4.png";
import Aos from "aos";

const Blog = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease",
    });
  }, []);
  return (
    <section className="pb-[120px] ">
      <div className="container">
        <div>
          <div className="flex flex-col justify-center items-center"
          data-aos="fade-up" data-aos-delay="300" 
          >
            <p className="text-[20px] font-bold leading-7 text-[#FF9330] font-syne">
              Blog
            </p>
            <h2 className="font-syne font-bold text-[30px] md:text-[40px] lg:text-[64px] leading-[40px] md:leading-[50px] lg:leading-[72px] pb-[48px] pt-[10px]">
              My blog post
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div data-aos="fade-up" data-aos-delay="200" data-aos-offset="200">
              <Image src={blog_1} alt="blog" />
              <div className="group cursor-pointer">
                <ul className="flex gap-4 pt-[24px] pb-[12px]">
                  <li className="text-syne ">UI Design</li>
                  <li className="text-[#FF9330] text-syne group-hover:text-[#FF9330]">
                    03 May 2019
                  </li>
                </ul>
                <h1 className="font-syne font-bold text-[24px] leading-[32px] flex items-end gap-3 group-hover:text-[#FF9330]">
                  Right-lo-left behind development in mobile web design{" "}
                  <span className="w-8 h-8 group-hover:text-[#FF9330]">
                    <FiArrowUpRight />
                  </span>
                </h1>
              </div>
            </div>
            <div
              className="mt-10"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-offset="200"
            >
              <Image src={blog_2} alt="blog" />
              <div className="group cursor-pointer">
                <ul className="flex gap-4 pt-[24px] pb-[12px]">
                  <li className="text-syne ">UI Design</li>
                  <li className="text-[#FF9330] text-syne group-hover:text-[#FF9330]">
                    03 May 2019
                  </li>
                </ul>
                <h1 className="font-syne font-bold text-[24px] leading-[32px] flex items-end gap-3 group-hover:text-[#FF9330]">
                  Right-lo-left behind development in mobile web design{" "}
                  <span className="w-8 h-8 group-hover:text-[#FF9330]">
                    <FiArrowUpRight />
                  </span>
                </h1>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="500" data-aos-offset="200">
              <Image src={blog_3} alt="blog" />
              <div className="group cursor-pointer">
                <ul className="flex gap-4 pt-[24px] pb-[12px]">
                  <li className="text-syne ">UI Design</li>
                  <li className="text-[#FF9330] text-syne group-hover:text-[#FF9330]">
                    03 May 2019
                  </li>
                </ul>
                <h1 className="font-syne font-bold text-[24px] leading-[32px] flex items-end gap-3 group-hover:text-[#FF9330]">
                  Right-lo-left behind development in mobile web design{" "}
                  <span className="w-8 h-8 group-hover:text-[#FF9330]">
                    <FiArrowUpRight />
                  </span>
                </h1>
              </div>
            </div>
            <div
              className="mt-10"
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-offset="200"
            >
              <Image src={blog_4} alt="blog" />
              <div className="group cursor-pointer">
                <ul className="flex gap-4 pt-[24px] pb-[12px]">
                  <li className="text-syne ">UI Design</li>
                  <li className="text-[#FF9330] text-syne group-hover:text-[#FF9330]">
                    03 May 2019
                  </li>
                </ul>
                <h1 className="font-syne font-bold text-[24px] leading-[32px] flex items-end gap-3 group-hover:text-[#FF9330]">
                  Right-lo-left behind development in mobile web design{" "}
                  <span className="w-8 h-8 group-hover:text-[#FF9330]">
                    <FiArrowUpRight />
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
