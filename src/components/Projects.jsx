import { motion } from "framer-motion";
import React, { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
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
import EcomImg from "../assets/images/ecom.png"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4 absolute top-4 left-4 z-20">
    <div className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 transition-colors shadow-md" />
  </div>
);

const ProjectShowcase = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const projects = [
    {
      title: "Shoekart",
      description: "Welcome to Shoekart – where style meets comfort! Shoekart is an e-commerce platform dedicated to buying shoes.",
      tags: ["React", "Express", "MongoDB", "Stripe"],
      links: { github: "https://github.com/VarunWeb6/shoekart-shopping-app/", demo: "https://shoekart-shopping-app.vercel.app/" },
      image: EcomImg
    },
    {
      title: "3D Website Using Framer",
      description: "A visually stunning, interactive 3D website built with Framer Motion and JavaScript.",
      tags: ["Framer Motion", "3D Design"],
      links: { github: "https://github.com/VarunWeb6/3d_webdeisgn", demo: "https://3d-webdesign.vercel.app/" },
      image: project3D_logo
    },
    {
      title: "Enhanced Server Generator",
      description: "A powerful CLI tool for quickly scaffolding a customized Node.js backend.",
      tags: ["Node.js", "CLI", "Server Scaffolding"],
      links: { github: "https://github.com/VarunWeb6/server_generator.git", demo: "https://server-generator.vercel.app/" },
      image: ServerGenerator
    },
    {
      title: "Job Tracker with AI",
      description: "A job search dashboard tracking application stages. It features an integrated AI-powered tool.",
      tags: ["AI", "React", "MongoDB", "OpenAI"],
      links: { github: "https://github.com/VarunWeb6/Job_tracker.git", demo: "https://job-tracker-khaki.vercel.app/" },
      image: JobTracker
    },
    {
      title: "AI Knowledge Hub",
      description: "A scalable platform using RAG to provide exact, citable answers from private knowledge bases.",
      tags: ["Next.js", "pgvector", "RAG", "Redis"],
      links: { github: "https://github.com/VarunWeb6/knowledge-hub-frontend.git", demo: "https://knowledge-hub-frontend-rh7e.vercel.app/" },
      image: KBHUB
    },
    {
      title: "AI Executive Dashboard",
      description: "A professional dashboard for real-time global stock overviews and AI-powered news summaries.",
      tags: ["AI", "Real-time", "Dashboard"],
      links: { github: "#", demo: "https://dashboard-frontend-beta-three.vercel.app" },
      image: Dashboard
    },
    {
      title: "InstaTube Downloader",
      description: "Full-stack application to download content backed by WebSockets for progress updates.",
      tags: ["Python", "FastAPI", "WebSockets"],
      links: {},
      image: Multinenat
    }
  ];

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(projects.length / projectsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] min-h-screen relative z-10 w-full">
      
      {/* Background Textures */}
      <div className="absolute inset-0 neon-glow-bg pointer-events-none opacity-40"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 text-center stagger-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-[var(--text-primary)] mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)]">Work</span>
          </h2>
          <p className="text-[var(--text-secondary)] font-body text-lg max-w-2xl mx-auto leading-relaxed">
            A curated selection of my finest commercial and independent technical achievements.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
          {currentProjects.map((project, index) => {
            // Bento logic: First item is large, few are wide, others are standard
            const isLarge = index === 0;
            const isWide = index === 3 || index === 4;
            
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.01 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative rounded-3xl overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border)] shadow-xl
                  ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}
                  ${!isLarge && isWide ? 'md:col-span-2 lg:col-span-2 row-span-1' : ''}
                  ${!isLarge && !isWide ? 'col-span-1 md:col-span-1 row-span-1' : ''}
                `}
              >
                <MacOsButtons />
                
                {/* Image Background */}
                <div className="absolute inset-0 w-full h-full overflow-hidden opacity-60 group-hover:opacity-40 transition-opacity duration-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[#0d0d12]/80 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-[var(--secondary)] transition-colors">
                    {project.title}
                  </h3>
                  
                  {isLarge && (
                    <p className="text-[var(--text-secondary)] font-body text-sm line-clamp-3 mb-4 max-w-md">
                      {project.description}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs font-body rounded-md bg-[var(--bg-primary)]/80 text-[var(--text-primary)] border border-[var(--border)] backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[var(--accent)] text-white hover:scale-110 transition-transform shadow-[0_0_15px_var(--accent-muted)]">
                        <Github size={18} />
                      </a>
                    )}
                    {project.links.demo && (
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] hover:scale-110 transition-transform">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-16 space-x-3">
          {pageNumbers.map(number => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`w-10 h-10 rounded-xl flex items-center justify-center font-display font-semibold transition-all duration-300 hover-lift ${
                currentPage === number
                  ? "bg-[var(--accent)] text-white shadow-[0_0_15px_var(--accent-muted)]"
                  : "bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-white"
              }`}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;