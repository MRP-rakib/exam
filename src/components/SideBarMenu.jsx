// "use client"
// import React, { useEffect, useRef } from "react";
// import logo from "@/Assets/logo.png";
// import Image from "next/image";
// import { RxCross2 } from "react-icons/rx";
// import Link from "next/link";
// import { MdArrowOutward } from "react-icons/md";
// import { FaBehance, FaDribbble, FaGithub, FaLinkedinIn } from "react-icons/fa6";

// const SideBarMenu = ({ onMenuToggle, menu }) => {
//  const slideBar = useRef(null);
//   useEffect(()=> {
//     const handleOutsideClick = ()=> {
//         console.log("Outside Click");
//     };

//     if(menu) {
//         window.addEventListener("click", handleOutsideClick)
//     }

//     return ()=> {
//         window.removeEventListener("click",handleOutsideClick)
//     }
// }, [])
//   return (
//     <>
//       <div ref={slideBar} className="cursor-pointer flex flex-wrap flex-col justify-between gap-1 lg:gap-2  border-b border-b-white/50 pl-8 h-screen bg-black w-[300px] md:w-[400px] lg:w-[458px] fixed  top-0 right-0 z-[100]  md:flex-col  ">
//         <div className="">
//           <div className="flex justify-between gap-3 items-center">
//             <span className="text-white flex">
//               <Image src={logo} alt="logo" className="w-8 h-8 text-white" />
//               <h2 className="font-bold font-syne text-[20px]">Abdullah</h2>
//             </span>
//             <button
//               className="flex items-center cursor-pointer justify-center bg-amber-400  w-[90px] h-[70px]"
//               onClick={onMenuToggle}
//             >
//               <RxCross2 />
//             </button>
//           </div>
//           <div className="pr-2 md:pr-8 pb-10 pt-20 md:mr-[40px]">
//             <ul className="flex flex-col gap-2 text-white font-syne text-[16px] md:text-[20px] leading-[28px]  ">
//               <li className="border-b border-b-white/50 hover:text-orange-200">
//                 <Link
//                   href={"/"}
//                   className="flex justify-between gap-1.5 items-center py-4"
//                 >
//                   Home
//                   <span>
//                     <MdArrowOutward />
//                   </span>
//                 </Link>
//               </li>
//               <li className="border-b border-b-white/50 hover:text-orange-200">
//                 <Link
//                   href={"/about"}
//                   className="flex justify-between gap-1.5 items-center py-4"
//                 >
//                   About
//                   <span>
//                     <MdArrowOutward />
//                   </span>
//                 </Link>
//               </li>
//               <li className="border-b border-b-white/50 hover:text-orange-200">
//                 <Link
//                   href={"/project"}
//                   className="flex justify-between gap-1.5 items-center py-4"
//                 >
//                 Project
//                   <span>
//                     <MdArrowOutward />
//                   </span>
//                 </Link>
//               </li>
//               <li className="border-b border-b-white/50 hover:text-orange-200">
//                 <Link
//                   href={"/blogdetails"}
//                   className="flex justify-between gap-1.5 items-center py-4"
//                 >
//                   Project Details
//                   <span>
//                     <MdArrowOutward />
//                   </span>
//                 </Link>
//               </li>
//               <li className="border-b border-b-white/50 hover:text-orange-200">
//                 <Link
//                   href={"/myblog"}
//                   className="flex justify-between gap-1.5 items-center py-4"
//                 >
//                   Blog
//                   <span>
//                     <MdArrowOutward />
//                   </span>
//                 </Link>
//               </li>
//               <li className="border-b border-b-white/50 hover:text-orange-200">
//                 <Link
//                   href={"/myblogdetails"}
//                   className="flex justify-between gap-1.5 items-center py-4"
//                 >
//                   Blog Details
//                   <span>
//                     <MdArrowOutward />
//                   </span>
//                 </Link>
//               </li>
//               <li className="hover:text-orange-200">
//                 <Link
//                   href={"/contact"}
//                   className="flex justify-between gap-1.5 items-center py-4"
//                 >
//                   Contact
//                   <span>
//                     <MdArrowOutward />
//                   </span>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>

//             <div>
//               <ul className="flex  gap-4 mb-10">

//                              <FaBehance className="font-bold text-2xl text-white hover:text-orange-300" />
//                              <FaLinkedinIn className="font-bold text-2xl text-white hover:text-orange-300"/>
//                              <FaDribbble className="font-bold text-2xl text-white hover:text-orange-300"/>
//                              <FaGithub className="font-bold text-2xl text-white hover:text-orange-300"/>

//             </ul>
//             </div>

//       </div>
//       <div className=""></div>
//     </>
//   );
// };

// export default SideBarMenu;

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
      className="pl-8 h-screen bg-black w-[95vw] max-w-[458px] md:w-[458px] fixed top-0 right-0 z-[1001] "
    >
      <div className="mb-[80px]">
        <div className="flex justify-between gap-3 items-center">
          <span className="text-white flex">
            <Image src={logo} alt="logo" className="w-8 h-8 text-white" />{" "}
            <h2 className="font-bold font-syne text-[20px]">Abdullah</h2>
          </span>
          <button
            className="flex items-center cursor-pointer justify-center bg-amber-400  w-[90px] h-[70px]"
            onClick={onMenuToggle}
          >
            <RxCross2 />
          </button>
        </div>
        <div className="pr-8 pb-10 pt-20">
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
      <div className="flex gap-4 text-white ">
        <FaBehance className="w-[24px] h-[24px] " />
        <FaLinkedinIn className="w-[24px] h-[24px]" />
        <FaDribbble className="w-[24px] h-[24px] " />
        <FaGithub className="w-[24px] h-[24px] " />
      </div>
    </div>
  );
};

export default SideBarMenu;
