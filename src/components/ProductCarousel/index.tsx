import React from "react";
import { HeroImage } from "../../assets";

const ProductCarousel = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-[1366px] py-6 px-[90px] flex flex-col gap-6">
        <div className="flex flex-col gap-[10px] items-center">
          <h1 className="text-3xl font-bold">Produk kami</h1>
          <div className="rounded-full w-[75px] h-[7px] bg-[#0091C0]"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

interface ProductCardProsp {
  img?: string;
  name?: string;
  price?: string;
}

const ProductCard = (props: ProductCardProsp) => {
  return (
    <div className="py-[87px] rounded-lg bg-[#FBEDDA] hover:bg-[#dacebc] px-[32px] flex justify-center items-center relative group overflow-hidden cursor-pointer">
      <img src={HeroImage} alt=""  width={215} height={175}/>
      <div className="absolute -bottom-full left-[8px] right-[8px] bg-white rounded-lg flex-col items-center p-4 gap-[10px] group-hover:bottom-[8px] transition-all duration-300">
        <div className="w-full font-bold text-[#AFAFAF] text-xs">
          Chair
        </div>
        <div className="w-full font-bold text-base">
          Sofa
        </div>
        <div className="w-full font-bold text-[#007913] text-lg">
          Rp. 1000.0000
        </div>
        <button className="py-[2px] rounded-lg bg-[#FBEDDA] w-full font-bold">
          Beli
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
