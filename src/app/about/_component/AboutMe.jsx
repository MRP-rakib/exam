import Image from "next/image";
import React from "react";
import aboutme from "@/app/about/image/about_2.png";
import signature from "@/app/about/image/markherny.png"

const AboutMe = () => {
  return (
    <section className="mt-[80px]  pt-[80px] pb-[120px] bg-[#FFE9D9] w-full">
      <div className=" container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* left side  */}
          <div>
            <Image src={aboutme} alt="img" />
          </div>
          {/* Right Side  */}
          <div>
            <h4 className="font-bold font-syne text-[#FFB646] pb-[10px]">About me</h4>
            <h2 className="font-bold font-syne text-[40px] md:text-[50px] lg:text-[64px] leading-[50px] md:leading-[60px] lg:leading-[72px]">Mark Henry</h2>
            <h3 className="font-bold font-syne text-[24px] leading-[32px] pt-2">Product Designer</h3>
            <p className="font-syne font-bold text-[20px] leading-[28px] pt-6 pb-[30px]">
              A Product Designer & Developer and I am in the game for over 7+
              years. I am proud of my works and ready to face the next challenge
            </p>
            <p className="text-[#08080899] font-normal text-[18px] leading-7 pb-12">
              That is where I come in. A lover of words, a wrangler of copy.
              Here to create copy that not only reflects who you are and what
              you stand for, but words that truly land with those that read
              them, calling your audience in and making them .
            </p>
            <Image src={signature} alt="signature"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
