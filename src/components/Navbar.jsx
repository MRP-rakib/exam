"use client"

import logo from "@/Assets/logo.png";
import Image from 'next/image';
import { MdArrowOutward } from "react-icons/md";
import { HiMenuAlt4 } from "react-icons/hi";
import SideBarMenu from './SideBarMenu';
import { useState } from "react";
import Link from "next/link";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuToggle = ()=>{
    setIsMenuOpen(!isMenuOpen);
    
  }
  return (
    <>
    
    <section className='bg-transparent z-10 absolute w-full top-0 left-0'>
      <div className='flex justify-between border-b-1 ml-4 lg:ml-12'>
        {/* Logo Section */}
        <div className='flex '>
          <Link href={"/"}
          className="flex items-center gap-2 cursor-pointer">
          <Image src={logo} alt="Logo" width={32} height={32} className=''/>
         
          <h1  className='font-syne font-bold text-5'>Abdullah</h1>
          </Link>
        </div>

        {/* Button and Menu Section */}
        <div className='flex gap-5 items-center group'>
          <Link href={"/contact"}>
          <button className='flex gap-2 justify-center items-center text-[15px] font-bold leading-4 group-hover:text-white cursor-pointer'>
            Lets Talk <span><MdArrowOutward className="w-6 h-6"/></span>
          </button>
          </Link>

          <div className='bg-black cursor-pointer text-white w-[80px] h-[80px] flex justify-center items-center '
          onClick={menuToggle}>
            <HiMenuAlt4 />
          </div>
        </div>
      </div>
    </section>
    {isMenuOpen && <SideBarMenu onMenuToggle={menuToggle} menu={isMenuOpen}/>}
    </>
  );
};

export default Navbar;
