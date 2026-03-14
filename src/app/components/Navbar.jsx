"use client";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  FaFacebookF,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const navLinks = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/#project" },
    { label: "Contact", href: "/#contact" },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin size={18} />,
      href: "https://www.linkedin.com/in/debaroon-deb-roy-2410a2277",
    },
    {
      icon: <FaGithub size={18} />,
      href: "https://github.com/Debaroon2103/",
    },
    {
      icon: <FaFacebookF size={18} />,
      href: "https://www.facebook.com/debaroon.debroy.71",
    },
    {
      icon: <FaInstagramSquare size={18} />,
      href: "https://www.instagram.com/debaroon__deb_roy/",
    },
  ];

  return (
    <>
      <nav
        className={`fixed w-full h-20 z-[100] transition-all duration-500 ${
          scrolled ? "glass-navbar shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center w-full h-full px-6 2xl:px-16 max-w-[1400px] mx-auto">
          {/* Logo */}
          <Link href="/#home" className="group">
            <span className="text-2xl font-bold tracking-tight">
              <span className="neon-text">D</span>
              <span className="text-white">ebaroon</span>
              <span className="neon-text">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div>
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href}>
                  <li className="nav-link text-sm uppercase tracking-widest font-medium">
                    {link.label}
                  </li>
                </Link>
              ))}
              <Link href="/#contact">
                <li className="btn-neon text-xs px-6 py-3">Hire Me</li>
              </Link>
            </ul>

            {/* Mobile Menu Button */}
            <div
              onClick={handleNav}
              className="md:hidden p-2 cursor-pointer text-gray-300 hover:text-neon-blue transition-colors"
            >
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>

        {/* Mobile Drawer Backdrop */}
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/80 backdrop-blur-sm z-[101] transition-opacity duration-300"
              : "fixed left-0 top-0 w-0 h-0 opacity-0 z-[101]"
          }
          onClick={handleNav}
        >
          {/* Mobile Drawer */}
          <div
            className={`fixed top-0 h-screen bg-dark-800 border-r border-white/5 p-8 ease-in-out duration-500 z-[102] ${
              nav
                ? "left-0 w-[80%] sm:w-[60%] md:w-[45%]"
                : "left-[-100%] w-[80%] sm:w-[60%] md:w-[45%]"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <span className="text-xl font-bold">
                  <span className="neon-text">D</span>
                  <span className="text-white">ebaroon</span>
                  <span className="neon-text">.</span>
                </span>
                <div
                  className="p-3 rounded-full border border-white/10 cursor-pointer hover:border-neon-blue/50 hover:text-neon-blue transition-all"
                  onClick={handleNav}
                >
                  <AiOutlineClose size={16} />
                </div>
              </div>
              <div className="border-b border-white/5 my-6 pb-6">
                <p className="text-sm text-gray-400 leading-relaxed">
                  Let&apos;s Build Something Legendary Together
                </p>
              </div>
            </div>

            <div className="py-4 flex flex-col">
              <ul className="uppercase space-y-2">
                {navLinks.map((link) => (
                  <Link key={link.label} href={link.href} onClick={handleNav}>
                    <li className="py-3 px-4 text-sm text-gray-300 hover:text-neon-blue hover:bg-white/5 rounded-lg transition-all duration-300">
                      {link.label}
                    </li>
                  </Link>
                ))}
              </ul>

              <div className="pt-12">
                <p className="uppercase tracking-widest text-xs neon-text font-semibold">
                  Let&apos;s Connect
                </p>
                <div className="flex items-center gap-4 mt-6">
                  {socialLinks.map((social, index) => (
                    <Link key={index} href={social.href} target="_blank">
                      <div className="social-icon w-10 h-10 text-gray-400">
                        {social.icon}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
