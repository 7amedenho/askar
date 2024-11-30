"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image"; // تأكد من استيراد Image من next/image
import LogoDM from "./LogoDM";

interface LoaderProps {
  Logo: string; // اجعلها من نوع string لأنه المسار إلى الصورة
}

const Loader: React.FC<LoaderProps> = ({ Logo }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000); // 4 ثوانٍ للأنيميشن
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 3 }}
    >
      <div className="flex flex-col items-center">
        <div className="flex flex-col  items-center">
          <LogoDM />
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
