"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image"; // تأكد من استيراد Image من next/image

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
      {/* دائرة البداية والنهاية */}
      <motion.div
        className="flex items-center justify-center rounded-full border-1 border-indigo-500"
        initial={{ scale: 0 }}
        animate={{ scale: 1.5 }}
        exit={{ scale: 0 }}
        transition={{ duration: 2 }}
        style={{ width: "100px", height: "100px" }}
      >
        {/* الشعار بحجم صغير */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {/* استخدام مكون Image لعرض الشعار */}
          <Image src={Logo} alt="Logo" width={150} height={150} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
