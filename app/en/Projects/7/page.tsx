"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";
import Blog from "../../components/Sections/Blog";
import { Swiper as SwiperClass } from "swiper/types";

export default function Project1() {
  const projectName = "Fabrication erection welding handraill for silo roof";
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  const images = [
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550722/image2_aphfp7.jpg",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550735/image8_nvnktx.jpg",
    },

    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550730/image7_axrb44.jpg",
    },
    // {
    //   src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550734/image9_y43vpf.jpg",
    // },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550729/image6_srpdxo.jpg",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550725/image5_dtqonx.jpg",
    },

    // {
    //   src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550721/image4_c3qzqa.jpg",
    // },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550719/image14_qp15pm.jpg",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550715/image10_wr1lap.jpg",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550716/image12_uxb5tz.jpg",
    },
  ];

  return (
    <div className="w-full dark:bg-slate-900 dark:text-white pt-40 py-10 px-4 sm:px-8">
      {/* أشكال الخلفية */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-48 h-48 bg-indigo-300 dark:bg-indigo-700 rounded-full opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gray-400 dark:bg-slate-700 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-0 w-72 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-50 transform -translate-y-1/2 rotate-45"></div>
      </div>

      {/* عنوان المشروع */}
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-8">
        {projectName}
      </h1>

      {/* المعرض الرئيسي */}
      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Navigation, Thumbs]}
          navigation
          thumbs={{ swiper: thumbsSwiper }}
          className="mb-4"
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-square w-full">
                <Image
                  src={image.src}
                  alt={`Project image ${index + 1}`}
                  className="rounded-lg object-cover"
                  fill
                  loading="lazy"
                  unoptimized
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* معرض الصور المصغرة */}
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          slidesPerView={7}
          spaceBetween={10}
          watchSlidesProgress
          className="cursor-pointer"
          breakpoints={{
            640: { slidesPerView: 6 },
            768: { slidesPerView: 8 },
            1024: { slidesPerView: 10 },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-square w-full">
                <Image
                  src={image.src}
                  alt={`Thumbnail ${index + 1}`}
                  className="rounded-md border border-gray-300 object-cover"
                  fill
                  priority
                  unoptimized
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Blog />
    </div>
  );
}
