"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

function AboutUs() {
  const [acfData, setAcfData] = useState(null);
  const [swiperImages, setSwiperImages] = useState([]);

  // تابع کمکی برای گرفتن URL تصویر از ID
  const fetchImageURL = async (id) => {
    if (!id) return null;
    const res = await fetch(`http://localhost/moj-sherkat/wp-json/wp/v2/media/${id}`);
    const data = await res.json();
    return data.source_url;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // گرفتن داده‌های صفحه About Us
        const res = await fetch("http://localhost/moj-sherkat/wp-json/wp/v2/pages?slug=about-us");
        const data = await res.json();
        const acf = data[0].acf;
        setAcfData(acf);

        // گرفتن URL تصاویر از ID
        const images = await Promise.all([
          fetchImageURL(acf.aboutus_image_1),
          fetchImageURL(acf.aboutus_image_2),
          fetchImageURL(acf.aboutus_image_3),
        ]);

        setSwiperImages(images.filter(Boolean)); // فیلد خالی رو حذف می‌کنه
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  if (!acfData) return <p>Loading...</p>;

  return (
    <section id="about" dir="rtl" className="py-10 sm:py-20 bg-black text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* اسلایدر تصاویر */}
          <div className="md:w-1/2 w-full flex justify-center">
            <div className="w-full max-w-xs aspect-[3/4]">
              {swiperImages.length > 0 ? (
                <Swiper
                  effect="cards"
                  grabCursor={true}
                  modules={[EffectCards]}
                  className="w-full h-full"
                >
                  {swiperImages.map((url, index) => (
                    <SwiperSlide key={index} className="rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={url}
                        alt={`اسلاید ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <p className="text-gray-400">تصویری برای نمایش وجود ندارد.</p>
              )}
            </div>
          </div>

          {/* متن معرفی */}
          <div className="md:w-1/2 w-full text-right">
            <h2 className="sm:text-3xl text-xl font-bold vazir mb-6 text-blue-400">
              {acfData.aboutus_title}
            </h2>
            <div dangerouslySetInnerHTML={{ __html: acfData.aboutus_description }} />
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutUs;
