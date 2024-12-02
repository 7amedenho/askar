import {
  FaFacebook,
  FaLocationDot,
} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { MdMarkEmailUnread } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0 opacity-20">
        <svg
          className="absolute top-0 left-0 w-64 h-64 text-indigo-500 opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <circle cx="100" cy="100" r="100" />
        </svg>
        <svg
          className="absolute bottom-0 right-0 w-96 h-96 text-indigo-700 opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <polygon points="100,0 200,200 0,200" />
        </svg>
      </div>

      <div className="container px-6 py-12 mx-auto relative z-10">
        {/* Logo and company info */}
        <div className="flex flex-col items-center text-center justify-center">
          <div className="flex items-center space-x-4 p-4 bg-transparent rounded-lg w-full max-w-sm mx-auto ">
            <div className="flex-shrink-0">
              <Image
                src="/logoDM.png"
                width={100}
                height={100}
                alt="Askar Co. logo"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col text-left space-y-1">
              <h1 className="text-lg md:text-xl font-bold leading-tight text-white">
                Askar Co. for <br />
                General Contracting
              </h1>
              <p className="text-xs md:text-sm text-gray-100 font-medium">
                عسكر للمقاولات العمومية
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center mt-6 -mx-4">
            <Link
              href="/"
              className="mx-4 text-sm text-gray-100 transition-colors duration-300 hover:text-indigo-500"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="mx-4 text-sm text-gray-100 transition-colors duration-300 hover:text-indigo-500"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="mx-4 text-sm text-gray-100 transition-colors duration-300 hover:text-indigo-500"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="mx-4 text-sm text-gray-100 transition-colors duration-300 hover:text-indigo-500"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700 opacity-50" />

        {/* Social Media and Footer Note */}
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-indigo-300 duration-300">
              <FaFacebook className="text-white" />
            </Link>
            <Link href="#" className="hover:text-indigo-300 duration-300">
              <FaLocationDot className="text-white" />
            </Link>
            <div className="flex items-center font-mono text-white hover:text-indigo-300 transition-all duration-300">
              <MdMarkEmailUnread className="text-xl" />
              <span className="ml-1 text-lg">askar@info.com</span>
            </div>
          </div>
          <p className="text-sm text-gray-50 max-sm:mt-2">
            ©Copyright 2025. All Rights Reserved by Askar Group.
          </p>
        </div>
        <p className="text-sm text-gray-50 max-sm:mt-2 text-center">
          Made with M . Hamedenho ❤️.
        </p>
      </div>

      {/* SEO Meta Tags */}
      <meta
        name="description"
        content="Askar Group for General Contracting specializes in providing high-quality construction services and delivering excellence in every project."
      />
      <meta
        name="keywords"
        content="contracting, construction, general contracting, Askar, Askar Group, projects, construction company"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Askar Group for General Contracting" />
      <meta
        property="og:description"
        content="Askar Group for General Contracting specializes in providing high-quality construction services and delivering excellence in every project."
      />
      <meta property="og:image" content="/logoDM.png" />
    </footer>
  );
}
