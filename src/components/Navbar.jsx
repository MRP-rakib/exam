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
    
    <section className='bg-transparent z-10 absolute w-full top-0 left-0 border-b-1'>
      <div className='flex container justify-between  items-center py-2'>
        <div className='flex'>
          <Link href={"/"} className="flex items-center gap-2 cursor-pointer">
            <Image src={logo} alt="Logo" width={32} height={32} />
            <h1 className='font-syne font-bold text-5'>Rakib</h1>
          </Link>
        </div>

       
        <div className="flex items-center gap-2">
          <div className='hidden lg:flex gap-5 items-center'>
          <Link href={"/contact"}>
            <button className='flex gap-2 justify-center items-center text-[15px] font-bold leading-4 hover:text-white cursor-pointer'>
              Lets Talk <span><MdArrowOutward className="w-6 h-6"/></span>
            </button>
          </Link>
          {/* Add more nav links here if needed */}
        </div>

       
        <div className=' flex items-center'>
          <div
            className='bg-black cursor-pointer text-white w-[48px] h-[48px] flex justify-center items-center rounded'
            onClick={menuToggle}
          >
            <HiMenuAlt4 size={28} />
          </div>
        </div>
        </div>
      </div>
    </section>
    {isMenuOpen && <SideBarMenu onMenuToggle={menuToggle} menu={isMenuOpen}/>}
    </>
  );
};

export default Navbar;
