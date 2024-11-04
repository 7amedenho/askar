import Hero from "@/components/Sections/Hero";
import Section1 from "@/components/Sections/Section1";
import Section2 from "@/components/Sections/Section2";
import Section3 from "@/components/Sections/Section3";
import State from "@/components/Sections/State";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex border-b-4 border-indigo-400">
        <Hero />
      </div>
      <Section1/>
      <State />
      <Section2/>
      <Section3/>
    </div>
  );
}
