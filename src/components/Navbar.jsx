import React from 'react'
import logo from "@/Assets/logo.png"
import Image from 'next/image'
import { MdArrowOutward } from "react-icons/md";
import { HiMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
  return (
    <section className='pl-12 bg-transparent  z-10 absolute top-0 left-0 w-full'>
      <div className='flex justify-between border-b-1 '>
        <div className='flex items-center gap-2'>
        <Image src={logo} alt="Logo" width={32} height={32} />
            <h1 className='font-syne'>Name</h1>
        </div>
        <div className='flex gap-5'>
          <button className='flex gap-2 justify-center items-center'>Lets Talk <span className=''><MdArrowOutward/></span></button>
        <div className='bg-black text-white w-[100px] h-[80px] flex justify-center items-center'>
          <HiMenuAlt4/>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar
