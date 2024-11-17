"use client";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Contact from "@/components/Sections/Contact";
import Content from "@/components/Sections/Content";
import Feature from "@/components/Sections/Feature";
import Hero from "@/components/Sections/Hero";
import Section1 from "@/components/Sections/Section1";
import Section2 from "@/components/Sections/Section2";
import Section3 from "@/components/Sections/Section3";
import State from "@/components/Sections/State";
import Video from "@/components/Sections/Video";
import {
  heroVariants,
  section1Variants,
  section2Variants,
  featureVariants,
  videoVariants,
} from "@/variants"; // Import from separate file

const transition = { duration: 0.8, ease: "easeOut" };

// Section Component with Default Variants
const Section: React.FC<{
  children: React.ReactNode;
  variants?: Variants; // Variants are optional, fallback to default
}> = ({ children, variants }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants || defaultVariants} // Use provided or default variants
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <div>
      <Section variants={heroVariants}>
        <Hero />
      </Section>
      <Section variants={section1Variants}>
        <Section1 />
      </Section>
      <Section variants={section2Variants}>
        <State />
      </Section>
      <Section variants={section1Variants}>
        <Section2 />
      </Section>
      <Section variants={featureVariants}>
        <Feature />
      </Section>
      <Section variants={videoVariants}>
        <Video />
      </Section>
      <Section>
        <Section3 />
      </Section>
      <Section>
        <Content />
      </Section>
      <Section variants={heroVariants}>
        <Contact />
      </Section>
    </div>
  );
}
