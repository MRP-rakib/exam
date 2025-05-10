"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { MdArrowOutward } from "react-icons/md";
import vector from "@/Assets/Vector.png"
import { FaReact } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa";
import { SiFramer } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa6";

const About = () => {
  const [activeComponent, setActiveComponent] = useState("About")
  return (
    <section className='bg-[#0808080A] pb-[30px] md:pb-[80px] lg:pb-[100px]'>
            <div className='container relative'>
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-[24px] pt-[100px] '>
                    {/* left side  */}
                    <div className=' pb-10 md:pb-[140px]'>
                        <h4 className='text-[#FF9330] ml-0 lg:ml-2 text-5 font-bold leading-7 mb-[9px]'>Resume</h4>
                        <h2 className='text-[30px] md:text-[40px] lg:text-[64px] font-syne font-bold leading-[40px] lg:leading-[72px]  relative before:rounded-full before:bg-amber-400 before:block before:absolute before:top-[18%] before:left-[-10px] before:-z-[1] before:w-[30px] lg:before:w-[50px] xl:before:w-[70px] before:h-[30px] lg:before:h-[50px] xl:before:h-[70px] before:translate-y-[-50%] z-2'>All over my details find here...</h2>
                        <div className=' mt-[18px]  flex flex-wrap lg:flex-col mr-2 gap-2 lg:gap-0 lg:mr-30'>
                            <button onClick={() => setActiveComponent("About")} className='inline-flex justify-between mb-2 py-5 px-6 rounded-2xl text-[16px] font-bold leading-[15px] hover:bg-black hover:text-white duration-75  bg-white'>About <span><MdArrowOutward/></span></button>
                            <button onClick={() => setActiveComponent("Experience")} className='flex justify-between mb-2 py-5 px-6 rounded-2xl text-[16px] font-bold leading-[15px] hover:bg-black hover:text-white duration-75 items-center bg-white'>Experience <span><MdArrowOutward/></span></button>
                            <button onClick={() => setActiveComponent("Education")} className='flex justify-between mb-2 py-5 px-6 rounded-2xl text-[16px] font-bold leading-[15px] hover:bg-black hover:text-white duration-75 items-center bg-white'>Education <span><MdArrowOutward/></span></button>
                            <button onClick={() => setActiveComponent("Skills")} className='flex justify-between mb-2 py-5 px-6 rounded-2xl text-[16px] font-bold leading-[15px] hover:bg-black hover:text-white duration-75 items-center bg-white'>Skills <span><MdArrowOutward/></span></button>
                            <button onClick={() => setActiveComponent("Softskill")} className='flex justify-between mb-2 py-5 px-6 rounded-2xl text-[16px] font-bold leading-[15px] hover:bg-black hover:text-white duration-75 items-center bg-white'>Soft Skills <span><MdArrowOutward/></span></button>
                        </div>
                    </div>
                    {/* right side  */}
                    <div className='mt-2'>
                        <div>
                       
                          {
                            activeComponent === "About" && <AboutMe/>
                          }
                          {
                            activeComponent === "Experience" && <Experience/>
                          }
                          {
                            activeComponent === "Education" && <Education/>
                          }
                          {
                            activeComponent === "Skills" && <Skills/>
                          }
                          {
                            activeComponent === "Softskill" && <SoftSkills/>
                          }
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



const AboutMe = () => {
  return (
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
  )
}



const Experience = () => {
  return (
    <>
      <h1 className='font-bold font-syne text-[24px] md:text-[32px] leading-[24px] md:leading-[32px] pb-6'>Experience</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
      <div className='bg-[#0808080A] hover:shadow-2xl hover:bg-white cursor-pointer rounded-2xl hover:shadow-black py-7 px-6'>
        <h5 className='text-[#080808CC]'>03/216 – Running</h5>
        <h6 className='font-normal text-[18px] leading-7 text-[#080808] pt-3 md:pt-8 pb-1'>Axtra</h6>
        <h1 className='font-syne font-bold text-4 md:text-[24px] text-[#0B0B0B]'>Lead digital marketer</h1>
      </div>
      <div className='bg-[#0808080A] hover:shadow-2xl hover:bg-white cursor-pointer rounded-2xl hover:shadow-black py-7 px-6'>
        <h5>03/216 – Running</h5>
        <h6 className='font-normal text-[18px] leading-7 text-[#080808] pt-3 md:pt-8 pb-1'>Axtra</h6>
        <h1 className='font-syne font-bold text-4 md:text-[24px] text-[#0B0B0B]'>Lead digital marketer</h1>
      </div>
      <div className='bg-[#0808080A] hover:shadow-2xl hover:bg-white cursor-pointer rounded-2xl hover:shadow-black py-7 px-6'>
        <h5>03/216 – Running</h5>
        <h6 className='font-normal text-[18px] leading-7 text-[#080808] pt-3 md:pt-8 pb-1'>Axtra</h6>
        <h1 className='font-syne font-bold text-4 md:text-[24px] text-[#0B0B0B]'>Lead digital marketer</h1>
      </div>
      <div className='bg-[#0808080A] hover:shadow-2xl hover:bg-white cursor-pointer rounded-2xl hover:shadow-black py-7 px-6'>
        <h5>03/216 – Running</h5>
        <h6 className='font-normal text-[18px] leading-7 text-[#080808] pt-3 md:pt-8 pb-1'>Axtra</h6>
        <h1 className='font-syne font-bold text-4 md:text-[24px] text-[#0B0B0B]'>Lead digital marketer</h1>
      </div>
      
    </div>
    </>
  )
}


const Education = () => {
  return (
  
       <>
      <h1 className='font-bold font-syne text-[24px] md:text-[32px] leading-[24px] md:leading-[32px] pb-6'>Education</h1>
    <div className='grid grid-cols-1 gap-4 '>
    <div className='bg-[#0808080A] flex gap-12 md:gap-16 lg:gap-[120px] hover:shadow-2xl hover:bg-white cursor-pointer rounded-2xl hover:shadow-black py-7 px-6'>
        <div>
        <h5>03/2/19 – 26/01/21</h5>
        </div>
        <div>
          <h3 className='font-normal text-[18px] leading-7 text-[#0B0B0B]'>Dhaka</h3>
          <h1 className='font-syne font-bold text-6 leading-7 pt-4'>Secondary School Certificate</h1>
        </div>
      </div>
    <div className='bg-[#0808080A] flex gap-12 md:gap-16 lg:gap-[120px] hover:shadow-2xl hover:bg-white cursor-pointer rounded-2xl hover:shadow-black py-7 px-6'>
        <div>
        <h5>17/4/22 – 26/8/23</h5>
        </div>
        <div>
          <h3 className='font-normal text-[18px] leading-7 text-[#0B0B0B]'>Dhaka</h3>
          <h1 className='font-syne font-bold text-6 leading-7 pt-4'>Higher Secondary Certificate</h1>
        </div>
      </div>
    <div className='bg-[#0808080A] flex gap-12 md:gap-16 lg:gap-[120px] hover:shadow-2xl hover:bg-white cursor-pointer rounded-2xl hover:shadow-black py-7 px-6'>
        <div>
        <h5>03/2/23 – Running</h5>
        </div>
        <div>
          <h3 className='font-normal text-[18px] leading-7 text-[#0B0B0B]'>Dhaka</h3>
          <h1 className='font-syne font-bold text-6 leading-7 pt-4'>BA Business Management</h1>
        </div>
      </div>
      
     
      
    </div>
    </>

  )
}




const Skills = () => {
  return (
    <div>
      <h1 className='font-bold font-syne text-[24px] md:text-[32px] leading-[24px] md:leading-[32px] pb-6'>Skill</h1>
      <div className='bg-gray-100 grid grid-cols-2 md:grid-cols-3 gap-4'>
        <div className='flex  gap-4 py-6 px-5 bg-[#0808080A]'>
         <div>
          <FaReact className='w-8 h-8'/>
         </div>
         <div className=''>
          <h2 className='font-bold font-syne text-[20px] leading-7 pb-1'>React Js</h2>
          <p className='text-[#080808CC] font-normal text-[14px] leading-5'>(70%)</p>
         </div>
        </div>
        <div className='flex  gap-4 py-6 px-5 bg-[#0808080A]'>
         <div>
          <FaFigma className='w-8 h-8'/>
         </div>
         <div className=''>
          <h2 className='font-bold font-syne text-[20px] leading-7 pb-1'>Figma</h2>
          <p className='text-[#080808CC] font-normal text-[14px] leading-5'>(80%)</p>
         </div>
        </div>
        <div className='flex  gap-4 py-6 px-5 bg-[#0808080A]'>
         <div>
          <SiFramer className='w-8 h-8'/>
         </div>
         <div className=''>
          <h2 className='font-bold font-syne text-[20px] leading-7 pb-1'>Framer</h2>
          <p className='text-[#080808CC] font-normal text-[14px] leading-5'>(50%)</p>
         </div>
        </div>
        <div className='flex  gap-4 py-6 px-5 bg-[#0808080A]'>
         <div>
          <RiNextjsLine className='w-8 h-8'/>
         </div>
         <div className=''>
          <h2 className='font-bold font-syne text-[20px] leading-7 pb-1'>Next Js</h2>
          <p className='text-[#080808CC] font-normal text-[14px] leading-5'>(80%)</p>
         </div>
        </div>
        <div className='flex  gap-4 py-6 px-5 bg-[#0808080A]'>
         <div>
          <BiLogoTailwindCss className='w-8 h-8'/>
         </div>
         <div className=''>
          <h2 className='font-bold font-syne text-[20px] leading-7 pb-1'>Tailwind</h2>
          <p className='text-[#080808CC] font-normal text-[14px] leading-5'>(90%)</p>
         </div>
        </div>
        <div className='flex  gap-4 py-6 px-5 bg-[#0808080A]'>
         <div>
          <FaBootstrap className='w-8 h-8'/>
         </div>
         <div className=''>
          <h2 className='font-bold font-syne text-[20px] leading-7 pb-1'>Bootstrap</h2>
          <p className='text-[#080808CC] font-normal text-[14px] leading-5'>(80%)</p>
         </div>
        </div>
       
        
     
        
       
      </div>
    </div>
  )
}
const SoftSkills = () => {
  return (
    <div>
      <h1 className='font-bold font-syne text-[24px] md:text-[32px] leading-[24px] md:leading-[32px] pb-6'>Skills</h1>
      <div className='bg-gray-100 grid grid-cols-1 md:grid-cols-2  gap-4'>
        <div className='flex  gap-4 py-6 px-5 bg-[#0808080A]'>
        
         <div className=''>
          <h2 className='font-bold font-syne text-[20px] leading-7 pb-1'>Communication</h2>
          <p className='text-[#080808CC] font-normal text-[14px] leading-5'>(90%)</p>
         </div>
        </div>
        <div className='flex  gap-4 py-6 px-5 bg-[#0808080A]'>
        
         <div className=''>
          <h2 className='font-bold font-syne text-[20px] leading-7 pb-1'>Problem Solving</h2>
          <p className='text-[#080808CC] font-normal text-[14px] leading-5'>(80%)</p>
         </div>
        </div>
        <div className='flex  gap-4 py-6 px-5 bg-[#0808080A]'>
        
         <div className=''>
          <h2 className='font-bold font-syne text-[20px] leading-7 pb-1'>Time Management</h2>
          <p className='text-[#080808CC] font-normal text-[14px] leading-5'>(100%)</p>
         </div>
        </div>
        <div className='flex  gap-4 py-6 px-5 bg-[#0808080A]'>
       
         <div className=''>
          <h2 className='font-bold font-syne text-[20px] leading-7 pb-1'>Organizing</h2>
          <p className='text-[#080808CC] font-normal text-[14px] leading-5'>(90%)</p>
         </div>
        </div>
        <div className='flex  gap-4 py-6 px-5 bg-[#0808080A]'>
        
         <div className=''>
          <h2 className='font-bold font-syne text-[20px] leading-7 pb-1'>Responsibility</h2>
          <p className='text-[#080808CC] font-normal text-[14px] leading-5'>(100%)</p>
         </div>
        </div>
       
       
        
     
        
       
      </div>
    </div>
  )
}

