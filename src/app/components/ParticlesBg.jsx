"use client";

import { useEffect, useRef } from "react";

const ParticlesBg = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particleCount = 25;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");

      const size = Math.random() * 2.5 + 0.5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 20 + 12}s`;
      particle.style.animationDelay = `${Math.random() * 12}s`;

      // Mostly white particles with occasional colored ones
      const colors = [
        "rgba(255, 255, 255, 0.35)",
        "rgba(255, 255, 255, 0.25)",
        "rgba(255, 255, 255, 0.15)",
        "rgba(0, 212, 255, 0.2)",
        "rgba(123, 47, 247, 0.15)",
      ];
      particle.style.background =
        colors[Math.floor(Math.random() * colors.length)];
      particle.style.boxShadow = `0 0 ${size * 3}px ${
        Math.random() > 0.6
          ? "rgba(255,255,255,0.3)"
          : "rgba(0,212,255,0.15)"
      }`;

      container.appendChild(particle);
    }

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return <div ref={containerRef} className="particles-bg" />;
};

export default ParticlesBg;
