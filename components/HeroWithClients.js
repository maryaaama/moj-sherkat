"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import clientsData from "@/data/db.json";

export default function HeroWithClients() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <section id="home"  className=" relative min-h-screen pt-32 flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* ویدیو و لایه تاریک */}
      <div className="absolute inset-0 bg-black opacity-70 z-0" />
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-90 z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video9.mp4" type="video/mp4" />
      </video>

      {/* متن */}
      <div className="relative z-10 text-center px-4 mb-8 max-w-2xl">
  <h1 className="text-2xl md:text-6xl font-bold mb-6 pr-1 text-white">
    شرکت ساختمانی 
    <span className="text-blue-400"> زیبا نمای کاویان</span>
  </h1>
  <p className="text-lg md:text-2xl mb-8 text-gray-300">
    ساخت و ساز با کیفیت و استانداردهای جهانی
  </p>

  <div className="flex flex-col sm:flex-row justify-center gap-4">
    <a
      href="#portfolio"
      className="neon-button px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base text-white"
     >
      مشاهده پروژه‌ها
    </a>
     <a
      href="#contact"
      className="neon-button px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base text-white"
     >
      تماس با ما
    </a>
  </div>
</div>


      {/* اسلایدر لوگوها */}
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8  mt-12 sm:mt-20 py-6 rounded-full overflow-hidden mask-fade">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={4000}
          freeMode={true}
          className="!overflow-visible"
        >
          {clientsData.clients.map((client) => (
            <SwiperSlide key={client.id} className="w-40 flex justify-center items-center">
              <img
                src={client.image}
                alt={client.name}
                className="h-14 sm:h-20 w-auto opacity-80 hover:opacity-100 transition duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* ماسک محو پایین */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10" />

    </section>
  );
}
