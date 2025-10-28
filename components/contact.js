"use client";
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function ContactUs() {
  const [formData, setFormData] = useState({
    "your-name": "",
    "your-email": "",
    "your-message": "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({
          "your-name": "",
          "your-email": "",
          "your-message": "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.log(err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="bg-black text-white py-10 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        <h2 className="sm:text-3xl text-xl font-bold text-white mb-12 text-center font-vazir">
          تماس با ما
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* ستون اطلاعات تماس */}
          <div className="space-y-6 sm:space-y-9 text-right">
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-white sm:text-xl text-base mt-1 neon-icon" />
              <div>
                <h4 className="font-bold text-white font-vazir pb-4 sm:text-lg text-base">
                  تلفن
                </h4>
                <p className="text-gray-300 sm:text-lg text-base">
                  ۰۲۱-۱۲۳۴۵۶۷۸
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-white sm:text-xl text-base mt-1 neon-icon" />
              <div>
                <h4 className="font-bold text-white font-vazir pb-4 sm:text-lg text-base">
                  ایمیل
                </h4>
                <p className="text-gray-300 sm:text-lg text-base">
                  info@zibanamayekavian.ir
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-white sm:text-xl text-base mt-1 neon-icon" />
              <div>
                <h4 className="font-bold text-white font-vazir pb-4 sm:text-lg text-base">
                  آدرس
                </h4>
                <p className="text-gray-300 sm:text-lg text-base font-vazir">
                  تهران، خیابان ولیعصر، برج زیبانمای کاویان، طبقه۵
                </p>
              </div>
            </div>
          </div>

          {/* ستون فرم تماس */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="your-name"
              placeholder="نام شما"
              value={formData["your-name"]}
              onChange={handleChange}
              className="w-full p-4 bg-transparent text-white placeholder-gray-400 border border-white rounded-md neon-white"
              required
            />
            <input
              type="email"
              name="your-email"
              placeholder="ایمیل شما"
              value={formData["your-email"]}
              onChange={handleChange}
              className="w-full p-4 bg-transparent text-white placeholder-gray-400 border border-white rounded-md neon-white"
              required
            />
            <textarea
              name="your-message"
              placeholder="پیام شما"
              value={formData["your-message"]}
              onChange={handleChange}
              className="w-full p-4 bg-transparent text-white placeholder-gray-400 border border-white rounded-md neon-white h-32"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-black text-white border border-white rounded-md hover:bg-white hover:text-black transition neon-white font-vazir"
            >
              ارسال پیام
            </button>
            {status === "sending" && (
              <p className="text-gray-400">در حال ارسال...</p>
            )}
            {status === "success" && (
              <p className="text-green-500">پیام شما با موفقیت ارسال شد!</p>
            )}
            {status === "error" && (
              <p className="text-red-500">ارسال پیام با خطا مواجه شد.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
