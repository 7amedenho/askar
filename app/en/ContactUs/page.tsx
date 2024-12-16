import Image from "next/image";
import Contact from "../components/Sections/Contact";
import Head from "next/head";
import Link from "next/link";
import Loaderar from "@/components/ui/Loaderar";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Contact Us",
};

export default function ContactUs() {
    return (
        <>
            {/* SEO Optimization */}
            <Head>
                <title>Contact Us | Askar General Contracting Company</title>
                <meta
                    name="description"
                    content="Contact our team for tailored solutions to meet your business needs. We are here to help you achieve your goals."
                />
                <meta name="keywords" content="Contact, Support, Business Solutions, Communication"/>
                <meta name="author" content="Askar Group"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="canonical" href="https://askarconstruction.com/en/ContactUs"/>
            </Head>

            <Loaderar Logo={"/logoDM.png"}/>

            <main className="bg-gradient-to-br dark:from-slate-900 via-gray-800 to-gray-900 overflow-hidden pt-44">
                {/* Background Effects */}
                <div className="absolute inset-0 opacity-20">
                    <svg
                        className="absolute top-0 left-0 w-64 h-64 text-indigo-500 opacity-30"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 200 200"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <circle cx="100" cy="100" r="100"/>
                    </svg>
                    <svg
                        className="absolute bottom-0 right-0 w-96 h-96 text-indigo-700 opacity-20"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 200 200"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <polygon points="100,0 200,200 0,200"/>
                    </svg>
                </div>

                {/* Hero Section */}
                <section className="py-4 mt-14 sm:mt16 lg:mt-0">
                    <div
                        className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 grid lg:grid-cols-2 lg:items-center gap-10">
                        <div
                            className="flex flex-col space-y-8 sm:space-y-10 lg:items-center text-left lg:text-left max-w-2xl md:max-w-3xl mx-auto">
                            <h1 className="font-semibold leading-tight text-gray-900 text-left dark:text-white text-4xl sm:text-5xl lg:text-6xl">
                                We are happy to take care of
                                <span
                                    className="text-transparent mx-1 bg-clip-text bg-gradient-to-tr from-pink-700 to-indigo-600">
                  your business.
                </span>
                            </h1>
                            <p className="text-gray-700 dark:text-gray-300 tracking-tight text-justify md:font-normal max-w-xl mx-auto lg:max-w-none">
                                At our company, we prioritize providing effective and easy communication channels with
                                our customers. We are here to listen to your needs and offer tailored solutions based on
                                the highest standards of quality and professionalism. Whether by phone, email, or social
                                media, we are always ready to respond quickly.
                            </p>
                        </div>

                        {/* Hero Images */}
                        <div className="flex aspect-square lg:aspect-auto lg:h-[35rem] relative">
                            <div
                                className="w-3/5 h-[80%] rounded-3xl overflow-hidden border-8 border-gray-200 dark:border-slate-800 z-20">
                                <Image
                                    src="https://res.cloudinary.com/dvhcaimzt/image/upload/v1732973096/IMG-20241129-WA0050_ebxwog.jpg"
                                    alt="Construction Plan"
                                    width={1300}
                                    height={1300}
                                    className="w-full h-full object-cover z-30"
                                    priority
                                />
                            </div>
                            <div
                                className="absolute right-0 bottom-0 h-[calc(100%-50px)] w-4/5 rounded-3xl overflow-hidden border-4 border-gray-200 dark:border-gray-800 z-10">
                                <Image
                                    src="https://res.cloudinary.com/dvhcaimzt/image/upload/v1732973092/IMG-20241129-WA0040_ymfcca.jpg"
                                    alt="Working on a residential project"
                                    height={1300}
                                    width={1300}
                                    className="z-10 w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Information Section */}
                <section className="bg-white dark:bg-gray-900">
                    <div className="container px-6 py-12 mx-auto">
                        <div className="text-center">
                            <p className="font-medium text-indigo-500 dark:text-indigo-400">
                                Contact Us
                            </p>

                            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
                                Get in Touch
                            </h1>

                            <p className="mt-3 text-gray-500 dark:text-gray-400">
                                Our team is always here to talk.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 lg:grid-cols-5">
                            {/* Contact Information Cards */}
                            {/* Email */}
                            <div className="flex flex-col items-center justify-center text-center">
                <span className="p-3 text-indigo-500 rounded-full bg-indigo-100/80 dark:bg-gray-800">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                                <p className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                                    Email
                                </p>
                                <p className="mt-2 text-gray-500 dark:text-gray-400">
                                    Our team is always here to talk.
                                </p>
                                <p className="mt-2 text-indigo-500 dark:text-indigo-400">
                                    askar@info.com
                                </p>
                            </div>


                            <div className="flex flex-col items-center justify-center text-center">
                <span className="p-3 text-indigo-500 rounded-full bg-indigo-100/80 dark:bg-gray-800">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>

                                <p className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                                    Company Location
                                </p>

                                <p className="mt-2 text-indigo-500 dark:text-indigo-400">
                                    Alexandria - Al-Amereya - Nahda Road - Karnak 1
                                </p>

                            </div>

                            <div className="flex flex-col items-center justify-center text-center">
                <span className="p-3 text-indigo-500 rounded-full bg-indigo-100/80 dark:bg-gray-800">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>

                                <p className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                                    Landline Number
                                </p>
                                <p className="mt-2 text-gray-500 dark:text-gray-400">
                                    From 10 AM to 6 PM
                                </p>

                                <Link href="tel:034770952">
                                    <p
                                        className="mt-2 text-indigo-500 dark:text-indigo-400"
                                        dir="ltr"
                                    >
                                        03 4770952
                                    </p>
                                </Link>
                            </div>
                            <div className="flex flex-col items-center justify-center text-center">
                <span className="p-3 text-indigo-500 rounded-full bg-indigo-100/80 dark:bg-gray-800">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>

                                <p className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                                    WhatsApp
                                </p>
                                <p className="mt-2 text-gray-500 dark:text-gray-400">
                                    24/7
                                </p>
                                <Link href={"https://wa.me/201000459052"}>
                                    <p className="mt-2 text-indigo-500 dark:text-indigo-400" dir="ltr">
                                        +20 1000 459 052
                                    </p>
                                </Link>

                            </div>
                            <div className="flex flex-col items-center justify-center text-center">
                <span className="p-3 text-indigo-500 rounded-full bg-indigo-100/80 dark:bg-gray-800">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>

                                <p className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                                    Phone
                                </p>
                                <p className="mt-2 text-gray-500 dark:text-gray-400">
                                    24/7
                                </p>
                                <Link href="tel:+201228171485">
                                    <p className="mt-2 text-indigo-500 dark:text-indigo-400" dir="ltr">
                                        +20 1228 171 485
                                    </p>
                                </Link>

                            </div>
                        </div>
                    </div>
                </section>

                {/* نموذج الاتصال */}
                <Contact/>
            </main>
        </>
    );
}
