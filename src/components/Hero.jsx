import React, { useState, useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "../assets/css/tomorrow.css";
import Meteors from "./ui/meteors";
import PortfolioPage from "./PortfolioPage";
import SparklesText from "./ui/sparkles-text";
import { FlipWords } from "./ui/flip-words";
import Scroll3DEffect from "./Scroll3DEffect";
import Scroll3DShape from "./Scroll3DShape";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ExternalLink, Code2, Briefcase, Award } from "lucide-react";
import { gsap } from "gsap";
import resume from "../assets/Varun_resume.pdf";

// AnimatedGrid Component
const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
          <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] opacity-20">
            {[...Array(40)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="relative h-full w-full border-r border-blue-500/10"
                style={{
                  animation: `gridPulse ${2 + Math.random() * 2}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
          <div className="absolute inset-0 grid grid-rows-[repeat(40,1fr)] opacity-20">
            {[...Array(40)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="relative h-full w-full border-b border-blue-500/10"
                style={{
                  animation: `gridPulse ${2 + Math.random() * 2}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = resume;
  link.download = "Varun_Sharma_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const QuickStats = () => {
  const stats = [
    { icon: Briefcase, value: "2+", label: "Years Experience", color: "text-blue-400" },
    { icon: Code2, value: "10+", label: "Projects", color: "text-purple-400" },
    { icon: Award, value: "3", label: "Companies", color: "text-teal-400" },
  ];

  return (
    <div className="flex flex-wrap gap-4 mt-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
        >
          <stat.icon className={`w-4 h-4 ${stat.color}`} />
          <div>
            <div className={`text-sm font-bold ${stat.color}`}>{stat.value}</div>
            <div className="text-xs text-gray-400">{stat.label}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default function Hero() {
  const words = [
    "Full-Stack Developer",
    "AI Engineer",
    "Software Engineer",
    "Problem Solver",
  ];

  const [code] = useState(`
const developer = {
    name: 'Varun Sharma',
    role: 'Software Engineer',
    location: 'Rohtak, Haryana, India',
    experience: '2+ years',
    specialization: [
        'Full-Stack Development',
        'AI/ML Solutions',
        'Cloud Infrastructure',
        'Modern Web Technologies'
    ],
    skills: {
        frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
        backend: ['Node.js', 'Python', 'Express', 'FastAPI'],
        database: ['MongoDB', 'PostgreSQL', 'Redis'],
        cloud: ['AWS', 'GCP', 'Docker', 'Kubernetes'],
        ai: ['LangChain', 'LangGraph', 'OpenAI', 'RAG']
    },
    achievements: {
        costReduction: '40%',
        performanceImprovement: '35-45%',
        userEngagement: '+50%'
    },
    available: true,
    motto: 'Building scalable solutions with clean code'
};

console.log('Looking for a developer?');
console.log(developer.available ? '✅ Available for opportunities' : '❌ Not available');
  `);

  const codeRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    Prism.highlightAll();
    
    // No GSAP animation here - using Framer Motion instead to avoid conflicts
  }, [code]);

  return (
    <>
      <Scroll3DEffect />
      <Scroll3DShape />
      <main className="pt-20 lg:pt-[0rem] bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white min-h-screen select-none relative z-10">
        <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-gray-900/50"></div>

          {/* Animated Grid Background */}
          <AnimatedGrid />

          {/* Meteors Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Meteors number={8} />
          </div>

          {/* Main content container */}
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-12 lg:py-0 max-w-7xl">
            {/* Left column - Text content */}
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/2 mb-12 lg:mb-0 relative"
            >
              {/* Decorative blurs */}
              <div className="absolute hidden lg:-top-20 lg:-left-20 lg:block w-48 h-48 lg:w-64 lg:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute hidden lg:block lg:top-40 lg:-right-20 w-48 h-48 lg:w-64 lg:h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

              {/* Professional Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-md border border-blue-500/20 mb-6"
              >
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-gray-300 text-sm font-medium">
                  Available for Opportunities
                </span>
              </motion.div>

              {/* Name section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative mb-6"
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4">
                  <span className="block text-gray-100">Hello, I'm</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
                    Varun Sharma
                  </span>
                </h1>
                <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
              </motion.div>

              {/* Role badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-teal-500/10 border border-blue-500/20 mb-6 backdrop-blur-sm"
              >
                <Code2 className="w-5 h-5 text-blue-400" />
                <span>
                  <FlipWords
                    className="text-xl text-blue-400 font-semibold"
                    words={words}
                  />
                </span>
              </motion.div>

              {/* Professional Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="relative mb-8 max-w-2xl"
              >
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4">
                  I specialize in building <span className="text-blue-400 font-semibold">scalable web applications</span> and 
                  <span className="text-purple-400 font-semibold"> AI-powered solutions</span>. With 2+ years of experience, 
                  I've delivered production-ready systems that drive real business impact.
                </p>
                <p className="text-base text-gray-400 leading-relaxed">
                  Currently building AI solutions at <span className="text-teal-400">Nervesparks</span>, focusing on 
                  LangChain, LLMs, and enterprise AI applications.
                </p>
              </motion.div>

              {/* Quick Stats */}
              <QuickStats />

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 mt-8"
              >
                {/* Primary CTA - View Work */}
                <a
                  href="#projects"
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-teal-400 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA] overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    View My Work
                  </span>
                </a>

                {/* Secondary CTA - Download Resume */}
                <button
                  onClick={handleDownload}
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-300 transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:text-white hover:bg-gray-800/80"
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  Download Resume
                </button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="flex items-center gap-4 mt-8"
              >
                <span className="text-sm text-gray-400">Connect with me:</span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/VarunWeb6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/varun-sharma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:your.email@example.com"
                    className="p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-300"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right column - Code window */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/2 mt-12 lg:mt-0 hidden md:block"
            >
              <div className="gradient-border">
                <div className="code-window bg-[#0a0f1f] border border-gray-800/50 rounded-xl overflow-hidden shadow-2xl">
                  <div className="window-header bg-gray-900/50 border-b border-gray-800/50 px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="ml-4 text-sm text-gray-400 flex items-center gap-2">
                      <Code2 className="w-4 h-4" />
                      <span className="font-mono">developer.js</span>
                    </span>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="language-javascript m-0">
                      <code ref={codeRef} className="language-javascript text-sm leading-relaxed">
                        {code}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Professional Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-gray-400 text-sm flex items-center gap-2 mb-2">
            <span>Scroll to explore</span>
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-blue-400 rounded-full"
            />
          </motion.div>
        </motion.div>

        <PortfolioPage />
      </main>
    </>
  );
}
