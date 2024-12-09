import Image from "next/image";
import {GiFactory} from "react-icons/gi";
import {IoSettingsSharp} from "react-icons/io5";
import {FaTools} from "react-icons/fa";
import Head from "next/head";
import Contact from "@/app/ar/components/Sections/Contact";
import Section3 from "../components/Sections/Section3";
import Loaderar from "@/components/ui/Loaderar";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "من نحن؟",
};

export default function AboutUs() {
    return (
        <>
            <Head>
                <title>من نحن | شركة عسكر للمقاولات العامة</title>
                <meta
                    name="description"
                    content="تعرف أكثر عن مجموعة عسكر للمقاولات العامة، شركة مصرية رائدة في الأعمال الميكانيكية والمدنية."
                />
                <meta name="keywords" content="اتصال, من نحن, عسكر, تعلم أكثر"/>
                <meta name="author" content="مجموعة عسكر"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="canonical" href="https://askargroups/ar/AboutUs"/>
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
                            من نحن
                        </h1>
                    </div>
                </div>

                {/* About Section */}
                <section className="py-16 bg-white dark:bg-gray-800">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="text-center">
                            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                                من نحن؟
                            </h2>
                        </div>
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <p className="text-lg text-gray-600 dark:text-gray-300 text-justify">
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
                                <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 text-justify">
                                    في قلب عمليات مجموعة عسكر فريق مكون من أكثر من 250 محترفًا
                                    ماهرًا يعملون معًا للحفاظ على أعلى معايير التميز. مع أكثر من
                                    20 عامًا من الخبرة ومحفظة تضم أكثر من 300 مشروع ناجح، أصبحت
                                    مجموعة عسكر للمقاولات العامة شريكًا موثوقًا به للأعمال التي
                                    تبحث عن حلول موثوقة ومتقدمة. رؤية الشركة هي أن تصبح رائدة في
                                    مجال المقاولات العامة والأعمال الميكانيكية، مدفوعة بالابتكار
                                    والجودة والاستدامة. سواء كان الأمر يتعلق بتصميم الأنظمة
                                    الميكانيكية أو إنشاء البنية التحتية أو تصنيع الهياكل المعدنية،
                                    فإن مجموعة عسكر للمقاولات العامة تلتزم بتجاوز توقعات العملاء
                                    والمساهمة في نجاح كل مشروع. لمزيد من المعلومات أو لمناقشة
                                    احتياجات مشروعك، لا تتردد في الاتصال بفريق عسكر اليوم.
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
                            خدماتنا
                        </h2>
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
