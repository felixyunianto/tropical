import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { productDataJSON } from "../../dummy";

const ProductCarousel = () => {
  const [tab, setTab] = useState(0);
  const [popDesc, setPopDesc] = useState(false);
  const [desc, setDesc] = useState("");

  const closeDesc = () => {
    setPopDesc(false);
    setDesc("");
    document.querySelector("body")!.style.overflow = "auto";
  };


  return (
    <>
      <div
        className="w-full flex justify-center items-center relative"
        id="produk-kami"
      >
        {popDesc && (
          <div className="fixed w-full h-screen z-50 top-0 left-0 flex justify-center items-center bg-black/20">
            <div className="bg-white rounded w-[90%] h-[80%] md:w-[70%] lg:w-[60%] lg:h-fit overflow-y-scroll text-sm shadow p-6 relative">
              <div
                className="absolute top-[10px] right-[10px] cursor-pointer"
                onClick={() => closeDesc()}
              >
                <FiX size={20} />
              </div>
              <div className="" dangerouslySetInnerHTML={{__html : desc}}></div>
            </div>
          </div>
        )}
        <div className="w-full max-w-[1366px] py-6 px-8 lg:px-[90px] flex flex-col gap-6">
          <div className="flex flex-col gap-[10px] items-center">
            <h1 className="text-lg md:text-xl lg:text-3xl font-bold">
              Produk kami
            </h1>
            <div className="rounded-full w-[75px] h-[7px] bg-[#EBC386]"></div>
          </div>
          <div className="w-full flex flex-col gap-1">
            <ul className="flex overflow-y-auto text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 scrollbar-hide">
              {productDataJSON.map((item, index) => (
                <li
                  key={index}
                  className="mr-2 cursor-pointer"
                  onClick={() => setTab(index)}
                >
                  <span
                    aria-current="page"
                    className={`inline-block text-xs md:text-sm lg:text-base rounded-t-lg p-4 ${
                      tab === index
                        ? "text-black bg-gray-100  active"
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
                <div
                  key={index}
                  className={`${
                    tab === index ? "grid" : "hidden"
                  } grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center gap-6`}
                >
                  {item.data.map((sofa, index) => (
                    <div className="" key={index}>
                      <ProductCard
                        data={sofa}
                        type={item.title}
                        setDesc={(description: string) => {
                          setDesc(description);
                        }}
                        setPopDesc={(value: boolean) => setPopDesc(value)}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

interface ProductCardProsp {
  data: {
    name?: string;
    category?: string;
    price?: number;
    photo?: string;
    description?: string | null;
  };
  type : string;
  setDesc: any;
  setPopDesc: any;
}

const ProductCard = (props: ProductCardProsp) => {
  const { data, type, setDesc, setPopDesc } = props;

  const formatCurrency = (price: number): string => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    });

    return formatter.format(price);
  };

  const shoDesc = (value: string) => {
    setDesc(value);
    setPopDesc(true);
    document.querySelector("body")!.style.overflow = "hidden";
  };

  const chatProduct = (type : string, product_name : string) => {
    let url = `https://web.whatsapp.com/send?phone=6281334091665`;

    let message = `TANYA PRODUK - Hai admin aku mau tanya dong  produk ${type} apakah produk ${product_name} masih ada stoknya di tropical furniture?`;

    url += `&text=${encodeURI(message)}&app_absent=0`;
    window.open(url);
  }

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
      <div className="absolute -bottom-full left-[8px] right-[8px] bg-[#f0f0f0] rounded-lg flex-col items-center p-4 gap-[10px] group-hover:bottom-[8px] transition-all duration-300">
        <div className="w-full font-bold text-[#AFAFAF] text-xs">
          {data.category}
        </div>
        <div className="w-full font-bold text-base">{data.name}</div>
        <div className="w-full font-bold text-[#007913] text-lg">
          {data.price ? formatCurrency(data.price) : 0}
        </div>
        <div className="w-full text-base">2 x 3 x 5 (meter)</div>
        <button className="py-[4px] rounded-lg bg-[#EBC386] w-full font-bold mt-2 text-black"
        onClick={() => {
          chatProduct(type, data.name!)
        }}>
          Beli
        </button>
        <button
          className="py-[4px] rounded-lg bg-[#EBC386] w-full font-bold mt-2 text-black"
          onClick={() => {
            data.description ? shoDesc(
              data.description
            ) : shoDesc(
              "Deskripsi belum ada"
            )
          }}
        >
          Lihat deskripsi
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
