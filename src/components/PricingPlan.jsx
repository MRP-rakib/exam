"use client"
import Aos from 'aos';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { MdArrowOutward } from "react-icons/md";
const PricingPlan = () => {
     useEffect(() => {
        Aos.init({
          duration: 1000,
          easing: "ease",
        });
      }, []);
  return (
    
    <section className='mb-[120px]'>
        <div className="container">
            <div>
                <div className=' mt-2 md:mt-0 md:flex justify-between'>
                    <div className='max-w-[527px]'
                    data-aos="fade-up" data-aos-delay="300" 
                    >
                        <p className='text-[#FFB646] font-syne font-bold text-[20px] leading-[28px]'>Pricing</p>
                        <h2 className='font-syne font-bold  text-[30px] pb-4 md:pb-0 md:text-[40px] lg:text-[64px] leading-[40px] md:leading-[55px] lg:leading-[72px] mt-[10px]'>Stay chill and pick your plan</h2>
                    </div>
                    <div className='flex items-end'
                    data-aos="fade-up" data-aos-delay="300" 
                    >
                        <Link href={"/contact"}>
                        <button className='cursor-pointer lg:py-5 py-3 px-6 lg:px-8 bg-black text-white text-[15px] font-bold font-syne leading-4 rounded-[10px] flex gap-3 items-center hover:bg-gray-200 hover:text-black border-1 '>
                            Contact for Custom Project <span><MdArrowOutward/></span>
                        </button>
                        </Link>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[64px]' >
                    <div className='bg-[#0808080A] p-8 rounded-[15px]' data-aos="fade-up" data-aos-delay="300">
                        <div className='flex justify-between pb-[48px]'>
                            <p className='font-normal text-[18px] leading-[28px] text-[#080808]'>Basic</p>
                            <h3 className='font-syne font-bold text-[20px] leading-[28px] text-[#FF9330]'>$25/h</h3>
                        </div>
                        <div className='flex justify-between'>
                           <div>
                           <h2 className='font-syne font-bold text[20px] md:text-[25px] lg:text-[32px] leading-[40px]'>20 hrs</h2>
                           <p className='text-[#08080899] font-normal text-[18px] leading-[28px]'>10 hours per week</p>
                           </div>
                           <span className='flex items-end'><MdArrowOutward className='w-8 h-8'/></span>
                        </div>
                    </div>
                    <div className='bg-[#0808080A] p-8 rounded-[15px]' data-aos="fade-up" data-aos-delay="300">
                        <div className='flex justify-between pb-[48px]'>
                            <p className='font-normal text-[18px] leading-[28px] text-[#080808]'>Premium</p>
                            <h3 className='font-syne font-bold text-[20px] leading-[28px] text-[#FF9330]'>$50/h</h3>
                        </div>
                        <div className='flex justify-between'>
                           <div>
                           <h2 className='font-syne font-bold text[20px] md:text-[25px] lg:text-[32px] leading-[40px]'>30 hrs</h2>
                           <p className='text-[#08080899] font-normal text-[18px] leading-[28px]'>15 hours per week</p>
                           </div>
                           <span className='flex items-end'><MdArrowOutward className='w-8 h-8'/></span>
                        </div>
                    </div>
                    <div className='bg-[#0808080A] p-8 rounded-[15px]' data-aos="fade-up" data-aos-delay="300">
                        <div className='flex justify-between pb-[48px]'>
                            <p className='font-normal text-[18px] leading-[28px] text-[#080808]'>Platinum</p>
                            <h3 className='font-syne font-bold text-[20px] leading-[28px] text-[#FF9330]'>$100/h</h3>
                        </div>
                        <div className='flex justify-between'>
                           <div>
                           <h2 className='font-syne font-bold text[20px] md:text-[25px] lg:text-[32px] leading-[40px]'>40 hrs</h2>
                           <p className='text-[#08080899] font-normal text-[18px] leading-[28px]'>20 hours per week</p>
                           </div>
                           <span className='flex items-end'><MdArrowOutward className='w-8 h-8'/></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PricingPlan