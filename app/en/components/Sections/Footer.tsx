import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

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
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center space-x-4 p-4 max-sm:bg-transparent rounded-lg w-full max-w-sm mx-auto bg-gray-800/50 shadow-lg">
            <div className="flex-shrink-0">
              <Image src="/logoDM.png" width={100} height={100} alt="logo" />
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
          <div className="flex -mx-2">
            <Link
              href="#"
              className="mx-2 text-gray-100 transition-colors duration-300 hover:text-indigo-500"
            >
              <FaFacebook size={24} />
            </Link>
            <Link
              href="#"
              className="mx-2 text-gray-100 transition-colors duration-300 hover:text-indigo-500"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link
              href="#"
              className="mx-2 text-gray-100 transition-colors duration-300 hover:text-indigo-500"
            >
              <FaInstagram size={24} />
            </Link>
          </div>
          <p className="text-sm text-gray-50 max-sm:mt-2">
            ©Copyright 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
