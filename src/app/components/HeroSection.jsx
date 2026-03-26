"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagramSquare,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const socialLinks = [
    { icon: <FaLinkedinIn size={18} />, href: "https://www.linkedin.com/in/debaroon-deb-roy-2410a2277" },
    { icon: <FaGithub size={18} />, href: "https://github.com/Debaroon2103/" },
    { icon: <FaFacebookF size={16} />, href: "https://www.facebook.com/debaroon.debroy.71" },
    { icon: <FaInstagramSquare size={18} />, href: "https://www.instagram.com/debaroon__deb_roy/" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col pt-24 pb-20 lg:justify-center lg:py-24"
    >
      <div
        className={`transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >

        {/* Mobile-only name (sidebar shows on desktop) */}
        <div className="lg:hidden mb-6 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="neon-text">Debaroon</span>
            <br />
            <span className="text-white">Deb Roy</span>
            <span className="neon-text">.</span>
          </h1>
          <p className="text-lg text-gray-400 mt-2">Full Stack Developer</p>
        </div>

        {/* Intro paragraph */}
        <p className="text-gray-400 leading-relaxed text-sm sm:text-base max-w-[540px] text-center sm:text-left mx-auto sm:mx-0">
          Building scalable enterprise applications with{" "}
          <span className="text-white font-medium">React</span>,{" "}
          <span className="text-white font-medium">TypeScript</span> &{" "}
          <span className="text-white font-medium">Node.js</span>. Currently
          crafting solutions at{" "}
          <span className="neon-text font-semibold">OmniMinds Consulting</span>{" "}
          — a software company specializing in AI, cloud computing, and
          full-stack development.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-8">
          <a href="#project" className="btn-neon text-sm">
            View My Work
          </a>
          <a href="#contact" className="btn-outline text-sm">
            Get In Touch
          </a>
        </div>

        {/* Mobile social icons */}
        <div className="flex items-center justify-center sm:justify-start gap-5 mt-10 lg:hidden">
          {socialLinks.map((s, i) => (
            <Link key={i} href={s.href} target="_blank" className="social-icon">
              {s.icon}
            </Link>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="hidden sm:flex items-center gap-3 mt-16 text-gray-600">
          <div className="glow-strip-vertical h-8" />
          <div className="flex flex-col items-start gap-1">
            <span className="text-[10px] uppercase tracking-[0.3em]">
              Scroll to explore
            </span>
            <HiArrowDown size={14} className="text-neon-blue animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
