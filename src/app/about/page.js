import React from 'react'
import Image from 'next/image';
import { MdArrowOutward } from "react-icons/md";
import logo from "@/Assets/logo.png";
import { HiMenuAlt4 } from 'react-icons/hi';
import about from "@/app/about/images/about2.png"
import ClientFeed from '@/components/ClientFeed';
import CompanyLogo from '@/components/CompanyLogo';

const About = () => {
  return (
    <>
    <div className='py-10 bg-white'></div>
    
         <section className='bg-[#FFE9D9] pt-[80px] pb-[120px]'>
           <div className='container'>
                <div>
                    <Image src={about}/>
                </div>
                <div>

                </div>
           </div>
         </section>
         <section></section>
         <section></section>
         <section></section>
         <section>
            <ClientFeed/>
         </section>
         <section>
            <CompanyLogo/>
         </section>
    </>
  )
}

export default About 