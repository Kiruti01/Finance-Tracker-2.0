"use client";
import { SignUp } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="bg-gradient-to-r from-[#f1f7f1] to-[#ebf4f8] pt-4 container">
      <div className="flex flex-col justify-center items-center pt-8 ">
        <div className="bg-gradient-to-r text-[20px] font-extrabold uppercase leading-[24.2px] tracking-widest md:text-[26px] md:leading-[30px] lg:leading-[36px] bg-clip-text mb-4 text-[#414141] lg:text-[32px]">
          TRACK SMART 2.0
        </div>
        <div className={`sm:text-[40px] text-[20px] font-bold text-[#414141]`}>
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-l  from-[#5A32A3] to-[#D03592]  mx-3">
            Sign Up
          </span>
          to continue
        </div>

        <div className="w-[90%] mt-4 mb-4 border md:w-[460px] rounded-2xl pt-8 pb-6 px-7.5 border-gray-400 bg-white">
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default page;
