"use client"
import React, { useEffect } from "react";
import { MdOutlineMail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import {
  FaBehance,
  FaDribbble,
  FaDribbbleSquare,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import Aos from "aos";

const Contact = () => {
   useEffect(()=>{
           Aos.init(
            {
                duration: 1000,
                easing:"ease"
            }
           )
          }, [])
  return (
    <section className="pt-[61px] pb-[120px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[150px]">
          {/* left side  */}
          <div data-aos="fade-up"
            data-aos-delay="300">
            <h4 className="font-syne font-bold text-[20px] leading-7 text-[#FF9330]">
              Contact
            </h4>
            <h1 className=" pt-[10px] pb-6 lg:pb-12 w-[416px] text-[26px] lg:text-[44px]  font-syne text-bold  xl:text-[64px] font-bold font-Syne leading-none  relative before:rounded-full before:bg-amber-400 before:block before:absolute before:top-[24px] lg:before:top-[24%] before:left-[-9px] lg:before:left-[-14px] before:-z-[1] before:w-[30px] lg:before:w-[40px] xl:before:w-[60px] before:h-[30px] lg:before:h-[40px] xl:before:h-[60px] before:translate-y-[-50%] z-2 ">
              Let’s connect
            </h1>
            <div className="">
              <div className="flex mb-7 border-b-[1px] border-[#0808081A] pb-4">
                <div>
                  <MdOutlineMail className="w-8 h-8" />
                </div>
                <div className="pl-6">
                  <p className="font-normal text-[18px] leading-7 text-[#08080899] pb-1">
                    Email us
                  </p>
                  <h3 className="font-bold font-syne text-[16px] md:text-[20px] leading-7">
                    web.abdullah20@gmail.com
                  </h3>
                </div>
              </div>
              <div className="flex  mb-7 border-b-[1px] border-[#0808081A] pb-4">
                <div>
                  <BiSolidPhoneCall className="w-8 h-8" />
                </div>
                <div className="pl-6">
                  <p className="font-normal text-[18px] leading-7 text-[#08080899] pb-1">
                    Call us us
                  </p>
                  <h3 className="font-bold font-syne text-[20px] leading-7">
                    +8801903530401
                  </h3>
                </div>
              </div>
              <div className="flex border-b-[1px] border-[#0808081A] pb-4">
                <div>
                  <IoLocationOutline className="w-8 h-8" />
                </div>
                <div className="pl-6">
                  <p className="font-normal text-[18px] leading-7 text-[#08080899] pb-1">
                    Address
                  </p>
                  <h3 className="font-bold font-syne text-[20px] leading-7">
                    613, Manikdee, Dhaka Cantt, Dhaka-1206
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* Right side  */}
          <div className="grid grid-cols-1 items-center justify-center px-4 py-8" data-aos="fade-up"
            data-aos-delay="300">
            <form className="grid grid-cols-1 gap-6 md:grid-cols-2  ">
              <div className="flex flex-col ">
                <label
                  htmlFor="name"
                  className="mb-2 text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 rounded-lg p-4"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="mb-2 text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-gray-300 rounded-lg p-4"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="subject"
                  className="mb-2 text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="border border-gray-300 rounded-lg p-4"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="phone"
                  className="mb-2 text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="Your Phone Number"
                  className="border border-gray-300 w-full rounded-lg p-4"
                />
              </div>

              <div className="flex flex-col md:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  placeholder="Type your message..."
                  className="border border-gray-300 rounded-lg p-4"
                ></textarea>
              </div>
              <div>
                <button className="flex gap-1 bg-black text-white px-8 items-center cursor-pointer group hover:bg-white hover:text-black border-[2px] border-black  py-4 text-[15px] font-bold leading-4 rounded-2xl">
                  Submit{" "}
                  <span className="pl-1">
                    <MdArrowOutward className="w-5 h-5 transform transition-all group-hover:translate-y-[-2px] group-hover:scale-90 duration-300 " />
                  </span>
                </button>
              </div>
            </form>
            <div className="md:flex gap-8 mt-[35px] items-center">
              <div className="flex items-center gap-6">
                <hr className="w-[60px] md:w-[110px] text-[#0808081A]"></hr>
                <h2 className="font-syne font-bold text-[20px] leading-7">
                  Follow me
                </h2>
              </div>
              <div className="flex gap-4  mt-4 md:mt-0">
                <a href="">
                  <FaBehance className="cursor-pointer w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/abdullah2020/">
                  <FaLinkedinIn className="cursor-pointer w-6 h-6" />
                </a>
                <a href="">
                  <FaDribbble className="cursor-pointer w-6 h-6" />
                </a>
                <a href="https://github.com/MD-ABDULLAH24">
                  <FaGithub className="cursor-pointer w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
