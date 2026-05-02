"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function ImageSlider() {
    return (
        <Swiper
            modules={[Navigation, Autoplay]}
            navigation={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            loop={true}
            className=" w-[260px] lg:w-[880px] md:w-[500px] h-[150px]  md:h-[260px] lg:h-[480px] rounded-[18px]  z-0"
        >
            <SwiperSlide>
                <img src="https://i.ibb.co.com/mFHg0Fjp/2025-12-08-T14-25-01-527-Z-Course-Thumbnail-12.jpg" className="w-full rounded-[18px]" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://i.ibb.co.com/bj6C9bKq/2024-12-23-T06-09-02-920-Z-2-2.jpg" className="w-full rounded-[18px]" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://i.ibb.co.com/gMhg1DG1/2025-12-08-T14-27-28-969-Z-Flutter-Thumbnail.jpg" className=" w-full rounded-[18px]" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://i.ibb.co.com/Y4Lg7qFk/2025-12-08-T14-26-19-612-Z-ai-auto.jpg" className=" w-full rounded-[18px]" />
            </SwiperSlide>

        </Swiper>
    );
}