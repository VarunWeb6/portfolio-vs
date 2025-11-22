import React, { useEffect, useRef } from "react";

const ParallaxScroll = ({ children, speed = 0.5, className = "" }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const scrolled = window.pageYOffset;
      const rate = scrolled * speed;

      elementRef.current.style.transform = `translateY(${rate}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ParallaxScroll;

