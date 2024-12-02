import React from "react";
import { FaCheckCircle, FaLightbulb, FaClock, FaLeaf } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="relative bg-gray-50 dark:bg-slate-900 overflow-hidden">
      {/* أشكال الخلفية */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200 dark:bg-blue-500 opacity-20 rounded-full"></div>
        <div className="absolute bottom-10 right-0 w-72 h-72 bg-gray-300 dark:bg-gray-700 opacity-10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-full h-0.5 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-200 dark:from-gray-600 dark:to-gray-800"></div>
      </div>

      <div className="relative container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white text-center">
          قيمنا الأساسية
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto">
          نحن ملتزمون بتقديم خدمات استثنائية وحلول مستدامة مخصصة لتلبية احتياجاتكم.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2">
          {/* الجودة */}
          <div className="p-6 hover:shadow-lg hover:-translate-y-2 duration-200 border rounded-xl bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <FaCheckCircle className="text-blue-500 dark:text-blue-400 text-3xl" />
              <h2 className="ml-4 text-xl font-medium text-gray-800 capitalize dark:text-white">
                الجودة
              </h2>
            </div>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              تقديم أعلى معايير الجودة لتلبية توقعاتكم وتجاوزها.
            </p>
          </div>

          {/* الابتكار */}
          <div className="p-6 hover:shadow-lg hover:-translate-y-2 duration-200 border rounded-xl bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <FaLightbulb className="text-yellow-500 dark:text-yellow-400 text-3xl" />
              <h2 className="ml-4 text-xl font-medium text-gray-800 capitalize dark:text-white">
                الابتكار
              </h2>
            </div>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              تحسين خدماتنا باستمرار لتقديم الحلول الأكثر ابتكارًا.
            </p>
          </div>

          {/* الالتزام */}
          <div className="p-6 hover:shadow-lg hover:-translate-y-2 duration-200 border rounded-xl bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <FaClock className="text-green-500 dark:text-green-400 text-3xl" />
              <h2 className="ml-4 text-xl font-medium text-gray-800 capitalize dark:text-white">
                الالتزام
              </h2>
            </div>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              الوفاء بالمواعيد النهائية وتقديم حلول مستدامة مخصصة لتلبية احتياجاتكم.
            </p>
          </div>

          {/* الاستدامة */}
          <div className="p-6 hover:shadow-lg hover:-translate-y-2 duration-200 border rounded-xl bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <FaLeaf className="text-teal-500 dark:text-teal-400 text-3xl" />
              <h2 className="ml-4 text-xl font-medium text-gray-800 capitalize dark:text-white">
                الاستدامة
              </h2>
            </div>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              تقديم حلول صديقة للبيئة لضمان مستقبل أكثر إشراقًا.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;