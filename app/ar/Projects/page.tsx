import { Metadata } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "المشاريع",
};
const PorfolioSection = () => {
  return (
    <>
    <Head>
        <title>المشاريع  | شركة عسكر للمقاولات العامة</title>
        <meta
          name="description"
          content="تعرف أكثر عن مجموعة عسكر للمقاولات العامة، شركة مصرية رائدة في الأعمال الميكانيكية والمدنية."
        />
        <meta name="keywords" content="مشاريع,  اعمال عسكر, عسكر,  عسكر جروب" />
        <meta name="author" content="مجموعة عسكر" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://askargroups/ar/Projects" />
      </Head>
    <section className="py-44 relative bg-gradient-to-br dark:from-slate-900 via-gray-800 to-gray-900 overflow-hidden">
      <section className="py-4 mt-14 sm:mt16 lg:mt-0">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 grid lg:grid-cols-2 lg:items-center gap-10">
          <div className="flex flex-col space-y-8 sm:space-y-10 lg:items-center text-right lg:text-left max-w-2xl md:max-w-3xl mx-auto">
            <h1 className="font-semibold leading-tight text-gray-900 text-right dark:text-white text-4xl sm:text-5xl lg:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-pink-700 to-indigo-600">
                مشاريعنا المتميزة:
              </span>{" "}
              نجاحات تبرز في كل زاوية
            </h1>
            <p className="text-gray-700 dark:text-gray-300 tracking-tight text-justify md:font-normal max-w-xl mx-auto lg:max-w-none">
              شركة عسكر تواصل الابتكار والنمو في جميع مشاريعها، حيث تلتزم بتقديم
              خدمات عالية الجودة باستخدام أحدث التقنيات وأفضل الممارسات
              العالمية. نسعى دائمًا إلى تحسين الأداء وتعزيز الشراكات مع عملائنا
              لضمان تحقيق النجاح المستدام في المستقبل.{" "}
            </p>
          </div>
          {/* صور البطل */}
          <div className="flex aspect-square lg:aspect-auto lg:h-[35rem] relative">
            <div className="w-3/5 h-[80%] rounded-3xl overflow-hidden border-8 border-gray-200 dark:border-slate-800 z-20">
              <Image
                src="https://res.cloudinary.com/dvhcaimzt/image/upload/w_600/v1733495894/IMG-20241206-WA0011_b64v0h.jpg"
                alt="خطة البناء"
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
                alt="العمل على مشروع سكني"
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

      <div className=" mx-auto text-center px-5 sm:px-10 md:px-12 lg:px-5 space-y-16 py-3">
        <div className="lspace-y-3">
          <h1 className="text-3xl/tight sm:text-4xl/tight font-bold text-gray-900 dark:text-white">
            أحدث وأفضل مشاريعنا
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            نحن نقدم مشاريع مدنية وميكانيكية عالية المستوى، مع ضمان التميز
            والموثوقية والابتكار في كل تفصيل.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          <Link href="/ar/Projects/1" className="rounded-lg">
            <div className="relative p-5 sm:p-6 border border-indigo-300 dark:border-gray-600  hover:-translate-y-2 duration-300 md:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 space-y-6">
              <Image
                src="https://res.cloudinary.com/dvhcaimzt/image/upload/q_auto,f_auto,w_600/v1733550653/image13_u6aacm.jpg"
                alt="project cover"
                width={600}
                height={600}
                className="w-full aspect-[4/3.3] rounded object-cover"
              />
              <div className="flex flex-col justify-end space-y-5 text-gray-300">
                <h1 className="font-semibold text-2xl text-gray-900 dark:text-white">
                  Civil Work at Poiler Stack
                </h1>
              </div>
            </div>
          </Link>
          <Link href="/ar/Projects/2" className="rounded-lg">
            <div className="relative p-5 sm:p-6 border border-indigo-300 dark:border-gray-600  hover:-translate-y-2 duration-300 md:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 space-y-6">
              <Image
                src="https://res.cloudinary.com/dvhcaimzt/image/upload/q_auto,f_auto,w_600/v1733550643/image6_vcvyut.jpg"
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
          <Link href="/ar/Projects/3" className="rounded-lg">
            <div className="relative p-5 sm:p-6 border border-indigo-300 dark:border-gray-600  hover:-translate-y-2 duration-300 md:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 space-y-6">
              <Image
                src="https://res.cloudinary.com/dvhcaimzt/image/upload/q_auto,f_auto,w_600/v1733550639/image4_ffiazr.jpg"
                alt="project cover"
                width={600}
                height={600}
                className="w-full aspect-[4/3.3] rounded object-cover"
              />
              <div className="flex flex-col justify-end space-y-5 text-gray-300">
                <h1 className="font-semibold text-2xl text-gray-900 dark:text-white">
                  Painting silo outside
                </h1>
              </div>
            </div>
          </Link>
          <Link href="/ar/Projects/4" className="rounded-lg">
            <div className="relative p-5 sm:p-6 border border-indigo-300 dark:border-gray-600  hover:-translate-y-2 duration-300 md:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 space-y-6">
              <Image
                src="https://res.cloudinary.com/dvhcaimzt/image/upload/q_auto,f_auto,w_600/v1733550594/image_1_eoxjgm.jpg"
                alt="project cover"
                width={600}
                height={600}
                className="w-full aspect-[4/3.3] rounded object-cover"
              />
              <div className="flex flex-col justify-end space-y-5 text-gray-300">
                <h1 className="font-semibold text-xl text-gray-900 dark:text-white">
                  Foundation For Oil Pump at AFCO Tank
                </h1>
              </div>
            </div>
          </Link>
          <Link href="/ar/Projects/5" className="rounded-lg">
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
                  Foundation for mixed ped at DM plant
                </h1>
              </div>
            </div>
          </Link>
          <Link href="/ar/Projects/6" className="rounded-lg">
            <div className="relative p-5 sm:p-6 border border-indigo-300 dark:border-gray-600  hover:-translate-y-2 duration-300 md:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 space-y-6">
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
          <Link href="/ar/Projects/7" className="rounded-lg">
            <div className="relative p-5 sm:p-6 border border-indigo-300 dark:border-gray-600  hover:-translate-y-2 duration-300 md:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 space-y-6">
              <Image
                src="https://res.cloudinary.com/dvhcaimzt/image/upload/q_auto,f_auto,w_600/v1733550734/image13_fyzia6.jpg"
                alt="project cover"
                width={600}
                height={600}
                className="w-full aspect-[4/3.3] rounded object-cover"
              />
              <div className="flex flex-col justify-end space-y-5 text-gray-300">
                <h1 className="font-semibold text-2xl text-gray-900 dark:text-white">
                Fabrication erection welding handraill for silo roof
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
