"use client"

import logo from "@/Assets/logo.png";
import Image from 'next/image';
import { MdArrowOutward } from "react-icons/md";
import { HiMenuAlt4 } from "react-icons/hi";
import SideBarMenu from './SideBarMenu';
import { useState } from "react";


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
        <div className='flex items-center gap-2 '>
          <Image src={logo} alt="Logo" width={32} height={32} className=''/>
          <h1 className='font-syne font-bold text-5'>Abdullah</h1>
        </div>

        {/* Button and Menu Section */}
        <div className='flex gap-5 items-center'>
          <button className='flex gap-2 justify-center items-center'>
            Lets Talk <span><MdArrowOutward /></span>
          </button>

          <div className='bg-black text-white w-[80px] h-[80px] flex justify-center items-center '
          onClick={menuToggle}>
            <HiMenuAlt4 />
          </div>
        </div>
      </div>
    </section>
    {isMenuOpen && <SideBarMenu onMenuToggle={menuToggle}/>}
    </>
  );
};

export default Navbar;
