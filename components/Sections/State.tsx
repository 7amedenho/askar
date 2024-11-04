"use client";
import CountUp from "react-countup";
export default function State() {
  return (
    <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full lg:px-8 lg:py-10 text-white bg-indigo-700">
      <div className="grid grid-cols-4 row-gap-8 md:grid-cols-4">
        <div className="text-center md:border-r">
          <h6 className="text-2xl font-bold lg:text-5xl xl:text-6xl">
            <CountUp enableScrollSpy start={0} end={144} />+
          </h6>
          <p className="text-sm font-medium tracking-widest text-white uppercase lg:text-base">
            Project
          </p>
        </div>
        <div className="text-center md:border-r">
          <h6 className="text-2xl font-bold lg:text-5xl xl:text-6xl">
            <CountUp enableScrollSpy start={0} end={122} />+
          </h6>
          <p className="text-sm font-medium tracking-widest text-white uppercase lg:text-base">
            Expertise
          </p>
        </div>
        <div className="text-center md:border-r">
          <h6 className="text-2xl font-bold lg:text-5xl xl:text-6xl">
            <CountUp enableScrollSpy start={0} end={488} />+
          </h6>
          <p className="text-sm font-medium tracking-widest text-white uppercase lg:text-base">
            Clients
          </p>
        </div>
        <div className="text-center">
          <h6 className="text-2xl font-bold lg:text-5xl xl:text-6xl">
            <CountUp enableScrollSpy start={0} end={600} />+
          </h6>
          <p className="text-sm font-medium tracking-widest text-white uppercase lg:text-base">
          engineers
          </p>
        </div>
      </div>
    </div>
  );
}
