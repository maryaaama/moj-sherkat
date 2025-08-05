"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import projects from "@/public/data/projects";

const Portfo = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="portfolio" className="bg-black text-white sm:py-20" >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 vazir">
          پروژه‌های ما
        </h2>

        {/* Responsive Masonry */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 sm:gap-6 gap-4">
          {[0, 1, 2, 3].map((colIndex) => (
            <div className="grid gap-6" key={colIndex}>
              {visibleProjects
                .filter((_, i) => i % 4 === colIndex)
                .map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <img
                      className="w-full h-auto object-cover rounded-xl transition-transform duration-500 ease-in-out hover:scale-105"
                      src={project.image}
                      alt={`Project ${project.id}`}
                    />
                  </motion.div>
                ))}
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && projects.length > 4 && (
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(true)}
              className="bg-indigo-600 hover:bg-indigo-800 transition sm:px-8 px-4 py-3 rounded-full text-white vazir sm:text-lg text-sm font-semibold shadow-md"
            >
              مشاهده پروژه‌های بیشتر
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfo;
