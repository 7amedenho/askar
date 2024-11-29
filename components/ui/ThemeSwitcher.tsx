// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi"; // استيراد الأيقونات

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // التبديل بين الوضعين
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <div className="flex items-center justify-center">
          <p className="text-gray-950 px-2">Dark</p>
          <FiMoon className="w-5 h-5 text-gray-800" />
        </div>
      ) : (
        <div className="flex items-center justify-center">
            <p className="text-gray-100 px-2">Light</p>
          <FiSun className="w-5 h-5 text-gray-100" />
        </div>
        // أيقونة الوضع الفاتح
      )}
    </button>
  );
}
