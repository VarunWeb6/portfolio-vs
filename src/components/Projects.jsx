import React from "react";
import { Github, ExternalLink } from "lucide-react";
import SaasAI from "../assets/images/saasAI.png";
import project3D_logo from "../assets/images/3D_logo.png";
import Blog from "../assets/images/blog.png";
import Jobportal from "../assets/images/job_portal.png";
import Multinenat from "../assets/images/Multinenat.png";
import Portfolio from "../assets/images/Portfolio.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const ProjectShowcase = () => {
  const projects = [
    {
      title: "3D Website Using Framer-motion",
      description:
        "A visually stunning, interactive 3D website built with Framer Motion and JavaScript. It showcases smooth animations, dynamic user interactions, and a modern, responsive design — perfect for creating immersive web experiences.",
      tags: ["JavaScript", "Framer Motion", "Web Development", "3D Design"],
      links: {
        github: "https://github.com/VarunWeb6/3d_webdeisgn",
        demo: "https://3d-webdesign.vercel.app/",
      },
      image: project3D_logo,
      featured: true,
    },
    {
      title: "Imaginfy : AI-Powered Text-to-Image Generator with Credit System",
      description:
        "Transform your ideas into stunning images using Hugging Face AI — no design skills needed! Built with Framer Motion and JavaScript, the site offers smooth animations, intuitive interactions, and a clean, responsive look.",
      tags: ["JavaScript", "Hugging Face", "Framer Motion", "Web App"],
      links: {
        github: "https://github.com/VarunWeb6/saasAI_client",
        demo: "https://saas-ai-client.vercel.app/",
      },
      image: SaasAI,
      featured: true,
    },
    {
      title: "Modern Blog App",
      description:
        "Share your stories, ideas, and insights effortlessly with this sleek, responsive blog platform. Built using Framer Motion and JavaScript, it delivers smooth animations, an intuitive user experience, and a clean, modern design — perfect for bloggers and creators who want their content to stand out.",
      tags: ["JavaScript", "MERN", "Blog Platform", "Web App"],
      links: {
        github: "https://github.com/VarunWeb6/blog_front-end",
        demo: "https://blog-front-end-v3k9.vercel.app/",
      },
      image: Blog,
      featured: true,
    },
    {
      title: "Company Dashboard & Job Portal",
      description:
        "Empower businesses to manage job postings, track companies, and oversee applications seamlessly with this dynamic, responsive dashboard. Built using Framer Motion and JavaScript, it offers smooth animations, a clean UI, and an intuitive experience — perfect for HR teams and recruiters aiming to streamline hiring processes.",
      tags: ["JavaScript", "MERN", "Company Dashboard", "Job Portal", "Admin Panel"],
      links: {
        github: "https://github.com/VarunWeb6/jobportal_frontend",
        demo: "https://jobportal-frontend-kappa.vercel.app/admin/companies",
      },
      image: Jobportal,
      featured: true,
    },
    {
      title: "Multi-Tenant Article Platform",
      description:
        "A modern multi-tenant blog platform that lets organizations publish and manage articles under custom domains. Features seamless authentication with Clerk, type-safe ORM with Drizzle, and elegant UI components styled like shadcn. Built using the latest Next.js App Router, it supports organization switching, role-based access, and scoped content delivery — perfect for teams and SaaS platforms.",
      tags: ["Next.js", "Drizzle ORM", "Clerk Auth", "Multi-Tenant", "Custom Domains", "Blog Platform", "SaaS"],
      links: {
        github: "https://github.com/VarunWeb6/multi-tenant-blog.git", // replace with your repo
        demo: "https://multi-tenant-blog-qyr8.vercel.app/", // replace with live demo if hosted
      },
      image: Multinenat, // replace with your imported image or banner
      featured: true
    },
    {
      title: "Personal Developer Portfolio",
      description:
        "A sleek and interactive React-based portfolio designed to showcase projects, skills, and contact details with 3D components, animated transitions, and a modern UI. Built with EmailJS for real-time contact form handling and React Icons for visual flair. Ideal for freelancers and developers looking to impress potential clients or recruiters with a clean, responsive presence.",
      tags: ["React.js", "3D Components", "EmailJS", "React Icons", "Portfolio", "Animations"],
      links: {
        github: "https://github.com/VarunWeb6/portfolio-vs.git", // replace with your repo
        demo: "https://portfolio-vs-seven.vercel.app/", // replace with your live site
      },
      image: Portfolio, // replace with your imported image
      featured: true
    },
    {
  "title": "InstaTube Downloader: Full-Stack Video Downloader App",
  "description": "A full-stack application that allows authenticated users to download Instagram Reels and YouTube videos by URL. The backend is built with Python and FastAPI, providing real-time download progress via WebSockets. The frontend uses Streamlit for a clean, responsive, and professional interface, with user authentication handled by Clerk.",
  "tags": [
    "Python",
    "FastAPI",
    "Streamlit",
    "yt-dlp",
    "Clerk Auth",
    "WebSockets"
  ],
  "links": {
    // "github": "https://github.com/your-username/video-downloader-app",
    // "demo": "https://your-streamlit-app-url.com/"
  },
  // "image": "InstaTubeDownloader",
  "featured": true
}


  ];


  return (
    <section className="pt-32 pb-24 px-6 bg-gradient-to-b from-[#0b1120] via-[#0d1224] to-[#020617] min-h-screen text-white">
      <div className="max-w-7xl mx-auto space-y-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-stretch group rounded-2xl bg-gradient-to-r from-[#1e293b] to-[#0f172a] overflow-hidden shadow-xl ring-1 ring-slate-700/40 transition-all duration-700 hover:scale-[1.01]"
          >
            {/* Image Section */}
            <div className="md:w-1/2 w-full bg-black/20 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
  
            {/* Text Section */}
            <div className="md:w-1/2 w-full flex flex-col justify-between p-8 space-y-6 bg-black/20 backdrop-blur-md">
              <MacOsButtons />
  
              <div>
                <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wide mb-2">
                  Featured Project
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                  {project.title}
                </h3>
                <p className="text-slate-300 mt-4 leading-relaxed text-base">
                  {project.description}
                </p>
              </div>
  
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-sm rounded-full border border-emerald-500/30 bg-slate-800 text-emerald-300 font-medium tracking-wide shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
  
              <div className="flex items-center gap-6 pt-2">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400 transition-transform hover:scale-125"
                >
                  <Github size={22} />
                </a>
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400 transition-transform hover:scale-125"
                >
                  <ExternalLink size={22} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
  
};

export default ProjectShowcase;
