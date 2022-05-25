import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import { CarouselOne, CarouselThree, CarouselTwo } from "../../assets";
SwiperCore.use([Autoplay]);

const Hero = () => {
  return (
    <div className="w-full flex gap-4 bg-gradient-to-r from-[#FEF9F6] to-transparent pl-[90px] h-[400px] justify-between">
      <div className="w-3/12 flex flex-col gap-[10px] py-32">
        <p className="text-5xl font-hero">
          Future <br /> of Furniture
        </p>
        <div className="font-hero">
          Find an elegant and luxurious interior designed by a professional
          interrior designer.
        </div>
      </div>
      <div className="w-7/12 h-full">
        <Swiper
          spaceBetween={30}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          navigation={false}
        >
          <SwiperSlide className="" style={{width: '80%'}}>
            <div className={`h-[400px] w-full transition-all delay-200 ease-in`}>
              <img
                src={CarouselOne}
                alt=""
                className="object-cover h-full w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="" style={{width: '80%'}}>
            <div className={`h-[400px] w-full transition-all delay-200 ease-in`}>
              <img
                src={CarouselTwo}
                alt=""
                className="object-cover h-full w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="" style={{width: '80%'}}>
            <div className={`h-[400px] w-full transition-all delay-200 ease-in`}>
              <img
                src={CarouselThree}
                alt=""
                className="object-cover h-full w-full"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
