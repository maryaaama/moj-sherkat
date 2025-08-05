import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import data from "@/data/db.json";

function AboutUs() {
  const swiperImages = data.imgSwiper;

  return (
    <section id="about" dir="rtl" className="py-10 sm:py-20 bg-black text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* اسلایدر تصاویر */}
          <div className="md:w-1/2 w-full flex justify-center">
            <div className="w-full max-w-xs aspect-[3/4]">
              <Swiper
                effect="cards"
                grabCursor={true}
                modules={[EffectCards]}
                className="w-full h-full"
              >
                {swiperImages.map((item) => (
                  <SwiperSlide
                    key={item.id}
                    className="rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <img
                      src={item.src}
                      alt={`اسلاید ${item.id}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* متن معرفی */}
          <div className="md:w-1/2 w-full text-right">
            <h2 className="sm:text-3xl text-xl font-bold vazir mb-6 text-blue-400">
              درباره شرکت زیبا نمای کاویان
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed vazir">
              شرکت ساختمانی نوین سازه با بیش از 15 سال سابقه درخشان در زمینه ساخت و ساز، یکی از پیشگامان صنعت ساختمان در کشور می‌باشد. ما با بهره‌گیری از تیم متخصص و استفاده از آخرین تکنولوژی‌های روز دنیا، پروژه‌های منحصر به فردی را به اجرا گذاشته‌ایم.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed vazir">
              ماموریت ما ارائه خدمات ساختمانی با بالاترین کیفیت و رعایت تمامی استانداردهای بین‌المللی است. ما به مشتریان خود این اطمینان را می‌دهیم که پروژه‌هایشان در کوتاه‌ترین زمان و با بهترین کیفیت ممکن به انجام خواهد رسید.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: 'fas fa-building', number: '150+', label: 'پروژه تکمیل شده' },
                { icon: 'fas fa-users', number: '50+', label: 'کارمند متخصص' },
                { icon: 'fas fa-award', number: '25+', label: 'جایزه معتبر' },
                { icon: 'fas fa-map-marked-alt', number: '10+', label: 'شهر فعال' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-900 p-4 rounded-lg text-right"
                >
                  <div className="text-blue-400 text-2xl mb-2">
                    <i className={item.icon}></i>
                  </div>
                  <h3 className="font-bold mb-1">{item.number}</h3>
                  <p className="text-gray-400 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutUs;
