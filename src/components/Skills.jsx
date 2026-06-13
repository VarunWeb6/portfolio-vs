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
        { name: "Angular", icon: <SiAngular className="w-4 h-4 text-[#DD0031]" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" /> },
        { name: "JavaScript", icon: <FileCode2 className="w-4 h-4 text-[#F7DF1E]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="w-4 h-4 text-[#7952B3]" /> },
        { name: "Material UI", icon: <SiMui className="w-4 h-4 text-[#007FFF]" /> },
        { name: "Redux", icon: <SiRedux className="w-4 h-4 text-[#764ABC]" /> },
        { name: "Vite", icon: <SiVite className="w-4 h-4 text-[#646CFF]" /> },
        { name: "Webpack", icon: <SiWebpack className="w-4 h-4 text-[#8DD6F9]" /> },
        { name: "Responsive UI", icon: <BsGrid1X2 className="w-4 h-4 text-[#38B2AC]" /> },
      ],
    },
    {
      icon: Server,
      title: "Backend APIs",
      color: "text-green-400",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-[#339933]" /> },
        { name: "Express.js", icon: <SiExpress className="w-4 h-4 text-white" /> },
        { name: "FastAPI", icon: <SiFastapi className="w-4 h-4 text-[#009688]" /> },
        { name: "Django", icon: <SiDjango className="w-4 h-4 text-[#092E20]" /> },
        { name: "Flask", icon: <SiFlask className="w-4 h-4 text-white" /> },
        { name: "REST APIs", icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" /> },
        { name: "GraphQL", icon: <SiGraphql className="w-4 h-4 text-[#E10098]" /> },
        { name: "WebSockets", icon: <Network className="w-4 h-4 text-[var(--secondary)]" /> },
        { name: "JWT Auth", icon: <LockKeyhole className="w-4 h-4 text-[#F59E0B]" /> },
        { name: "OAuth", icon: <ShieldCheck className="w-4 h-4 text-[#22C55E]" /> },
        { name: "RBAC", icon: <ShieldCheck className="w-4 h-4 text-[var(--accent)]" /> },
        { name: "Microservices", icon: <Boxes className="w-4 h-4 text-[#A78BFA]" /> },
        { name: "API Design", icon: <FileCode2 className="w-4 h-4 text-white" /> },
        { name: "Serverless APIs", icon: <Cloud className="w-4 h-4 text-[var(--secondary)]" /> },
        { name: "Caching", icon: <SiRedis className="w-4 h-4 text-[#DC382D]" /> },
        { name: "Queues", icon: <Workflow className="w-4 h-4 text-[#F97316]" /> },
        { name: "Mongoose", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
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
        { name: "NoSQL", icon: <Database className="w-4 h-4 text-[#47A248]" /> },
        { name: "Schema Design", icon: <Layers className="w-4 h-4 text-[#A78BFA]" /> },
        { name: "Indexing", icon: <Network className="w-4 h-4 text-[var(--accent)]" /> },
        { name: "Data Modeling", icon: <Boxes className="w-4 h-4 text-[#F59E0B]" /> },
        { name: "Object Storage", icon: <Cloud className="w-4 h-4 text-[var(--secondary)]" /> },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-orange-400",
      skills: [
        { name: "AWS", icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
        { name: "Google Cloud", icon: <SiGooglecloud className="w-4 h-4 text-[#4285F4]" /> },
        { name: "Digital Ocean", icon: <SiDigitalocean className="w-4 h-4 text-[#0080FF]" /> },
        { name: "Docker", icon: <FaDocker className="w-4 h-4 text-[#2496ED]" /> },
        { name: "Kubernetes", icon: <Boxes className="w-4 h-4 text-[#326CE5]" /> },
        { name: "GitHub Actions", icon: <SiGithubactions className="w-4 h-4 text-white" /> },
        { name: "GitLab CI", icon: <SiGitlab className="w-4 h-4 text-[#FC6D26]" /> },
        { name: "Jenkins", icon: <SiJenkins className="w-4 h-4 text-[#D24939]" /> },
        { name: "Terraform", icon: <SiTerraform className="w-4 h-4 text-[#7B42BC]" /> },
        { name: "Ansible", icon: <SiAnsible className="w-4 h-4 text-[#EE0000]" /> },
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
        { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white" /> },
        { name: "CI/CD", icon: <Workflow className="w-4 h-4 text-[var(--secondary)]" /> },
        { name: "Monitoring", icon: <Globe2 className="w-4 h-4 text-[#22C55E]" /> },
        { name: "Deployment", icon: <Cloud className="w-4 h-4 text-[var(--accent)]" /> },
      ],
    },
    {
      icon: Bug,
      title: "Testing & Quality",
      color: "text-red-400",
      skills: [
        { name: "Jest", icon: <SiJest className="w-4 h-4 text-[#C21325]" /> },
        { name: "Unit Testing", icon: <Bug className="w-4 h-4 text-[#22C55E]" /> },
        { name: "Integration Testing", icon: <Workflow className="w-4 h-4 text-[var(--secondary)]" /> },
        { name: "API Testing", icon: <Globe2 className="w-4 h-4 text-[#FF6C37]" /> },
        { name: "Postman", icon: <Globe2 className="w-4 h-4 text-[#FF6C37]" /> },
        { name: "Debugging", icon: <Bug className="w-4 h-4 text-[var(--accent)]" /> },
        { name: "ESLint", icon: <FileCode2 className="w-4 h-4 text-[#4B32C3]" /> },
        { name: "Performance", icon: <Cpu className="w-4 h-4 text-[#F59E0B]" /> },
        { name: "Accessibility", icon: <ShieldCheck className="w-4 h-4 text-[#22C55E]" /> },
      ],
    },
    {
      icon: Wrench,
      title: "Developer Tools",
      color: "text-purple-400",
      skills: [
        { name: "VS Code", icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" /> },
        { name: "GitHub", icon: <FaGitAlt className="w-4 h-4 text-white" /> },
        { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white" /> },
        { name: "Firebase", icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" /> },
        { name: "NPM", icon: <FileCode2 className="w-4 h-4 text-[#CB3837]" /> },
        { name: "CLI Tools", icon: <Wrench className="w-4 h-4 text-[var(--secondary)]" /> },
        { name: "Chrome DevTools", icon: <Globe2 className="w-4 h-4 text-[#4285F4]" /> },
        { name: "Package Design", icon: <Boxes className="w-4 h-4 text-[#A78BFA]" /> },
        { name: "Documentation", icon: <FileCode2 className="w-4 h-4 text-white" /> },
      ],
    },
    {
      icon: Paintbrush,
      title: "UI/UX & Motion",
      color: "text-yellow-400",
      skills: [
        { name: "Figma", icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" /> },
        { name: "Responsive UI", icon: <BsGrid1X2 className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "Wireframing", icon: <BsGrid1X2 className="w-4 h-4 text-[#9CA3AF]" /> },
        { name: "Prototyping", icon: <Palette className="w-4 h-4 text-[#F59E0B]" /> },
        { name: "UI Animation", icon: <MdAnimation className="w-4 h-4 text-[#FF4081]" /> },
        { name: "Framer Motion", icon: <MdAnimation className="w-4 h-4 text-[#E10098]" /> },
        { name: "SVG Animation", icon: <MdAnimation className="w-4 h-4 text-[#00C853]" /> },
        { name: "3D Motion", icon: <MdAnimation className="w-4 h-4 text-[#7C4DFF]" /> },
        { name: "Design Systems", icon: <Layers className="w-4 h-4 text-[var(--secondary)]" /> },
        { name: "Dashboard UI", icon: <BsGrid1X2 className="w-4 h-4 text-white" /> },
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
