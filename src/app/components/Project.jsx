"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import ecom from "/public/projects/5173135.jpg";
import chat from "/public/projects/chat.jpg";
import res from "/public/projects/res.jpg";

const projects = [
  {
    title: "Customer Management Backend",
    description:
      "Architected and developed a production-grade customer management backend for OmniMinds Consulting — RESTful APIs, JWT authentication, role-based access control, data validation, comprehensive Swagger docs, and 90%+ test coverage with Jest.",
    tech: ["Node.js", "Express.js", "MongoDB", "Jest", "Swagger", "JWT"],
    github: "https://github.com/Debaroon2103/",
    image: null,
    featured: true,
  },
  {
    title: "E-Commerce Application",
    description:
      "Full-featured e-commerce web app with product browsing, cart management, and responsive design.",
    tech: ["React", "JavaScript", "CSS", "REST API"],
    github: "https://github.com/Debu2103/react-ecommerce-app",
    image: ecom,
  },
  {
    title: "Real-Time Chat App",
    description:
      "Instant messaging application with live updates, user presence, and intuitive interface.",
    tech: ["React", "Node.js", "Socket.IO", "CSS"],
    github: "https://github.com/Debu2103/Chat-App-React/tree/main/Chat-App",
    image: chat,
  },
  {
    title: "Restaurant Website",
    description:
      "Visually appealing restaurant site with menu showcases and smooth animations.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Debaroon2103/Foodie_Freak_Complete_Website",
    image: res,
  },
];

const Project = () => {
  return (
    <section id="project" className="py-20 lg:py-28">
      <div className="section-heading lg:hidden">
        <h2>Projects</h2>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.github}
            target="_blank"
            className={`experience-card block group ${
              project.featured
                ? "border border-white/[0.04] bg-white/[0.01]"
                : ""
            }`}
          >
            <div className="flex items-start gap-5">
              {/* Image Thumbnail (for non-featured) */}
              {project.image && (
                <div className="shrink-0 w-[110px] h-[70px] rounded-lg overflow-hidden border border-white/[0.06] hidden sm:block">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100"
                    width={110}
                    height={70}
                  />
                </div>
              )}

              {/* Featured badge as thumbnail placeholder */}
              {project.featured && (
                <div className="shrink-0 w-[110px] h-[70px] rounded-lg border border-neon-blue/10 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 hidden sm:flex items-center justify-center">
                  <span className="text-[10px] uppercase tracking-wider text-neon-blue font-bold">
                    ⭐ Featured
                  </span>
                </div>
              )}

              <div className="flex-1 min-w-0">
                {/* Title */}
                <h3 className="text-[15px] font-semibold text-gray-200 group-hover:text-neon-blue transition-colors flex flex-wrap items-center gap-2">
                  {project.title}
                  <FaExternalLinkAlt
                    size={10}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-neon-blue"
                  />
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed mt-1.5 group-hover:text-gray-400 transition-colors">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Project;
