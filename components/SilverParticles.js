"use client";
import React, { useEffect, useRef } from "react";

export default function SilverParticles() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // تعداد ذرات
    const particleCount = 300;

    // ایجاد ذرات
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "silver-particle";

      // موقعیت X تصادفی در عرض صفحه
      particle.style.left = Math.random() * 100 + "vw";

      // اندازه و سرعت تصادفی
      const size = 1 + Math.random() * 2; // 1 تا 3 px
      particle.style.width = size + "px";
      particle.style.height = size + "px";

      particle.style.animationDuration = 5 + Math.random() * 5 + "s"; // 5 تا 10 ثانیه
      particle.style.animationDelay = Math.random() * 10 + "s";

      container.appendChild(particle);
    }

    return () => {
      // پاک کردن ذرات هنگام پاک شدن کامپوننت
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return <div ref={containerRef} className="silver-particles-container fixed inset-0 pointer-events-none z-0"></div>;
}
