import React from "react";
import { sofa2SeaterJson, sofa3SeaterJson, sofaLJson } from "../../dummy";

const ProductCarousel = () => {
  return (
    <div className="w-full flex justify-center items-center" id="produk-kami">
      <div className="w-full max-w-[1366px] py-6 px-8 lg:px-[90px] flex flex-col gap-6">
        <div className="flex flex-col gap-[10px] items-center">
          <h1 className="text-3xl font-bold">Produk kami</h1>
          <div className="rounded-full w-[75px] h-[7px] bg-[#0091C0]"></div>
        </div>
        <div className="">
          <div className="flex flex-col gap-[2px] max-w-fit">
            <h1 className="font-bold text-xl">{sofa2SeaterJson.name}</h1>
            <div className="w-full h-[4px] bg-[#0091C0]"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center gap-6">
          {sofa2SeaterJson.data.map((sofa, index) => (
            <div className="" key={index}>
              <ProductCard data={sofa} />
            </div>
          ))}
        </div>
        <div className="">
          <div className="flex flex-col gap-[2px] max-w-fit">
            <h1 className="font-bold text-xl">{sofa3SeaterJson.name}</h1>
            <div className="w-full h-[4px] bg-[#0091C0]"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center gap-6">
          {sofa3SeaterJson.data.map((sofa, index) => (
            <div className="" key={index}>
              <ProductCard data={sofa} />
            </div>
          ))}
        </div>

        <div className="">
          <div className="flex flex-col gap-[2px] max-w-fit">
            <h1 className="font-bold text-xl">{sofaLJson.name}</h1>
            <div className="w-full h-[4px] bg-[#0091C0]"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center gap-6">
          {sofaLJson.data.map((sofa, index) => (
            <div className="" key={index}>
              <ProductCard data={sofa} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface ProductCardProsp {
  data: {
    name: string;
    category: string;
    price: number;
    photo: string;
  };
}

const ProductCard = (props: ProductCardProsp) => {
  const { data } = props;

  const formatCurrency = (price: number): string => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    });

    return formatter.format(price);
  };

  return (
    <div className="py-[87px] rounded-lg bg-[#fff] hover:bg-[#fff] shadow-sm border px-[32px] flex justify-center items-center relative group overflow-hidden cursor-pointer h-80">
      <div className="flex-1 flex justify-center items-center">
        <img src={data.photo} alt="" width={215} height={175} className="flex-1"/>
      </div>
      <div className="absolute -bottom-full left-[8px] right-[8px] bg-[#dfdfdf] rounded-lg flex-col items-center p-4 gap-[10px] group-hover:bottom-[8px] transition-all duration-300">
        <div className="w-full font-bold text-[#AFAFAF] text-xs">
          {data.category}
        </div>
        <div className="w-full font-bold text-base">{data.name}</div>
        <div className="w-full font-bold text-[#007913] text-lg">
          {formatCurrency(data.price)}
        </div>
        <button className="py-[4px] rounded-lg bg-[#0091C0] w-full font-bold mt-2 text-white">
          Beli
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
