import Image from 'next/image';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import vector from "@/Assets/Vector.png"

const About = () => {
  return (
    <section className='bg-[#0808080A]'>
            <div className='container relative'>
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-[100px] pt-[100px] '>
                    {/* left side  */}
                    <div className=' pb-[140px] '>
                        <h4 className='text-[#FF9330] ml-0 lg:ml-2 text-5 font-bold leading-7 mb-[9px]'>Resume</h4>
                        <h2 className='text-[30px] md:text-[40px] lg:text-[64px] font-syne font-bold leading-[40px] lg:leading-[72px]'>All over my details find here...</h2>
                        <div className='flex flex-wrap lg:flex-col  gap-2 my-8 lg:mr-55'>
                            <button className='inline-flex justify-between mb-2 py-5 px-6 rounded-2xl text-[16px] font-bold leading-[15px] hover:bg-black hover:text-white duration-75 items-center bg-white'>About <span><MdArrowOutward/></span></button>
                            <button className='flex justify-between mb-2 py-5 px-6 rounded-2xl text-[16px] font-bold leading-[15px] hover:bg-black hover:text-white duration-75 items-center bg-white'>Experience <span><MdArrowOutward/></span></button>
                            <button className='flex justify-between mb-2 py-5 px-6 rounded-2xl text-[16px] font-bold leading-[15px] hover:bg-black hover:text-white duration-75 items-center bg-white'>Education <span><MdArrowOutward/></span></button>
                            <button className='flex justify-between mb-2 py-5 px-6 rounded-2xl text-[16px] font-bold leading-[15px] hover:bg-black hover:text-white duration-75 items-center bg-white'>Skills <span><MdArrowOutward/></span></button>
                            <button className='flex justify-between mb-2 py-5 px-6 rounded-2xl text-[16px] font-bold leading-[15px] hover:bg-black hover:text-white duration-75 items-center bg-white'>Awards <span><MdArrowOutward/></span></button>
                        </div>
                    </div>
                    {/* right side  */}
                    <div className='mt-2'>
                        <div>
                         <div className='max-w-[636px] mr-[68px]'>
                         <h2 className='font-bold font-syne text-[22px] md:text-[26px] lg:text-[32px] leading-6 md:leading-8 lg:leading-10 pb-10'>Product Designer</h2>
                          <p className='text-[18px] font-normal leading-7 pb-6'>Mark Henry, <span className='font-bold pb-6'>Product Designer</span>, based in German. That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for,</p>
                          <p>but words that truly land with those that read them, calling your audience in and making them want more.</p>
                         </div>
                          <ul className='mt-[56px] flex-col gap-3 inline-flex'>
                            <li className=' gap-10 inline-flex items-center'>
                              <span className='w-[110px] text-black text-lg font-normal leading-none'>Name</span>
                               <span className='text-black text-[20px] lg:text-2xl font-bold font-syne leading-8'>Abdullah</span>
                               </li>
                            <li className=' gap-10 inline-flex items-center'> 
                              <span className='w-[110px] text-black text-lg font-normal leading-none'>Nationality</span>
                               <span className='text-black text-[20px] lg:text-2xl font-bold font-syne leading-8'>Bangladesh</span>
                               </li>
                            <li className=' gap-10 inline-flex items-center'>
                              <span className='w-[110px] text-black text-lg font-normal leading-none'>Phone</span>
                               <span className='text-black text-[20px] lg:text-2xl font-bold font-syne leading-8'>01903530401</span>
                               </li>
                            <li className=' gap-10 inline-flex items-center'>
                              <span className='w-[110px] text-black text-lg font-normal leading-none'>Email</span>
                               <span className='text-black lg:text-2xl font-bold font-syne leading-8'>hello@henry.com</span>
                               </li>
                            <li className=' gap-10 inline-flex items-center'>
                              <span className='w-[110px] text-black text-lg font-normal leading-none'>Experience</span> 
                              <span className='text-black text-2xl font-bold font-syne leading-8'>2+ Years</span>
                              </li>
                            <li className=' gap-10 inline-flex items-center'>
                              <span className='w-[110px] text-black text-lg font-normal leading-none'>Freelance</span>
                               <span className='text-black text-[20px] lg:text-2xl font-bold font-syne leading-8'>henry.halk23</span>
                               </li>
                            <li className=' gap-10 inline-flex items-center'>
                              <span className='w-[110px] text-black text-lg font-normal leading-none'>Skype</span> 
                              <span className='text-black text-2xl font-bold font-syne leading-8'>Available</span>
                              </li>
                            <li className=' gap-10 inline-flex items-center'>
                              <span className='w-[110px] text-black text-lg font-normal leading-none'>Language</span>
                               <span className='text-black text-2xl font-bold font-syne leading-8'>Bangla</span>
                               </li>
                          </ul>
                        </div>
                    </div>
                </div>
                <div className='absolute bottom-15 right-4'>
                  <Image src={vector} alt={vector} className=''/>
                </div>
            </div>
    </section>
  )
}

export default About