"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function ContactUs() {
  return (
    <section id="contact" className="bg-black text-white py-10 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="container mx-auto px-4">
        <h2 className="sm:text-3xl text-xl font-bold text-white mb-12 text-center font-vazir">تماس با ما</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* ستون اطلاعات تماس */}
          <div className="space-y-6 sm:space-y-9 text-right">
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-white sm:text-xl text-base mt-1 neon-icon" />
              <div>
                <h4 className="font-bold text-white font-vazir pb-4 sm:text-lg text-base">تلفن</h4>
                <p className="text-gray-300 sm:text-lg text-base">۰۲۱-۱۲۳۴۵۶۷۸</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-white sm:text-xl text-base mt-1 neon-icon" />
              <div>
                <h4 className="font-bold text-white font-vazir pb-4 sm:text-lg text-base">ایمیل</h4>
                <p className="text-gray-300 sm:text-lg text-base">info@novinsazeh.ir</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-white sm:text-xl text-base mt-1 neon-icon" />
              <div>
                <h4 className="font-bold text-white font-vazir pb-4 sm:text-lg text-base">آدرس</h4>
                <p className="text-gray-300 sm:text-lg text-base font-vazir">
                  تهران، خیابان ولیعصر، برج سازه نوین، طبقه۵
                </p>
              </div>
            </div>
          </div>

          {/* ستون فرم تماس */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="نام شما"
              className="w-full p-4 bg-transparent text-white placeholder-gray-400 border border-white rounded-md neon-white"
            />
            <input
              type="email"
              placeholder="ایمیل شما"
              className="w-full p-4 bg-transparent text-white placeholder-gray-400 border border-white rounded-md neon-white"
            />
            <textarea
              placeholder="پیام شما"
              className="w-full p-4 bg-transparent text-white placeholder-gray-400 border border-white rounded-md neon-white h-32"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-black text-white border border-white rounded-md hover:bg-white hover:text-black transition neon-white font-vazir"
            >
              ارسال پیام
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
