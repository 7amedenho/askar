import Image from "next/image";
import { GiFactory } from "react-icons/gi";
import { IoSettingsSharp } from "react-icons/io5";
import { FaTools } from "react-icons/fa";

const Section1 = () => {
  return (
    <div className="relative py-20 border-y-2 border-indigo-700">
      {/* Background with Gradient */}
      <div className="absolute inset-0 -z-10">
        <div
          className="w-full h-full opacity-40"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dvhcaimzt/image/upload/v1732973071/IMG-20241129-WA0034_vff8lk.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
          aria-hidden="true"
        ></div>
      </div>

      {/* Content Section */}
      <section
        className="max-w-7xl rounded-xl mx-auto bg-gradient-to-tr from-indigo-300 via-purple-200 to-pink-300 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 p-10 px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col md:flex-row gap-10 xl:gap-14"
        aria-labelledby="section1-title"
      >
        {/* Text Content */}
        <div className="flex flex-1 flex-col gap-5">
          <h2
            id="section1-title"
            className="text-4xl font-bold text-gray-900 dark:text-gray-100"
          >
            Providing Comprehensive and Innovative Solutions Across Industries
          </h2>
          <p className="text-gray-800 dark:text-gray-100 text-justify">
            From mechanical and engineering works to civil projects and metal
            forming & fabrication, we deliver outstanding services that meet
            your project needs with the highest standards of quality and
            innovation. Our goal is to achieve efficiency and deliver tailored
            solutions that exceed your expectations.
          </p>

          {/* Services with Gradient Borders */}
          <div className="space-y-3">
            {/* Mechanical Works */}
            <div
              className="block p-5 hover:-translate-y-1 duration-300 rounded-md bg-white dark:bg-slate-800 shadow-lg border border-transparent hover:border-transparent hover:shadow-md transition-all ease-in-out border-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-700 dark:to-purple-700"
              aria-labelledby="mechanical-works"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded bg-gradient-to-br from-indigo-500 to-purple-500">
                  <IoSettingsSharp className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3
                    id="mechanical-works"
                    className="text-lg font-semibold text-gray-900 dark:text-gray-100"
                  >
                    Mechanical Works
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-justify">
                    We provide integrated solutions for the design and execution
                    of mechanical systems for various industries.
                  </p>
                </div>
              </div>
            </div>

            {/* Civil Works */}
            <div
              className="block p-5 hover:-translate-y-1 duration-300 rounded-md bg-white dark:bg-slate-800 shadow-lg border border-transparent hover:border-transparent hover:shadow-md transition-all ease-in-out border-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-700 dark:to-pink-700"
              aria-labelledby="civil-works"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded bg-gradient-to-br from-purple-500 to-pink-500">
                  <FaTools className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3
                    id="civil-works"
                    className="text-lg font-semibold text-gray-900 dark:text-gray-100"
                  >
                    Civil Works
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-justify">
                    We carry out civil works including building structures and
                    infrastructure with the highest quality standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Metal Forming & Fabrication */}
            <div
              className="block p-5 hover:-translate-y-1 duration-300 rounded-md bg-white dark:bg-slate-800 shadow-lg border border-transparent hover:border-transparent hover:shadow-md transition-all ease-in-out border-gradient-to-r from-pink-500 to-indigo-500 dark:from-pink-700 dark:to-indigo-700"
              aria-labelledby="metal-fabrication"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded bg-gradient-to-br from-pink-500 to-indigo-500">
                  <GiFactory className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3
                    id="metal-fabrication"
                    className="text-lg font-semibold text-gray-900 dark:text-gray-100"
                  >
                    Metal Forming & Fabrication
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-justify">
                    At our factory, we offer metal forming, spare part
                    manufacturing, and fabrication of metal structures using the
                    latest technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div
          className="w-full md:h-auto object-cover flex md:items-end justify-center md:w-1/2 xl:w-[45%] relative"
          aria-hidden="true"
        >
          <div className="absolute inset-x-0 bottom-0 h-2/4 bg-gradient-to-tr from-gray-100 to-gray-300 dark:from-slate-900 dark:to-slate-700 rounded-3xl"></div>
          <Image
            src="https://res.cloudinary.com/dvhcaimzt/image/upload/v1732971157/oocqdgtbi2wkosg1te77.png"
            width={700}
            height={700}
            alt="Human working on metal fabrication"
            className="w-full h-auto lg:w-[90%] relative"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default Section1;
