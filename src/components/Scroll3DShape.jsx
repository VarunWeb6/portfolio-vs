import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Scroll3DShape = () => {
  const shapeRef = useRef(null);

  useEffect(() => {
    const shape = shapeRef.current;
    if (!shape) return;

    // Create scroll-triggered 3D rotation
    gsap.to(shape, {
      rotationY: 360,
      rotationX: 360,
      scale: 1.5,
      duration: 1,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const rotationY = progress * 360;
          const rotationX = progress * 180;
          const scale = 1 + Math.sin(progress * Math.PI) * 0.5;
          const translateY = progress * 200 - 100;
          
          shape.style.transform = `
            perspective(1000px)
            rotateY(${rotationY}deg)
            rotateX(${rotationX}deg)
            scale(${scale})
            translateY(${translateY}px)
          `;
        }
      }
    });

    return () => {
      // Don't kill ScrollTrigger - let it persist
      // Only cleanup if component is actually unmounting
    };
  }, []);

  return (
    <div className="fixed top-1/2 right-10 w-32 h-32 pointer-events-none z-[1] opacity-60 hidden lg:block" style={{ willChange: "transform" }}>
      <div
        ref={shapeRef}
        className="w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transform: "perspective(1000px) rotateY(0deg) rotateX(0deg)",
        }}
      >
        {/* 3D Cube using CSS */}
        <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
          {/* Front face */}
          <div
            className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-blue-400/50"
            style={{
              transform: "translateZ(32px)",
              boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
            }}
          />
          {/* Back face */}
          <div
            className="absolute w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-purple-400/50"
            style={{
              transform: "translateZ(-32px) rotateY(180deg)",
              boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)",
            }}
          />
          {/* Right face */}
          <div
            className="absolute w-full h-full bg-gradient-to-br from-cyan-500 to-blue-500 border-2 border-cyan-400/50"
            style={{
              transform: "rotateY(90deg) translateZ(32px)",
              boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)",
            }}
          />
          {/* Left face */}
          <div
            className="absolute w-full h-full bg-gradient-to-br from-pink-500 to-rose-500 border-2 border-pink-400/50"
            style={{
              transform: "rotateY(-90deg) translateZ(32px)",
              boxShadow: "0 0 30px rgba(236, 72, 153, 0.5)",
            }}
          />
          {/* Top face */}
          <div
            className="absolute w-full h-full bg-gradient-to-br from-teal-500 to-cyan-500 border-2 border-teal-400/50"
            style={{
              transform: "rotateX(90deg) translateZ(32px)",
              boxShadow: "0 0 30px rgba(20, 184, 166, 0.5)",
            }}
          />
          {/* Bottom face */}
          <div
            className="absolute w-full h-full bg-gradient-to-br from-indigo-500 to-purple-500 border-2 border-indigo-400/50"
            style={{
              transform: "rotateX(-90deg) translateZ(32px)",
              boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Scroll3DShape;

