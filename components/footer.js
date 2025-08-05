"use client";
import Link from "next/link";
import {
  FaInstagram,
  FaWhatsapp,
  FaTelegram,
  FaTwitter,
  FaTiktok,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-black text-white pt-16 pb-10 overflow-hidden max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
      {/* دود پس‌زمینه */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="/video3.mp4"
          type="video/mp4"
        />
      </video>

      <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* لوگو */}
        <div className="text-right">
          <h3 className="text-2xl font-bold text-blue-400 mb-4 vazir">زیبا نمای کاویان</h3>
          <p className="text-gray-400 text-sm leading-loose vazir">
            شرکت زیبا نمای کاویان با سال‌ها تجربه درخشان در حوزه ساخت‌وساز، افتخار دارد در خدمت شما باشد.
          </p>
        </div>

        {/* لینک‌های منو ستون اول */}
        <div>
          <h4 className="sm:text-xl text-base font-bold text-blue-300 mb-3">لینک‌های اصلی</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/" className="hover:text-white vazir">خانه</Link></li>
            <li><Link href="#about" className="hover:text-white vazir">درباره ما</Link></li>
            <li><Link href="#portfolio" className="hover:text-white vazir">پروژه‌ها</Link></li>
            <li><Link href="#contact" className="hover:text-white vazir">تماس با ما</Link></li>
          </ul>
        </div>

        {/* لینک‌های ستون دوم */}
        <div>
          <h4 className="sm:text-xl text-base font-bold text-blue-300 mb-3 vazir">خدمات</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="#" className="hover:text-white">طراحی سازه</Link></li>
            <li><Link href="#" className="hover:text-white">نوسازی</Link></li>
            <li><Link href="#" className="hover:text-white">پیمانکاری</Link></li>
            <li><Link href="#" className="hover:text-white">مشاوره مهندسی</Link></li>
          </ul>
        </div>

        {/* آیکون‌های اجتماعی در دو ستون */}
        <div className="grid grid-cols-2 gap-2 justify-end">
          {[FaInstagram, FaWhatsapp, FaTelegram, FaTwitter, FaTiktok, FaEnvelope].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="neon-icon text-xl sm:text-2xl hover:scale-110 transition"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {/* کپی‌رایت */}
      <div className="relative z-10 mt-8 text-center text-gray-500 text-sm">
        © 2025 تمامی حقوق برای علیپوروب محفوظ است.
      </div>
    </footer>
  );
}

export default Footer;
