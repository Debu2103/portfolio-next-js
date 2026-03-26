"use client";

import { FaExternalLinkAlt } from "react-icons/fa";

const experiences = [
  {
    period: "2024 — Present",
    title: "Full Stack Developer",
    company: "OmniMinds Consulting Services LLP",
    companyUrl: "https://omnimindsconsulting.com",
    description:
      "Driving the business frontend development using React and TypeScript, building responsive, scalable UI components for enterprise clients. Collaborating with cross-functional teams to deliver AI, cloud, and full-stack solutions.",
    tech: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "Git"],
    current: true,
  },
  {
    period: "2024",
    title: "Backend Developer",
    company: "OmniMinds Consulting Services LLP",
    companyUrl: "https://omnimindsconsulting.com",
    description:
      "Architected and built the complete customer management backend from scratch — featuring RESTful APIs, JWT authentication, role-based access control, data validation, and comprehensive API documentation with Swagger. Wrote extensive unit and integration tests using Jest.",
    tech: ["Node.js", "Express.js", "MongoDB", "Jest", "Swagger", "JWT"],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-28">
      <div className="section-heading lg:hidden">
        <h2>Experience</h2>
      </div>

      <div className="space-y-3">
        {experiences.map((exp, index) => (
          <a
            key={index}
            href={exp.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="experience-card block group"
          >
            {/* Content Container */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-6">
              <div className="shrink-0 sm:w-[110px] pt-1 mt-1 sm:mt-0 sm:mb-0 mb-1 w-full sm:w-auto">
                <span className="text-[11px] uppercase tracking-wider text-gray-500 font-medium whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <div className="flex-1 min-w-0 flex flex-col items-center sm:items-start">
                {/* Title & Company */}
                <h3 className="text-[15px] font-semibold text-gray-200 group-hover:text-neon-blue transition-colors flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  {exp.title} · {exp.company}
                  <FaExternalLinkAlt
                    size={10}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-neon-blue hidden sm:block"
                  />
                </h3>

                {/* Current indicator */}
                {exp.current && (
                  <div className="flex items-center justify-center sm:justify-start gap-2 mt-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-[10px] uppercase tracking-wider text-emerald-400/80 font-medium">
                      Current Role
                    </span>
                  </div>
                )}

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed mt-2.5 group-hover:text-gray-400 transition-colors">
                  {exp.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-3 w-full">
                  {exp.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Resume link */}
      <div className="mt-8 pl-0 lg:pl-[134px]">
        <a
          href="/resume.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-neon-blue transition-colors group font-medium"
        >
          <span>View Full Résumé</span>
          <FaExternalLinkAlt
            size={10}
            className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform"
          />
        </a>
      </div>
    </section>
  );
};

export default Experience;
