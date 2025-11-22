import React, { useEffect, useRef } from "react";

const ScrollTilt3D = ({ children, intensity = 15, className = "" }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const scrollProgress = (windowHeight / 2 - elementCenter) / windowHeight;

      // Calculate rotation based on scroll position
      const rotateX = scrollProgress * intensity;
      const rotateY = scrollProgress * intensity * 0.5;

      // Apply 3D transform
      cardRef.current.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateZ(${Math.abs(scrollProgress) * 50}px)
      `;
    };

    const handleMouseMove = (e) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      cardRef.current.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.02)
      `;
    };

    const handleMouseLeave = () => {
      if (!cardRef.current) return;
      cardRef.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
    };

    window.addEventListener("scroll", handleScroll);
    if (cardRef.current) {
      cardRef.current.addEventListener("mousemove", handleMouseMove);
      cardRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (cardRef.current) {
        cardRef.current.removeEventListener("mousemove", handleMouseMove);
        cardRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [intensity]);

  return (
    <div
      ref={cardRef}
      className={`transition-transform duration-300 ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
};

export default ScrollTilt3D;

