import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center bg-[#F6F6F6]">
      <div className="w-full md:grid md:grid-cols-2 gap-[10px] bg-[#F6F6F6] py-[60px] max-w-[1366px]">
        <div className="py-[10px] px-8 md:pl-[90px] flex flex-col gap-4">
          <div className="text-2xl font-bold">Isi Rumah</div>
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
        <div className="py-[10px] md:grid md:grid-cols-2 gap-[10px] px-8">
          <div className="flex flex-col gap-[10px] md:px-[10px] mt-4 md:mt-0">
            <div className="text-[18px] font-bold">Alamat Kami</div>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex flex-col gap-[10px] md:px-[10px] mt-6 md:mt-0">
            <div className="text-[18px] font-bold">Sosial Media</div>
            <p className="text-justify">Instagram</p>
            <p className="text-justify">Facebook</p>
            <p className="text-justify">Email</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
