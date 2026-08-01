import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "./globe";
import {
  BrainCircuit,
  Boxes,
  Bug,
  Cloud,
  Code2,
  Cpu,
  Database,
  FileCode2,
  Globe2,
  Layers,
  LockKeyhole,
  Network,
  Paintbrush,
  Palette,
  Server,
  ShieldCheck,
  Workflow,
  Wrench,
} from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaAws,
} from "react-icons/fa";
import {
  SiAngular,
  SiAnsible,
  SiBootstrap,
  SiDigitalocean,
  SiDjango,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiFlask,
  SiGitlab,
  SiGithubactions,
  SiGooglecloud,
  SiGraphql,
  SiJenkins,
  SiJest,
  SiMui,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiRedux,
  SiSvelte,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiMongodb,
  SiVuedotjs,
  SiVercel,
  SiVite,
  SiWebpack,
  SiRedis,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";

import { motion } from "framer-motion";

const SkillCard = ({ icon: Icon, title, skills, color, index, isFeatured }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
    className={`h-full ${isFeatured ? "md:col-span-2 lg:col-span-1" : ""}`}
  >
    <div
      className={`group relative overflow-hidden rounded-2xl h-full transition-all duration-500 hover:-translate-y-2 ${
        isFeatured
          ? "bg-gradient-to-br from-[var(--bg-secondary)] via-[#16132a] to-[var(--bg-secondary)] border-2 border-[var(--accent)] shadow-[0_0_30px_rgba(99,102,241,0.25)]"
          : "glass-card"
      }`}
    >
      {isFeatured && (
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[var(--accent)]/20 border border-[var(--accent)]/40 text-[var(--accent)] font-mono text-[10px] font-bold uppercase tracking-wider">
          Core Focus
        </div>
      )}

      <div className="p-7 relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`p-3.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border)] group-hover:scale-110 group-hover:border-[var(--accent)]/40 transition-all duration-500 ${
              isFeatured ? "shadow-[0_0_20px_var(--accent-muted)]" : ""
            }`}
          >
            <Icon className={`w-7 h-7 ${color}`} />
          </div>
          <h3 className="text-xl font-display font-bold text-white group-hover:text-[var(--accent)] transition-colors">
            {title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2.5 mt-auto">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium font-body bg-[var(--bg-primary)]/80 border border-[var(--border)] text-[var(--text-secondary)] hover:text-white hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/10 transition-all duration-300"
            >
              <span className="text-sm">{skill.icon}</span>
              <span>{skill.name}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: BrainCircuit,
      title: "AI Engineering",
      color: "text-[var(--accent)]",
      isFeatured: true,
      skills: [
        { name: "Python", icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },
        { name: "FastAPI", icon: <SiFastapi className="w-4 h-4 text-[#009688]" /> },
        { name: "LangChain", icon: <BrainCircuit className="w-4 h-4 text-[var(--accent)]" /> },
        { name: "LangGraph", icon: <Workflow className="w-4 h-4 text-[var(--secondary)]" /> },
        { name: "RAG Systems", icon: <Database className="w-4 h-4 text-[var(--secondary)]" /> },
        { name: "AI Agents", icon: <Code2 className="w-4 h-4 text-white" /> },
        { name: "OpenAI API", icon: <BrainCircuit className="w-4 h-4 text-white" /> },
        { name: "Vector Search", icon: <Network className="w-4 h-4 text-[var(--accent)]" /> },
        { name: "Embeddings", icon: <Cpu className="w-4 h-4 text-[var(--secondary)]" /> },
        { name: "Prompt Engineering", icon: <FileCode2 className="w-4 h-4 text-[#F59E0B]" /> },
        { name: "Offline LLMs", icon: <Server className="w-4 h-4 text-[#10B981]" /> },
        { name: "NLP", icon: <BrainCircuit className="w-4 h-4 text-[#A78BFA]" /> },
      ],
    },
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-white" /> },
        { name: "SvelteKit", icon: <SiSvelte className="w-4 h-4 text-[#FF3E00]" /> },
        { name: "Vue.js", icon: <SiVuedotjs className="w-4 h-4 text-[#4FC08D]" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" /> },
        { name: "JavaScript", icon: <FileCode2 className="w-4 h-4 text-[#F7DF1E]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "Redux", icon: <SiRedux className="w-4 h-4 text-[#764ABC]" /> },
        { name: "Vite", icon: <SiVite className="w-4 h-4 text-[#646CFF]" /> },
        { name: "Responsive UI", icon: <BsGrid1X2 className="w-4 h-4 text-[#38B2AC]" /> },
      ],
    },
    {
      icon: Server,
      title: "Backend APIs",
      color: "text-emerald-400",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-[#339933]" /> },
        { name: "Express.js", icon: <SiExpress className="w-4 h-4 text-white" /> },
        { name: "FastAPI", icon: <SiFastapi className="w-4 h-4 text-[#009688]" /> },
        { name: "Django", icon: <SiDjango className="w-4 h-4 text-[#092E20]" /> },
        { name: "Flask", icon: <SiFlask className="w-4 h-4 text-white" /> },
        { name: "REST APIs", icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" /> },
        { name: "GraphQL", icon: <SiGraphql className="w-4 h-4 text-[#E10098]" /> },
        { name: "WebSockets", icon: <Network className="w-4 h-4 text-[var(--secondary)]" /> },
        { name: "Caching", icon: <SiRedis className="w-4 h-4 text-[#DC382D]" /> },
        { name: "Prisma", icon: <SiPrisma className="w-4 h-4 text-white" /> },
      ],
    },
    {
      icon: Database,
      title: "Databases & Storage",
      color: "text-cyan-400",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
        { name: "Redis", icon: <SiRedis className="w-4 h-4 text-[#DC382D]" /> },
        { name: "pgvector", icon: <Database className="w-4 h-4 text-[var(--secondary)]" /> },
        { name: "SQL", icon: <Database className="w-4 h-4 text-white" /> },
        { name: "Schema Design", icon: <Layers className="w-4 h-4 text-[#A78BFA]" /> },
        { name: "Data Modeling", icon: <Boxes className="w-4 h-4 text-[#F59E0B]" /> },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-purple-400",
      skills: [
        { name: "AWS", icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
        { name: "Docker", icon: <FaDocker className="w-4 h-4 text-[#2496ED]" /> },
        { name: "GitHub Actions", icon: <SiGithubactions className="w-4 h-4 text-white" /> },
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
        { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white" /> },
        { name: "CI/CD", icon: <Workflow className="w-4 h-4 text-[var(--secondary)]" /> },
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Quality",
      color: "text-amber-400",
      skills: [
        { name: "VS Code", icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" /> },
        { name: "Jest", icon: <SiJest className="w-4 h-4 text-[#C21325]" /> },
        { name: "Postman", icon: <Globe2 className="w-4 h-4 text-[#FF6C37]" /> },
        { name: "Figma", icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" /> },
        { name: "Framer Motion", icon: <MdAnimation className="w-4 h-4 text-[#E10098]" /> },
        { name: "ESLint", icon: <FileCode2 className="w-4 h-4 text-[#4B32C3]" /> },
      ],
    },
  ];

  return (
    <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] min-h-screen relative z-10 w-full overflow-hidden">
      {/* Background Textures */}
      <div className="absolute inset-0 neon-glow-bg pointer-events-none opacity-30 mix-blend-screen"></div>
      
      <section className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 text-center stagger-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-[var(--text-primary)] mb-6 text-glow">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] via-[var(--accent-glow)] to-[var(--secondary)]">Skills</span>
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
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              index={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
              isFeatured={category.isFeatured}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default SkillsSection;
