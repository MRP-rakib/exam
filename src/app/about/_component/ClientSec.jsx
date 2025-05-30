"use client"
import Aos from 'aos';
import React, { useEffect } from 'react'
import { MdArrowOutward } from "react-icons/md";

const ClientSec = () => {
     useEffect(()=>{
         Aos.init(
          {
              duration: 1000,
              easing:"ease"
          }
         )
        }, [])
  return (
    <section className='mt-[120px] mb-[110px]'>
        <div className="container" data-aos="zoom-in"
            data-aos-delay="300">
            <div className='grid grid-cols-1 md:grid-cols-2 items-end gap-[134px]'>
                {/* left side  */}
                <div>
                    <h1 className='font-syne font-bold text-[40px] md:text-[50px] lg:text-[64px] leading-[50px] md:leading-[60px] lg:leading-[72px] mr-16'>My vision is to create happy my clients</h1>
                    <p className='font-normal text-[18px] leading-7 text-[#080808] pt-6'>That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making
                    them want more.</p>
                    <div className='grid grid-cols-2 md:grid-cols-3 mt-[43px] gap-[41px] items-center justify-center '>
                        <div className='flex-col items-center justify-center'>
                            <h2 className='font-syne font-bold text-[25px] md:text-[32px] leading-[30px] md:leading-[40px]'>08</h2>
                            <p className='font-normal text-[18px] leading-7 mt-1 text-[#080808CC]'>Award winner</p>
                        </div>
                        <div>
                            <h2 className='font-syne font-bold text-[25px] md:text-[32px] leading-[30px] md:leading-[40px]'>1.2K</h2>
                            <p className='font-normal text-[18px] leading-7 mt-1 text-[#080808CC]'>Worldwide client</p>
                        </div>
                        <div className='w-[186px]'>
                            <h2 className='font-syne font-bold text-[25px] md:text-[32px] leading-[30px] md:leading-[40px]'>3.5K</h2>
                            <p className='font-normal text-[18px] leading-7 mt-1 text-[#080808CC]'>Job done successfully</p>
                        </div>
                    </div>
                </div>
                {/* right side  */}
                <div className=''>
                    <div className='pb-5'>
                    <span className=" flex flex-col ">
                <span className="text-black-800 text-[35px] xl:text-[80px] font-bold font-Syne leading-[40px]  relative before:rounded-full before:bg-amber-400 before:block before:absolute before:top-[50%] before:left-[-8px] before:-z-[1] before:w-[95px] lg:before:w-[100px] xl:before:w-[110px] before:h-[95px] lg:before:h-[100px] xl:before:h-[110px] before:translate-y-[-50%] z-2">
                  12+
                </span>
                <span className=" mt-10 text-[18px] md:text-[35px] lg:text-[40px] text-[#08080866]  font-syne font-bold flex flex-col">
                  Years of <span>experience</span>
                </span>
              </span>
                    </div>
                    <div className=' flex justify-between gap-2 p-6 bg-black text-white rounded-[16px]'>
                        <div>
                            <h2 className='font-normal text-[16px] leading-7 text-[#FF9330] pb-2'>Say HELLO</h2>
                            <h3 className='font-syne font-bold text-[14px] md:text-[20px] leading-[40px]'>rakib@gmail.com</h3>
                        </div>
                        <div className='items-end flex'>
                            <MdArrowOutward className='md:h-12 md:w-12 w-8 h-8 text-[#FF9330] '/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ClientSec