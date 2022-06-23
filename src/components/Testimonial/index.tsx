import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../assets/css/testimonial.css";

const Testimonial = () => {
  return (
    <div className="w-full flex justify-center items-center pt-6 pb-12">
      <div className="max-w-[1366px] lg:px-[90px] px-8 w-full flex flex-col gap-6">
        <div className="flex flex-col gap-[10px] flex-start">
          <h1 className="text-3xl font-bold">Testimoni</h1>
          <div className="rounded-full w-[75px] h-[7px] bg-[#0091C0]"></div>
        </div>
        <div className="w-full">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="swiper-testimonial"
            breakpoints={{
              768 : {
                slidesPerView : 2
              },
              1024 : {
                slidesPerView : 3
              },
              1200 : {
                slidesPerView : 4
              },
            }}
          >
            <SwiperSlide className="swiper-slide-testimonial p-6 flex flex-col gap-6 text-xs">
              <div className="flex flex-col w-full text-left gap-1">
                <h1 className="font-bold">Felix</h1>
                <h1 className="font-bold text-[#696969]">Pegawai</h1>
              </div>
              <p className="text-left text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-testimonial p-6 flex flex-col gap-6 text-xs">
              <div className="flex flex-col w-full text-left gap-1">
                <h1 className="font-bold">Felix</h1>
                <h1 className="font-bold text-[#696969]">Pegawai</h1>
              </div>
              <p className="text-left text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-testimonial p-6 flex flex-col gap-6 text-xs">
              <div className="flex flex-col w-full text-left gap-1">
                <h1 className="font-bold">Felix</h1>
                <h1 className="font-bold text-[#696969]">Pegawai</h1>
              </div>
              <p className="text-left text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-testimonial p-6 flex flex-col gap-6 text-xs">
              <div className="flex flex-col w-full text-left gap-1">
                <h1 className="font-bold">Felix</h1>
                <h1 className="font-bold text-[#696969]">Pegawai</h1>
              </div>
              <p className="text-left text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-testimonial p-6 flex flex-col gap-6 text-xs">
              <div className="flex flex-col w-full text-left gap-1">
                <h1 className="font-bold">Felix</h1>
                <h1 className="font-bold text-[#696969]">Pegawai</h1>
              </div>
              <p className="text-left text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-testimonial p-6 flex flex-col gap-6 text-xs">
              <div className="flex flex-col w-full text-left gap-1">
                <h1 className="font-bold">Felix</h1>
                <h1 className="font-bold text-[#696969]">Pegawai</h1>
              </div>
              <p className="text-left text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
