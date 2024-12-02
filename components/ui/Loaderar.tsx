"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

interface LoaderProps {
  Logo: string; // اجعلها من نوع string لأنه المسار إلى الصورة
}

const Loader: React.FC<LoaderProps> = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500); // 2.5 ثوانٍ للأنيميشن
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gray-900" style={{
        zIndex: 9999
      }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 3 }}
    dir="ltr">
      <div className="flex flex-col items-center">
        <div className="flex flex-col  items-center">
          <div className="flex items-center space-x-4 p-4 max-sm:bg-transparent rounded-lg w-full max-w-sm mx-auto">
            <div className="flex-shrink-0">
              <Image src="/logoDM.png" width={100} height={100} alt="logo" />
            </div>
            <div className="flex flex-col text-nowrap space-y-1">
              <h1 className="text-sm  font-bold leading-tight text-gray-100 dark:text-gray-100">
                Askar Group for <br />
                General Contracting
              </h1>
              <p className="text-xs text-gray-400 dark:text-gray-400 font-medium">
                عسكر للمقاولات العمومية
              </p>
            </div>
          </div>
        </div>
        <ul className="pt-10">
          <li>
            <div className="loader">
              <div className="child"></div>
            </div>
          </li>

          <li>
            <div className="text"></div>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Loader;
