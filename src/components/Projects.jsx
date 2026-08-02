import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useState, useRef } from "react";
import { Github, ExternalLink, Filter } from "lucide-react";
import SaasAI from "../assets/images/saasAI.png";
import project3D_logo from "../assets/images/3D_logo.png";
import Blog from "../assets/images/blog.png";
import Jobportal from "../assets/images/job_portal.png";
import Multinenat from "../assets/images/multinenat.png";
import Portfolio from "../assets/images/portfolio.png";
import Gaming from "../assets/images/gaming.png";
import Dashboard from "../assets/images/dashboard.png";
import ServerGenerator from "../assets/images/servergenerator.png";
import JobTracker from "../assets/images/job-tracker.png";
import KBHUB from "../assets/images/kb-hub.png";
import EcomImg from "../assets/images/ecom.png";
import MultiPDFChat from "../assets/images/multipdf_chat.png";

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4 absolute top-4 left-4 z-20">
    <div className="w-3 h-3 rounded-full bg-red-400/80 hover:bg-red-500 transition-colors" />
    <div className="w-3 h-3 rounded-full bg-yellow-400/80 hover:bg-yellow-500 transition-colors" />
    <div className="w-3 h-3 rounded-full bg-green-400/80 hover:bg-green-500 transition-colors" />
  </div>
);

