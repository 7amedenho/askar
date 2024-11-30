import React from "react";

const Contact = () => {
  return (
    <section className="text-gray-600 dark:text-gray-200 body-font relative bg-gray-100 dark:bg-gray-900"style={{ backgroundImage: "url(&apos;/images/IMG-20241129-WA0049.jpg&apos;)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundClip: "border-box", backgroundBlendMode: "overlay"}}>
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
          <div className="bg-white dark:bg-gray-700 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 dark:text-gray-200 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">Sector 12, Alexandria, Egypt.</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 dark:text-gray-200 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-500 dark:text-indigo-400 leading-relaxed">
                contact@factory.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 dark:text-gray-200 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+20 123 456 7890</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="lg:w-1/2 p-5 md:w-1/2 rounded-lg bg-white dark:bg-gray-800 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 dark:text-gray-200 text-2xl mb-3 font-medium title-font">
            Get in Touch
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600 dark:text-gray-400">
            Have a question or want to work together? Fill the form below, and
            we&apos;ll get back to you soon!
          </p>
          {/* Name Input */}
          <div className="relative mb-4">
            <label
              htmlFor="name"
              className="leading-7 text-sm text-gray-600 dark:text-gray-400"
            >
              Name
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
              Email
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
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-100 dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-800 h-32 text-base outline-none text-gray-700 dark:text-gray-200 py-3 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          {/* Submit Button */}
          <button className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-700 dark:from-indigo-600 dark:via-purple-600 dark:to-indigo-800 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 dark:hover:bg-indigo-700 rounded-lg shadow-lg text-lg transition-all">
            Send Message
          </button>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
            Your information is safe with us. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
