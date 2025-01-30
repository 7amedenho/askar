import Blog from "./components/Sections/Blog";
import Contact from "./components/Sections/Contact";
import CTA from "./components/Sections/CTA";
import Hero from "./components/Sections/Hero";
import ManegarTalk from "./components/Sections/ManegarTalk";
import Section from "./components/Sections/Section";
import Section1 from "./components/Sections/Section1";
import Section2 from "./components/Sections/Section2";
import Section3 from "./components/Sections/Section3";
import State from "./components/Sections/State";
import TeamTalk from "./components/Sections/TeamTalk";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="bg-indigo-600 dark:bg-slate-800">
        <div className="max-w-screen-xl mx-auto px-4 py-3 items-center gap-x-4 justify-center text-center text-white sm:flex md:px-8">
          <h1 className="py-2 font-bold text-lg md:text-xl">
            Our Vision of Askar Group: Leading General Contracting & Mechanical
            Works
          </h1>
        </div>
      </div>
      <Section />
      <div className="bg-indigo-700 dark:bg-slate-800 py-4">
        <h2 className="text-center font-bold text-sm md:text-lg text-slate-50">
          Since 2004, Leaders in Mechanical and Civil Solutions
        </h2>
      </div>
      <Section1 />
      <Section3 />
      <CTA />
      <State />
      <Blog />
      <Section2 />
      <TeamTalk />
      <ManegarTalk />
      <Contact />
    </div>
  );
}
