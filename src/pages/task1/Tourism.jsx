import React from "react";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { links } from "./utils/Links";
import HeroSection from "./layout/HeroSection";

export const SectionWrapper = ({ children, className, id }) => {
  return (
    <section className={`w-full py-12 px-6 md:px-8 ${className}`} id={id}>
      {children}
    </section>
  );
};

const Tourism = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <main className="scroll-smooth w-[90%] mx-auto">
        {links.map((link, index) => {
          const Component = link.component;
          return (
            link.title !== "Home" && (
              <SectionWrapper
                id={link.path}
                key={index}
                className={link.className}
              >
                <h1 className="text-center mb-10 text-3xl font-medium">
                  {link.title}
                </h1>
                <Component />
              </SectionWrapper>
            )
          );
        })}
      </main>
      <Footer />
    </>
  );
};

export default Tourism;
