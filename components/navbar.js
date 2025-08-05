"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md sm:py-6 py-4 shadow-lg z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* لوگو */}
        <div className="flex items-center">
          <img src="/img/13.png" alt="لوگو شرکت" className="sm:h-10 h-5 mr-3" />
          <span className="sm:text-xl text-base  font-bold text-white vazir">زیبا نمای کاویان</span>
        </div>

        {/* لینک‌ها - دسکتاپ */}
        <div className="hidden md:flex flex-row-reverse gap-x-10">
          <a href="#home" className="text-white hover:text-blue-400 transition vazir">خانه</a>
          <a href="#about" className="text-white hover:text-blue-400 transition vazir">درباره ما</a>
          <a href="#services" className="text-white hover:text-blue-400 transition vazir">خدمات</a>
          <a href="#portfolio" className="text-white hover:text-blue-400 transition vazir">نمونه کارها</a>
          <a href="#contact" className="text-white hover:text-blue-400 transition vazir">تماس با ما</a>
        </div>

        {/* دکمه همبرگری - موبایل */}
        <button
          className="sm:hidden text-gray-300 focus:outline-none z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
           aria-label="Toggle menu"
         >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-2xl" />
        </button>
      </div>

      {/* منوی موبایل - راست‌چین و از راست وارد می‌شود */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full right-0 left-0 bg-black/90 backdrop-blur-md text-white py-6 px-6 flex flex-col items-end gap-6 animate-fade-down vazir text-right">
          <a href="#home" onClick={() => setIsMenuOpen(false)}>خانه</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>درباره ما</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>خدمات</a>
          <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>نمونه کارها</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>تماس با ما</a>
        </div>
      )}
    </nav>
  );
}
