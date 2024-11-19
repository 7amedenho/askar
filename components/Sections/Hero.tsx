"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"; // استبدال الأيقونات
import { Button } from "../ui/button";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import CountUp from "react-countup";

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

        <h1 className="text-2xl sm:text-6xl font-bold">
          Askar for General Contracting
        </h1>
        <h1 className="text-md text-indigo-400 sm:text-xl font-bold m-2">
          <Typewriter
            options={{
              strings: [
                "Building Your Vision with Excellence",
                "Crafting Strong Foundations for Tomorrow",
                "Innovative Solutions for Modern Construction",
                "Precision and Expertise in Every Project",
                "Building a Legacy, One Project at a Time",
              ],
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 50,
            }}
          />
        </h1>

        <Button
          variant="ghost"
          className="mt-4 hover:border-indigo-600 hover:text-indigo-600 border-b-2 border-transparent pointer-events-auto"
        >
          <AiOutlineArrowLeft />
          Get Started
        </Button>
      </div>
      <div className="backdrop-blur-sm">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex">
            <div className="embla__slide ">
              <Image
                className="object-cover brightness-50 max-sm:h-screen"
                src="/image1.jpg"
                width={1920}
                height={1080}
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="object-cover brightness-50 max-sm:h-screen"
                src="/image2.jpg"
                width={1920}
                height={1080}
                alt=""
              />
            </div>
            <div className="embla__slide">
              <Image
                className="object-cover brightness-50 max-sm:h-screen"
                src="/image3.jpg"
                width={1920}
                height={1080}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* أزرار التنقل */}
        <button
          className="embla__prev absolute top-1/2 -translate-y-1/2"
          onClick={scrollPrev}
        >
          <AiOutlineLeft className="text-white text-6xl hover:text-indigo-600 duration-200 max-sm:text-2xl pl-2" />
        </button>
        <button
          className="embla__next absolute top-1/2 right-0 -translate-y-1/2"
          onClick={scrollNext}
        >
          <AiOutlineRight className="text-white text-6xl hover:text-indigo-600 duration-200 max-sm:text-2xl pr-2" />
        </button>
        <div className="absolute sm:bg-indigo-700 w-full justify-center sm:py-4 max-sm:top-3/4 left-1/2 transform -translate-x-1/2 bottom-0 flex space-x-28 max-sm:space-x-12">
          <div className="text-center">
            <h6 className="text-white text-2xl font-bold lg:text-5xl xl:text-6xl">
              <CountUp enableScrollSpy start={0} end={144} prefix="+" />
            </h6>
            <p className="text-sm font-medium tracking-widest text-white uppercase lg:text-base">
              Project
            </p>
          </div>
          <div className="text-center">
            <h6 className="text-white text-2xl font-bold lg:text-5xl xl:text-6xl">
              <CountUp enableScrollSpy start={0} end={144} prefix="+" />
            </h6>
            <p className="text-sm font-medium tracking-widest text-white uppercase lg:text-base">
              Project
            </p>
          </div>
          <div className="text-center">
            <h6 className="text-white text-2xl font-bold lg:text-5xl xl:text-6xl">
              <CountUp enableScrollSpy start={0} end={144} prefix="+" />
            </h6>
            <p className="text-sm font-medium tracking-widest text-white uppercase lg:text-base">
              Project
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
