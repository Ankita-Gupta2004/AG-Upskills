// src/components/Hero.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const dynamicWords = ["Notes", "Code", "Task", "DSA"];

export default function Hero({ onStartClick }) {
  const [index, setIndex] = useState(0);

  // Change dynamic word every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % dynamicWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Floating circles
  const circles = [
    {
      size: 60,
      pos: { top: "10%", left: "5%" },
      color: "from-teal-300 to-teal-400",
    },
    {
      size: 80,
      pos: { top: "20%", right: "10%" },
      color: "from-teal-400 to-teal-500",
    },
    {
      size: 50,
      pos: { bottom: "15%", left: "20%" },
      color: "from-teal-200 to-teal-300",
    },
    {
      size: 70,
      pos: { bottom: "10%", right: "15%" },
      color: "from-teal-500 to-teal-600",
    },
    {
      size: 40,
      pos: { top: "50%", left: "2%" },
      color: "from-teal-300 to-teal-400",
    },
  ];

  const floatAnimation = (i) => ({
    y: [0, -20 - i * 5, 0],
    x: [0, 20 + i * 5, 0],
    rotate: [0, 15, -15, 0],
    transition: { duration: 6 + i, repeat: Infinity, ease: "easeInOut" },
  });

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
      {/* Floating Glowing Bulbs */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-teal-400/40 dark:bg-teal-500/30 filter blur-3xl opacity-40"
        style={{ top: "20%", left: "15%" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-60 h-60 rounded-full bg-teal-400/30 dark:bg-teal-500/20 filter blur-2xl opacity-30"
        style={{ bottom: "15%", right: "10%" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Circles */}
      {circles.map((circle, i) => (
        <motion.div
          key={i}
          animate={floatAnimation(i)}
          className={`absolute rounded-full bg-gradient-to-tr ${circle.color} opacity-30 dark:opacity-20`}
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            ...circle.pos,
          }}
        />
      ))}

      <div className="text-center px-4 md:px-0 relative z-10">
        {/* Tagline with dynamic word */}
        <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-4 flex justify-center items-center gap-4 flex-wrap">
          <span>Where ? here</span>

          <span className="relative inline-block w-[200px] h-[1em]">
            {/* Reserve space */}
            <span className="invisible">
              {dynamicWords.reduce((a, b) => (a.length > b.length ? a : b))}
            </span>

            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                className="absolute left-0 top-0 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400 dark:from-teal-400 dark:via-teal-300 dark:to-teal-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {dynamicWords[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        <h3 className="text-xl md:text-2xl text-gray-700 dark:text-teal-200/70 mb-8">
          Your Companion for Every Semester
        </h3>

        {/* Modern Gradient Button */}
        <button
          onClick={onStartClick}
          className="relative inline-flex items-center px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-teal-500 to-teal-600 shadow-lg overflow-hidden group transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <span className="relative z-10 flex items-center gap-2">
            Get Started
            <FiArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
          </span>
          <span className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-30 transition-opacity"></span>
        </button>
      </div>
    </section>
  );
}
