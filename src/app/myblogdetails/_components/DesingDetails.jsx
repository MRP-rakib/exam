import Image from 'next/image'
import React from 'react'
import post_3 from "@/app/myblogdetails/images/post3.png"
import post_4 from "@/app/myblogdetails/images/post4.png"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import Work from '@/app/blogdetails/_components/Work';


const DesingDetails = () => {
  return (
    <section className=' mt-[130px] pt-[130px] md:mt-[280px] md:pt-[280px]'>
            <div className="container">
                <div className=''>
                
                    <div className="mt-12">
                        <h1 className='font-syne font-bold text-[20px] md:text-[24px] lg:text-[32px] leading-10 '>About the position</h1>
                        <p className='font-normal text-[18px] leading-7 text-[#08080899] pb-4'>Everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more capable. Podcasting operational — change management inside of workflows. Completely synergize</p>
                        <p className='text-[#08080899] font-normal leading-7 py-4'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself</p>
                        <p className='text-[#08080899] font-normal leading-7'>
                        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p>
                       
                        <div className='grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 items-center justify-center py-12'>
                            <div>
                                <Image src={post_3} className=' mx-auto w-[600px]'/>
                            </div>
                            <div>
                            <Image src={post_4} className='mx-auto w-[600px]'/>
                            </div>
                        </div>
                        <h2 className='pt-12 pb-4 font-syne font-bold text-[20px] md:text-[24px] lg:text-[32px] leading-[24px] md:leading-[40px]'> Learning the basics</h2>
                        <p className='text-[#08080899] font-normal text-[18px] leading-7 pb-12'>Everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more capable. Podcasting operational — change management inside of workflows. Completely synergize.</p>
                        <p className='text-[#08080899] font-normal text-[18px] leading-7 pb-12'>
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself</p>
                        <h2 className=' pt-12 pb-4 font-syne font-bold text-[20px] md:text-[24px] lg:text-[32px] leading-10 '>Learning the basics</h2>
                       
                            <p className='font-normal text-[18px] leading-7 text-[#08080899]'>Everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more capable. Podcasting operational — change management inside of workflows. Completely synergize.</p>
                            <p className='font-normal text-[18px] leading-7 text-[#08080899] pt-4'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself</p>
                       <div className='flex justify-between pt-12'>
                        <div className='flex items-center'>
                        <p className='pr-6'>Share:</p>
                        <div className='flex gap-6'>
                            <FaFacebookF/>
                            <FaTwitter/>
                            <IoLogoWhatsapp/>
                            <FaLinkedinIn/>
                            <CiLink/>
                            <FaRegHeart/>
                        </div>
                        </div>
                        <div >
                            <button className='py- px-4 border-[1px] border-[#08080866] rounded-full mr-2'>Web</button>
                            <button className='py- px-4 border-[1px] border-[#08080866] rounded-full'>Development</button>
                        </div>
                       </div>
                    </div>
                </div>
                <Work/>
            </div>
        </section>
  )
}

export default DesingDetails