"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"; // استبدال الأيقونات
import { Button } from "../../../../components/ui/button";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Typewriter from "typewriter-effect";

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla relative border-b border-b-indigo-400">
      {/* النص والزّر في طبقة منفصلة */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 pointer-events-none">
        <div className="mb-4">
          <h1 className="text-lg bg-black bg-opacity-35 backdrop-blur-xl sm:text-xl font-bold px-3 py-1 border border-indigo-500 rounded-full">
            Welcome to creativity with
          </h1>
        </div>

        <h1 className="text-3xl sm:text-6xl font-bold leading-tight">
          Askar Group for
        </h1>
        <h2 className="text-lg sm:text-3xl font-bold mt-4 sm:mt-6 text-gray-100">
          <Typewriter
            options={{
              strings: [
                "General Contracting and Large-Scale Projects",
                "Mechanical Works and Industrial Installations",
                "Civil Works and Infrastructure Development",
                "Metal Fabrication and Customized Production Solutions",
              ],
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 50,
            }}
          />
        </h2>

        <Button
          variant="ghost"
          className="mt-4 hover:border-indigo-600 hover:text-indigo-600 pointer-events-auto"
        >
          <AiOutlineArrowLeft />
          Contact Us
        </Button>
      </div>

      {/* Carousel with lazy loading and alt texts for SEO */}
      <div className="backdrop-blur-sm">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex">
            <div className="embla__slide">
              <Image
                className="object-cover brightness-50 max-sm:h-screen"
                src="/image1.jpg"
                width={1920}
                height={1080}
                alt="Modern construction site with machinery and workers"
                loading="lazy" // Lazy load image
              />
            </div>
            <div className="embla__slide">
              <Image
                className="object-cover brightness-50 max-sm:h-screen"
                src="/image2.jpg"
                width={1920}
                height={1080}
                alt="Construction workers assembling metal structures"
                loading="lazy" // Lazy load image
              />
            </div>
            <div className="embla__slide">
              <Image
                className="object-cover brightness-50 max-sm:h-screen"
                src="/image3.jpg"
                width={1920}
                height={1080}
                alt="High-tech construction equipment at work"
                loading="lazy" // Lazy load image
              />
            </div>
          </div>
        </div>

        {/* Navigation buttons with aria-labels for accessibility */}
        <button
          className="embla__prev absolute top-1/2 -translate-y-1/2"
          onClick={scrollPrev}
          aria-label="Scroll to previous slide"
        >
          <AiOutlineLeft className="text-white text-6xl hover:text-indigo-600 duration-200 max-sm:text-2xl pl-2" />
        </button>
        <button
          className="embla__next absolute top-1/2 right-0 -translate-y-1/2"
          onClick={scrollNext}
          aria-label="Scroll to next slide"
        >
          <AiOutlineRight className="text-white text-6xl hover:text-indigo-600 duration-200 max-sm:text-2xl pr-2" />
        </button>
      </div>
    </div>
  );
}
