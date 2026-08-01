import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, Download, Briefcase, Terminal, Sparkles, Cpu, Cloud } from "lucide-react";
import resume from "../assets/Varun_resume.pdf";
import NeuralParticles from "./NeuralParticles";
import globeGif from "../assets/globe.gif";

// ── AI Terminal Component ─────────────────────────────────
const AITerminal = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const terminalLines = [
    { prompt: ">", text: "Initializing portfolio...", delay: 40 },
    { prompt: ">", text: 'Loading profile: "Varun Sharma"', delay: 35 },
    { prompt: ">", text: "Specialty: AI Solutions × Full-Stack", delay: 30 },
    { prompt: ">", text: "Status: Ready ✓", delay: 25 },
  ];

  useEffect(() => {
    if (currentLine >= terminalLines.length) {
      const timer = setTimeout(() => {
        onComplete?.();
      }, 600);
      return () => clearTimeout(timer);
    }

    const line = terminalLines[currentLine];
    if (currentChar < line.text.length) {
      const timer = setTimeout(() => {
        setLines((prev) => {
          const updated = [...prev];
          if (updated[currentLine]) {
            updated[currentLine] = {
              ...updated[currentLine],
              text: line.text.substring(0, currentChar + 1),
            };
          } else {
            updated[currentLine] = {
              prompt: line.prompt,
              text: line.text.substring(0, currentChar + 1),
            };
          }
          return updated;
        });
        setCurrentChar((c) => c + 1);
      }, line.delay);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar, onComplete]);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="terminal-window w-full max-w-lg">
      <div className="terminal-header">
        <div className="terminal-dot bg-red-400/80" />
        <div className="terminal-dot bg-yellow-400/80" />
        <div className="terminal-dot bg-green-400/80" />
        <span className="ml-3 text-xs text-[var(--text-muted)] font-mono">
          varun@ai-portfolio ~ %
        </span>
      </div>
      <div className="terminal-body">
        {lines.map((line, i) => (
          <div key={i} className="terminal-line">
            <span className="terminal-prompt">{line.prompt}</span>
            <span className="text-[var(--text-primary)]">
              {line.text}
              {i === currentLine && currentLine < terminalLines.length && (
                <span
                  className={`text-[var(--accent)] ${showCursor ? "opacity-100" : "opacity-0"}`}
                >
                  ▊
                </span>
              )}
            </span>
          </div>
        ))}
        {currentLine >= terminalLines.length && (
          <div className="terminal-line mt-2">
            <span className="terminal-prompt">{">"}</span>
            <span className="terminal-value">Portfolio loaded successfully.</span>
            <span
              className={`text-[var(--accent)] ${showCursor ? "opacity-100" : "opacity-0"}`}
            >
              ▊
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

// ── Hero Globe Visual (renders globe.gif) ────────────────
const HeroGlobeVisual = () => {
  return (
    <div className="relative w-full h-[520px] flex items-center justify-center hidden lg:flex">
      {/* Outer ambient glowing orb */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[var(--accent)]/25 via-[var(--accent-glow)]/20 to-[var(--secondary)]/25 blur-[90px] animate-pulse-slow pointer-events-none" />

      {/* Rotating background neural rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute w-[460px] h-[460px] rounded-full border border-dashed border-[var(--accent)]/20 pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute w-[390px] h-[390px] rounded-full border border-[var(--secondary)]/20 pointer-events-none"
      />

      {/* Center Globe GIF Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative group flex items-center justify-center"
      >
        {/* Glow halo around GIF */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--accent)] via-[var(--accent-glow)] to-[var(--secondary)] opacity-50 blur-2xl group-hover:opacity-80 transition-opacity duration-500" />

        {/* Globe GIF element */}
        <div className="relative w-[340px] h-[340px] rounded-full overflow-hidden border border-white/20 shadow-[0_0_50px_rgba(99,102,241,0.3)] bg-[#09090b]">
          <img
            src={globeGif}
            alt="Interactive AI Globe"
            className="w-full h-full object-cover mix-blend-screen scale-[1.6]"
          />
          {/* Subtle vignette layer */}
          <div className="absolute inset-0 rounded-full bg-radial-vignette pointer-events-none opacity-40" />
        </div>
      </motion.div>

      {/* Floating Badge 1 — Top Left */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-6 left-0 z-20 glass-card px-4 py-2.5 rounded-2xl border border-white/15 shadow-xl flex items-center gap-3 backdrop-blur-2xl"
      >
        <div className="w-8 h-8 rounded-xl bg-[var(--accent)]/20 border border-[var(--accent)]/40 flex items-center justify-center text-[var(--accent)]">
          <Sparkles className="w-4 h-4" />
        </div>
        <div>
          <p className="font-display text-xs font-bold text-white">AI Solutions</p>
          <p className="font-mono text-[10px] text-[var(--text-secondary)]">LangChain & RAG</p>
        </div>
      </motion.div>

      {/* Floating Badge 2 — Bottom Right */}
      <motion.div
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 right-0 z-20 glass-card px-4 py-2.5 rounded-2xl border border-white/15 shadow-xl flex items-center gap-3 backdrop-blur-2xl"
      >
        <div className="w-8 h-8 rounded-xl bg-[var(--secondary)]/20 border border-[var(--secondary)]/40 flex items-center justify-center text-[var(--secondary)]">
          <Terminal className="w-4 h-4" />
        </div>
        <div>
          <p className="font-display text-xs font-bold text-white">Full-Stack Tech</p>
          <p className="font-mono text-[10px] text-[var(--text-secondary)]">React • Node • Python</p>
        </div>
      </motion.div>

      {/* Floating Badge 3 — Top Right */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-24 right-0 z-20 glass-card px-4 py-2.5 rounded-2xl border border-white/15 shadow-xl flex items-center gap-3 backdrop-blur-2xl"
      >
        <div className="w-8 h-8 rounded-xl bg-[var(--accent)]/20 border border-[var(--accent)]/40 flex items-center justify-center text-[var(--accent)]">
          <Cpu className="w-4 h-4" />
        </div>
        <div>
          <p className="font-display text-xs font-bold text-white">AI/ML</p>
          <p className="font-mono text-[10px] text-[var(--text-secondary)]">PyTorch • LLMs</p>
        </div>
      </motion.div>

      {/* Floating Badge 4 — Bottom Left */}
      <motion.div
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="absolute bottom-20 left-0 z-20 glass-card px-4 py-2.5 rounded-2xl border border-white/15 shadow-xl flex items-center gap-3 backdrop-blur-2xl"
      >
        <div className="w-8 h-8 rounded-xl bg-[var(--secondary)]/20 border border-[var(--secondary)]/40 flex items-center justify-center text-[var(--secondary)]">
          <Cloud className="w-4 h-4" />
        </div>
        <div>
          <p className="font-display text-xs font-bold text-white">Cloud & DevOps</p>
          <p className="font-mono text-[10px] text-[var(--text-secondary)]">AWS • Docker</p>
        </div>
      </motion.div>
    </div>
  );
};

// ── Magnetic Button ─────────────────────────────────────────
const MagneticButton = ({ children, className, onClick, href }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.35;
    const y = (clientY - (top + height / 2)) * 0.35;
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
    onClick,
  };

  if (href) {
    return (
      <a href={href} {...commonProps}>
        {children}
      </a>
    );
  }
  return <button {...commonProps}>{children}</button>;
};

// ── Scramble Text ───────────────────────────────────────────
const ScrambleText = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

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
              if (char === " ") return " ";
              if (index < iteration) return text[index];
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

// ── Tech Stack Marquee ──────────────────────────────────────
const TechStackMarquee = () => {
  const techs = [
    "React", "Next.js", "TypeScript", "Node.js", "Python",
    "FastAPI", "LangChain", "MongoDB", "PostgreSQL", "Docker", "AWS",
  ];
  const marqueeItems = [...techs, ...techs, ...techs];

  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-[var(--bg-secondary)]/80 backdrop-blur-md border-y border-[var(--border)] py-4 z-20">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
      >
        {marqueeItems.map((tech, i) => (
          <div key={i} className="inline-flex items-center gap-4 px-8">
            <span className="text-[var(--text-secondary)] font-mono text-sm tracking-widest uppercase">
              {tech}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════
// ██ HERO COMPONENT
// ═══════════════════════════════════════════════════════════════

export default function Hero() {
  const [terminalComplete, setTerminalComplete] = useState(false);
  const [skipTerminal, setSkipTerminal] = useState(() => {
    try {
      return sessionStorage.getItem("hero-terminal-seen") === "true";
    } catch {
      return false;
    }
  });

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

  const handleTerminalComplete = () => {
    setTerminalComplete(true);
    try {
      sessionStorage.setItem("hero-terminal-seen", "true");
    } catch {}
  };

  const showContent = skipTerminal || terminalComplete;

  return (
    <main className="neon-glow-bg neural-grid grain min-h-screen relative overflow-hidden select-none">
      {/* Neural Particle Background */}
      <NeuralParticles
        particleCount={70}
        connectionDistance={130}
        particleColor="99, 102, 241"
        lineColor="99, 102, 241"
        speed={0.3}
        mouseRadius={180}
      />

      {/* Interactive Spotlight Overlay */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 opacity-40 transition-opacity duration-300"
        style={{
          background: useTransform(
            [spotlightX, spotlightY],
            ([x, y]) =>
              `radial-gradient(600px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.08) 0%, transparent 70%)`
          ),
        }}
      />

      <section className="min-h-screen flex items-center relative px-4 sm:px-6 lg:px-12 w-full max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full pt-20 lg:pt-0">
          {/* Left Column: Content */}
          <div className="w-full lg:w-1/2 relative z-10 flex flex-col justify-center text-left">
            {/* Terminal Intro — plays on first session visit */}
            {!skipTerminal && !terminalComplete && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <AITerminal onComplete={handleTerminalComplete} />
                <button
                  onClick={() => {
                    setSkipTerminal(true);
                    try {
                      sessionStorage.setItem("hero-terminal-seen", "true");
                    } catch {}
                  }}
                  className="mt-4 text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors font-mono"
                >
                  Skip intro →
                </button>
              </motion.div>
            )}

            {/* Main Hero Content */}
            {showContent && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="stagger-in"
              >
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/5 backdrop-blur-md w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--secondary)] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--secondary)]" />
                  </span>
                  <span className="text-[var(--text-secondary)] text-sm font-body tracking-wider uppercase">
                    Available for Opportunities
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold leading-[1.05] tracking-tighter mb-6">
                  <span className="block text-[var(--text-primary)]">
                    Hello, I'm
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] via-[var(--accent-glow)] to-[var(--secondary)]">
                    <ScrambleText text="Varun Sharma" />
                  </span>
                </h1>

                {/* Subtitle */}
                <div className="text-xl sm:text-2xl font-body text-[var(--text-secondary)] mb-10 max-w-xl leading-relaxed">
                  Tech Lead | Senior Software Engineer building{" "}
                  <span className="text-[var(--text-primary)] font-semibold">
                    AI products
                  </span>
                  ,{" "}
                  <span className="text-[var(--secondary)] font-semibold">
                    dashboards
                  </span>
                  , and scalable web apps that solve real workflow problems.
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 mb-12">
                  <MagneticButton
                    href="/projects"
                    className="btn-primary flex items-center gap-2.5 group"
                  >
                    <Briefcase className="w-5 h-5 group-hover:rotate-12 transition-transform relative z-10" />
                    <span className="relative z-10">View My Work</span>
                  </MagneticButton>

                  <MagneticButton
                    onClick={handleDownload}
                    className="btn-ghost flex items-center gap-2.5 group"
                  >
                    <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                    <span>Download Resume</span>
                  </MagneticButton>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-5">
                  {[
                    {
                      href: "https://github.com/VarunWeb6",
                      icon: Github,
                      label: "GitHub",
                      hoverColor: "hover:text-[var(--accent)]",
                    },
                    {
                      href: "https://www.linkedin.com/in/varun-sharma-155a17225",
                      icon: Linkedin,
                      label: "LinkedIn",
                      hoverColor: "hover:text-[var(--secondary)]",
                    },
                    {
                      href: "mailto:vvarunsharma64@gmail.com",
                      icon: Mail,
                      label: "Email",
                      hoverColor: "hover:text-[var(--accent-glow)]",
                    },
                  ].map(({ href, icon: Icon, label, hoverColor }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel={
                        href.startsWith("mailto")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      aria-label={`${label} — Varun Sharma`}
                      className={`p-3 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)]/50 text-[var(--text-secondary)] ${hoverColor} transition-all duration-300 hover:border-current hover:-translate-y-1 hover:shadow-lg`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column: Gradient Orb */}
          <div
            className="w-full lg:w-1/2 relative z-10 hidden lg:block"
            style={{ animationDelay: "400ms" }}
          >
            {showContent && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <HeroGlobeVisual />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Decorative vertical lines */}
      <div className="absolute top-0 right-[20%] w-px h-[100vh] bg-gradient-to-b from-transparent via-[var(--accent)]/10 to-transparent pointer-events-none hidden lg:block" />
      <div className="absolute top-0 right-[25%] w-px h-[100vh] bg-gradient-to-b from-transparent via-[var(--accent-glow)]/5 to-transparent pointer-events-none hidden lg:block" />

      <TechStackMarquee />
    </main>
  );
}
