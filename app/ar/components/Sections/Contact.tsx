"use client";
import Link from "next/link";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResult("تم إرسال الرسالة بنجاح!");
        setFormData({ name: "", email: "", message: "" }); // تفريغ الحقول بعد الإرسال
      } else {
        setResult("حدث خطأ أثناء الإرسال. حاول مرة أخرى.");
      }
    } catch (error) {
      setResult("تعذر الإرسال. تحقق من اتصالك بالإنترنت.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="text-gray-600 dark:text-gray-200 body-font grid grid-cols-1 relative bg-gray-100 dark:bg-gray-900"
      dir="ltr"
    >
      <div className="container py-24 mx-auto flex flex-col lg:flex-row items-center lg:items-start">
        {/* خريطة */}
        <div className="lg:w-2/3 w-full mb-10 lg:mb-0">
          <div className="bg-gray-300 dark:bg-gray-800 rounded-lg overflow-hidden flex items-end justify-start relative h-screen">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.8838489773057!2d29.837416!3d30.990099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5ed007bd747f7%3A0xb7e745a21acf81e4!2z2YXYtdmG2Lkg2LnYs9mD2LEg2YTYqti02YPZitmEINin2YTZhdi52KfYr9mG!5e0!3m2!1sar!2seg!4v1689595835366!5m2!1sar!2seg"
            ></iframe>
            <div
              className="bg-white dark:bg-gray-700 relative flex flex-wrap p-12 rounded shadow-md w-full"
              dir="rtl"
            >
              <div className="w-1/2 px-4">
                <h2 className="font-semibold text-gray-900 dark:text-gray-200 tracking-widest text-xs">
                  العنوان
                </h2>
                <p className="mt-1 text-sm">
                  الإسكندرية – العامرية – طريق النهضة – الكرنك 1
                </p>
              </div>
              <div className="w-1/2 px-4">
                <h2 className="font-semibold text-gray-900 dark:text-gray-200 tracking-widest text-xs">
                  البريد الإلكتروني
                </h2>
                <h2 className="text-indigo-500 dark:text-indigo-400 leading-relaxed text-sm">
                  askar@info.com
                </h2>
              </div>
              <div className="w-1/2 px-4 mt-4">
                <h2 className="font-semibold text-gray-900 dark:text-gray-200 tracking-widest text-xs">
                  الهاتف
                </h2>
                <Link href="tel:034770952">
                  <p className="text-indigo-500 dark:text-indigo-400 leading-relaxed text-sm">
                    03 4770952
                  </p>
                </Link>
              </div>
              <div className="w-1/2 px-4 mt-4">
                <h2 className="font-semibold text-gray-900 dark:text-gray-200 tracking-widest text-xs">
                  واتساب
                </h2>
                <Link href="https://wa.me/+201000459052" target="_blank">
                  <p className="text-indigo-500 dark:text-indigo-400 leading-relaxed text-sm">
                    +20 1000 459 052
                  </p>
                </Link>
              </div>
              <div className="w-full px-4 mt-4">
                <h2 className="font-semibold text-gray-900 dark:text-gray-200 tracking-widest text-xs">
                  موبايل
                </h2>
                <Link href="tel:+201228171485">
                  <p className="text-indigo-500 dark:text-indigo-400 leading-relaxed text-sm">
                    +20 1228 171 485
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* النموذج */}
        <div
          className="lg:w-1/3 w-full p-5 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col"
          dir="rtl"
        >
          <h2 className="text-gray-900 dark:text-gray-200 text-2xl mb-3 font-medium">
            تواصل مع شركة عسكر
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600 dark:text-gray-400">
            لديك سؤال أو ترغب في التعاون؟ قم بملء النموذج أدناه وسنرد عليك
            قريبًا!
          </p>
          <form onSubmit={handleSubmit}>
            {/* الاسم */}
            <div className="relative mb-4">
              <label
                htmlFor="name"
                className="leading-7 text-sm text-gray-600 dark:text-gray-400"
              >
                الاسم
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-100 dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 py-3 px-4"
              />
            </div>
            {/* البريد الإلكتروني */}
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600 dark:text-gray-400"
              >
                البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-100 dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 py-3 px-4"
              />
            </div>
            {/* الرسالة */}
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600 dark:text-gray-400"
              >
                الرسالة
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-gray-100 dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 py-3 px-4 h-32"
              ></textarea>
            </div>
            {/* زر الإرسال */}
            <button
              type="submit"
              disabled={loading}
              className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-700 py-3 px-6 rounded-lg shadow-lg hover:opacity-75 w-full"
            >
              {loading ? "جارٍ الإرسال..." : "إرسال الرسالة"}
            </button>
          </form>
          {result && <p className="mt-4 text-sm">{result}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
