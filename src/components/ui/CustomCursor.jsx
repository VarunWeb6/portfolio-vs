import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Use spring physics for smooth, trailing motion
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      // Offset by 16px (half of 32px width/height) to center the cursor
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    // Add a class to body to hide default cursor
    document.body.style.cursor = "none";
    
    // Style interactive elements to also hide default cursor so our custom one shows
    const styleElem = document.createElement("style");
    styleElem.innerHTML = `
      a, button, input, textarea, select, [role="button"] { cursor: none !important; }
    `;
    document.head.appendChild(styleElem);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.style.cursor = "auto";
      document.head.removeChild(styleElem);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          backgroundColor: "#fff",
        }}
      />
      {/* Outer glow ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          border: "1px solid var(--accent)",
          boxShadow: "0 0 10px var(--accent)",
          opacity: 0.5,
          scale: 1.5,
        }}
      />
    </>
  );
}
