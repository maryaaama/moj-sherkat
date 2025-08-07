"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faTools,
  faHardHat,
  faDraftingCompass,
} from "@fortawesome/free-solid-svg-icons";

import data from "@/data/db.json";


const iconMap = {
  building: faBuilding,
  tools: faTools,
  "hard-hat": faHardHat,
  "drafting-compass": faDraftingCompass,
};

export default function Services() {
  const services = data.services;

  return (
    <section
      id="services"
      className="bg-black text-white py-10 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      dir="rtl"
    >
      <h2 className="text-4xl font-bold text-blue-400 vazir mb-12 text-center">
        خدمات ما
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map(({ id, icon, title, description }) => (
          <div
            key={id}
            className="bg-gray-900 rounded-xl p-6 flex flex-col items-center text-center
              border border-transparent
              hover:border-white
              transition-all duration-500
              shadow-[0_0_15px_#fff]
              hover:shadow-[0_0_30px_#fff]
              cursor-pointer"
          >
            <FontAwesomeIcon
              icon={iconMap[icon]} 
              className="text-white text-6xl mb-5 neon-icon"
            />
            <h3 className="text-2xl font-semibold mb-3 vazir">{title}</h3>
            <p className="text-gray-300 vazir">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
