import React from "react";
import { AboutImage, SquareImages } from "../../assets";

const About = () => {
  return (
    <div className="w-full flex items-center justify-center relative">
      <div className="w-full flex justify-center items-center max-w-[1366px] md:px-[90px] px-8">
        <div className="flex flex-1 w-full md:my-[73px] p-4 md:p-0 rounded-lg text-center md:text-left h-full gap-[48px] bg-[#F6F6F6] md:bg-transparent">
          <img
            src={AboutImage}
            alt=""
            className="hidden lg:block md:w-[362px] md:h-[250px] lg:w-[468px] lg:h-[356px] transition-all duration-500"
          />
          <div className="flex-1 flex flex-col h-full gap-[10px] relative">
            <img
              src={SquareImages}
              alt=""
              className="absolute -top-3 -left-[18px] hidden md:block"
              width={82}
              height={82}
            />
            <div className="flex flex-col h-full gap-[10px] flex-1 z-[1]">
              <h1 className="uppercase font-bold text-xs md:text-sm lg:text-base">Tentang</h1>
              <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl">Isi Rumah</h1>
              <h1 className="font-bold text-xs md:text-sm lg:text-base">Furniture Masa Depan</h1>
              <p className="mt-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:absolute lg:h-[454px] right-0 bg-[#F6F6F6] md:w-[95%] lg:w-[70%] md:top-6 md:bottom-6 rounded-l-xl -z-20"></div>
      </div>
    </div>
  );
};

export default About;
