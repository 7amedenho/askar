import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section
      className="text-gray-600 dark:text-gray-200 body-font relative bg-gray-100 dark:bg-gray-900"
      style={{
        backgroundImage: "url('/images/IMG-20241129-WA0049.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundClip: "border-box",
        backgroundBlendMode: "overlay",
      }}
    dir="ltr">
      <div></div>
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        {/* Map Section */}
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 dark:bg-gray-800 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?..."
          ></iframe>
          <div className="bg-white dark:bg-gray-700 relative flex flex-wrap py-6 rounded shadow-md" dir="rtl">
            <div className="w-full lg:w-1/2 px-6 mb-4 lg:mb-0">
              <h2 className="font-semibold text-gray-900 dark:text-gray-200 tracking-widest text-xs">
                العنوان
              </h2>
              <p className="mt-1 text-sm">
                الإسكندرية – العامرية – طريق النهضة – الكرنك 1
              </p>
            </div>
            <div className="w-full lg:w-1/2 px-6 mb-4 lg:mb-0">
              <h2 className="font-semibold text-gray-900 dark:text-gray-200 tracking-widest text-xs">
                البريد الإلكتروني
              </h2>
              <h2 className="text-indigo-500 dark:text-indigo-400 leading-relaxed">
                askar@info.com
              </h2>
            </div>
            <div className="w-full lg:w-1/2 px-6 mb-4 lg:mb-0 flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <h2 className="font-semibold text-gray-900 dark:text-gray-200 tracking-widest text-xs">
                  الهاتف
                </h2>
                <p className="text-indigo-500 dark:text-indigo-400 leading-relaxed text-xs px-2" dir="ltr">
                  03 4770952
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-6 mb-4 lg:mb-0 flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <h2 className="font-semibold text-gray-900 dark:text-gray-200 tracking-widest text-xs">
                  واتساب
                </h2>
                <Link href="https://wa.me/+201000459052" target="_blank">
                  <p className="text-indigo-500 dark:text-indigo-400 leading-relaxed text-xs px-2" dir="ltr">
                    +20 1000 459 052
                  </p>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-6 flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <h2 className="font-semibold text-gray-900 dark:text-gray-200 tracking-widest text-xs">
                  موبايل
                </h2>
                <Link href="tel:+201228171485">
                  <p className="text-indigo-500 dark:text-indigo-400 leading-relaxed text-xs px-2" dir="ltr">
                  +20 1228 171 485 
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="lg:w-1/2 p-5 md:w-1/2 rounded-lg bg-white dark:bg-gray-800 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0" dir="rtl">
          <h2 className="text-gray-900 dark:text-gray-200 text-2xl mb-3 font-medium title-font">
            تواصل مع شركة أسكار
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600 dark:text-gray-400">
            لديك سؤال أو ترغب في التعاون؟ قم بملء النموذج أدناه وسنرد عليك قريبًا!
          </p>
          {/* Name Input */}
          <div className="relative mb-4">
            <label
              htmlFor="name"
              className="leading-7 text-sm text-gray-600 dark:text-gray-400"
            >
              الاسم
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-100 dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-800 text-base outline-none text-gray-700 dark:text-gray-200 py-3 px-4 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          {/* Email Input */}
          <div className="relative mb-4">
            <label
              htmlFor="email"
              className="leading-7 text-sm text-gray-600 dark:text-gray-400"
            >
              البريد الإلكتروني
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-800 text-base outline-none text-gray-700 dark:text-gray-200 py-3 px-4 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          {/* Message Textarea */}
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600 dark:text-gray-400"
            >
              الرسالة
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-100 dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-800 h-32 text-base outline-none text-gray-700 dark:text-gray-200 py-3 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          {/* Submit Button */}
          <button className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-700 dark:from-indigo-600 dark:via-purple-600 dark:to-indigo-800 border-0 py-3 px-6 hover:opacity-50 rounded-lg shadow-lg text-lg">
            إرسال الرسالة
          </button>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
            معلوماتك آمنة لدينا. لا يوجد رسائل مزعجة.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
