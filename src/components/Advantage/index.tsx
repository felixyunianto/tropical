import React from "react";
import { LogIcon, PackageIcon, TruckIcon } from "../../assets";

const Advantage = () => {
  return (
    <div className="w-full py-[10px] px-[55px] grid grid-cols-3 gap-[10px] justify-between">
      <div className="flex items-center gap-6 py-[55px] px-4">
        <div className="">
          <img src={TruckIcon} alt="" className="w-16 h-16" />
        </div>
        <div className="flex flex-col gap-[10px] text-[12px]">
          <h1 className="font-bold">Fast & Free Shipping</h1>
          <div className="w-8/12">
            <p className="break-words text-justify">
              Every single order ships for free. No minimums, no tiers, no fine
              print whatsoever
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6 py-[55px] px-4">
        <div className="">
          <img src={PackageIcon} alt="" className="w-16 h-16" />
        </div>
        <div className="flex flex-col gap-[10px] text-[12px]">
          <h1 className="font-bold">Modular, easy-to-move-design</h1>
          <div className="w-8/12">
            <p className="break-words text-justify">
              Our innovative modular design is drive by the belief that
              furniture should fit this home.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6 py-[55px] px-4">
        <div className="">
          <img src={LogIcon} alt="" className="w-16 h-16" />
        </div>
        <div className="flex flex-col gap-[10px] text-[12px]">
          <h1 className="font-bold">Durable, premium materialst</h1>
          <div className="w-8/12">
            <p className="break-words text-justify">
              We use material like sustainably, forested wood, strengthened
              steel hardware, and top-grain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
