import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Resume = () => {
  return (
    <section className="bg-[#0808080A] py-[100px]">
      <div className="container">
        <div>
          {/* Top Side  */}
          <div className=" pb-[140px] flex flex-col items-center justify-center ">
            <h4 className="text-[#FF9330] ml-0 lg:ml-2 text-5 font-bold leading-7 mb-[9px]">
              Resume
            </h4>
            <h2 className="text-[30px] md:text-[40px] lg:text-[64px] font-syne font-bold leading-[40px] lg:leading-[72px]">
              All over my details find here...
            </h2>
            <ul className="mr-40 mt-[18px] flex gap-4 items-center justify-center ">
              <li className="flex justify-between mb-2 py-5 px-6 rounded-2xl text-[16px] font-bold leading-[15px] hover:bg-black hover:text-white duration-75 items-center bg-white">
                About{" "}
                <span>
                  <MdArrowOutward />
                </span>
              </li>
              <li className="flex justify-between mb-2 py-5 px-6 rounded-2xl text-[16px] font-bold leading-[15px] hover:bg-black hover:text-white duration-75 items-center bg-white">
                Experience{" "}
                <span>
                  <MdArrowOutward />
                </span>
              </li>
              <li className="flex justify-between mb-2 py-5 px-6 rounded-2xl text-[16px] font-bold leading-[15px] hover:bg-black hover:text-white duration-75 items-center bg-white">
                Education{" "}
                <span>
                  <MdArrowOutward />
                </span>
              </li>
              <li className="flex justify-between mb-2 py-5 px-6 rounded-2xl text-[16px] font-bold leading-[15px] hover:bg-black hover:text-white duration-75 items-center bg-white">
                Skills{" "}
                <span>
                  <MdArrowOutward />
                </span>
              </li>
              <li className="flex justify-between mb-2 py-5 px-6 rounded-2xl text-[16px] font-bold leading-[15px] hover:bg-black hover:text-white duration-75 items-center bg-white">
                Awards{" "}
                <span>
                  <MdArrowOutward />
                </span>
              </li>
            </ul>
          </div>
          {/* Bottom Side  */}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
