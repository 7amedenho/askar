import { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
    title: "المشاريع",
  };
const PorfolioSection = () => {
  return (
    <section className="py-44 relative bg-gradient-to-br dark:from-slate-900 via-gray-800 to-gray-900 overflow-hidden">
      <section className="py-4 mt-14 sm:mt16 lg:mt-0">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 grid lg:grid-cols-2 lg:items-center gap-10">
          <div className="flex flex-col space-y-8 sm:space-y-10 lg:items-center text-right lg:text-left max-w-2xl md:max-w-3xl mx-auto">
            <h1 className="font-semibold leading-tight text-gray-900 text-right dark:text-white text-4xl sm:text-5xl lg:text-6xl">
              يسعدنا أن نعتني بـ{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-pink-700 to-indigo-600">
                عملك.
              </span>
            </h1>
            <p className="text-gray-700 dark:text-gray-300 tracking-tight text-justify md:font-normal max-w-xl mx-auto lg:max-w-none">
              في شركتنا، نولي أهمية كبيرة لتوفير قنوات اتصال فعّالة وسهلة مع
              عملائنا. نحن هنا للاستماع إلى احتياجاتك وتقديم حلول مخصصة وفقًا
              لأعلى معايير الجودة والمهنية. سواء من خلال الهاتف أو البريد
              الإلكتروني أو وسائل التواصل الاجتماعي، نحن دائمًا جاهزون للرد
              بسرعة.
            </p>
          </div>
          {/* صور البطل */}
          <div className="flex aspect-square lg:aspect-auto lg:h-[35rem] relative">
            <div className="w-3/5 h-[80%] rounded-3xl overflow-hidden border-8 border-gray-200 dark:border-slate-800 z-20">
              <Image
                src="https://res.cloudinary.com/dvhcaimzt/image/upload/v1732973096/IMG-20241129-WA0050_ebxwog.jpg"
                alt="خطة البناء"
                width={1300}
                height={1300}
                className="w-full h-full object-cover z-30"
                priority
              />
            </div>
            <div className="absolute right-0 bottom-0 h-[calc(100%-50px)] w-4/5 rounded-3xl overflow-hidden border-4 border-gray-200 dark:border-gray-800 z-10">
              <Image
                src="https://res.cloudinary.com/dvhcaimzt/image/upload/v1732973092/IMG-20241129-WA0040_ymfcca.jpg"
                alt="العمل على مشروع سكني"
                height={1300}
                width={1300}
                className="z-10 w-full h-full object-cover"
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
          <div className="relative p-5 sm:p-6 md:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 space-y-6">
            <Image
              src="/images/hero-img.webp"
              alt="project cover"
              width={1300}
              height={900}
              className="w-full aspect-[4/3.3] rounded object-cover"
            />
            <div className="flex flex-col justify-end space-y-5 text-gray-300">
              <h1 className="font-semibold text-2xl text-gray-900 dark:text-white">
                civil work at poiler stack
              </h1>
            </div>
          </div>
          <div className="relative p-5 sm:p-6 md:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 space-y-6">
            <Image
              src="/images/hero-img.webp"
              alt="project cover"
              width={1300}
              height={900}
              className="w-full aspect-[4/3.3] rounded object-cover"
            />
            <div className="flex flex-col justify-end space-y-5 text-gray-300">
              <h1 className="font-semibold text-2xl text-gray-900 dark:text-white">
                Fabrication erection welding handraill for silo roof
              </h1>
            </div>
          </div>
          <div className="relative p-5 sm:p-6 md:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 space-y-6">
            <Image
              src="/images/hero-img.webp"
              alt="project cover"
              width={1300}
              height={900}
              className="w-full aspect-[4/3.3] rounded object-cover"
            />
            <div className="flex flex-col justify-end space-y-5 text-gray-300">
              <h1 className="font-semibold text-2xl text-gray-900 dark:text-white">
                Fire Lines
              </h1>
            </div>
          </div>
          <div className="relative p-5 sm:p-6 md:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 space-y-6">
            <Image
              src="/images/hero-img.webp"
              alt="project cover"
              width={1300}
              height={900}
              className="w-full aspect-[4/3.3] rounded object-cover"
            />
            <div className="flex flex-col justify-end space-y-5 text-gray-300">
              <h1 className="font-semibold text-2xl text-gray-900 dark:text-white">
                Foundation for mixed ped at DM plant
              </h1>
            </div>
          </div>
          <div className="relative p-5 sm:p-6 md:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 space-y-6">
            <Image
              src="/images/hero-img.webp"
              alt="project cover"
              width={1300}
              height={900}
              className="w-full aspect-[4/3.3] rounded object-cover"
            />
            <div className="flex flex-col justify-end space-y-5 text-gray-300">
              <h1 className="font-semibold text-2xl text-gray-900 dark:text-white">
                Painting silo outside
              </h1>
            </div>
          </div>
          <div className="relative p-5 sm:p-6 md:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 space-y-6">
            <Image
              src="/images/hero-img.webp"
              alt="project cover"
              width={1300}
              height={900}
              className="w-full aspect-[4/3.3] rounded object-cover"
            />
            <div className="flex flex-col justify-end space-y-5 text-gray-300">
              <h1 className="font-semibold text-2xl text-gray-900 dark:text-white">
                Civil Work at AFCO Tank (Ramp)
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PorfolioSection;
