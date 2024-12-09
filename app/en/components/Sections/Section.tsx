import Image from "next/image";

export default function HeroSection() {
    return (
        <div>
            <section
                className="relative py-20 bg-slate-800"
                style={{
                    backgroundImage:
                        "url('https://res.cloudinary.com/dvhcaimzt/image/upload/v1732973079/IMG-20241129-WA0037_yzrmkf.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                    backgroundBlendMode: "overlay",
                }}
                aria-labelledby="hero-title"
            >
                {/* طبقة شفافة فوق الصورة */}
                <div className="absolute inset-0 bg-black opacity-40 z-0" aria-hidden="true"></div>

                <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 relative z-10">
                    <div className="mx-auto text-center max-w-xl">
                        <h1
                            id="hero-title"
                            className="relative font-semibold max-w-max mx-auto pb-2 font-display text-2xl sm:text-4xl md:text-5xl text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-lg after:bg-gray-100 dark:after:bg-gray-100 after:w-4"
                        >
                            Askar Group for Contracting
                        </h1>
                    </div>
                    <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-14 gap-y-8 md:items-end">
                        <div
                            className="space-y-4 md:space-y-6 md:col-span-2 lg:col-span-1 w-full max-w-3xl lg:max-w-none mx-auto lg:mx-0 text-center lg:text-right">
                            <h2 className="font-display font-semibold text-lg md:text-3xl text-white">
                                About Askar Group for General Contracting
                            </h2>
                            <div className="text-white space-y-3 mx-auto max-w-2xl lg:max-w-none text-justify">
                                <p>
                                    Askar Group for General Contracting was established in 2004, specializing in
                                    mechanical and civil works, combining expertise and innovation to deliver
                                    high-quality services that meet clients needs.
                                </p>

                                <p>
                                    Our Vision: To be one of the leading companies in general contracting and mechanical
                                    works, with a focus on innovation and quality.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="max-w-full relative">
                <span
                    className="absolute inset-x-0 bottom-0 top-16 rounded-lg bg-indigo-200 opacity-60 blur-3xl"/>
                                <Image
                                    src="/logo.png"
                                    width={1000}
                                    height={1000}
                                    alt="Askar Group for General Contracting Logo"
                                    className="relative w-full h-auto max-h-10 lg:max-h-[40rem]"
                                    priority
                                />
                            </div>
                        </div>
                        <div className="space-y-3 lg:space-y-6" dir="ltr">
                            <div className="space-y-3 lg:space-y-6 flex flex-col">
                                <div
                                    className="flex items-center gap-x-2 p-2 md:p-3 lg:p-4 dark:bg-slate-700 border border-gray-100/80 dark:border-slabg-slate-700/80 rounded-lg">
                  <span
                      className="min-w-max text-white p-2 md:p-3 rounded-lg dark:bg-gray-800 border border-gray-100/70 dark:border-slabg-slate-700/70">
                    20+
                  </span>
                                    <div>
                    <span className="font-semibold text-white text-lg">
                      Years of Experience
                    </span>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center gap-x-2 p-2 md:p-3 lg:p-4 dark:bg-slate-700 border border-gray-100/80 dark:border-slabg-slate-700/80 rounded-lg">
                  <span
                      className="min-w-max text-white p-2 md:p-3 rounded-lg dark:bg-gray-800 border border-gray-100/70 dark:border-slabg-slate-700/70">
                    300+
                  </span>
                                    <div>
                    <span className="font-semibold text-white text-lg">
                      Successful Projects
                    </span>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center gap-x-2 p-2 md:p-3 lg:p-4 dark:bg-slate-700 border border-gray-100/80 dark:border-slabg-slate-700/80 rounded-lg">
                  <span
                      className="min-w-max text-white p-2 md:p-3 rounded-lg dark:bg-gray-800 border border-gray-100/70 dark:border-slabg-slate-700/70">
                    250+
                  </span>
                                    <div>
                    <span className="font-semibold text-white text-lg">
                      Team Members
                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}
