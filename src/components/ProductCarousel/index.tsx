import React, { createRef } from "react";
import { ArrowNextIcon, ArrowPrevIcon, ProductImage } from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const ProductCarousel = () => {
  const navigationPref = createRef<HTMLButtonElement>();
  const navigationNext = createRef<HTMLButtonElement>();

  return (
    <div className="w-full flex flex-col items-center px-6 py-4 bg-[#F6F6F6]">
      <div className="flex w-full items-center justify-between gap-[18px]">
        <div className="w-1/12 flex justify-end">
          <button className="cursor-pointer" ref={navigationPref}>
            <img src={ArrowPrevIcon} alt="" className="arrow-prev" />
          </button>
        </div>
        <div className="flex-1 w-10/12">
          <Swiper
            spaceBetween={18}
            slidesPerView={4}
            navigation={{
              nextEl: navigationNext.current,
              prevEl: navigationPref.current,
            }}
            onBeforeInit={(swiper: any) => {
              swiper.params.navigation.prevEl = navigationPref.current;
              swiper.params.navigation.nextEl = navigationNext.current;
            }}
            modules={[Navigation]}
          >
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-1/12">
          <button className="cursor-pointer" ref={navigationNext}>
            <img src={ArrowNextIcon} alt="" className="arrow-next" />
          </button>
        </div>
      </div>
      <div className="w-full flex items-center justify-center pt-4">
          <button className="rounded-full text-white bg-[#EBC386] py-2 px-6 hover:bg-[#c3a26f]">
              Lihat Semua Produk
          </button>
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
    <div className="flex flex-col rounded-lg bg-white gap-2">
      <div className="w-full h-[257px] rounded-t-lg">
        <img
          src={ProductImage}
          alt=""
          height={257}
          className="object-fill h-[257px] w-full rounded-t-lg"
        />
      </div>
      <div className="flex flex-col items-center pb-4 gap-[10px]">
        <div className="">Sofa Retro 1</div>
        <div className="font-bold">Rp. 1.000.000</div>
        <div className="">
          <button className="text-white rounded-full px-12 py-1 bg-[#BC916B] font-bold hover:bg-[#85664b]">
            Beli
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
