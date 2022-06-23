import React from "react";
import { HeroImage } from "../../assets";

const Consultation = () => {
  return (
    <div className="w-full py-[46px] flex justify-center items-center px-7 lg:px-[90px]">
      <div className="w-full max-w-[1366px] lg:px-[90px] flex justify-center items-center ">
        <div
          className="w-full rounded-lg relative p-10 overflow-hidden h-[400px] bg-white"
          style={{ boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)" }}
        >
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold">Konsultasi dengan kami</h1>

            <div className="w-full flex flex-col gap-6 z-[2]">
              <div className="rounded-lg text-xs text-white bg-[#FF6A61] px-[21px] py-[14px] uppercase font-bold w-fit">
                Tanya Bahan & Jenis Sofa
              </div>
              <div className="rounded-lg text-xs text-white bg-[#FF6A61] px-[21px] py-[14px] uppercase font-bold w-fit">
                Kategori Produk ISIRUMAH
              </div>
              <div className="rounded-lg text-xs text-white bg-[#FF6A61] px-[21px] py-[14px] uppercase font-bold w-fit">
                Bisa Custom Produk?
              </div>
              <div className="rounded-lg text-xs text-white bg-[#FF6A61] px-[21px] py-[14px] uppercase font-bold w-fit">
                Harga & Ongkir
              </div>
            </div>
          </div>
          <div className="absolute rounded-full w-[268px] h-[268px]  md:w-[368px] md:h-[368px] bg-[#0091C0] -bottom-1/4 -right-24 flex justify-center items-center">
            <img src={HeroImage} alt="" width="295" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
