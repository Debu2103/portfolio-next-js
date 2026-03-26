"use client";

import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import ParticlesBg from "./components/ParticlesBg";
import SolarSystem from "./components/SolarSystem";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Intersection observer for active section tracking
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Solar System background */}
      <SolarSystem />



      {/* Ambient glows */}
      <div className="ambient-glow w-[600px] h-[600px] bg-gold-secondary/10 -top-[200px] -left-[200px]" />
      <div className="ambient-glow w-[500px] h-[500px] bg-gold-primary/10 top-[40%] -right-[200px]" />
      <div className="ambient-glow w-[400px] h-[400px] bg-gold-accent/5 -bottom-[100px] left-[30%]" />

      {/* Floating particles */}
      <ParticlesBg />

      {/* ===== MAIN LAYOUT ===== */}
      <div className="relative z-10 lg:flex lg:justify-between lg:gap-4 max-w-[1400px] mx-auto">
        {/* LEFT: Sticky Sidebar - visible on large screens */}
        <Sidebar activeSection={activeSection} />

        {/* RIGHT: Scrollable Content */}
        <main className="lg:w-1/2 lg:ml-auto pt-24 lg:pt-0 px-6 sm:px-12 lg:px-6 xl:px-12">
          <HeroSection />

          {/* White glow strip separator */}
          <div className="glow-strip-neon my-2" />

          <About />

          <div className="glow-strip my-2" />

          <Experience />

          <div className="glow-strip-neon my-2" />

          <Skills />

          <div className="glow-strip my-2" />

          <Project />

          <div className="glow-strip-neon my-2" />

          <Contact />

          {/* Footer */}
          <footer className="py-12 text-center">
            <div className="glow-strip mb-8" />
            <p className="text-[11px] text-gray-600 tracking-wider leading-relaxed">
              Loosely designed & coded by{" "}
              <span className="text-gray-400">Debaroon Deb Roy</span>. Built
              with{" "}
              <span className="neon-text font-medium">Next.js</span> &{" "}
              <span className="neon-text font-medium">Tailwind CSS</span>.
            </p>
          </footer>
        </main>
      </div>

      {/* Mobile Bottom Nav */}
      <MobileNav activeSection={activeSection} />
    </div>
  );
}

/* ===== MOBILE BOTTOM NAV ===== */
function MobileNav({ activeSection }) {
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Work" },
    { id: "skills", label: "Skills" },
    { id: "project", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] glass-navbar px-2 py-2">
      <div className="flex justify-around items-center">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`text-[10px] uppercase tracking-wider py-2 px-1 transition-colors ${
              activeSection === link.id
                ? "text-neon-blue font-semibold"
                : "text-gray-500"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
