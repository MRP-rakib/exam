import Image from 'next/image'
import React from 'react'
import displayImg from "@/app/blogdetails/images/banner.png"

const MyDesing = () => {
  return (
    <section className='pt-20 bg-[#FFE9D9] md:mb-24 lg:max-h-[570px]'>
            <div className="container">
               <div>
               <div className='grid grid-cols-1 md:grid-cols-2 pb-12 items-center'>
                    <div>
                        <ul className='flex gap-5 ml-2'>
                            <li className='font-normal text-[14px] leading-5'>UI Design</li>
                            <li className='font-normal text-[14px] leading-5 text-[#FF9330]'>03 May 2024</li>
                        </ul>
                        <h1 className='font-syne font-bold text-[24px] sm:text-[30px] md:text-[35px] lg:text-[44px] leading-[30px] md:leading-[44px] lg:leading-[54px] '>Exclusive E-commers Webpage  Desing</h1>
                    </div>
                    <div>
                        <div className='grid grid-cols-2 md:grid-cols-3 pb-6'>
                            <div>
                                <p className='font-normal text-[14px] leading-5 text-[#080808CC]'>Client</p>
                                <h4 className='font-bold text-[15px] leading-4 text-[#080808] pt-2'>Mashorom</h4>
                            </div>
                            <div>
                                <p className='font-normal text-[14px] leading-5 text-[#080808CC]'>Category</p>
                                <h4 className='font-bold text-[15px] leading-4 text-[#080808] pt-2'>Experience</h4>
                            </div>
                            <div>
                                <p className='font-normal text-[14px] leading-5 text-[#080808CC]'>Tools</p>
                                <h4 className='font-bold text-[15px] leading-4 text-[#080808] pt-2'>Figma</h4>
                            </div>
                        </div>
                        <div className='grid grid-cols-3'>
                            <div>
                                <p className='font-normal text-[14px] leading-5 text-[#080808CC]'>Start date</p>
                                <h4 className='font-bold text-[15px] leading-4 text-[#080808] pt-2'>09/01/2025</h4>
                            </div>
                            <div>
                            <p className='font-normal text-[14px] leading-5 text-[#080808CC]'>End date</p>
                            <h4 className='font-bold text-[15px] leading-4 text-[#080808] pt-2'>18/05/2025</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 mb-1  md:mb-12'>
                    <Image src={displayImg} className='rounded-2xl w-full'/>
                </div>
               </div>
            </div>
    </section>
  )
}

export default MyDesing