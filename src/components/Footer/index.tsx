import React from "react";

const Footer = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-[10px] bg-[#BC916B] py-[60px]">
      <div className="py-[10px] pl-[117px] flex flex-col gap-4">
        <div className="text-2xl font-bold">TROPICAL FURNITURE</div>
        <div className="text-sm">
          Furniture Custom HPL / Duco, Sofa & Design Interior
        </div>
        <div className="text-sm font-bold">Ada Kendala ?</div>
        <div className="">
          <button className="rounded-lg bg-[#EBC386] px-4 py-1.5 font-bold text-[12px]">
            Hubungi CS Kami
          </button>
        </div>
      </div>
      <div className="py-[10px] grid grid-cols-2 gap-[10px]">
        <div className="flex flex-col gap-[10px] px-[10px]">
          <div className="text-[18px] font-bold">Alamat Kami</div>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex flex-col gap-[10px] px-[10px]">
          <div className="text-[18px] font-bold">Sosial Media</div>
          <p className="text-justify">
            Instagram
          </p>
          <p className="text-justify">
            Facebook
          </p>
          <p className="text-justify">
            Email
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
