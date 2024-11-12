"use client";
import React, { useEffect, useState } from "react";
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
import Image from "next/image";
import { IoLanguageSharp } from "react-icons/io5";
import Logo from "../ui/Logo";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToContact = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const section = document.getElementById("contact-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div>
      <div
        className={`h-8 fixed w-full z-50 bg-indigo-700 flex items-center justify-between px-4 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex text-xl mt-1 text-white">
          <ul className="hover:text-indigo-300 duration-300 mx-1">
            <Link href="#">
              <FaFacebook className="text-white" />
            </Link>
          </ul>
          <ul className="hover:text-indigo-300 duration-300 mx-1">
            <Link href="#">
              <FaLinkedin className="text-white" />
            </Link>
          </ul>
          <ul className="hover:text-indigo-300 duration-300 mx-1">
            <Link href="#">
              <FaInstagram className="text-white" />
            </Link>
          </ul>
        </nav>
        <div className="flex items-center font-mono text-white hover:text-indigo-300 transition-all duration-300">
          <MdMarkEmailUnread className="text-2xl max-sm:text-lg" />
          <span className="ml-1 tracking-widest">askar@info.com</span>
        </div>
      </div>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className={`bg-white py-3 px-1 border-b-2 border-b-indigo-700 text-gray-900 fixed w-full z-40 brightness-125 transition-transform duration-300 ${
          isVisible ? "translate-y-8" : "-translate-y-full"
        }`}
      >
        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <Logo />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex" justify="start">
          <NavbarBrand className="py-3">
            <Link href="/">
              <Logo />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex gap-3 text-gray-900"
          justify="end"
        >
          <NavbarItem>
            <Link
              className="hover:text-indigo-900 text-lg text-gray-900 transition-all duration-300 border-b-2 border-transparent hover:border-indigo-700"
              href="/"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="hover:text-indigo-900 text-lg text-gray-900 transition-all duration-300 border-b-2 border-transparent hover:border-indigo-700"
              href="/Projects"
            >
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="hover:text-indigo-900 text-lg text-gray-900 transition-all duration-300 border-b-2 border-transparent hover:border-indigo-700"
              href="/AboutUS"
            >
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="hover:text-indigo-900 text-lg text-gray-900 transition-all duration-300 border-b-2 border-transparent hover:border-indigo-700"
              href="#contact-section"
              onClick={scrollToContact}
            >
              Contact Us
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent
          justify="end"
          className="max-sm:hidden flex relative translate-x-16"
        >
          <NavbarItem className="hidden lg:flex ">
            <div className="flex items-center font-mono text-gray-900 hover:text-indigo-900 transition-all duration-300">
              <IoLanguageSharp className="text-xl" />
              <select
                name="language"
                id=""
                className="bg-transparent focus:outline-none ml-1"
              >
                <option value="English" dir="rtl" className="text-black">
                  English
                </option>
                <option value="Arabic" dir="rtl" className="text-black">
                  العربية
                </option>
              </select>
            </div>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="hover:text-indigo-900 text-lg transition-all bg-indigo-700 py-2 px-2 rounded-full hover:bg-indigo-500 duration-300"
              href="#"
            >
              <div className="flex items-center font-mono text-white hover:text-indigo-300 transition-all duration-300">
                <SiWhatsapp className="text-lg max-sm:text-lg text-gray-200" />
                <span className="mx-2 max-sm:text-sm">Contact now</span>
              </div>
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="sm:hidden" justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="hover:text-indigo-900 transition-all duration-300"
          />
        </NavbarContent>
        <NavbarMenu className="flex flex-col bg-indigo-700 filter backdrop-blur-2xl text-xl gap-4 pt-20 text-gray-200">
          <NavbarMenuItem>
            <Link
              className="hover:text-indigo-300 transition-all duration-300 border-b-2 border-transparent text-gray-200 "
              color="foreground"
              href="/"
            >
              Home
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              className="hover:text-indigo-300 transition-all text-gray-200 duration-300 border-b-2 border-transparent "
              color="foreground"
              href="/Projects"
            >
              Projects
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              className="hover:text-indigo-300 transition-all text-gray-200 duration-300 border-b-2 border-transparent "
              color="foreground"
              href="/AboutUS"
            >
              About Us
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              className="hover:text-indigo-300 transition-all text-gray-200 duration-300 border-b-2 border-transparent "
              color="foreground"
              href="#contact-section"
            >
              Contact Us
            </Link>
          </NavbarMenuItem>

          <NavbarMenuItem>
            <div className="flex items-center font-mono text-gray-200 hover:text-indigo-300 transition-all duration-300">
              <IoLanguageSharp className="text-xl" />
              <select
                name="language"
                id=""
                className="bg-transparent text-gray-200 ml-1 focus:outline-none"
              >
                <option value="English" dir="rtl" className="text-black">
                  English
                </option>
                <option value="Arabic" dir="rtl" className="text-black">
                  العربية
                </option>
              </select>
            </div>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              className="hover:text-indigo-900 text-lg transition-all duration-300 border-b-2 border-transparent hover:border-indigo-700"
              href="#"
            >
              <div className="flex items-center font-mono text-white hover:text-indigo-300 transition-all duration-300">
                <SiWhatsapp className="text-lg max-sm:text-xl text-gray-200" />
                <span className="mx-2 max-sm:text-lg">Contact now</span>
              </div>
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
