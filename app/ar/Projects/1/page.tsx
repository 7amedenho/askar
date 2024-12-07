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
  const projectName = "Civil Work at Poiler Stack";
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const images = [
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550693/image3_vcr11b.jpg",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550689/image2_sl7ldc.jpg",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550700/image5_hhzfix.jpg",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550692/image4_fq0d0q.jpg",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550707/image9_axleli.jpg",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550656/image10_wpyquw.jpg",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550704/image7_n4jjeq.jpg",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550707/image8_gudnzo.jpg",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550676/image17_wbr94k.jpg",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550679/image18_opuqcm.jpg",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550660/image12_t1tmcw.jpg",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550663/image11_lwcvmj.jpg",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550669/image15_s7e5ue.jpg",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550677/image16_uw41mc.jpg",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550653/image13_u6aacm.jpg",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550681/image14_fjxnd6.jpg",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550680/image19_wfrnpa.jpg",
    },
    {
      src: "https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550687/image20_rp8nyp.jpg",
    },
  ];

  return (
    <div className="w-full dark:bg-slate-900 dark:text-white min-h-screen pt-40 py-10 px-4 sm:px-8">
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
              <Image
                src={image.src}
                alt={`Project image ${index + 1}`}
                className="rounded-lg w-full"
                width={800}
                height={600}
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* معرض الصور المصغرة */}
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          slidesPerView={5} // عرض 5 صور في نفس الوقت بشكل افتراضي
          spaceBetween={10} // مسافة بين الصور المصغرة
          watchSlidesProgress
          className="cursor-pointer"
          breakpoints={{
            // إعدادات ريسبونسيف
            640: {
              slidesPerView: 6, // للأجهزة المتوسطة
            },
            768: {
              slidesPerView: 8, // للأجهزة اللوحية
            },
            1024: {
              slidesPerView: 10, // للشاشات الكبيرة
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image.src}
                alt={`Thumbnail ${index + 1}`}
                className="rounded-md border border-gray-300"
                width={100}
                height={100}
                priority
                unoptimized
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Blog />
    </div>
  );
}
