import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, Download, Briefcase, Code2 } from "lucide-react";
import resume from "../assets/Varun_resume.pdf";
import profileImage from "../assets/images/profile.png";

// A text scramble component for the tech feel
const ScrambleText = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()";

  useEffect(() => {
    let iteration = 0;
    let interval = null;

    const startScramble = () => {
      clearInterval(interval);
      interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }
        iteration += 1 / 3;
      }, 30);
    };

    startScramble();
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayText}</span>;
};

// A magnetic button component for the interactive feel
const MagneticButton = ({ children, className, onClick, href }) => {
  const ref = useRef(null);
  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.5;
    const y = (clientY - (top + height / 2)) * 0.5;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    ref.current.style.transform = `translate(0px, 0px)`;
  };

  const commonProps = {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className: `transition-transform duration-200 ease-out ${className}`,
    onClick
  };

  if (href) {
    return <a href={href} {...commonProps}>{children}</a>;
  }
  return <button {...commonProps}>{children}</button>;
};

// The 3D Dimension Shift Element (Signature Moment)
const DimensionShiftVisual = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xAxis = (innerWidth / 2 - clientX) / 20;
      const yAxis = (innerHeight / 2 - clientY) / 20;
      
      containerRef.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-[500px] perspective-[1200px] flex items-center justify-center pointer-events-none hidden lg:flex">
      <div 
        ref={containerRef}
        className="w-[300px] h-[400px] relative preserve-3d transition-transform duration-200 ease-out"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Core glowing cube/card */}
        <div className="absolute inset-0 bg-[#0d0d12]/80 border border-[var(--accent)]/50 rounded-xl backdrop-blur-md shadow-[0_0_50px_var(--accent-muted)] flex items-center justify-center overflow-hidden transform-gpu" style={{ transform: 'translateZ(0px)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-muted)] to-transparent opacity-50"></div>
          {/* Internal floating elements */}
          <Code2 className="w-24 h-24 text-[var(--accent)] opacity-80" />
        </div>

        {/* Floating front layers */}
        <div className="absolute inset-x-4 top-10 h-2 bg-[var(--secondary)]/40 rounded-full blur-[1px]" style={{ transform: 'translateZ(50px)' }}></div>
        <div className="absolute inset-x-8 top-16 h-2 bg-[var(--accent)]/60 rounded-full blur-[1px]" style={{ transform: 'translateZ(80px)' }}></div>
        
        {/* Floating Code snippet in 3D */}
        <div className="absolute -right-10 top-1/2 -translate-y-1/2 bg-[#15151ee6] border border-[var(--secondary)]/30 p-4 rounded-lg font-body text-xs text-[var(--secondary)] shadow-xl" style={{ transform: 'translateZ(100px)' }}>
          <pre className="m-0">
            <code>
{`const engineer = {
  name: "Varun",
  focus: "AI Solutions",
  expertise: "Full-Stack"
};`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

const TechStackMarquee = () => {
  const techs = [
    "React", "Next.js", "TypeScript", "Node.js", "Python", 
    "FastAPI", "MongoDB", "PostgreSQL", "AWS", "Docker", "LangChain"
  ];
  const marqueeItems = [...techs, ...techs, ...techs];

  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-[var(--bg-secondary)]/80 backdrop-blur-md border-y border-[var(--border)] py-4 z-20">
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
      >
        {marqueeItems.map((tech, i) => (
          <div key={i} className="inline-flex items-center gap-4 px-8">
            <span className="text-[var(--text-secondary)] font-display text-lg tracking-widest uppercase">{tech}</span>
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]"></span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightX = useSpring(mouseX, { damping: 20, stiffness: 150 });
  const spotlightY = useSpring(mouseY, { damping: 20, stiffness: 150 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Varun_Sharma_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="neon-glow-bg grain dot-grid min-h-screen relative overflow-hidden select-none">
      {/* Interactive Spotlight Overlay */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 opacity-50 transition-opacity duration-300"
        style={{
          background: useTransform(
            [spotlightX, spotlightY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, var(--accent-muted) 0%, transparent 70%)`
          ),
        }}
      />
      
      <section className="min-h-screen flex items-center relative px-4 sm:px-6 lg:px-12 w-full max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full pt-20 lg:pt-0">
          
          {/* Left Column: Typography & CTAs */}
          <div className="w-full lg:w-1/2 stagger-in relative z-10 flex flex-col justify-center text-left">
            
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/10 backdrop-blur-md w-fit">
              <span className="w-2 h-2 rounded-full bg-[var(--secondary)] animate-pulse"></span>
              <span className="text-[var(--text-secondary)] text-sm font-body tracking-wider uppercase">Available for Opportunities</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold leading-[1.05] tracking-tighter mb-6">
              <span className="block text-[var(--text-primary)]">Hello, I'm</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)]">
                <ScrambleText text="Varun Sharma" />
              </span>
            </h1>

            <div className="text-xl sm:text-2xl font-body text-[var(--text-secondary)] mb-8 max-w-xl leading-relaxed">
              Full-stack engineer building <span className="text-[var(--text-primary)] font-semibold">AI products</span>, 
              <span className="text-[var(--secondary)] font-semibold"> dashboards</span>, and scalable web apps that solve real workflow problems.
            </div>


            <div className="flex flex-wrap items-center gap-4 mb-12">
              <MagneticButton 
                href="/projects" 
                className="btn-primary flex items-center gap-2 group"
              >
                <Briefcase className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>View My Work</span>
              </MagneticButton>
              
              <MagneticButton 
                onClick={handleDownload}
                className="btn-ghost flex items-center gap-2 group"
              >
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                <span>Download Resume</span>
              </MagneticButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a href="https://github.com/VarunWeb6" target="_blank" rel="noopener noreferrer" aria-label="Open Varun Sharma GitHub profile" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors hover-lift">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/varun-sharma-155a17225" target="_blank" rel="noopener noreferrer" aria-label="Open Varun Sharma LinkedIn profile" className="text-[var(--text-secondary)] hover:text-[var(--secondary)] transition-colors hover-lift">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:vvarunsharma64@gmail.com" aria-label="Email Varun Sharma" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors hover-lift">
                <Mail className="w-6 h-6" />
              </a>
            </div>

          </div>

          {/* Right Column: 3D Dimension Shift Visual */}
          <div className="w-full lg:w-1/2 stagger-in relative z-10 hidden lg:block" style={{ animationDelay: '400ms' }}>
             <DimensionShiftVisual />
          </div>

        </div>
      </section>

      {/* Decorative vertical lines to break the grid */}
      <div className="absolute top-0 right-[20%] w-px h-[100vh] bg-gradient-to-b from-transparent via-[var(--accent)]/20 to-transparent pointer-events-none hidden lg:block"></div>
      <div className="absolute top-0 right-[25%] w-px h-[100vh] bg-gradient-to-b from-transparent via-[var(--secondary)]/10 to-transparent pointer-events-none hidden lg:block"></div>

      <TechStackMarquee />
    </main>
  );
}
