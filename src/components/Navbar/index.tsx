import React from "react";
import { TropicalLogo } from "../../assets";

const Navbar = () => {
  return (
    <div className="w-full flex py-6 px-[90px] justify-between items-center">
        <div className="cursor-pointer">
        <img src={TropicalLogo} alt="" className="w-[145px] h-[52]" />
        </div>
        <div className="flex items-center gap-10 justify-end">
            <div className="text-[#666666] font-bold hover:text-[#EBC386] cursor-pointer">
                Penjualan
            </div>
            <div className="text-[#666666] font-bold hover:text-[#EBC386] cursor-pointer">
                Produk
            </div>
            <div className="text-[#666666] font-bold hover:text-[#EBC386] cursor-pointer">
                Apa itu Tropical
            </div>
            <div className="text-[#666666] font-bold hover:text-[#EBC386] cursor-pointer">
                Hubungi CS
            </div>
        </div>
    </div>
  );
};

export default Navbar;
