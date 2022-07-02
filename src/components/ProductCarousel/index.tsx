import React, { useState } from "react";
import { productDataJSON } from "../../dummy";

const ProductCarousel = () => {
  const [tab, setTab] = useState(0);

  return (
    <div className="w-full flex justify-center items-center" id="produk-kami">
      <div className="w-full max-w-[1366px] py-6 px-8 lg:px-[90px] flex flex-col gap-6">
        <div className="flex flex-col gap-[10px] items-center">
          <h1 className="text-lg md:text-xl lg:text-3xl font-bold">Produk kami</h1>
          <div className="rounded-full w-[75px] h-[7px] bg-[#0091C0]"></div>
        </div>
        <div className="w-full flex flex-col gap-1">
          <ul className="flex overflow-y-auto text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 scrollbar-hide">
            {productDataJSON.map((item, index) => (
              <li key={index} className="mr-2 cursor-pointer" onClick={() => setTab(index)}>
                <span
                  aria-current="page"
                  className={`inline-block text-xs md:text-sm lg:text-base rounded-t-lg p-4 ${
                    tab === index
                      ? "text-blue-600 bg-gray-100  active"
                      : "hover:text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {item.title}
                </span>
              </li>
            ))}
          </ul>

          <div className="w-full pt-4">
            {productDataJSON.map((item, index) => (
              <div key={index} className={`${tab === index ? "grid" : "hidden"} grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center gap-6`}>
                {item.data.map((sofa, index) => (
                  <div className="" key={index}>
                    <ProductCard data={sofa} />
                  </div>
                ))}
              </div>
            ))}
          </div>
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
        <img
          src={data.photo}
          alt=""
          width={215}
          height={175}
          className="flex-1"
        />
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
