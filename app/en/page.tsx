import Hero from "@/app/en/components/Sections/Hero";
import Section1 from "@/app/en/components/Sections/Section1";
import Section from "@/app/en/components/Sections/Section";
import CTA from "./components/Sections/CTA";
import State from "./components/Sections/State";
import Contact from "./components/Sections/Contact";
import Blog from "./components/Sections/Blog";
import TeamTalk from "./components/Sections/TeamTalk";
import Loader from "@/components/ui/Loader";
import LogoDM from "@/components/ui/LogoDM";
import Image from "next/image";
import ManegarTalk from "./components/Sections/ManegarTalk";

export default function Home() {
  return (
    <div>
      <Loader Logo={'/logoDM.png'}/>
      <Hero />
      <div className="bg-indigo-600 dark:bg-slate-800">
        <div className="max-w-screen-xl mx-auto px-4 py-3 items-center gap-x-4 justify-center text-center text-white sm:flex md:px-8">
          <p className="py-2 font-medium">
            We just launched our new product! you can check out all features
            now.
          </p>
          <a
            href="javascript:void(0)"
            className="flex-none inline-block w-full mt-3 py-2 px-3 text-center text-indigo-600 font-medium bg-white duration-150 hover:bg-gray-100 active:bg-gray-200 rounded-lg sm:w-auto sm:mt-0 sm:text-sm"
          >
            Learn more
          </a>
        </div>
      </div>
      <Section />
      <div className="bg-indigo-700 dark:bg-slate-800 py-4">
        <h1 className="text-center font-bold text-sm md:text-lg text-slate-50">
          Since 2004, we have been working to be leaders in providing mechanical
          and civil solutions with the highest quality standards.
        </h1>
      </div>
      <Section1 />
      <CTA />
      <State />
      <Blog />
      <TeamTalk />
      <ManegarTalk />
      <Contact />
    </div>
  );
}
