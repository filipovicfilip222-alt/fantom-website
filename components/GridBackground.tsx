"use client";

import { motion } from "framer-motion";

export default function GridBackground() {
  // Generate random positions for stars
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <div className="fixed inset-0 z-0">
      {/* Main grid */}
      <div className="absolute inset-0 grid-background opacity-20" />
      
      {/* Static gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)`,
          opacity: 0.4
        }}
      />

      {/* Static fog effect */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: `radial-gradient(ellipse at 20% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)`,
        }}
      />

      {/* Animated Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Shooting Stars */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={`shooting-${i}`}
          className="absolute rounded-full"
          style={{
            top: `${15 * i}%`,
            left: "-20px",
            width: "3px",
            height: "3px",
            background: "white",
            boxShadow: "0 0 6px 2px rgba(255, 255, 255, 0.8)",
          }}
          animate={{
            x: ["0vw", "110vw"],
            y: ["0vh", "70vh"],
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

