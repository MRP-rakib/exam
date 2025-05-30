"use client"
import React, { useEffect } from 'react'
import { MdArrowOutward } from 'react-icons/md'
import Image from 'next/image'
import project_1 from "@/Assets/project1.png"
import project_2 from "@/Assets/project2.png"
import Aos from 'aos'

const Work = () => {
      useEffect(()=>{
             Aos.init(
              {
                  duration: 1000,
                  easing:"ease"
              }
             )
            }, [])
  return (
     <section className=' py-6 lg:py-[100px] mb-20'>
           <div className="container" data-aos="flip-down"
            data-aos-delay="300">
            <div className='flex flex-col items-center justify-center my-10'>
                <h6 className='font-syne font-bold text-5 leading-7 text-[#FF9330] pb-[10px]'>Portfolio</h6>
                <h2 className='font-syne font-bold text-8 md:text-12 lg:text-[64px] leading-10 md:leading-12 lg:leading-[72px] '>My Recent Work</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className=''>
                    <Image src={project_1} alt='project'/>
                    <div className='gap-2 mt-6 mb-2'>
                        <button className='border-1 border-black mr-2  py-[6px] px-4 rounded-[40px] hover:bg-black hover:text-white cursor-pointer text-[18px]  '>Web</button>
                        <button className='border-1 border-black  py-[6px] px-4 rounded-[40px] hover:bg-black hover:text-white cursor-pointer text-[18px] '>Development</button>
                    </div>
                    <div className='flex justify-between gap-3 mt-3 items-center group-hover:text-[#FF9330] cursor-pointer group'>
                        <h3 className='font-syne font-bold text-5 md:text-7 lg:text-[32px] leading-6 lg:leading-10 hover:text-[#FF9330] duration-75 transition-all'>Restaurant website</h3>
                        <p className='group-hover:text-[#FF9330] duration-75 transition-all  text-3xl'><MdArrowOutward/></p>
                    </div>
                </div>
                <div className=' cursor-pointer'>
                  <Image src={project_2} alt='project'/>
                  <div className='mt-6 mb-2 gap-2 '>
                        <button className='border-1 border-black mr-2 py-[6px] px-4 rounded-[40px] hover:bg-black hover:text-white cursor-pointer text-[18px] '>Web</button>
                        <button className='border-1 border-black  py-[6px] px-4 rounded-[40px] hover:bg-black hover:text-white cursor-pointer text-[18px] '>Development</button>
                    </div>
                    <div className='flex justify-between gap-3 mt-3 items-center group-hover:text-[#FF9330] group'>
                        <h3 className='font-syne font-bold text-5 md:text-7 lg:text-[32px] leading-6 lg:leading-10 group-hover:text-[#FF9330] duration-75 transition-all'>E-commerce website</h3>
                        <p className='group-hover:text-[#FF9330] duration-75 transition-all text-3xl'><MdArrowOutward/></p>
                    </div>
                </div>
            </div>
            
           </div>
        </section>
  )
}

export default Work