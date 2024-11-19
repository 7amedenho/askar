import Image from "next/image";
import CountUp from "react-countup";

export default function Section4() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        {/* الصورة على اليسار */}
        <div className="relative flex items-center justify-center">
          <h1 className="absolute top-3/4 left-0 bottom-0 px-5 text-5xl font-bold leading-tight text-indigo-800 transform -translate-y-1/2 bg-white">
            <CountUp enableScrollSpy start={0} end={488} prefix="+" />
            <p className="text-sm font-medium tracking-widest text-white sm:text-indigo-700 uppercase">
              Clients
            </p>
          </h1>
          <Image
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt=""
            width={500}
            height={500}
          />
        </div>

        {/* النصوص على اليمين */}
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              The quick, brown fox
              <br className="hidden md:block" />
              jumps over{" "}
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative inline-block text-deep-purple-accent-400">
                  a lazy dog
                </span>
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
            <div className="bg-white border-l-4 shadow-sm border-indigo-700">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  I&apos;ll be sure to note that in my log
                </h6>
                <p className="text-sm text-gray-900">
                  Lookout flogging bilge rat main sheet bilge water nipper fluke
                  to go on account heave down.
                </p>
              </div>
            </div>
            <div className="bg-white border-l-4 shadow-sm border-indigo-700">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  A business big enough that it could be listed
                </h6>
                <p className="text-sm text-gray-900">
                  Those options are already baked in with this model shoot me an
                  email clear.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
