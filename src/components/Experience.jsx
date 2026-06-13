import React, { useRef } from "react";
import { Code2, Activity, Cpu, Layers, Network, Binary } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
  achievements,
  index
}) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
    className="relative pl-8 md:pl-0"
  >
    
    <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
      {/* Timeline Node */}
      <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent)] transform -translate-x-[15px] md:-translate-x-1/2 flex items-center justify-center z-20 shadow-[0_0_15px_var(--accent-muted)]">
        <div className="w-3 h-3 rounded-full bg-[var(--secondary)] animate-pulse"></div>
      </div>

      <div className="md:w-[45%] mb-8 md:mb-0">
        <div className="group relative bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl p-8 hover:border-[var(--secondary)]/50 transition-all duration-500 hover:shadow-[0_10px_40px_-15px_var(--secondary)]">
          
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[var(--secondary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-[var(--bg-primary)] rounded-lg border border-[var(--border)] text-[var(--secondary)]">
                <Icon size={24} />
              </div>
              <span className="text-sm font-body font-bold text-[var(--accent)] tracking-widest uppercase bg-[var(--accent)]/10 px-3 py-1 rounded-full border border-[var(--accent)]/20">
                {period}
              </span>
            </div>

            <h3 className="text-3xl font-display font-bold text-white mb-1 group-hover:text-[var(--secondary)] transition-colors">
              {title}
            </h3>
            <h4 className="text-xl font-body text-[var(--text-secondary)] mb-6">
              {company}
            </h4>
            
            <p className="font-body text-[var(--text-primary)] leading-relaxed mb-6">
              {description}
            </p>

            {achievements && achievements.length > 0 && (
              <ul className="space-y-3">
                {achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm font-body text-[var(--text-secondary)] flex items-start gap-3">
                    <span className="text-[var(--secondary)] mt-1">✦</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="hidden md:block md:w-[45%]"></div>
    </div>
  </motion.div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Network,
      title: "Software Engineer",
      company: "Nervesparks India Private Limited",
      period: "Nov 2024 - Present",
      description:
        "Developed and customized AI solutions including offline LLMs, AI agents (LangChain, LangGraph), and proof-of-concepts like NLP translation tools and AI-powered QBMS.",
      achievements: [
        "Built 3+ AI-powered proof-of-concepts using LangChain and LangGraph",
        "Implemented offline LLM solutions reducing API costs by 40%",
        "Developed NLP translation tools supporting 5+ languages",
        "Stack: Python, LangChain, LangGraph, OpenAI, FastAPI, Docker"
      ],
    },
    {
      icon: Layers,
      title: "Web Developer",
      company: "Manav Rachna University",
      period: "Sept 2024 - Nov 2024",
      description:
        "Built and optimized the Student Welfare Department website using SvelteJS, implemented a feedback module to boost teacher–student engagement, and improved SEO/AEO performance.",
      achievements: [
        "Improved website performance by 35% through optimization",
        "Increased teacher-student engagement by 50% with feedback module",
        "Enhanced SEO rankings resulting in 25% more organic traffic",
        "Stack: SvelteJS, JavaScript, CSS3, SEO optimization"
      ],
    },
    {
      icon: Code2,
      title: "Full Stack Developer Intern",
      company: "Cognifyz",
      period: "June 2024 - Aug 2024",
      description:
        "Developed a full-stack Learning Management System (LMS) with Node.js, React.js, MongoDB, Express, and Redis for caching, increasing visibility of training modules.",
      achievements: [
        "Built scalable LMS serving 1000+ users with Redis caching",
        "Reduced page load time by 45% through optimization",
        "Implemented RESTful APIs handling 10K+ requests daily",
        "Stack: Node.js, React.js, MongoDB, Express, Redis, JWT"
      ],
    },
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] min-h-screen relative z-10 w-full overflow-hidden">
      {/* Background Textures */}
      <div className="absolute inset-0 neon-glow-bg pointer-events-none opacity-40 mix-blend-screen"></div>
      
      <section className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 text-center stagger-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-[var(--text-primary)] mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)]">Journey</span>
          </h2>
          <p className="text-[var(--text-secondary)] font-body text-lg max-w-2xl mx-auto leading-relaxed">
            A timeline of my professional roles, highlighting my growth, impact, and the technologies mastered along the way.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto py-10" ref={containerRef}>
          {/* Animated Timeline Progress Line (Desktop) */}
          <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-[var(--border)] transform -translate-x-1/2 overflow-hidden">
            <motion.div 
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute inset-0 bg-gradient-to-b from-[var(--accent)] to-[var(--secondary)]"
            />
          </div>

          <div className="space-y-12 md:space-y-0">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} index={index} {...exp} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExperienceSection;
