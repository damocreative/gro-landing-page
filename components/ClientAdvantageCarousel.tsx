"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const images = [
  "https://tasc-business-setup-in-saudi-arabia.netlify.app/assets/img/advantage-img-01.webp",
  "https://tasc-business-setup-in-saudi-arabia.netlify.app/assets/img/advantage-img-02.webp",
  "https://tasc-business-setup-in-saudi-arabia.netlify.app/assets/img/advantage-img-03.webp",
  "https://tasc-business-setup-in-saudi-arabia.netlify.app/assets/img/advantage-img-04.webp",
  "https://tasc-business-setup-in-saudi-arabia.netlify.app/assets/img/advantage-img-05.webp",
];

export default function ClientAdvantageCarousel() {
  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop
      modules={[Pagination, Autoplay]}
      className="advantage-carousel"
    >
      {images.map((src, idx) => (
        <SwiperSlide key={idx}>
          <img
            src={src}
            alt={`TASC Advantage ${idx + 1}`}
            className="w-full h-80 object-cover rounded-3xl"
            loading="lazy"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
} 