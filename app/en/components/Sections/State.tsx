"use client";
import React from "react";
import CountUp from "react-countup";
import { GrProjects } from "react-icons/gr";
import { LuTimer } from "react-icons/lu";
import { RiGroupLine } from "react-icons/ri";

const State = () => {
  return (
    <section
      className="py-10 bg-gray-900 border-y-2 border-indigo-700"
      style={{
        backgroundImage: "url('/images/٢٠٢٤١١١٩_١٥٥٢٢٤.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundBlendMode: "overlay",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto px-5 text-center text-white">
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-28 max-sm:justify-center max-sm:text-center max-sm:gap-5">
            {/* Projects */}
            <div className="flex items-center border-2 border-white p-4">
              <GrProjects className="text-5xl m-3" />
              <div className="flex flex-col items-center align-middle">
                <h2 className="text-4xl sm:text-5xl font-bold">
                  <CountUp end={300} duration={1} enableScrollSpy />+
                </h2>
                <p className="text-gray-300">Projects</p>
              </div>
            </div>

            {/* Years of Experience */}
            <div className="flex items-center border-2 border-white p-4">
              <LuTimer className="text-6xl m-3" />
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold">
                  <CountUp end={20} duration={1} enableScrollSpy />+
                </h2>
                <p className="text-gray-300 text-nowrap">Years Exp.</p>
              </div>
            </div>

            {/* Clients */}
            <div className="flex items-center border-2 border-white p-4">
              <RiGroupLine className="text-6xl m-3" />

              <div>
                <h2 className="text-4xl sm:text-5xl font-bold">
                  <CountUp end={250} duration={1} enableScrollSpy />+
                </h2>
                <p className="text-gray-300 text-nowrap">Team MB.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default State;