const TiltCard = ({ children, className, ...motionProps }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

// ── Spotlight Cursor Component ──────────────────────────────
const SpotlightGrid = ({ children, className }) => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`relative ${className}`}
    >
      {/* Spotlight gradient */}
      {isHovering && (
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.06), transparent 60%)`,
          }}
        />
      )}
      {children}
    </div>
  );
};

const ProjectShowcase = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState("All");
  const projectsPerPage = 6;

  const projects = [
    {
      title: "Multi PDF Chat Application",
      description: "A multi-PDF chat application that lets you upload multiple documents and ask questions in natural language.",
      problem: "Users need a simple way to query content across several PDFs without manually reading each document.",
      impact: "Built a RAG-powered chat experience for fast, accurate answers from multiple uploaded documents.",
      tags: ["Python", "Streamlit", "RAG", "FAISS"],
      category: "AI",
      links: { github: "https://github.com/VarunWeb6/Multi-PDFs_ChatApp_AI-Agent.git", demo: "https://multi-pdfschatappai-agent-rws6nndsbtt6gyrjc8zjfw.streamlit.app/" },
      image: MultiPDFChat
    },
    {
      title: "Shoekart",
      description: "Welcome to Shoekart – where style meets comfort! Shoekart is an e-commerce platform dedicated to buying shoes.",
      problem: "Online shoppers need a fast catalog and checkout flow for browsing and purchasing footwear.",
      impact: "Built a complete commerce flow with product browsing, cart handling, and Stripe payments.",
      tags: ["React", "Express", "MongoDB", "Stripe"],
      category: "Full-Stack",
      links: { github: "https://github.com/VarunWeb6/shoekart-shopping-app/", demo: "https://shoekart-shopping-app.vercel.app/" },
      image: EcomImg
    },
    {
      title: "3D Website Using Framer",
      description: "A visually stunning, interactive 3D website built with Framer Motion and JavaScript.",
      problem: "Static portfolios often fail to demonstrate motion design and interaction quality.",
      impact: "Created an immersive animated site that showcases 3D interaction and frontend polish.",
      tags: ["Framer Motion", "3D Design"],
      category: "Frontend",
      links: { github: "https://github.com/VarunWeb6/3d_webdeisgn", demo: "https://3d-webdesign.vercel.app/" },
      image: project3D_logo
    },
    {
      title: "Enhanced Server Generator",
      description: "A powerful CLI tool for quickly scaffolding a customized Node.js backend.",
      problem: "Starting backend projects repeatedly costs time and creates inconsistent setup quality.",
      impact: "Automated Node.js server scaffolding so new API projects start with a cleaner baseline.",
      tags: ["Node.js", "CLI", "Server Scaffolding"],
      category: "Full-Stack",
      links: { github: "https://github.com/VarunWeb6/server_generator.git", demo: "https://server-generator.vercel.app/" },
      image: ServerGenerator
    },
    {
      title: "Job Tracker with AI",
      description: "A job search dashboard tracking application stages. It features an integrated AI-powered tool.",
      problem: "Job seekers need one place to manage applications, stages, and next actions.",
      impact: "Added AI assistance to a full tracking dashboard so users can organize applications faster.",
      tags: ["AI", "React", "MongoDB", "OpenAI"],
      category: "AI",
      links: { github: "https://github.com/VarunWeb6/Job_tracker.git", demo: "https://job-tracker-khaki.vercel.app/" },
      image: JobTracker
    },
    {
      title: "AI Knowledge Hub",
      description: "A scalable platform using RAG to provide exact, citable answers from private knowledge bases.",
      problem: "Teams lose time searching scattered internal documents and validating answers.",
      impact: "Built a RAG workflow with citable responses for faster private knowledge retrieval.",
      tags: ["Next.js", "pgvector", "RAG", "Redis"],
      category: "AI",
      links: { github: "https://github.com/VarunWeb6/knowledge-hub-frontend.git", demo: "https://knowledge-hub-frontend-rh7e.vercel.app/" },
      image: KBHUB
    },
    {
      title: "AI Executive Dashboard",
      description: "A professional dashboard for real-time global stock overviews and AI-powered news summaries.",
      problem: "Market watchers need quick summaries alongside real-time stock context.",
      impact: "Combined financial overview cards with AI news summaries for faster executive scanning.",
      tags: ["AI", "Real-time", "Dashboard"],
      category: "AI",
      links: { demo: "https://dashboard-frontend-beta-three.vercel.app" },
      status: "Repository private",
      image: Dashboard
    },
    {
      title: "InstaTube Downloader",
      description: "Full-stack application to download content backed by WebSockets for progress updates.",
      problem: "Download workflows need visible progress instead of silent background processing.",
      impact: "Used WebSockets to report download progress in real time across the full stack.",
      tags: ["Python", "FastAPI", "WebSockets"],
      category: "Full-Stack",
      links: {},
      status: "Case study available on request",
      image: Multinenat
    },
    {
      title: "Imaginfy: AI Text-to-Image",
      description: "A powerful AI-powered text-to-image generator with a credit system, leveraging advanced machine learning models.",
      problem: "AI generation tools need account, credit, and billing flows to work as a SaaS product.",
      impact: "Built a text-to-image SaaS experience with authentication and credit-based usage.",
      tags: ["Next.js", "Clerk", "Drizzle", "AI"],
      category: "AI",
      links: { github: "https://github.com/VarunWeb6/saas-ai-platform", demo: "https://saas-ai-client.vercel.app/" },
      image: SaasAI
    },
    {
      title: "Modern Blog App",
      description: "A sleek, responsive blog platform with smooth animations and an intuitive user experience.",
      problem: "Content sites need clean reading flows, responsive layouts, and fast navigation.",
      impact: "Designed a polished blog frontend with smooth transitions and readable layouts.",
      tags: ["React", "Framer Motion", "Tailwind"],
      category: "Frontend",
      links: { demo: "https://blog-front-end-v3k9.vercel.app/" },
      status: "Repository private",
      image: Blog
    },
    {
       title: "Company Dashboard & Job Portal",
       description: "A comprehensive job search dashboard for tracking applications and managing company profiles.",
       problem: "Recruiting workflows need separate views for companies, postings, and candidate activity.",
       impact: "Built admin-facing job portal screens for company and application management.",
       tags: ["React", "Node.js", "MongoDB", "Express"],
       category: "Full-Stack",
       links: { github: "https://github.com/VarunWeb6/jobportal_frontend", demo: "https://jobportal-frontend-kappa.vercel.app/admin/companies" },
       image: Jobportal
    },
    {
      title: "Gaming Website with Search",
      description: "An immersive gaming platform featuring search functionality and detailed game catalogs.",
      problem: "Game discovery depends on fast search, useful metadata, and visual browsing.",
      impact: "Created a searchable game catalog with responsive cards and API-backed content.",
      tags: ["React", "API", "Search"],
      category: "Frontend",
      links: { github: "https://github.com/VarunWeb6/gaming_website", demo: "https://gaming-site-coral.vercel.app/" },
      image: Gaming
    },
    {
      title: "Personal Portfolio",
      description: "A professional developer portfolio showcasing projects with high-end animations and a 3D design.",
      problem: "Recruiters need a fast way to verify skills, work samples, and contact details.",
      impact: "Built a responsive portfolio with animated sections, project proof, and clear CTAs.",
      tags: ["React", "3D", "Framer Motion"],
      category: "Frontend",
      links: { github: "https://github.com/VarunWeb6/portfolio-vs.git", demo: "https://portfolio-vs-seven.vercel.app/" },
      image: Portfolio
    }
  ];

  const filters = ["All", "AI", "Full-Stack", "Frontend"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredProjects.length / projectsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] min-h-screen relative z-10 w-full">
      
      {/* Background Textures */}
      <div className="absolute inset-0 neon-glow-bg pointer-events-none opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 text-center stagger-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-[var(--text-primary)] mb-6 text-glow">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] via-[var(--accent-glow)] to-[var(--secondary)]">Work</span>
          </h2>
          <p className="text-[var(--text-secondary)] font-body text-lg max-w-2xl mx-auto leading-relaxed">
            A curated selection of my finest commercial and independent technical achievements.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`px-5 py-2 rounded-xl font-body text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-[var(--accent)] text-white shadow-[0_0_20px_var(--accent-muted)]"
                  : "glass-card text-[var(--text-secondary)] hover:text-white hover:border-[var(--accent)]/40"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Bento Grid layout */}
        <SpotlightGrid className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
          {currentProjects.map((project, index) => {
            const isLarge = index === 0;
            const isWide = index === 3 || index === 4;
            
            return (
              <TiltCard
                key={`${activeFilter}-${project.title}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative rounded-2xl overflow-hidden glass-card shadow-xl gradient-border-card transition-all duration-500
                  ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}
                  ${!isLarge && isWide ? 'md:col-span-2 lg:col-span-2 row-span-1' : ''}
                  ${!isLarge && !isWide ? 'col-span-1 md:col-span-1 row-span-1' : ''}
                `}
              >
                <MacOsButtons />
                
                {/* Image Background */}
                <div className="absolute inset-0 w-full h-full overflow-hidden opacity-50 group-hover:opacity-30 transition-opacity duration-500" style={{ transform: 'translateZ(-50px)' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/80 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end relative z-10" style={{ transform: 'translateZ(50px)' }}>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2 group-hover:text-[var(--accent)] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className={`text-[var(--text-secondary)] font-body mb-4 ${isLarge ? "text-sm line-clamp-3 max-w-md" : "text-xs line-clamp-2"}`}>
                    {isLarge ? project.description : project.impact}
                  </p>

                  {isLarge && (
                    <div className="mb-4 grid gap-2 text-xs font-body text-[var(--text-secondary)] sm:grid-cols-2">
                      <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-primary)]/70 p-3 backdrop-blur-sm">
                        <span className="block text-[var(--secondary)] font-semibold mb-1">Problem</span>
                        <span className="line-clamp-2">{project.problem}</span>
                      </div>
                      <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-primary)]/70 p-3 backdrop-blur-sm">
                        <span className="block text-[var(--accent)] font-semibold mb-1">Impact</span>
                        <span className="line-clamp-2">{project.impact}</span>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 py-1 text-xs font-mono rounded-lg bg-[var(--bg-primary)]/80 text-[var(--text-primary)] border border-[var(--border)] backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 opacity-100 translate-y-0 md:opacity-0 md:group-hover:opacity-100 md:transform md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-300">
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} GitHub repository`} className="p-2.5 rounded-xl bg-[var(--accent)] text-white hover:scale-110 transition-all duration-300 shadow-[0_0_15px_var(--accent-muted)]">
                        <Github size={16} />
                      </a>
                    )}
                    {project.links.demo && (
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live demo`} className="p-2.5 rounded-xl bg-white text-[var(--bg-primary)] hover:scale-110 transition-all duration-300">
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {project.status && (
                      <span className="rounded-xl border border-[var(--border)] bg-[var(--bg-primary)]/80 px-3 py-2 font-mono text-xs text-[var(--text-secondary)] backdrop-blur-sm">
                        {project.status}
                      </span>
                    )}
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </SpotlightGrid>

        {/* Pagination Controls */}
        {pageNumbers.length > 1 && (
          <div className="flex justify-center mt-16 space-x-3">
            {pageNumbers.map(number => (
              <button
                key={number}
                onClick={() => {
                  setCurrentPage(number);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-11 h-11 rounded-xl flex items-center justify-center font-display font-semibold transition-all duration-300 hover-lift ${
                  currentPage === number
                    ? "bg-[var(--accent)] text-white shadow-[0_0_20px_var(--accent-muted)]"
                    : "bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-white hover:border-[var(--accent)]/30"
                }`}
              >
                {number}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectShowcase;
