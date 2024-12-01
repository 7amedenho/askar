"use client";

import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div
      className="flex items-center space-x-4 p-4 bg-white dark:bg-slate-900  sm:border-b-2 border-indigo-700
 max-sm:bg-transparent rounded-lg w-full max-w-sm mx-auto"
    >
      <div className="flex-shrink-0">
        <Image src="/logo.png" width={100} height={100} alt="logo" />
      </div>
      <div className="flex flex-col text-nowrap space-y-1">
        <h1 className="text-sm font-bold leading-tight text-gray-800 dark:text-gray-100">
          Askar Group for <br />
          General Contracting
        </h1>
        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
          عسكر للمقاولات العمومية
        </p>
      </div>
    </div>
  );
};

export default Logo;
