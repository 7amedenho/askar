import Image from "next/image";
import Link from "next/link";
import Contact from "../components/Sections/Contact";
import Head from "next/head";

export default function ContactUs() {
  return (
    <>
      {/* تحسين SEO */}
      <Head>
      <title>Contact Us | Askar Group General Contracting</title>
        <meta
          name="description"
          content="Get in touch with our team for tailored solutions to your business needs. We're here to help you achieve your goals."
        />
        <meta name="keywords" content="Contact, Support, Business Solutions, Communication" />
        <meta name="author" content="Askar Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://yourdomain.com/contact-us" />
      </Head>

      <main className="bg-gradient-to-br dark:from-slate-900 via-gray-800 to-gray-900 overflow-hidden pt-44">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-20">
          <svg
            className="absolute top-0 left-0 w-64 h-64 text-indigo-500 opacity-30"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            fill="currentColor"
            aria-hidden="true"
          >
            <circle cx="100" cy="100" r="100" />
          </svg>
          <svg
            className="absolute bottom-0 right-0 w-96 h-96 text-indigo-700 opacity-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            fill="currentColor"
            aria-hidden="true"
          >
            <polygon points="100,0 200,200 0,200" />
          </svg>
        </div>

        {/* Hero Section */}
        <section className="py-4 mt-14 sm:mt16 lg:mt-0">
          <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 grid lg:grid-cols-2 lg:items-center gap-10">
            <div className="flex flex-col space-y-8 sm:space-y-10 lg:items-center text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto">
              <h1 className="font-semibold leading-tight text-gray-900 dark:text-white text-4xl sm:text-5xl lg:text-6xl">
                We'll be happy to take care of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-tr from-pink-700 to-indigo-600">
                  your work.
                </span>
              </h1>
              <p className="text-gray-700 dark:text-gray-300 tracking-tight md:font-normal max-w-xl mx-auto lg:max-w-none">
                At our company, we place great importance on providing effective
                and accessible communication channels with our clients. We are
                here to listen to your needs and offer tailored solutions with
                the highest standards of quality and professionalism. Whether through
                phone, email, or social media, we are always ready to respond quickly.
              </p>
            </div>
            {/* Hero Images */}
            <div className="flex aspect-square lg:aspect-auto lg:h-[35rem] relative">
              <div className="w-3/5 h-[80%] rounded-3xl overflow-hidden border-8 border-gray-200 dark:border-slate-800 z-30">
                <Image
                  src="https://res.cloudinary.com/dvhcaimzt/image/upload/v1732973096/IMG-20241129-WA0050_ebxwog.jpg"
                  alt="Building plan"
                  width={1300}
                  height={1300}
                  className="w-full h-full object-cover z-30"
                  priority
                />
              </div>
              <div className="absolute right-0 bottom-0 h-[calc(100%-50px)] w-4/5 rounded-3xl overflow-hidden border-4 border-gray-200 dark:border-gray-800 z-10">
                <Image
                  src="https://res.cloudinary.com/dvhcaimzt/image/upload/v1732973092/IMG-20241129-WA0040_ymfcca.jpg"
                  alt="Working on a housing project"
                  height={1300}
                  width={1300}
                  className="z-10 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Contact Us
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-12">
            Our friendly team is always here to help. Get in touch with us via any
            of the following methods.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
            {/* Contact Methods */}
            {[
              {
                title: "Email",
                description: "askar@info.com",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                ),
              },
              {
                title: "Phone",
                description: "03 4770952",
              },
              // Add more methods here...
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
              >
                <span className="p-4 bg-purple-100 text-purple-700 rounded-full">
                  {item.icon}
                </span>
                <h2 className="mt-4 text-xl font-medium text-gray-800 dark:text-white">
                  {item.title}
                </h2>
                <p className="text-purple-600 dark:text-purple-400 mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <Contact />
      </main>
    </>
  );
}
