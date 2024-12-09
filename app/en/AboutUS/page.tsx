import Image from "next/image";
import {GiFactory} from "react-icons/gi";
import {IoSettingsSharp} from "react-icons/io5";
import {FaTools} from "react-icons/fa";
import Head from "next/head";
import Contact from "@/app/en/components/Sections/Contact";
import Section3 from "../components/Sections/Section3";
import Loaderar from "@/components/ui/Loaderar";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "About Us",
};

export default function AboutUs() {
    return (
        <>
            <Head>
                <title>About Us | Askar General Contracting Company</title>
                <meta
                    name="description"
                    content="Learn more about Askar General Contracting Group, a leading Egyptian company in mechanical and civil works."
                />
                <meta name="keywords" content="Contact, About Us, Askar, Learn More"/>
                <meta name="author" content="Askar Group"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="canonical" href="https://askargroups/en/AboutUs"/>
            </Head>
            <Loaderar Logo={"/logoDM.png"}/>
            <div className="w-screen bg-gray-100 dark:bg-gray-900">
                {/* Hero Section */}
                <div
                    className="relative w-full h-[40rem]"
                    style={{
                        backgroundImage:
                            "url('https://res.cloudinary.com/dvhcaimzt/image/upload/v1732973050/IMG-20241021-WA0031_hspd7d.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundAttachment: "fixed",
                        backgroundBlendMode: "overlay",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className="absolute inset-0 flex items-center justify-center text-center">
                        <h1 className="text-5xl font-extrabold text-white sm:text-6xl">
                            About Us
                        </h1>
                    </div>
                </div>

                {/* About Section */}
                <section className="py-16 bg-white dark:bg-gray-800">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="text-center">
                            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                                About Us
                            </h2>
                        </div>
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <p className="text-lg text-gray-600 dark:text-gray-300 text-justify">
                                    Askar General Contracting Group was established in 2004 and is a leading Egyptian
                                    company
                                    in mechanical and civil works. Askar Group headquarters is located in Alexandria,
                                    and it
                                    has built a strong reputation for providing comprehensive and innovative solutions
                                    across
                                    various industries. With our commitment to quality, innovation, and efficiency,
                                    Askar Group
                                    combines years of experience and modern technology to meet the demands of diverse
                                    projects.
                                    Askar Group services include mechanical systems, civil construction, metal
                                    forming, and
                                    manufacturing steel structures, ensuring that clients receive customized solutions
                                    tailored
                                    to their unique needs.
                                </p>
                                <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 text-justify">
                                    At the heart of Askar Group’s operations is a team of over 250 skilled professionals
                                    working
                                    together to maintain the highest standards of excellence. With over 20 years of
                                    experience
                                    and a portfolio of more than 300 successful projects, Askar General Contracting
                                    Group has
                                    become a trusted partner for businesses looking for reliable and advanced solutions.
                                    Askar Group vision is to become a leader in the field of general contracting and
                                    mechanical
                                    works, driven by innovation, quality, and sustainability. Whether it’s designing
                                    mechanical
                                    systems, building infrastructure, or manufacturing steel structures, Askar General
                                    Contracting
                                    Group is committed to exceeding client expectations and contributing to the success
                                    of each
                                    project. For more information or to discuss your project needs, feel free to contact
                                    the Askar
                                    team today.
                                </p>
                            </div>
                            <div className="flex justify-center sm:scale-150">
                                <Image
                                    src="/logoCol.png"
                                    alt="Logo"
                                    width={300}
                                    height={300}
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section
                    className="py-16 bg-gradient-to-b from-purple-100 to-purple-300 dark:from-purple-800 dark:to-purple-900">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">
                            Our Services
                        </h2>
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {[{
                                title: "Mechanical Works",
                                description:
                                    "Integrated solutions for designing and implementing mechanical systems across various industries.",
                                icon: IoSettingsSharp,
                            },
                                {
                                    title: "Civil Works",
                                    description:
                                        "High-quality solutions for infrastructure and construction, customized to meet project requirements.",
                                    icon: FaTools,
                                },
                                {
                                    title: "Metal Forming and Manufacturing",
                                    description:
                                        "Advanced services in metal forming and manufacturing steel structures, including spare parts manufacturing.",
                                    icon: GiFactory,
                                }].map((service, index) => (
                                <div
                                    key={index}
                                    className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg"
                                >
                                    <div className="flex justify-center mb-6">
                                        <service.icon className="w-12 h-12 text-purple-700 dark:text-purple-400"/>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                                        {service.title}
                                    </h3>
                                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Additional Section */}
                <Section3/>

                {/* Contact Section */}
                <Contact/>
            </div>
        </>
    );
}
