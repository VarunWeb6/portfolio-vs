import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "./globe";
import { BrainCircuit, Cloud, Code2, Database, Paintbrush, Server } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaFigma,
  FaAws,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiVercel,
  SiVite,
  SiGithubactions,
  SiRedis,
  SiExpress,
  SiFastapi,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";

import { motion } from "framer-motion";

const SkillCard = ({ icon: Icon, title, skills, color, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
    className="h-full"
  >
    <Card className="group relative overflow-hidden bg-[var(--bg-secondary)]/80 backdrop-blur-md border-[var(--border)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-15px_var(--accent)] hover:border-[var(--accent)]/50 h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <CardContent className="p-8 relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-4 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border)] group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
            <Icon className={`w-8 h-8 ${color}`} />
          </div>
          <h3 className="text-2xl font-display font-bold text-white group-hover:text-[var(--secondary)] transition-colors">
            {title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-3 mt-auto">
          {skills.map((skill, idx) => (
            <div key={idx} className="group/badge relative">
              <Badge
                variant="outline"
                className="relative bg-[var(--bg-primary)] hover:bg-[var(--accent)]/10 text-[var(--text-secondary)] hover:text-white border-[var(--border)] hover:border-[var(--accent)]/50 flex items-center gap-2 py-2 px-3 transition-all duration-300 transform group-hover/badge:-translate-y-1"
              >
                <span className="transform group-hover/badge:scale-110 group-hover/badge:text-[var(--accent)] transition-all duration-300">
                  {skill.icon}
                </span>
                <span className="font-body font-medium">{skill.name}</span>
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: BrainCircuit,
      title: "AI Engineering",
      color: "text-pink-400",
      skills: [
        { name: "Python", icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },
        { name: "FastAPI", icon: <SiFastapi className="w-4 h-4 text-[#009688]" /> },
        { name: "LangChain", icon: <BrainCircuit className="w-4 h-4 text-[var(--accent)]" /> },
        { name: "RAG Systems", icon: <Database className="w-4 h-4 text-[var(--secondary)]" /> },
        { name: "AI Agents", icon: <Code2 className="w-4 h-4 text-white" /> },
      ],
    },
    {
      icon: Code2,
      title: "Full-stack Apps",
      color: "text-blue-400",
      skills: [
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-white" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "Vite", icon: <SiVite className="w-4 h-4 text-[#646CFF]" /> },
      ],
    },
    {
      icon: Server,
      title: "Backend APIs",
      color: "text-green-400",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-[#339933]" /> },
        { name: "Express.js", icon: <SiExpress className="w-4 h-4 text-white" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
        { name: "Redis", icon: <SiRedis className="w-4 h-4 text-[#DC382D]" /> },
        { name: "REST APIs", icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" /> },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-orange-400",
      skills: [
        { name: "AWS", icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
        { name: "Docker", icon: <FaDocker className="w-4 h-4 text-[#2496ED]" /> },
        { name: "GitHub Actions", icon: <SiGithubactions className="w-4 h-4 text-white" /> },
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white" /> },
      ],
    },
    {
      icon: Paintbrush,
      title: "UI Animation",
      color: "text-yellow-400",
      skills: [
        { name: "Figma", icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" /> },
        { name: "Responsive UI", icon: <BsGrid1X2 className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "UI Animation", icon: <MdAnimation className="w-4 h-4 text-[#FF4081]" /> },
        { name: "3D Motion", icon: <MdAnimation className="w-4 h-4 text-[#7C4DFF]" /> },
        { name: "VS Code", icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" /> },
      ],
    },
  ];

  return (
    <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] min-h-screen relative z-10 w-full overflow-hidden">
      {/* Background Textures */}
      <div className="absolute inset-0 neon-glow-bg pointer-events-none opacity-40 mix-blend-screen"></div>
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
      
      <section className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 text-center stagger-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-[var(--text-primary)] mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)]">Skills</span>
          </h2>
          <p className="text-[var(--text-secondary)] font-body text-lg max-w-2xl mx-auto leading-relaxed">
            The core technologies and tools I leverage to build scalable, high-performance digital experiences.
          </p>
        </div>

        {/* Globe Section - Centered on top */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full max-w-2xl mx-auto flex justify-center items-center mb-24 relative"
        >
          <div className="relative z-10 scale-125 md:scale-150 py-10 w-full flex justify-center">
            <IconCloudDemo />
          </div>
        </motion.div>

        {/* Grid Section - Full width below */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              index={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default SkillsSection;
