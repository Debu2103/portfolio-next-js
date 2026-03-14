"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaInstagramSquare,
  FaLinkedinIn,
} from "react-icons/fa";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "project", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const socialLinks = [
  {
    icon: <FaLinkedinIn size={18} />,
    href: "https://www.linkedin.com/in/debaroon-deb-roy-2410a2277",
    label: "LinkedIn",
  },
  {
    icon: <FaGithub size={18} />,
    href: "https://github.com/Debaroon2103/",
    label: "GitHub",
  },
  {
    icon: <FaFacebookF size={16} />,
    href: "https://www.facebook.com/debaroon.debroy.71",
    label: "Facebook",
  },
  {
    icon: <FaInstagramSquare size={18} />,
    href: "https://www.instagram.com/debaroon__deb_roy/",
    label: "Instagram",
  },
];

const Sidebar = ({ activeSection }) => {
  return (
    <header className="hidden lg:flex lg:flex-col lg:justify-between lg:w-1/2 lg:max-w-[520px] lg:sticky lg:top-0 lg:h-screen lg:py-20 lg:px-12 xl:px-16">
      {/* Top section */}
      <div>
        {/* Name & Title */}
        <a href="#home" className="block group">
          <h1 className="text-5xl xl:text-6xl font-bold tracking-tight leading-none">
            <span className="neon-text">Debaroon</span>
          </h1>
          <h1 className="text-5xl xl:text-6xl font-bold tracking-tight leading-none mt-1 text-white">
            Deb Roy<span className="neon-text">.</span>
          </h1>
        </a>

        <h2 className="text-lg xl:text-xl font-medium text-gray-300 mt-4 tracking-wide">
          Full Stack Developer
        </h2>

        <p className="text-sm text-gray-500 mt-3 leading-relaxed max-w-[340px]">
          I build scalable, enterprise-grade web applications with pixel-perfect
          attention to detail.
        </p>

        {/* Navigation */}
        <nav className="mt-14">
          <ul className="space-y-5">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav-link text-xs uppercase tracking-[0.2em] font-semibold ${
                    activeSection === link.id ? "active" : ""
                  }`}
                >
                  <span className="nav-link-line" />
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom: Social Icons */}
      <div className="flex items-center gap-6 mt-auto">
        {socialLinks.map((social, index) => (
          <Link
            key={index}
            href={social.href}
            target="_blank"
            aria-label={social.label}
            className="social-icon"
          >
            {social.icon}
          </Link>
        ))}

        {/* Glowing vertical strip accent */}
        <div className="glow-strip-vertical h-6 ml-4" />
      </div>
    </header>
  );
};

export default Sidebar;
