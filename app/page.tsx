"use client";
import { motion } from "framer-motion";
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

export default function Home() {
  // متغيرات الأنيميشن لكل قسم
  const heroVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const section1Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const section2Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const videoVariants = {
    hidden: { opacity: 0, rotate: -10 },
    visible: { opacity: 1, rotate: 0 },
  };

  const Section: React.FC<{ children: React.ReactNode; variants: any }> = ({
    children,
    variants,
  }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  };

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
      <Section variants={section2Variants}>
        <Section3 />
      </Section>
      <Section variants={featureVariants}>
        <Content />
      </Section>
      <Section variants={heroVariants}>
        <Contact />
      </Section>
    </div>
  );
}
