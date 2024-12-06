import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-100 via-gray-200 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 overflow-hidden">
      {/* أشكال الخلفية */}
      <div className="absolute inset-0">
        {/* الشكل الهندسي الأيسر */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-indigo-300 dark:bg-indigo-700 rounded-full opacity-30"></div>
        {/* الشكل الهندسي الأيمن */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gray-400 dark:bg-slate-700 rounded-full opacity-20"></div>
        {/* الخط المتعرج */}
        <div className="absolute top-1/2 left-0 w-72 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-50 transform -translate-y-1/2 rotate-45"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-indigo-700 dark:text-slate-100 capitalize">
            أحدث وأفضل مشاريعنا
          </h1>
          <p className="text-gray-700 dark:text-slate-100">
            نحن نقدم مشاريع مدنية وميكانيكية عالية المستوى، مع ضمان التميز
            والموثوقية والابتكار في كل تفصيل.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-800 shadow-lg shadow-gray-200/50 dark:shadow-transparent border border-gray-200/50 dark:border-slate-700/50 rounded-lg">
            <Image
              src="/images/working-on-housing-project.jpg"
              alt="illustration"
              width="1300"
              height="1000"
              className="w-full aspect-[5/3] object-cover bg-gray-100 dark:bg-slate-700 rounded-t-lg"
            />
            <div className="relative p-4 pt-10">
             
             
              <h1 className="text-xl my-6 font-semibold text-indigo-700 dark:text-slate-200">
                هنا بعض الطرق الجيدة لكتابة دعم آمن للنمط
              </h1>
              <Link
                href="#"
                className="text-indigo-600 dark:text-blue-400 transition hover:text-opacity-90 flex items-center gap-x-3 group"
              >
                اقرأ المزيد
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 transition-all ease-linear group-hover:ml-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            href="/en/projects"
            className="px-5 py-2.5 border border-indigo-600 hover:bg-indigo-700 hover:text-white dark:text-white text-indigo-700 duration-300 flex items-center gap-x-3 rounded-lg"
          >
            مشاهدة المزيد
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
