import React from "react";
import { PiShareNetwork } from "react-icons/pi";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { HiOutlineInformationCircle } from "react-icons/hi";

const SharePage = () => {
  return (
    <div className="mt-16">
{/*       <div className="mb-4 px-4 text-center text-[28px] font-extrabold leading-8 text-gray-900 dark:text-[#e7e5e5] md:text-[40px] md:leading-[48px]">
        Save / Share your{" "}
        <span className="bg-gradient-to-r bg-clip-text text-transparent from-[#E23A3A] to-[#E58A00]">
          Results
        </span>
      </div>
      <div className="mx-auto max-w-2xl px-4 text-center text-[16px] leading-6 text-gray-900 dark:text-[#e7e5e5] md:text-[20px] md:leading-8 ">
        Save or share your calculated results for informed financial decisions
      </div> */}

      <div className="flex justify-center mt-10">
        <div className="flex flex-wrap justify-center sm:justify-around lg:w-10/12 xl:w-11/12">
          <div className="relative border-2 z-10 flex transform-gpu cursor-pointer flex-col rounded-2xl bg-white p-4 shadow-lg gradient-border-2 lg:max-w-[325px] m-5 sm:w-[280px] lg:w-[300px] xl:w-[320px]">
{/*             <div className="h-[150px] w-full rounded object-cover flex justify-center items-center text-[#E23A3A]">
              <PiShareNetwork size={80} />
            </div>
            <div className="tracking-tight my-3 text-lg font-semibold leading-6 text-gray-800">
              Share Your Financial Success
            </div> */}
            <div className="blue-link mb-5 text-base font-normal leading-[22px] text-gray-500">
             Project Inspiration
TrackSmart was inspired by the shared vision of our team members to simplify personal finance tracking and empower individuals to make informed financial decisions. The idea originated from our own experiences of managing finances and the challenges we faced in finding a comprehensive tool that meets our needs. As a result, we envisioned creating a solution that not only tracks income and expenses but also provides intelligent insights to enhance financial well-being.

Timeline and Portfolio Project
The development of TrackSmart began as a passion project with a clear timeline in mind. It is worth noting that TrackSmart is also a Portfolio Project for Holberton School, representing our commitment to applying our skills in real-world projects.
            </div>
          </div>
{/*           <div className="relative border-2 z-10 flex transform-gpu cursor-pointer flex-col rounded-2xl bg-white p-4 shadow-lg gradient-border-2 lg:max-w-[325px] m-5 sm:w-[280px] lg:w-[300px] xl:w-[320px]">
            <div className="h-[150px] w-full rounded object-cover flex justify-center items-center text-[#e2d278]">
              <GiGiftOfKnowledge size={80} />
            </div>
            <div className="tracking-tight my-3 text-lg font-semibold leading-6 text-gray-800">
              Spread the Knowledge
            </div>
            <div className="blue-link mb-5 text-base font-normal leading-[22px] text-gray-500">
              Sharing your calculated results can inspire others to take control
              of their financial future. Educate and empower your network with
              the insights gained from our calculators.
            </div>
          </div>
          <div className="relative border-2 z-10 flex transform-gpu cursor-pointer flex-col rounded-2xl bg-white p-4 shadow-lg gradient-border-2 lg:max-w-[325px] m-5 sm:w-[280px] lg:w-[300px] xl:w-[320px]">
            <div className="h-[150px] w-full rounded object-cover flex justify-center items-center text-[#E58A00]">
              <HiOutlineInformationCircle size={80} />
            </div>
            <div className="tracking-tight my-3 text-lg font-semibold leading-6 text-gray-800">
              Stay Informed Together
            </div>
            <div className="mb-5 text-base font-normal leading-[22px] text-gray-500">
              By sharing your financial achievements, you join a community of
              informed investors. Together, we can navigate the complexities of
              finance.
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SharePage;
