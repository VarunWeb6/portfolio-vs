import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaChartLine,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(() => {
    const path = location.pathname.substring(1) || "home";
    return path;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setActiveLink(location.pathname.substring(1) || "home");
  }, [location.pathname]);

  const navLinks = [
    { id: "home", icon: FaHome, text: "Home", path: "/" },
    { id: "skills", icon: FaCode, text: "Skills", path: "/skills" },
    { id: "experience", icon: FaBriefcase, text: "Experience", path: "/experience" },
    { id: "projects", icon: FaLaptopCode, text: "Projects", path: "/projects" },
    { id: "statistics", icon: FaChartLine, text: "Impact", path: "/statistics" },
    { id: "contact", icon: FaEnvelope, text: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX }}
      />

      <header className="fixed top-0 left-0 w-full z-50 bg-[#09090b]/80 backdrop-blur-xl md:bg-transparent md:backdrop-blur-none">
        <div className="md:fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 w-full md:w-auto">
          <div
            className="p-[1px] md:rounded-2xl bg-gradient-to-r from-[var(--accent)]/80 via-[var(--accent-glow)]/60 to-[var(--secondary)]/80 md:shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
            style={{
              backgroundSize: "200% 200%",
              animation: "gradient-shift 4s linear infinite",
            }}
          >
            <nav className="bg-[#09090b]/85 backdrop-blur-2xl md:rounded-2xl px-4 md:px-5 py-2.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]">
              {/* Mobile Menu Button */}
              <div className="flex justify-between items-center md:hidden px-2">
                <Link to="/" className="font-display font-bold text-white tracking-tight text-lg">
                  VS<span className="text-[var(--accent)]">.</span>
                </Link>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle navigation menu"
                  className="text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
              </div>

              {/* Navigation Links */}
              <div className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-0.5 lg:gap-1 py-4 md:py-0">
                  {navLinks.map(({ id, icon: Icon, text, path }) => (
                    <Link
                      key={id}
                      to={path}
                      onClick={() => {
                        setActiveLink(id);
                        setIsMenuOpen(false);
                      }}
                      className={`relative px-3.5 py-2 md:py-1.5 rounded-xl text-sm font-medium font-body
                        transition-all duration-300 flex items-center gap-2
                        hover:bg-white/5 
                        ${
                          activeLink === id
                            ? "text-white"
                            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                        }
                      `}
                    >
                      {activeLink === id && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 bg-[var(--accent)]/20 border border-[var(--accent)]/30 rounded-xl z-[-1]"
                          transition={{ type: "spring", duration: 0.5 }}
                        />
                      )}
                      <Icon
                        className={`text-sm relative z-10 transition-all duration-300 ${
                          activeLink === id
                            ? "text-[var(--accent)] scale-110"
                            : ""
                        }`}
                      />
                      <span className="relative z-10">{text}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
