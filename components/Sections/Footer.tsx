import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa6";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t-4 border-indigo-700">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <div>
            <div className="flex items-center space-x-4 p-4 max-sm:bg-transparent rounded-lg w-full max-w-sm mx-auto">
              <div className="flex-shrink-0">
                <Image src="/logo.png" width={100} height={100} alt="logo" />
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
          </div>

          <div className="flex flex-wrap justify-center mt-6 -mx-4">
            <a
              href="#"
              className="mx-4 text-sm text-gray-100 transition-colors duration-300 hover:text-indigo-500"
              aria-label="Reddit"
            >
              Home
            </a>

            <a
              href="#"
              className="mx-4 text-sm text-gray-100 transition-colors duration-300 hover:text-indigo-500"
              aria-label="Reddit"
            >
              Projects
            </a>

            <a
              href="#"
              className="mx-4 text-sm text-gray-100 transition-colors duration-300 hover:text-indigo-500"
              aria-label="Reddit"
            >
              About Us
            </a>

            <a
              href="#"
              className="mx-4 text-sm text-gray-100 transition-colors duration-300 hover:text-indigo-500"
              aria-label="Reddit"
            >
              Contact Us
            </a>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <div className="flex -mx-2">
            <a
              href="#"
              className="mx-2 text-gray-100 transition-colors duration-300 hover:text-indigo-500 "
              aria-label="Reddit"
            >
              <FaFacebook className="" />
            </a>

            <a
              href="#"
              className="mx-2 text-gray-100 transition-colors duration-300 hover:text-indigo-500 "
              aria-label="Facebook"
            >
              <FaLinkedin className="" />
            </a>

            <a
              href="#"
              className="mx-2 text-gray-100 transition-colors duration-300 hover:text-indigo-500 "
              aria-label="Github"
            >
              <FaInstagram className="" />
            </a>
          </div>
          <p className="text-sm text-gray-50 max-sm:mt-2">
            ©Copyright 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
