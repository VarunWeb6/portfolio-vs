import React from "react";
import { Github, ExternalLink } from "lucide-react";
import SaasAI from "../assets/images/saasAI.png";
import project3D_logo from "../assets/images/3D_logo.png";
import Blog from "../assets/images/blog.png";
import Jobportal from "../assets/images/job_portal.png";
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
    }
    
    
    
  ];
  

  return (
    <div
      className="pt-40 min-h-screen bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90
 p-8 text-slate-100"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center group rounded-lg p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 bg-[length:400%_400%] animate-gradient-xy hover:bg-[length:100%_100%] transition-all duration-700 shadow-lg"
          >
            {/* Image Section */}
            <div className="md:w-1/2 overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Text Section */}
            <Card className="md:w-1/2 bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl p-6">
              <MacOsButtons />

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">
                      Featured Project
                    </div>
                    <CardTitle className="text-slate-100 text-3xl font-bold">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.links.github}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={22} />
                    </a>
                    <a
                      href={project.links.demo}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="mt-4">
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
