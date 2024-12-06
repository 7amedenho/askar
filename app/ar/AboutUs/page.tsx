import Image from "next/image";
import { GiFactory } from "react-icons/gi";
import { IoSettingsSharp } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";
import Contact from "@/app/ar/components/Sections/Contact";
import Section3 from "../components/Sections/Section3";
import Loaderar from "@/components/ui/Loaderar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "من نحن؟"
};
export default function AboutUs() {
  return (
    <>
      <Head>
        <title>من نحن | مجموعة عسكر للمقاولات العامة</title>
        <meta
          name="description"
          content="تعرف أكثر عن مجموعة عسكر للمقاولات العامة، شركة مصرية رائدة في الأعمال الميكانيكية والمدنية."
        />
        <meta name="keywords" content="اتصال, من نحن, عسكر, تعلم أكثر" />
        <meta name="author" content="مجموعة عسكر" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://yourdomain.com/AboutUs" />
      </Head>
      <Loaderar Logo={"/logoDM.png"}/>
      <div>
        <div className="bg-gray-50 dark:bg-gray-900">
          {/* Hero Section */}
          <div
            className="w-full bg-center bg-cover h-[38rem] relative"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dvhcaimzt/image/upload/v1732973050/IMG-20241021-WA0031_hspd7d.jpg')",
              backgroundSize: "fill",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              backgroundBlendMode: "overlay",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex items-center justify-center w-full h-full">
              <div className="text-center">
                <h1 className="text-4xl font-semibold text-white lg:text-6xl">
                  من نحن
                </h1>
              </div>
            </div>
          </div>

          {/* About Section */}
          <section className="relative pt-10 xl:pt-14">
            <div className="w-full mb-12 mx-auto text-center md:w-2/3">
              <h2 className="text-4xl font-bold text-purple-700 dark:text-purple-400">
                من نحن؟
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-8">
                <p className="text-lg text-gray-800 dark:text-gray-300 text-justify">
                  تأسست مجموعة عسكر للمقاولات العامة في عام 2004، وهي شركة مصرية
                  رائدة في الأعمال الميكانيكية والمدنية. يقع مقر الشركة في
                  الإسكندرية، وقد بنت سمعة قوية في تقديم حلول شاملة ومبتكرة عبر
                  مختلف الصناعات. مع التزامنا بالجودة والابتكار والكفاءة، تجمع
                  مجموعة عسكر بين سنوات من الخبرة والتكنولوجيا الحديثة لتلبية
                  متطلبات المشاريع المتنوعة. تشمل خدمات الشركة الأنظمة
                  الميكانيكية، الإنشاءات المدنية، وتشكيل المعادن وتصنيع الهياكل
                  المعدنية، مما يضمن للعملاء حلولًا مخصصة تتماشى مع احتياجاتهم
                  الفريدة.
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
                في قلب عمليات مجموعة عسكر فريق مكون من أكثر من 250 محترفًا
                ماهرًا يعملون معًا للحفاظ على أعلى معايير التميز. مع أكثر من 20
                عامًا من الخبرة ومحفظة تضم أكثر من 300 مشروع ناجح، أصبحت مجموعة
                عسكر للمقاولات العامة شريكًا موثوقًا به للأعمال التي تبحث عن
                حلول موثوقة ومتقدمة. رؤية الشركة هي أن تصبح رائدة في مجال
                المقاولات العامة والأعمال الميكانيكية، مدفوعة بالابتكار والجودة
                والاستدامة. سواء كان الأمر يتعلق بتصميم الأنظمة الميكانيكية أو
                إنشاء البنية التحتية أو تصنيع الهياكل المعدنية، فإن مجموعة عسكر
                للمقاولات العامة تلتزم بتجاوز توقعات العملاء والمساهمة في نجاح
                كل مشروع. لمزيد من المعلومات أو لمناقشة احتياجات مشروعك، لا
                تتردد في الاتصال بفريق عسكر اليوم.
              </p>
            </div>
          </section>

          {/* Services Section */}
          <section className="bg-gradient-to-r from-purple-100 to-purple-300 dark:from-purple-800 dark:to-purple-900 py-24 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto text-center">
              <p className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
                What We Do
              </p>
              <div className="grid gap-10 lg:grid-cols-3">
                {[
                  {
                    title: "الأعمال الميكانيكية",
                    description:
                      "حلول متكاملة لتصميم وتنفيذ الأنظمة الميكانيكية عبر الصناعات المختلفة.",
                    icon: IoSettingsSharp,
                  },
                  {
                    title: "الأعمال المدنية",
                    description:
                      "حلول عالية الجودة للبنية التحتية والبناء، مخصصة لتلبية متطلبات المشاريع.",
                    icon: FaTools,
                  },
                  {
                    title: "تشكيل المعادن وتصنيعها",
                    description:
                      "خدمات متقدمة في تشكيل المعادن وتصنيع الهياكل المعدنية، بما في ذلك تصنيع قطع الغيار.",
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
          <Section3 />
          <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-12 mx-auto">
              <div className="text-center">
                <p className="font-medium text-indigo-500 dark:text-indigo-400">
                  اتصل بنا
                </p>

                <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
                  تواصل معنا
                </h1>

                <p className="mt-3 text-gray-500 dark:text-gray-400">
                  فريقنا الودود هنا دائمًا للحديث.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 lg:grid-cols-5">
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
                    البريد الالكتروني
                  </p>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    فريقنا الودود هنا دائمًا للحديث.
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
                    مقر الشركة
                  </p>

                  <p className="mt-2 text-indigo-500 dark:text-indigo-400">
                    الإسكندرية - العامرية - طريق النهضة - الكرنك 1
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
                    الرقم الأرضي
                  </p>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    من 10 صباحا الى 6 مساء
                  </p>
                  <p
                    className="mt-2 text-indigo-500 dark:text-indigo-400"
                    dir="ltr"
                  >
                    03 4770952
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
                    واتس اب
                  </p>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    24 ساعة
                  </p>
                  <Link href={"https://wa.me/201000459052"}>
                    <p
                      className="mt-2 text-indigo-500 dark:text-indigo-400"
                      dir="ltr"
                    >
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
                    الهاتف
                  </p>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    24 ساعة
                  </p>
                  <Link href="tel:+201228171485">
                    <p
                      className="mt-2 text-indigo-500 dark:text-indigo-400"
                      dir="ltr"
                    >
                      +20 1228 171 485
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <Contact />
        </div>
      </div>
    </>
  );
}
