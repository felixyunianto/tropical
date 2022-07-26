import React from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Link } from "react-scroll";

import { HeroImage } from "../../assets";
SwiperCore.use([Autoplay]);

const Hero = () => {
  const chatToWhatsApp = () => {
    let url = `https://api.whatsapp.com/send?phone=6281334091665`;

    let message = `Halo min, \nSaya pengin konsultasi nih`;

    url += `&text=${encodeURI(message)}&app_absent=0`;
    window.open(url);
  };

  return (
    <div className="w-full flex justify-center items-center mt-[100px] bg-gradient-to-r from-[#FEF9F6] to-white">
      <div className="w-full flex items-center lg:px-[90px] max-w-[1366px]">
        <div className="flex-auto px-8 md:pr-[90px] py-[64px] flex flex-col items-center md:items-start md:justify-between gap-[44px] w-[709px]">
          <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
            <div className="justify-center items-center flex md:hidden">
              <img src={HeroImage} alt="" width="384" />
            </div>
            <h1 className="font-bold text-3xl md:text-5xl">
              Tempat jual beli produk furniture anda
            </h1>
            <p className="font-normal text-[16px]">
              Kami berdiri untuk keindahan & gaya di rumah Anda. Kami memiliki
              pilihan furnitur yang mengesankan yang menjadi favorit anda dan
              pasti anda sukai.
            </p>
            <div className="flex gap-[10px] flex-row items-center md:items-center">
              <button
                className="rounded-lg px-6 py-4 bg-[#FF6A61] uppercase text-[12px] md:text-[16px] font-bold text-white"
                onClick={() => chatToWhatsApp()}
              >
                KONSULTASI GRATIS
              </button>

              <Link
                to={"#produk"}
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
                className="cursor-pointer rounded-lg px-6 py-4 bg-[#EBC386] uppercase text-[12px] md:text-[16px] font-bold text-black"
              >
                CEK KATALOG
              </Link>
            </div>
          </div>
          <div className="flex flex-row md:flex-start md:items-center gap-[32px]">
            <div className="flex flex-col text-white font-bold">
              <h1 className="text-[24px]">1.534</h1>
              <span>Total produk</span>
            </div>
            <div className="flex flex-col text-white font-bold">
              <h1 className="text-[24px]">12.000+</h1>
              <span>Total pelanggan</span>
            </div>
          </div>
        </div>
        <div className="w-[657px] justify-center items-center hidden md:flex">
          <img src={HeroImage} alt="" width="384" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
