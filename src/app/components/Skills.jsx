"use client";

import Image from "next/image";

const skills = [
  { name: "React", image: "/skills/react.png" },
  { name: "TypeScript", image: "/skills/typescript.png" },
  { name: "JavaScript", image: "/skills/javascript.png" },
  { name: "Node.js", image: "/skills/node.png" },
  { name: "Express.js", image: "/skills/exp.png" },
  { name: "MongoDB", image: "/skills/mongo.png" },
  { name: "Next.js", image: "/skills/nextjs.png" },
  { name: "HTML", image: "/skills/html.png" },
  { name: "CSS", image: "/skills/css.png" },
  { name: "Tailwind", image: "/skills/tailwind.png" },
  { name: "GitHub", image: "/skills/github1.png" },
  { name: "Swagger", image: "/skills/swagger1.png" },
  { name: "Jest", image: "/skills/jest.png" },
  { name: "Firebase", image: "/skills/firebase.png" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 lg:py-28">
      <div className="section-heading lg:hidden">
        <h2>Skills</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card p-4 sm:p-5 flex flex-col items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
              <Image
                src={skill.image}
                width={48}
                height={48}
                alt={skill.name}
                className="object-contain drop-shadow-md group-hover:drop-shadow-[0_0_10px_rgba(0,212,255,0.35)] transition-all duration-300"
              />
            </div>
            <span className="text-[11px] sm:text-xs font-semibold text-gray-400 group-hover:text-white text-center transition-colors tracking-wide">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
