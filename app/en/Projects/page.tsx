import { Metadata } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
};

const PorfolioSection = () => {
  return (
    <>
      <Head>
        <title>Projects | Askar General Contracting Company</title>
        <meta
          name="description"
          content="Learn more about Askar Group, a leading Egyptian company in mechanical and civil works."
        />
        <meta name="keywords" content="Projects, Askar Works, Askar, Askar Group" />
        <meta name="author" content="Askar Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://askargroups/en/Projects" />
      </Head>
      <section className="py-44 relative bg-gradient-to-br dark:from-slate-900 via-gray-800 to-gray-900 overflow-hidden">
        <section className="py-4 mt-14 sm:mt16 lg:mt-0">
          <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 grid lg:grid-cols-2 lg:items-center gap-10">
            <div className="flex flex-col space-y-8 sm:space-y-10 lg:items-center text-right lg:text-left max-w-2xl md:max-w-3xl mx-auto">
              <h1 className="font-semibold leading-tight text-gray-900 text-right dark:text-white text-4xl sm:text-5xl lg:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-tr from-pink-700 to-indigo-600">
                  Our Outstanding Projects:
                </span>{" "}
                Successes that Stand Out in Every Corner
              </h1>
              <p className="text-gray-700 dark:text-gray-300 tracking-tight text-justify md:font-normal max-w-xl mx-auto lg:max-w-none">
                Askar Company continues to innovate and grow in all its projects, 
                committed to providing high-quality services using the latest 
                technologies and best global practices. We always strive to improve 
                performance and strengthen partnerships with our clients to ensure 
                sustainable success in the future.
              </p>
            </div>
            {/* Hero images */}
            <div className="flex aspect-square lg:aspect-auto lg:h-[35rem] relative">
              <div className="w-3/5 h-[80%] rounded-3xl overflow-hidden border-8 border-gray-200 dark:border-slate-800 z-20">
                <Image
                  src="https://res.cloudinary.com/dvhcaimzt/image/upload/w_600/v1733495894/IMG-20241206-WA0011_b64v0h.jpg"
                  alt="Construction Plan"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover z-30"
                  loading="lazy"
                  unoptimized
                />
              </div>
              <div className="absolute right-0 bottom-0 h-[calc(100%-50px)] w-4/5 rounded-3xl overflow-hidden border-4 border-gray-200 dark:border-gray-800 z-10">
                <Image
                  src="https://res.cloudinary.com/dvhcaimzt/image/upload/w_600/v1733495964/IMG-20241206-WA0059_cqg0ev.jpg"
                  alt="Working on a Residential Project"
                  height={600}
                  width={600}
                  className="z-10 w-full h-full object-cover"
                  loading="lazy"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

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

        <div className="mx-auto text-center px-5 sm:px-10 md:px-12 lg:px-5 space-y-16 py-3">
          <div className="space-y-3">
            <h1 className="text-3xl/tight sm:text-4xl/tight font-bold text-gray-900 dark:text-white">
              Our Latest and Best Projects
            </h1>
            <p className="text-gray-700 dark:text-gray-300">
              We offer high-level civil and mechanical projects, ensuring excellence, 
              reliability, and innovation in every detail.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            <Link href="/en/Projects/0" className="rounded-lg">
              <div className="relative p-5 sm:p-6 border border-indigo-300 dark:border-gray-600 hover:-translate-y-2 duration-300 md:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 space-y-6">
                <Image
                  src="https://res.cloudinary.com/dqzcvlxzw/image/upload/v1735222549/WhatsApp_Image_2024-12-02_at_4.10.06_PM_hxwwyw.jpg"
                  alt="project cover"
                  width={600}
                  height={600}
                  className="w-full aspect-[4/3.3] rounded object-cover"
                />
                <div className="flex flex-col justify-end space-y-5 text-gray-300">
                  <h1 className="font-semibold text-2xl text-gray-900 dark:text-white">
                    Some Mechanical Works
                  </h1>
                </div>
              </div>
            </Link>
            <Link href="/en/Projects/8" className="rounded-lg">
              <div className="relative p-5 sm:p-6 border border-indigo-300 dark:border-gray-600 hover:-translate-y-2 duration-300 md:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 space-y-6">
                <Image
                  src="https://res.cloudinary.com/dqzcvlxzw/image/upload/v1735213489/IMG-20241226-WA0093_pkfgqp.jpg"
                  alt="project cover"
                  width={600}
                  height={600}
                  className="w-full aspect-[4/3.3] rounded object-cover"
                />
                <div className="flex flex-col justify-end space-y-5 text-gray-300">
                  <h1 className="font-semibold text-2xl text-gray-900 dark:text-white">
                    Maintenance and Renovation of Boiler Chimney
                  </h1>
                </div>
              </div>
            </Link>
            <Link href="/en/Projects/1" className="rounded-lg">
              <div className="relative p-5 sm:p-6 border border-indigo-300 dark:border-gray-600 hover:-translate-y-2 duration-300 md:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 space-y-6">
                <Image
                  src="https://res.cloudinary.com/dvhcaimzt/image/upload/q_auto,f_auto,w_600/v1733550653/image13_u6aacm.jpg"
                  alt="project cover"
                  width={600}
                  height={600}
                  className="w-full aspect-[4/3.3] rounded object-cover"
                />
                <div className="flex flex-col justify-end space-y-5 text-gray-300">
                  <h1 className="font-semibold text-2xl text-gray-900 dark:text-white">
                    Civil Work at Boiler Stack
                  </h1>
                </div>
              </div>
            </Link>
            <Link href="/en/Projects/2" className="rounded-lg">
              <div className="relative p-5 sm:p-6 border border-indigo-300 dark:border-gray-600 hover:-translate-y-2 duration-300 md:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 space-y-6">
                <Image
                  src="https://res.cloudinary.com/dvhcaimzt/image/upload/v1733550647/image7_xkdefy.jpg"
                  alt="project cover"
                  width={600}
                  height={600}
                  className="w-full aspect-[4/3.3] rounded object-cover"
                />
                <div className="flex flex-col justify-end space-y-5 text-gray-300">
                  <h1 className="font-semibold text-2xl text-gray-900 dark:text-white">
                    Civil Work at AFCO Tank (Ramp)
                  </h1>
                </div>
              </div>
            </Link>
            <Link href="/en/Projects/3" className="rounded-lg">
              <div className="relative p-5 sm:p-6 border border-indigo-300 dark:border-gray-600 hover:-translate-y-2 duration-300 md:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 space-y-6">
                <Image
                  src="https://res.cloudinary.com/dvhcaimzt/image/upload/q_auto,f_auto,w_600/v1733550639/image4_ffiazr.jpg"
                  alt="project cover"
                  width={600}
                  height={600}
                  className="w-full aspect-[4/3.3] rounded object-cover"
                />
                <div className="flex flex-col justify-end space-y-5 text-gray-300">
                  <h1 className="font-semibold text-2xl text-gray-900 dark:text-white">
                    Painting Silo Exterior
                  </h1>
                </div>
              </div>
            </Link>
            <Link href="/en/Projects/4" className="rounded-lg">
              <div className="relative p-5 sm:p-6 border border-indigo-300 dark:border-gray-600 hover:-translate-y-2 duration-300 md:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 space-y-6">
                <Image
                  src="https://res.cloudinary.com/dvhcaimzt/image/upload/q_auto,f_auto,w_600/v1733550594/image_1_eoxjgm.jpg"
                  alt="project cover"
                  width={600}
                  height={600}
                  className="w-full aspect-[4/3.3] rounded object-cover"
                />
                <div className="flex flex-col justify-end space-y-5 text-gray-300">
                  <h1 className="font-semibold text-xl text-gray-900 dark:text-white">
                    Foundation for Oil Pump at AFCO Tank
                  </h1>
                </div>
              </div>
            </Link>
            <Link href="/en/Projects/5" className="rounded-lg">
              <div className="relative p-5 sm:p-6 border border-indigo-300 dark:border-gray-600 hover:-translate-y-2 duration-300 md:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 space-y-6">
                <Image
                  src="https://res.cloudinary.com/dvhcaimzt/image/upload/q_auto,f_auto,w_600/v1733550802/image13_mhnfto.jpg"
                  alt="project cover"
                  width={600}
                  height={600}
                  className="w-full aspect-[4/3.3] rounded object-cover"
                />
                <div className="flex flex-col justify-end space-y-5 text-gray-300">
                  <h1 className="font-semibold text-xl text-gray-900 dark:text-white">
                    Foundation for Mixed Ped at DM Plant
                  </h1>
                </div>
              </div>
            </Link>
            <Link href="/en/Projects/6" className="rounded-lg">
              <div className="relative p-5 sm:p-6 border border-indigo-300 dark:border-gray-600 hover:-translate-y-2 duration-300 md:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 space-y-6">
                <Image
                  src="https://res.cloudinary.com/dvhcaimzt/image/upload/q_auto,f_auto,w_600/v1733550776/image9_b3jakf.jpg"
                  alt="project cover"
                  width={600}
                  height={600}
                  className="w-full aspect-[4/3.3] rounded object-cover"
                />
                <div className="flex flex-col justify-end space-y-5 text-gray-300">
                  <h1 className="font-semibold text-2xl text-gray-900 dark:text-white">
                    Fire Lines
                  </h1>
                </div>
              </div>
            </Link>
            <Link href="/en/Projects/7" className="rounded-lg">
              <div className="relative p-5 sm:p-6 border border-indigo-300 dark:border-gray-600 hover:-translate-y-2 duration-300 md:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 space-y-6">
                <Image
                  src="https://res.cloudinary.com/dvhcaimzt/image/upload/q_auto,f_auto,w_600/v1733550734/image13_fyzia6.jpg"
                  alt="project cover"
                  width={600}
                  height={600}
                  className="w-full aspect-[4/3.3] rounded object-cover"
                />
                <div className="flex flex-col justify-end space-y-5 text-gray-300">
                  <h1 className="font-semibold text-2xl text-gray-900 dark:text-white">
                    Fabrication Erection Welding Handrail for Silo Roof
                  </h1>
                </div>
              </div>
            </Link>

            <Link href="/en/Projects/9" className="rounded-lg">
              <div className="relative p-5 sm:p-6 border border-indigo-300 dark:border-gray-600 hover:-translate-y-2 duration-300 md:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 space-y-6">
                <Image
                  src="https://res.cloudinary.com/dqzcvlxzw/image/upload/v1735221603/WhatsApp_Image_2024-12-26_at_3.56.42_PM_1_j8kkxz.jpg"
                  alt="project cover"
                  width={600}
                  height={600}
                  className="w-full aspect-[4/3.3] rounded object-cover"
                />
                <div className="flex flex-col justify-end space-y-5 text-gray-300">
                  <h1 className="font-semibold text-2xl text-gray-900 dark:text-white">
                    Maintenance and Renewal of a 48-Inch Line with a Length of 100 Meters
                  </h1>
                </div>
              </div>
            </Link>
            <Link href="/en/Projects/10" className="rounded-lg">
              <div className="relative p-5 sm:p-6 border border-indigo-300 dark:border-gray-600 hover:-translate-y-2 duration-300 md:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 space-y-6">
                <Image
                  src="https://res.cloudinary.com/dqzcvlxzw/image/upload/v1735224719/WhatsApp_Image_2024-12-26_at_4.38.32_PM_2_tueuaq.jpg"
                  alt="project cover"
                  width={600}
                  height={600}
                  className="w-full aspect-[4/3.3] rounded object-cover"
                />
                <div className="flex flex-col justify-end space-y-5 text-gray-300">
                  <h1 className="font-semibold text-2xl text-gray-900 dark:text-white">
                    Tank Door Manufacturing Works
                  </h1>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PorfolioSection;
