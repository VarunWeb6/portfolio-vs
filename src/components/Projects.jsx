import React from "react";
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
    "title": "Enhanced Node.js Server Generator",
    "description": "A powerful command-line interface (CLI) tool for quickly scaffolding a customized Node.js backend. It offers a rich selection of templates (REST, GraphQL, Microservice), databases, authentication features, and development tools, providing a ready-to-go project with a robust folder structure and configuration.",
    "tags": [
      "Node.js",
      "Express.js",
      "CLI",
      "Server Scaffolding",
      "Backend",
      "Automation"
    ],
    "links": {
      "github": "https://github.com/VarunWeb6/server_generator.git",
      "demo": "https://server-generator.vercel.app/"
    },
    "image": ServerGenerator,
    "featured": true
},
    {
      "title": "AI-Powered Executive Dashboard",
      "description": "A professional, real-time executive dashboard that gives global stock overviews, AI-powered news summaries (via Hugging Face models), and live sports coverage — scores and headlines for football, cricket, baseball and more. Built for decision makers who need fast, distilled insights with smooth interactions and an elegant responsive UI.",
      "tags": [
        "React",
        "AI",
        "Hugging Face",
        "Real-time",
        "Stocks",
        "News",
        "Sports",
        "Dashboard"
      ],
      "links": {
        "github": "#",
        "demo": "https://dashboard-frontend-beta-three.vercel.app"
      },
      "image": Dashboard,
      "featured": true
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
      "title": "GameQuartz : Trending Games Finder — By Genre, Platform & Store",
      "description": "Discover current trending games tailored to your favorite genres and platforms. GameQuartz fetches live game data (trending, new releases, top-rated), shows which platforms a game supports, and provides direct links to where you can download or play (Steam, Epic, GOG, PlayStation Store, Xbox Store, Nintendo eShop, App Store, Google Play). Responsive, performance-optimized, and built for cross-platform discovery.",
      "tags": [
        "React",
        "RAWG API",
        "Framer Motion",
        "Tailwind CSS",
        "PWA",
        "Responsive",
        "Performance"
      ],
      "links": {
        "github": "https://github.com/VarunWeb6/Gaming-site.git",
        "demo": "https://gaming-site-coral.vercel.app/",
        // "api_reference": "https://rawg.io/apidocs"
      },
      "image": "GamingSitePreview",
      "featured": true,
      "features": [
        "Fetches live trending & popular games (configurable 'trending' criteria)",
        "Filter by genre, platform, release date, and search",
        "Shows supported platforms and platform-specific badges/icons",
        "Provides store links and direct download/play links when available (Steam, Epic, GOG, console stores, mobile stores)",
        "Lazy-loaded, responsive cover images and optimized network requests",
        "Progressive Web App ready for install and offline caching of recent queries",
        "Accessible UI with keyboard/search-first experience and performance budgets"
      ],
      "platforms_supported": [
        "PC",
        "PlayStation",
        "Xbox",
        "Nintendo",
        "iOS",
        "Android",
        "Web"
      ],
      image: Gaming,
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
