"use client";

import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { IoLanguageSharp } from "react-icons/io5";
import Logo from "@/components/ui/Logo";
import LogoDM from "@/components/ui/LogoDM";
import {
  FaFacebook,
  FaLocationDot,
} from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import { ThemeSwitcher } from "../../../../components/ui/ThemeSwitcher";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [language, setLanguage] = useState("English");
  const router = useRouter();

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    if (selectedLanguage === "Arabic") {
      router.push("/ar");
    } else {
      router.push("/en");
    }
  };

  // Ensure theme is ready
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // إخفاء عند التمرير للأسفل
      } else {
        setIsVisible(true); // إظهار عند التمرير للأعلى
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      {/* شريط المعلومات العلوي */}
      <div
        className={`h-8 fixed w-full z-50 bg-indigo-700 dark:bg-gray-900 flex items-center justify-between px-4 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300`}
      >
        <nav className="flex items-center text-white space-x-1 text-lg">
         
   
          <Link href="#" className="hover:text-indigo-300 duration-300">
            <FaFacebook className="text-white" />
          </Link>
          <Link href="#" className="hover:text-indigo-300 duration-300">
            <FaLocationDot className="text-white" />
          </Link>
          <div className="flex items-center font-mono text-white hover:text-indigo-300 transition-all duration-300">
            <MdMarkEmailUnread className="text-xl" />
            <span className="ml-1 text-lg">askar@info.com</span>
          </div>
        </nav>
        <div className="flex items-center text-gray-200">
          <IoLanguageSharp className="text-xl" />
          <select
            name="language"
            className="focus:outline-none ml-1 bg-indigo-700 dark:bg-gray-900 text-gray-200"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="English">English</option>
            <option value="Arabic">العربية</option>
          </select>
        </div>
      </div>

      {/* النافبار الرئيسية */}
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className={`bg-white dark:bg-slate-800 py-3 px-1 border-b-2 border-indigo-700 text-gray-900 dark:text-gray-200 fixed w-full z-40 brightness-125 transition-transform duration-300 ${
          isVisible ? "translate-y-8" : "-translate-y-full"
        }`}
      >
        {/* شعار الشركة */}
        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            {currentTheme === "dark" ? <LogoDM /> : <Logo />}
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex" justify="start">
          <NavbarBrand>
            <Link href="/">
              {" "}
              {currentTheme === "dark" ? <LogoDM /> : <Logo />}
            </Link>
          </NavbarBrand>
        </NavbarContent>

        {/* عناصر القائمة */}
        <NavbarContent
          className="hidden sm:flex gap-4 text-gray-900 dark:text-gray-200"
          justify="end"
        >
          <NavbarItem>
            <Link
              href="/en/"
              className="hover:text-indigo-700 dark:hover:text-indigo-400 text-lg transition-all duration-300 border-b-2 border-transparent hover:border-indigo-700 dark:hover:border-indigo-400"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/en/Projects"
              className="hover:text-indigo-700 dark:hover:text-indigo-400 text-lg transition-all duration-300 border-b-2 border-transparent hover:border-indigo-700 dark:hover:border-indigo-400"
            >
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/en/AboutUs"
              className="hover:text-indigo-700 dark:hover:text-indigo-400 text-lg transition-all duration-300 border-b-2 border-transparent hover:border-indigo-700 dark:hover:border-indigo-400"
            >
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/en/ContactUs"
              className="hover:text-indigo-700 dark:hover:text-indigo-400 text-lg transition-all duration-300 border-b-2 border-transparent hover:border-indigo-700 dark:hover:border-indigo-400"
            >
              Contact Us
            </Link>
          </NavbarItem>
        </NavbarContent>

        {/* خيارات إضافية */}
        <NavbarContent justify="end" className="flex relative gap-4">
          {/* اختيار اللغة */}
          {/* <NavbarItem className="hidden lg:flex">
            <div className="flex items-center text-gray-900 dark:text-gray-200">
              <IoLanguageSharp className="text-xl" />
              <select
                name="language"
                className="bg-transparent dark:bg-slate-800 focus:outline-none ml-1"
                value={language}
                onChange={handleLanguageChange}
              >
                <option value="English">English</option>
                <option value="Arabic">العربية</option>
              </select>
            </div>
          </NavbarItem> */}

          {/* واتساب */}
          <NavbarItem>
            <Link
              href="#"
              className="bg-indigo-700 hover:bg-indigo-500 text-white py-2 px-3 rounded-full transition-all duration-300 max-sm:hidden"
            >
              <div className="flex items-center">
                <SiWhatsapp className="text-lg" />
                <span className="ml-2">Contact now</span>
              </div>
            </Link>
          </NavbarItem>

          {/* تبديل الوضع */}
          <NavbarItem>
            <div className="max-sm:hidden">
              <ThemeSwitcher />
            </div>
          </NavbarItem>
        </NavbarContent>

        {/* القائمة في وضع الجوال */}
        <NavbarContent className="sm:hidden" justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="hover:text-indigo-700 dark:hover:text-indigo-400 transition-all duration-300"
          />
        </NavbarContent>
        <NavbarMenu className="flex flex-col bg-indigo-700 dark:bg-gray-900 text-gray-200 gap-4 pt-20">
          <NavbarMenuItem>
            <Link
              href="/en"
              className="hover:text-indigo-300 text-white dark:hover:text-indigo-400 transition-all duration-300"
            >
              Home
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              href="/en/Projects"
              className="hover:text-indigo-300 text-white dark:hover:text-indigo-400 transition-all duration-300"
            >
              Projects
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              href="/en/AboutUs"
              className="hover:text-indigo-300 text-white dark:hover:text-indigo-400 transition-all duration-300"
            >
              About Us
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              href="/en/ContactUs"
              className="hover:text-indigo-300 text-white dark:hover:text-indigo-400 transition-all duration-300"
            >
              Contact Us
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              href="#"
              className="hover:bg-indigo-500 text-white py-2  rounded-full transition-all duration-300"
            >
              <div className="flex items-center">
                <SiWhatsapp className="text-lg" />
                <span className="ml-2">Contact now</span>
              </div>
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <ThemeSwitcher />
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
