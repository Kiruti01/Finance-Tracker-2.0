"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
// import WavyText from "../landingPageTools/WavyText";

const HomePage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center bg-clip-text gap-4 ">
      <div className="mt-16 bg-gradient-to-r sm:text-[24px] text-[30px] font-extrabold uppercase leading-[24.2px] tracking-widest md:text-[26px] md:leading-[30px] lg:leading-[36px] bg-clip-text text-transparent from-[#3DBFF5] to-[#6F42C1] lg:text-[32px]">
        Track Smart 2.0
      </div>
      {/* <h1 className="text-gray-900 dark:text-[#a9a9a9] text-[28px] font-extrabold leading-[34px] tracking-tight md:text-[40px] md:leading-[48px] lg:text-5xl lg:leading-[55px] w-full max-w-[740px] !whitespace-pre-line text-center mt-8"> */}
      {/* <div className="flex items-center justify-center">
          Maximizing
          <span className="bg-gradient-to-r bg-clip-text text-transparent ml-2 from-[#8A63D2] to-[#E23A3A]">
            <WavyText text="Returns," replay={true} />
          </span>
        </div>
        <div className="flex items-center justify-center">
          Minimizing
          <span className="bg-gradient-to-r bg-clip-text text-transparent ml-2 from-[#8A63D2] to-[#E23A3A] ">
            <WavyText text="Efforts" replay={true} />
          </span>
        </div> */}
      {/* </h1> */}

      <div className="text-gray-800 dark:text-[#d1d1d1] max-w-[740px] text-[16px] leading-[22px] md:text-[19px] md:leading-[26px] lg:text-[24px] lg:leading-[36px] md:font-medium text-center mt-4 px-8">
        Empowering Your Financial Journey with Seamless Tracking and Intelligent
        Insights.
      </div>

      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="mt-24 px-8"
      >
        <Image
          src={"/homePage.png"}
          height={680}
          width={525}
          alt="homePage.png"
        />
      </motion.div>

      <div className="w-full bg-blue-700  sm:h-[120px] h-fit py-4 flex items-center justify-around sm:flex-row flex-col">
        <div
          className="text-white text-[25px] font-bold py-2 cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          Assets
        </div>
        <div
          className="text-white text-[25px] font-bold py-2 cursor-pointer"
          onClick={() => {
            router.push("/manager");
          }}
        >
          Investments
        </div>
        <div
          className="text-white text-[25px] font-bold italic py-2 cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          Currencies
        </div>
        <div
          className="text-white text-[25px] font-bold py-2 cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          Crypto
        </div>
      </div>
    </div>
  );
};

export default HomePage;
