"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdArrowOutward } from "react-icons/md";
import logo from "@/Assets/logo.png";
import { VscClose } from "react-icons/vsc";
import { PiAlignRightBold } from "react-icons/pi";
import { FaBehance } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SideBarMenu = ({ onMenuToggle, menu }) => {
  const slideBar = useRef(null);

  useEffect(() => {
    const handleOutsideClick = () => {
      console.log("Outside Click");
    };

    if (menu) {
      window.addEventListener("click", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div
      ref={slideBar}
      className="pl-4 pr-4 sm:pl-8 h-screen bg-black w-[90vw] max-w-[95vw] sm:max-w-[458px] md:w-[458px] fixed top-0 right-0 z-[1001] transition-all duration-300"
    >
      <div className="mb-[40px] sm:mb-[80px]">
        <div className="flex justify-between gap-3 items-center pt-6 sm:pt-0">
          <span className="text-white flex items-center gap-2">
            <Image src={logo} alt="logo" className="w-8 h-8 text-white" />
            <h2 className="font-bold font-syne text-[18px] sm:text-[20px]">
              MD Rakib
            </h2>
          </span>
          <button
            className="flex items-center cursor-pointer justify-center bg-amber-400 w-[50px] h-[50px] sm:w-[90px] sm:h-[70px]"
            onClick={onMenuToggle}
          >
            <RxCross2 className="text-xl sm:text-2xl" />
          </button>
        </div>
        <div className="pb-6 sm:pr-8 sm:pb-10 pt-10 sm:pt-20">
          <ul className="flex flex-col gap-2 text-white ">
            <li className="border-b border-b-white/50 group hover:cursor-pointer">
              <Link
                onClick={onMenuToggle}
                href={"/"}
                className="flex justify-between gap-1.5 items-center py-4 font-syne font-bold text-[20px] leading-7 group-hover:text-[#FF9330]"
              >
                Home
                <span>
                  <MdArrowOutward />
                </span>
              </Link>
            </li>
            <li className="border-b border-b-white/50 group hover:cursor-pointer ">
              <Link
                onClick={onMenuToggle}
                href={"about"}
                className="flex justify-between gap-1.5 items-center py-4 font-syne font-bold text-[20px] leading-7 group-hover:text-[#FF9330]"
              >
                About
                <span>
                  <MdArrowOutward />
                </span>
              </Link>
            </li>
            <li className="border-b border-b-white/50 group hover:cursor-pointer">
              <Link
                onClick={onMenuToggle}
                href={"project"}
                className="flex justify-between gap-1.5 items-center py-4 font-syne font-bold text-[20px] leading-7 group-hover:text-[#FF9330]"
              >
                Project
                <span>
                  <MdArrowOutward />
                </span>
              </Link>
            </li>
            <li className="border-b border-b-white/50 group hover:cursor-pointer">
              <Link
                onClick={onMenuToggle}
                href={"blogdetails"}
                className="flex justify-between gap-1.5 items-center py-4 font-syne font-bold text-[20px] leading-7 group-hover:text-[#FF9330]"
              >
                Project details
                <span>
                  <MdArrowOutward />
                </span>
              </Link>
            </li>

            <li className="border-b border-b-white/50  group hover:cursor-pointer">
              <Link
                onClick={onMenuToggle}
                href={"myblog"}
                className="flex justify-between gap-1.5 items-center py-4 font-syne font-bold text-[20px] leading-7 group-hover:text-[#FF9330]"
              >
                Blog
                <span>
                  <MdArrowOutward />
                </span>
              </Link>
            </li>

            <li className="border-b border-b-white/50  group hover:cursor-pointer">
              <Link
                onClick={onMenuToggle}
                href={"myblogdetails"}
                className="flex justify-between gap-1.5 items-center py-4 font-syne font-bold text-[20px] leading-7 group-hover:text-[#FF9330]"
              >
                Blog Details
                <span>
                  <MdArrowOutward />
                </span>
              </Link>
            </li>
            <li className="border-b border-b-white/50  group hover:cursor-pointer">
              <Link
                onClick={onMenuToggle}
                href={"contact"}
                className="flex justify-between gap-1.5 items-center py-4 font-syne font-bold text-[20px] leading-7 group-hover:text-[#FF9330]"
              >
                Contact
                <span>
                  <MdArrowOutward />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-4 text-white pb-8 sm:pb-0">
        <FaBehance className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px]" />
        <FaLinkedinIn className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px]" />
        <FaDribbble className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px]" />
        <FaGithub className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px]" />
      </div>
    </div>
  );
};

export default SideBarMenu;
