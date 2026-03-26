/* eslint-disable @next/next/no-img-element */
"use client";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="section-heading lg:hidden">
        <h2>About</h2>
      </div>

      <div className="space-y-5 text-center sm:text-left">
        <p className="text-gray-400 leading-relaxed text-sm sm:text-[15px]">
          I&apos;m a Full Stack Developer with{" "}
          <span className="text-white font-medium">1.8+ years</span> of
          professional experience building efficient, innovative, and
          user-focused web applications. I have a solid foundation in modern web
          technologies including{" "}
          <span className="text-white">
            React, TypeScript, JavaScript, Node.js, Express.js, and MongoDB
          </span>
          .
        </p>

        <p className="text-gray-400 leading-relaxed text-sm sm:text-[15px]">
          I architected and built the complete{" "}
          <span className="text-neon-cyan font-medium">
            customer management backend
          </span>{" "}
          system from the ground up, and I&apos;m currently driving the{" "}
          <span className="text-neon-purple font-medium">
            business frontend
          </span>{" "}
          development with React and TypeScript. I also have hands-on experience
          with Swagger for API documentation and writing unit & integration
          tests using <span className="text-white">Jest</span>.
        </p>

        <p className="text-gray-400 leading-relaxed text-sm sm:text-[15px]">
          I value clean, maintainable code, meaningful collaboration, and
          continuous growth. Currently, I am contributing my expertise at{" "}
          <a
            href="https://omnimindsconsulting.com"
            target="_blank"
            className="neon-text font-semibold hover:underline"
          >
            OmniMinds Consulting Services LLP
          </a>
          , a software development company specializing in AI, cloud computing,
          and full-stack development services — an AWS Certified Partner
          delivering enterprise solutions worldwide.
        </p>

        {/* Profile image with glow */}
        <div className="pt-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="relative group shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-2xl opacity-20 group-hover:opacity-50 blur-lg transition-all duration-700" />
            <img
              src="/dp.jpg"
              alt="Debaroon Deb Roy"
              className="relative w-24 h-24 sm:w-24 sm:h-24 rounded-2xl object-cover border border-white/10 group-hover:border-neon-blue/30 transition-all duration-500"
            />
          </div>
          <div className="space-y-3 sm:space-y-2 flex flex-col items-center sm:items-start">
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 w-full">
              {["1.8+ Yrs", "10+ Projects", "Enterprise-grade"].map((s) => (
                <span key={s} className="tech-tag">{s}</span>
              ))}
            </div>
            <p className="text-xs text-gray-500 leading-relaxed max-w-[300px]">
              Fast learner committed to building scalable solutions and
              contributing meaningfully to every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
