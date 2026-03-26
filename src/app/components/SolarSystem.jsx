"use client";

import { useEffect, useRef, useState } from "react";

const PLANETS = [
  { name: "Mercury", radius: 4, orbit: 60, speed: 4.15, color: "#c2b280", glowColor: "rgba(194,178,128,0.2)" },
  { name: "Venus", radius: 6, orbit: 90, speed: 1.62, color: "#e8cda0", glowColor: "rgba(232,205,160,0.2)" },
  { name: "Earth", radius: 7, orbit: 125, speed: 1.0, color: "#6b93d6", glowColor: "rgba(107,147,214,0.2)" },
  { name: "Mars", radius: 5, orbit: 160, speed: 0.53, color: "#c1440e", glowColor: "rgba(193,68,14,0.2)" },
  { name: "Jupiter", radius: 16, orbit: 220, speed: 0.084, color: "#d4a574", glowColor: "rgba(212,165,116,0.15)" },
  { name: "Saturn", radius: 13, orbit: 290, speed: 0.034, color: "#e8d5a3", glowColor: "rgba(232,213,163,0.15)", hasRing: true },
  { name: "Uranus", radius: 10, orbit: 360, speed: 0.012, color: "#7ec8e3", glowColor: "rgba(126,200,227,0.1)" },
  { name: "Neptune", radius: 9, orbit: 420, speed: 0.006, color: "#4b70dd", glowColor: "rgba(75,112,221,0.1)" },
];

const SolarSystem = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const anglesRef = useRef(PLANETS.map(() => Math.random() * Math.PI * 2));
  const animFrameRef = useRef(null);
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const updateSize = () => {
      setDimensions({ w: window.innerWidth, h: window.innerHeight });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const handleMouse = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.w * dpr;
    canvas.height = dimensions.h * dpr;
    ctx.scale(dpr, dpr);

    const centerX = dimensions.w / 2;
    const centerY = dimensions.h / 2;

    const draw = () => {
      ctx.clearRect(0, 0, dimensions.w, dimensions.h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      // Mouse offset for parallax — subtle shift
      const parallaxX = (mx - centerX) * 0.02;
      const parallaxY = (my - centerY) * 0.02;

      // Draw orbit rings
      PLANETS.forEach((p) => {
        ctx.beginPath();
        ctx.arc(centerX + parallaxX * 0.3, centerY + parallaxY * 0.3, p.orbit, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255,255,255,0.03)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw the Sun
      const sunX = centerX + parallaxX * 0.3;
      const sunY = centerY + parallaxY * 0.3;

      // Sun glow
      const sunGlow = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, 35);
      sunGlow.addColorStop(0, "rgba(255,200,50,0.08)");
      sunGlow.addColorStop(0.4, "rgba(255,160,20,0.03)");
      sunGlow.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(sunX, sunY, 35, 0, Math.PI * 2);
      ctx.fillStyle = sunGlow;
      ctx.fill();

      // Sun core
      const sunCore = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, 12);
      sunCore.addColorStop(0, "rgba(255, 248, 225, 0.8)");
      sunCore.addColorStop(0.5, "rgba(255, 215, 0, 0.6)");
      sunCore.addColorStop(1, "rgba(212, 175, 55, 0.4)");
      ctx.beginPath();
      ctx.arc(sunX, sunY, 12, 0, Math.PI * 2);
      ctx.fillStyle = sunCore;
      ctx.fill();

      // Draw planets
      PLANETS.forEach((planet, i) => {
        // Update angle — mouse proximity speeds up nearby planets
        const distToMouse = Math.hypot(mx - centerX, my - centerY);
        const mouseFactor = Math.max(0.5, 1 + (1 - Math.min(distToMouse, 500) / 500) * 2);
        anglesRef.current[i] += planet.speed * 0.008 * mouseFactor;

        const angle = anglesRef.current[i];
        // Each planet has a different parallax depth
        const depthFactor = 0.3 + (i / PLANETS.length) * 0.7;
        const px = centerX + parallaxX * depthFactor + Math.cos(angle) * planet.orbit;
        const py = centerY + parallaxY * depthFactor + Math.sin(angle) * planet.orbit;

        // Planet glow
        const glowRadius = planet.radius * 2.5;
        const glow = ctx.createRadialGradient(px, py, 0, px, py, glowRadius);
        glow.addColorStop(0, planet.glowColor);
        glow.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(px, py, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Saturn ring
        if (planet.hasRing) {
          ctx.beginPath();
          ctx.ellipse(px, py, planet.radius * 2.2, planet.radius * 0.6, 0.4, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(232,213,163,0.3)";
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        // Planet body
        const bodyGrad = ctx.createRadialGradient(px - planet.radius * 0.3, py - planet.radius * 0.3, 0, px, py, planet.radius);
        bodyGrad.addColorStop(0, "#fff");
        bodyGrad.addColorStop(0.3, planet.color);
        bodyGrad.addColorStop(1, planet.color);
        ctx.beginPath();
        ctx.arc(px, py, planet.radius, 0, Math.PI * 2);
        ctx.fillStyle = bodyGrad;
        ctx.fill();
      });

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none blur-[8px] md:blur-none"
      style={{
        width: dimensions.w,
        height: dimensions.h,
        zIndex: 1,
      }}
    />
  );
};

export default SolarSystem;
