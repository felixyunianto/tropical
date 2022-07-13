import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../assets/css/testimonial.css";
import { testiDataJSON } from "../../dummy";

const Testimonial = () => {
  return (
    <div className="w-full flex justify-center items-center pt-6 pb-12">
      <div className="max-w-[1366px] lg:px-[90px] px-8 w-full flex flex-col gap-6">
        <div className="flex flex-col gap-[10px] flex-start">
          <h1 className="text-lg md:text-xl lg:text-3xl font-bold">
            Testimoni
          </h1>
          <div className="rounded-full w-[75px] h-[7px] bg-[#EBC386]"></div>
        </div>
        <div className="w-full">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
            className="swiper-testimonial"
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
          >
            {testiDataJSON.map((testi, index) => (
              <SwiperSlide className="swiper-slide-testimonial" key={index}>
                <img src={testi.url} alt="" className="w-full h-96" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
