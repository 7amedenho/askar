import Image from "next/image";
import { GiFactory } from "react-icons/gi";
import { IoSettingsSharp } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import Link from "next/link";

export default function AboutUs() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div
        className="w-full bg-center bg-cover h-[38rem] relative"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dvhcaimzt/image/upload/v1732973050/IMG-20241021-WA0031_hspd7d.jpg')",
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-purple-900/60">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-white lg:text-6xl">
              About Us
            </h1>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="relative pt-10 xl:pt-14">
        <div className="w-full mb-12 mx-auto text-center md:w-2/3">
          <h1 className="text-4xl font-bold text-purple-700 dark:text-purple-400">
            Who We Are?
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-8">
            <p className="text-lg text-gray-800 dark:text-gray-300 text-justify">
              Established in 2004, Askar General Contracting is a leading
              Egyptian company specializing in mechanical and civil works.
              Headquartered in Alexandria, the company has built a strong
              reputation for delivering comprehensive and innovative solutions
              across industries. With a commitment to quality, innovation, and
              efficiency, Askar combines years of expertise with cutting-edge
              technologies to meet the demands of diverse projects. The
              company's services span across mechanical systems, civil
              construction, and metal forming & fabrication, ensuring clients
              receive tailored solutions that align with their unique needs.
            </p>
            <Image
              src="/logo.png"
              className="max-w-sm mx-auto rounded-lg"
              width={300}
              height={300}
              alt="Logo"
            />
          </div>
          <p className="mt-8 text-lg text-gray-800 dark:text-gray-300 text-justify">
            At the heart of Askar’s operations is a team of over 250 skilled
            professionals who work collaboratively to uphold the highest
            standards of excellence. With over 20 years of experience and a
            portfolio of 300+ successful projects, Askar General Contracting has
            established itself as a trusted partner for businesses seeking
            reliable and forward-thinking solutions. The company’s vision is to
            become a leader in general contracting and mechanical works, driven
            by innovation, quality, and sustainability. Whether designing
            mechanical systems, constructing infrastructure, or manufacturing
            metal structures, Askar General Contracting is dedicated to
            exceeding client expectations and contributing to the success of
            every project. For more information or to discuss your project
            needs, feel free to contact the Askar team today.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gradient-to-r from-purple-100 to-purple-300 dark:from-purple-800 dark:to-purple-900 py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
            What We Do
          </h2>
          <div className="grid gap-10 lg:grid-cols-3">
            {[
              {
                title: "Mechanical Works",
                description:
                  "Integrated solutions for designing and executing mechanical systems across industries.",
                icon: IoSettingsSharp,
              },
              {
                title: "Civil Works",
                description:
                  "High-quality infrastructure and building solutions tailored to meet project demands.",
                icon: FaTools,
              },
              {
                title: "Metal Forming & Fabrication",
                description:
                  "Advanced metal forming and fabrication services, including spare parts manufacturing.",
                icon: GiFactory,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg"
              >
                <div className="flex items-center justify-center mb-4">
                  <service.icon className="w-12 h-12 text-purple-700 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col md:flex-row gap-16">
          <div className="flex md:flex-1">
            <Image
              src="https://res.cloudinary.com/dvhcaimzt/image/upload/c_pad,w_1080,h_800/v1732973057/IMG-20241129-WA0030_ohwuuy.jpg"
              alt="creative agency "
              width={600}
              height={600}
              className="w-full object-cover rounded-lg"
            />
          </div>
          <div className="md:w-1/2 space-y-12 text-gray-700 dark:text-gray-300 md:py-8">
            <h1 className="text-gray-900 dark:text-white font-semibold text-2xl sm:text-3xl md:text-4xl">
              We help drive your business forward faster
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus,
              saepe aliquid autem alias vero distinctio dignissimos consequatur?
              Excepturi quibusdam, quam ipsum hic, laudantium ducimus suscipit,
              culpa facere consequuntur repellat delectus.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <a
                href="tel:+243"
                className="flex gap-x-6 items-start"
                rel="noreferer"
              >
                <span className="p-3 md:p-3.5 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex w-max">
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
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>
                <div className="space-y-0.5 flex flex-col flex-1">
                  <p className="text-foreground">Call us</p>
                  <p className="font-semibold text-gray-900 dark:text-white text-lg">
                    +243 xx xx xx xxx
                  </p>
                </div>
              </a>
              <a
                href="mailto:"
                className="flex gap-x-6 items-start"
                rel="noreferer"
              >
                <span className="p-3 md:p-3.5 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex w-max">
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
                      d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                    />
                  </svg>
                </span>
                <div className="space-y-0.5 flex flex-col flex-1">
                  <p className="text-foreground">Send us a mail</p>
                  <p className="font-semibold text-gray-900 dark:text-white text-lg">
                    +243 xx xx xx xxx
                  </p>
                </div>
              </a>
            </div>
            <div className="flex">
              <Link
                href="#"
                className="px-5 h-11 flex items-center bg-gray-900 dark:bg-gray-100 rounded-lg text-white dark:text-gray-900"
              >
                Know more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
