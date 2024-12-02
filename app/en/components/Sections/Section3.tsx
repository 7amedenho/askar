import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <section className="relative py-16 lg:py-20 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-slate-900 dark:via-gray-800 dark:to-gray-900 border-y-2 border-indigo-700">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
          {/* Background Highlights */}
          <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
            <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-pink-500 dark:bg-pink-500 blur-xl opacity-60 lg:opacity-95 hidden" />
            <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-indigo-600 dark:bg-indigo-600 blur-xl opacity-80" />
          </div>
          <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-indigo-600 to-pink-500 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90" />
          
          {/* Text Section */}
          <div
            className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 
      lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl xl:text-5xl
   font-bold text-gray-900 dark:text-white"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 via-blue-600 to-pink-500">
                Askar Factory{" "}
              </span>
              for Metal Forming & Processing
            </h1>
            <p className="mt-8 text-gray-600 dark:text-gray-300 text-justify">
              At Askar Factory, we take pride in being a modern, fully-equipped
              facility offering integrated solutions for metal forming and
              precision machining. Our advanced technologies and expertise
              enable us to cater to diverse industrial needs, delivering
              reliable, high-quality, and innovative services. From custom
              designs to large-scale production, we are committed to excellence
              in every detail.
            </p>
            <div className="mt-10 flex max-w-md mx-auto lg:mx-0">
              <button
                className="w-full py-3 px-6 bg-transparent border border-indigo-600 hover:bg-indigo-700 hover:text-white dark:text-white text-indigo-700 font-semibold rounded-lg shadow-lg transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
            <Image
              src="https://res.cloudinary.com/dvhcaimzt/image/upload/c_fill,w_1880,h_1880,ar_1:1,e_improve,e_sharpen/v1732973071/IMG-20241129-WA0034_vff8lk.jpg"
              alt="Askar Factory - Metal Forming and Precision Machining"
              width={600}
              height={600}
              className="lg:absolute lg:w-full lg:h-full rounded-3xl object-fill lg:max-h-none max-h-96"
              loading="lazy" // Lazy loading
            />
          </div>
        </div>
      </section>
      <meta
        name="description"
        content="Askar Factory offers integrated solutions for metal forming and precision machining, delivering high-quality, innovative services."
      />
    </>
  );
}
