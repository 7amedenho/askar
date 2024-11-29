"use client";
import React from "react";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

const TeamTalk = () => {
  const testimonials = [
    {
      quote:
        "We believe that effective management is the foundation for achieving our company's goals, and we are always committed to providing a work environment that fosters innovation and excellence.",
      name: "Adel Mohamed Askar",
      position: "Administrative Manager",
    },
    {
      quote:
        "In the Mechanical Engineering Department, we strive to deliver innovative solutions that ensure high quality and efficiency, with a focus on meeting our clients' needs.",
      name: "Assem Abdelrahman AbouAsal",
      position: "Mechanical Engineer",
    },
    {
      quote:
        "Civil engineering is the backbone of infrastructure, and we work diligently to deliver projects that ensure durability and sustainability for future generations.",
      name: "Hassan Emad Qassem",
      position: "Civil Engineer",
    },
    {
      quote:
        "Successful financial management is not just numbers; it is the planning that ensures stability and sustainable growth for our company.",
      name: "Karim Mohamed El-Sherbiny",
      position: "Financial Manager",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
  });

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16" {...swipeHandlers}>
      <div className="container px-6 mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
          What Our Team Says
        </h1>
        <div className="flex justify-center mt-4">
          <span className="w-20 h-1 bg-indigo-700 rounded-full"></span>
        </div>

        <div className="relative mt-12 max-w-4xl mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full text-center p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg"
              >
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  {testimonial.quote}
                </p>
                <h2 className="mt-6 text-xl font-bold text-gray-800 dark:text-white">
                  {testimonial.name}
                </h2>
                <span className="text-gray-500 dark:text-gray-400">
                  {testimonial.position}
                </span>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            title="Previous"
            className="absolute top-1/2 left-3 transform -translate-y-1/2 p-3 rounded-full bg-indigo-700 dark:bg-indigo-700 hover:bg-indigo-700 dark:hover:bg-indigo-700 text-white shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            title="Next"
            className="absolute top-1/2 right-3 transform -translate-y-1/2 p-3 rounded-full bg-indigo-700 dark:bg-indigo-700 hover:bg-indigo-700 dark:hover:bg-indigo-700 text-white shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index
                  ? "bg-indigo-700"
                  : "bg-gray-300 dark:bg-gray-700"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamTalk;
