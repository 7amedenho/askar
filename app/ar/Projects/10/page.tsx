"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";
import Blog from "../../components/Sections/Blog";
import { Swiper as SwiperClass } from "swiper/types"; // استيراد النوع المناسب

export default function Project1() {
  const projectName = "Tank door manufacturing works";
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const images = [
    {
      src: "https://res.cloudinary.com/dqzcvlxzw/image/upload/v1735224713/WhatsApp_Image_2024-12-26_at_4.38.33_PM_2_sshqlx.jpg",
    },
    {
      src: "https://res.cloudinary.com/dqzcvlxzw/image/upload/v1735224713/WhatsApp_Image_2024-12-26_at_4.38.34_PM_j9avon.jpg",
    },
    {
      src: "https://res.cloudinary.com/dqzcvlxzw/image/upload/v1735224713/WhatsApp_Image_2024-12-26_at_4.38.33_PM_1_bwnhof.jpg",
    },
    {
      src: "https://res.cloudinary.com/dqzcvlxzw/image/upload/v1735224714/WhatsApp_Image_2024-12-26_at_4.38.33_PM_cglu0q.jpg",
    },
    {
      src: "https://res.cloudinary.com/dqzcvlxzw/image/upload/v1735224714/WhatsApp_Image_2024-12-26_at_4.38.33_PM_cglu0q.jpg",
    },
    {
      src: "https://res.cloudinary.com/dqzcvlxzw/image/upload/v1735224714/WhatsApp_Image_2024-12-26_at_4.38.32_PM_3_vg7o4z.jpg",
    },
    {
      src: "https://res.cloudinary.com/dqzcvlxzw/image/upload/v1735224719/WhatsApp_Image_2024-12-26_at_4.38.32_PM_1_vtkwsu.jpg",
    },
    {
      src: "https://res.cloudinary.com/dqzcvlxzw/image/upload/v1735224719/WhatsApp_Image_2024-12-26_at_4.38.32_PM_2_tueuaq.jpg",
    },
    {
      src: "https://res.cloudinary.com/dqzcvlxzw/image/upload/v1735224719/WhatsApp_Image_2024-12-26_at_4.38.32_PM_bh1ozg.jpg",
    },
    {
      src: "https://res.cloudinary.com/dqzcvlxzw/image/upload/v1735224723/WhatsApp_Image_2024-12-26_at_4.38.31_PM_2_k4iybq.jpg",
    },
    {
      src: "https://res.cloudinary.com/dqzcvlxzw/image/upload/v1735224724/WhatsApp_Image_2024-12-26_at_4.38.31_PM_1_xgzfph.jpg",
    },
    {
      src: "https://res.cloudinary.com/dqzcvlxzw/image/upload/v1735224724/WhatsApp_Image_2024-12-26_at_4.38.31_PM_skogpi.jpg",
    },
    {
      src: "https://res.cloudinary.com/dqzcvlxzw/image/upload/v1735224725/WhatsApp_Image_2024-12-26_at_4.38.30_PM_2_jsjnww.jpg",
    },
    {
      src: "https://res.cloudinary.com/dqzcvlxzw/image/upload/v1735224730/WhatsApp_Image_2024-12-26_at_4.38.30_PM_sfkqdz.jpg",
    },
    {
      src: "https://res.cloudinary.com/dqzcvlxzw/image/upload/v1735224731/WhatsApp_Image_2024-12-26_at_4.38.29_PM_1_ed9wzl.jpg",
    },
    {
      src: "https://res.cloudinary.com/dqzcvlxzw/image/upload/v1735224732/WhatsApp_Image_2024-12-26_at_4.38.29_PM_izgdax.jpg",
    },
    {
      src: "https://res.cloudinary.com/dqzcvlxzw/image/upload/v1735224734/WhatsApp_Image_2024-12-26_at_4.38.28_PM_i3hevg.jpg",
    },
    {
      src: "https://res.cloudinary.com/dqzcvlxzw/image/upload/v1735225879/%D8%B5%D9%88%D8%B1%D8%A9_%D9%88%D8%A7%D8%AA%D8%B3%D8%A7%D8%A8_%D8%A8%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE_2024-12-26_%D9%81%D9%8A_17.10.40_8bb245ce_sudkgv.jpg",
    },
  ];

  return (
    <div className="w-full dark:bg-slate-900 dark:text-white min-h-screen pt-40 py-10 px-4 sm:px-8 relative">
      {/* أشكال الخلفية */}
      <div className="absolute inset-0">
        {/* الشكل الهندسي الأيسر */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-indigo-300 dark:bg-indigo-700 rounded-full opacity-30"></div>
        {/* الشكل الهندسي الأيمن */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gray-400 dark:bg-slate-700 rounded-full opacity-20"></div>
        {/* الخط المتعرج */}
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
          slidesPerView={1} // عرض صورة واحدة في المعرض الرئيسي دائمًا
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-square w-full">
                <Image
                  src={image.src}
                  alt={`Project image ${index + 1}`}
                  className="rounded-lg object-cover"
                  fill
                  priority
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
          slidesPerView={5}
          spaceBetween={10}
          watchSlidesProgress
          className="cursor-pointer"
          breakpoints={{
            // إعدادات ريسبونسيف
            640: {
              slidesPerView: 6,
            },
            768: {
              slidesPerView: 8,
            },
            1024: {
              slidesPerView: 10,
            },
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
