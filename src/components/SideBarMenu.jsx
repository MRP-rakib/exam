import React from 'react'
import logo from "@/Assets/logo.png"
import Image from 'next/image'
import { RxCross2 } from "react-icons/rx";
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';

const SideBarMenu = ({onMenuToggle}) => {
  return (
    <div className='pl-8 h-screen bg-black w-[458px] fixed top-0 right-0 z-[1001]'>
    <div className='flex justify-between gap-2 items-center border-b border-b-white/50'>
        <span className='text-white flex'>
          <Image src={logo} className='w-8 h-8 text-white'/>
         <h2>Abdullah</h2>
        </span>
        <button className='flex items-center justify-center bg-amber-400  w-[90px] h-[70px]' onClick={onMenuToggle}>
           <RxCross2/>
        </button>
    </div>
    <div className='pr-8 pb-10 pt-20'>
        <ul className='flex flex-col gap-2 text-white font-syne '>
            <li className='border-b border-b-white/50'>
                <Link href={"/"} className='flex justify-between gap-1.5 items-center py-4'>
                    Home
                    <span>
                        <MdArrowOutward />
                    </span>
                </Link>
            </li>
            <li className='border-b border-b-white/50'>
                <Link href={"/about"} className='flex justify-between gap-1.5 items-center py-4'>
                    About
                    <span>
                        <MdArrowOutward />
                    </span>
                </Link>
            </li>
            <li className='border-b border-b-white/50'>
                <Link href={"/"} className='flex justify-between gap-1.5 items-center py-4'>
                    Home
                    <span>
                        <MdArrowOutward />
                    </span>
                </Link>
            </li>
            <li className=''>
                <Link href={"/"} className='flex justify-between gap-1.5 items-center py-4'>
                    Home
                    <span>
                        <MdArrowOutward />
                    </span>
                </Link>
            </li>
        </ul>
    </div>
</div>
  )
}

export default SideBarMenu