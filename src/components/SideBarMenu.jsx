import React from "react";
import logo from "@/Assets/logo.png";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { FaBehance, FaDribbble, FaGithub, FaLinkedinIn } from "react-icons/fa6";

const SideBarMenu = ({ onMenuToggle }) => {
  return (
    <>
      <div className="flex justify-between gap-1 lg:gap-2  border-b border-b-white/50 pl-8 h-screen bg-black w-[300px] md:w-[400px] lg:w-[458px] fixed top-0 right-0 z-[100]  md:flex-col  ">
        <div className="">
          <div className="flex justify-between gap-3 items-center">
            <span className="text-white flex">
              <Image src={logo} alt="logo" className="w-8 h-8 text-white" />
              <h2>Abdullah</h2>
            </span>
            <button
              className="flex items-center justify-center bg-amber-400  w-[90px] h-[70px]"
              onClick={onMenuToggle}
            >
              <RxCross2 />
            </button>
          </div>
          <div className="pr-2 md:pr-8 pb-10 pt-20 md:mr-[40px]">
            <ul className="flex flex-col gap-2 text-white font-syne text-[16px] md:text-[20px] leading-[28px]  ">
              <li className="border-b border-b-white/50 hover:text-orange-200">
                <Link
                  href={"/"}
                  className="flex justify-between gap-1.5 items-center py-4"
                >
                  Home
                  <span>
                    <MdArrowOutward />
                  </span>
                </Link>
              </li>
              <li className="border-b border-b-white/50 hover:text-orange-200">
                <Link
                  href={"/about"}
                  className="flex justify-between gap-1.5 items-center py-4"
                >
                  About
                  <span>
                    <MdArrowOutward />
                  </span>
                </Link>
              </li>
              <li className="border-b border-b-white/50 hover:text-orange-200">
                <Link
                  href={"/project"}
                  className="flex justify-between gap-1.5 items-center py-4"
                >
                Project
                  <span>
                    <MdArrowOutward />
                  </span>
                </Link>
              </li>
              <li className="border-b border-b-white/50 hover:text-orange-200">
                <Link
                  href={"/blogdetails"}
                  className="flex justify-between gap-1.5 items-center py-4"
                >
                  Project Details
                  <span>
                    <MdArrowOutward />
                  </span>
                </Link>
              </li>
              <li className="border-b border-b-white/50 hover:text-orange-200">
                <Link
                  href={"/myblog"}
                  className="flex justify-between gap-1.5 items-center py-4"
                >
                  Blog
                  <span>
                    <MdArrowOutward />
                  </span>
                </Link>
              </li>
              <li className="border-b border-b-white/50 hover:text-orange-200">
                <Link
                  href={"/myblogdetails"}
                  className="flex justify-between gap-1.5 items-center py-4"
                >
                  Blog Details
                  <span>
                    <MdArrowOutward />
                  </span>
                </Link>
              </li>
              <li className="hover:text-orange-200">
                <Link
                  href={"/contact"}
                  className="flex justify-between gap-1.5 items-center py-4"
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
        
            <ul className="flex  gap-4 mb-10">
              
                             <FaBehance className="font-bold text-2xl text-white hover:text-orange-300" />
                             <FaLinkedinIn className="font-bold text-2xl text-white hover:text-orange-300"/>
                             <FaDribbble className="font-bold text-2xl text-white hover:text-orange-300"/>
                             <FaGithub className="font-bold text-2xl text-white hover:text-orange-300"/>
                      
            </ul>
      
      </div>
      <div className=""></div>
    </>
  );
};

export default SideBarMenu;
