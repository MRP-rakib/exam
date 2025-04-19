import Image from 'next/image'
import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import mobile from "@/images/servicesImage/mobile.png"
import uiUx from "@/images/servicesImage/uiUx.png"
import website from "@/images/servicesImage/website.png"
import webflow from "@/images/servicesImage/webflow.png"
import brand from "@/images/servicesImage/brandIden.png"
import interaction from "@/images/servicesImage/interAction.png"

const Services = () => {
  return (
    <section className='my-[120px]'>
        <div className='container'>
            {/* top side  */}
            <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center'>
                <div>
                    <h5 className='text-1xl lg:text-3xl font-bold text-[#FF9330] lg:mb-2 lg:ml-[6px]'>Services</h5>
                    <h2 className='text-3xl lg:text-[64px] font-bold leading-[72px] font-syne'>My specialties</h2>
                </div>
                <div>
                    <h3 className='font-dmSans text-[#08080899]'>Synergistically seize front-end methods of empowerment without extensive core competencies. Progressively repurpose alternative platforms </h3>
                </div>
            </div>
            {/* Bottom side  */}
            <div className='grid grid-cols-1 sm:grid-cols-[auto_1fr]  gap-6 mt-12 '>
               <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6'>
               <div className='px-6 py-7 bg-[#0808080A] rounded-3xl'>
                    <div className='bg-white h-12 w-12 rounded-full flex items-center justify-center'>
                    <Image src={mobile}/>
                    </div>
                    <div className='mt-8 flex items-center gap-4 justify-between'>
                        <h2 className='flex flex-col text-5 font-syne font-bold leading-7'>Mobile Apps <span>design</span></h2>
                        <span><MdArrowOutward className='h-6 w-6'/></span>
                    </div>
                </div>
                <div className='px-6 py-7 bg-[#0808080A] rounded-3xl'>
                    <div className='bg-white h-12 w-12 rounded-full flex items-center justify-center'>
                    <Image src={mobile}/>
                    </div>
                    <div className='mt-8 flex items-center gap-4 justify-between'>
                        <h2 className='flex flex-col text-5 font-syne font-bold leading-7 '>Mobile Apps <span>design</span></h2>
                        <span><MdArrowOutward className='h-6 w-6'/></span>
                    </div>
                </div>
                <div className='px-6 py-7 bg-[#0808080A] rounded-3xl'>
                    <div className='bg-white h-12 w-12 rounded-full flex items-center justify-center'>
                    <Image src={mobile}/>
                    </div>
                    <div className='mt-8 flex items-center gap-4 justify-between'>
                        <h2 className='flex flex-col text-5 font-syne font-bold leading-7 w-[222px]'>Mobile Apps <span>design</span></h2>
                        <span><MdArrowOutward className='h-6 w-6'/></span>
                    </div>
                </div>
                <div className='px-6 py-7 bg-[#0808080A] rounded-3xl'>
                    <div className='bg-white h-12 w-12 rounded-full flex items-center justify-center'>
                    <Image src={mobile}/>
                    </div>
                    <div className='mt-8 flex items-center gap-4 justify-between'>
                        <h2 className='flex flex-col text-5 font-syne font-bold leading-7 w-[222px]'>Mobile Apps <span>design</span></h2>
                        <span><MdArrowOutward className='h-6 w-6'/></span>
                    </div>
                </div>
                <div className='px-6 py-7 bg-[#0808080A] rounded-3xl'>
                    <div className='bg-white h-12 w-12 rounded-full flex items-center justify-center'>
                    <Image src={mobile}/>
                    </div>
                    <div className='mt-8 flex items-center gap-4 justify-between'>
                        <h2 className='flex flex-col text-5 font-syne font-bold leading-7 w-[222px]'>Mobile Apps <span>design</span></h2>
                        <span><MdArrowOutward className='h-6 w-6'/></span>
                    </div>
                </div>
                <div className='px-6 py-7 bg-[#0808080A] rounded-3xl'>
                    <div className='bg-white h-12 w-12 rounded-full flex items-center justify-center'>
                    <Image src={mobile}/>
                    </div>
                    <div className='mt-8 flex items-center gap-4 justify-between'>
                        <h2 className='flex flex-col text-5 font-syne font-bold leading-7 w-[222px]'>Mobile Apps <span>design</span></h2>
                        <span><MdArrowOutward className='h-6 w-6'/></span>
                    </div>
                </div>
               </div>

               <div className='bg-black rounded-3xl text-white '>
                <div className='py-9 px-6 flex flex-col flex-wrap justify-between max-w-[416px] mx-auto h-full'>
                <div className='flex flex-wrap justify-end'>
                    <MdArrowOutward className='text-[#FFB646] text-3xl'/>
                </div>
                   <div className='flex flex-col flex-wrap'>
                   <h5 className='text-[18px] font-light text-[#FFB646] leading-7 font-syne'>SAY HELLO!</h5>
                   <h1 className='text-[12px] font-syne font-bold leading-[40px]'>abdullah.codingmind@gmail.com</h1>
                   </div>
                </div>
               </div>
            </div>
        </div>
    </section>
  )
}

export default Services