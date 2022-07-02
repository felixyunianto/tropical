import React, { createRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "../../assets/css/gallery.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

SwiperCore.use([Autoplay]);

const Gallery = () => {
  const navigationPref = createRef<HTMLButtonElement>();
  const navigationNext = createRef<HTMLButtonElement>();

  return (
    <div className="w-full flex items-center justify-center py-6 pb-10">
      <div className="w-full flex flex-col justify-center items-center max-w-[1366px] xl:px-[90px] px-0 gap-6">
        <div className="flex flex-col gap-[10px] items-center">
          <h1 className="text-lg md:text-xl lg:text-3xl font-bold">Galeri kami</h1>
          <div className="rounded-full w-[75px] h-[7px] bg-[#0091C0]"></div>
        </div>
        <div className="w-full flex items-center gap-[18px]">
          {/* lorem100 */}
          <div className="w-1/12  justify-end hidden md:flex">
            <button
              className="flex justify-center items-center cursor-pointer w-6 h-6 rounded-full bg-[#FBEDDA]"
              ref={navigationPref}
            >
              <FiChevronLeft />
            </button>
          </div>
          <Swiper
            slidesPerView={1}
            // cssMode={false}
            initialSlide={0}
            spaceBetween={0}
            centeredSlides={true}
            loopAdditionalSlides={10}
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
              waitForTransition: true,
            }}
            navigation={{
              nextEl: navigationNext.current,
              prevEl: navigationPref.current,
            }}
            onBeforeInit={(swiper: any) => {
              swiper.params.navigation.prevEl = navigationPref.current;
              swiper.params.navigation.nextEl = navigationNext.current;
            }}
            modules={[Navigation, Autoplay]}
            className="swiper-gallery"
            breakpoints={{
              768: {
                slidesPerView: 1,
                autoplay: {
                  delay: 2500,
                  disableOnInteraction: true,
                  waitForTransition: true,
                },
              },
              1024: {
                slidesPerView: 2,
                autoplay: {
                  delay: 2500,
                  disableOnInteraction: true,
                  waitForTransition: true,
                },
              },
            }}
          >
            <SwiperSlide className="swiper-slide-gallery">Slide 1</SwiperSlide>
            <SwiperSlide className="swiper-slide-gallery">Slide 2</SwiperSlide>
            <SwiperSlide className="swiper-slide-gallery">Slide 3</SwiperSlide>
            <SwiperSlide className="swiper-slide-gallery">Slide 4</SwiperSlide>
          </Swiper>
          <div className="w-1/12 hidden md:block">
            <button
              className="flex justify-center items-center cursor-pointer w-6 h-6 rounded-full bg-[#FBEDDA]"
              ref={navigationNext}
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
