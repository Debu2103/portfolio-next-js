"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

const Main = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const socialLinks = [
    {
      icon: <FaLinkedin size={20} />,
      href: "https://www.linkedin.com/in/debaroon-deb-roy-2410a2277",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub size={20} />,
      href: "https://github.com/Debaroon2103/",
      label: "GitHub",
    },
    {
      icon: <FaFacebookF size={20} />,
      href: "https://www.facebook.com/debaroon.debroy.71",
      label: "Facebook",
    },
    {
      icon: <FaInstagramSquare size={20} />,
      href: "https://www.instagram.com/debaroon__deb_roy/",
      label: "Instagram",
    },
  ];

  return (
    <div id="home" className="w-full h-screen text-center relative overflow-hidden">
      <div className="max-w-[1240px] w-full h-full mx-auto p-4 flex justify-center items-center">
        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >


          {/* Main Heading */}
          <h1 className="py-4 text-white leading-tight">
            Hi, I&apos;m{" "}
            <span className="neon-text">Debaroon</span>
          </h1>

          {/* Subtitle with typing effect */}
          <div className="flex items-center justify-center gap-3 py-2">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-neon-blue" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-300">
              Full Stack Developer
            </h2>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-neon-purple" />
          </div>

          {/* Description */}
          <p className="py-6 text-gray-400 max-w-[600px] m-auto text-sm sm:text-base leading-relaxed">
            Building scalable enterprise applications with{" "}
            <span className="text-neon-blue font-medium">React</span>,{" "}
            <span className="text-neon-purple font-medium">TypeScript</span> &{" "}
            <span className="text-neon-cyan font-medium">Node.js</span>.
            Currently crafting solutions at{" "}
            <span className="neon-text font-semibold">OmniMinds Consulting</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4">
            <Link href="/#project">
              <button className="btn-neon px-8 py-4 text-sm">
                View My Work
              </button>
            </Link>
            <Link href="/#contact">
              <button className="px-8 py-4 text-sm uppercase tracking-widest font-semibold rounded-xl border border-white/10 text-gray-300 hover:border-neon-blue/50 hover:text-neon-blue transition-all duration-300 bg-white/[0.02] hover:bg-white/[0.05]">
                Get In Touch
              </button>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-5 pt-8">
            {socialLinks.map((social, index) => (
              <Link key={index} href={social.href} target="_blank" aria-label={social.label}>
                <div className="social-icon w-12 h-12 text-gray-400">
                  {social.icon}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
          Scroll
        </span>
        <HiArrowDown className="text-neon-blue" size={16} />
      </div>
    </div>
  );
};

export default Main;
