import React, { useRef } from "react";
import { Code2, Layers, Network } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

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
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    className="relative pl-8 md:pl-0"
  >
    <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
      {/* Timeline Node */}
      <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent)] transform -translate-x-[15px] md:-translate-x-1/2 flex items-center justify-center z-20 shadow-[0_0_15px_var(--accent-muted)]">
        <div className="w-2.5 h-2.5 rounded-full bg-[var(--secondary)] animate-pulse" />
      </div>

      <div className="md:w-[46%] mb-8 md:mb-0">
        <div className="group relative glass-card rounded-2xl p-7 hover:border-[var(--accent)]/40 transition-all duration-500 card-shine">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <div className="p-3 bg-[var(--bg-primary)] rounded-xl border border-[var(--border)] text-[var(--accent)] group-hover:border-[var(--accent)]/30 transition-colors">
                <Icon size={22} />
              </div>
              <span className="text-xs font-mono font-semibold text-[var(--accent)] tracking-wider uppercase bg-[var(--accent)]/10 px-3 py-1 rounded-full border border-[var(--accent)]/20">
                {period}
              </span>
            </div>

            <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-[var(--accent)] transition-colors">
              {title}
            </h3>
            <h4 className="text-lg font-body text-[var(--secondary)] mb-4 font-medium">
              {company}
            </h4>
            
            <p className="font-body text-[var(--text-secondary)] text-sm leading-relaxed mb-5">
              {description}
            </p>

            {achievements && achievements.length > 0 && (
              <ul className="space-y-2.5 border-t border-[var(--border)] pt-4">
                {achievements.map((achievement, idx) => (
                  <li key={idx} className="text-xs font-body text-[var(--text-secondary)] flex items-start gap-2.5">
                    <span className="text-[var(--accent)] mt-0.5 font-bold">✦</span>
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="hidden md:block md:w-[46%]" />
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
      <div className="absolute inset-0 neon-glow-bg pointer-events-none opacity-30 mix-blend-screen" />
      
      <section className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 text-center stagger-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-[var(--text-primary)] mb-6 text-glow">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] via-[var(--accent-glow)] to-[var(--secondary)]">Journey</span>
          </h2>
          <p className="text-[var(--text-secondary)] font-body text-lg max-w-2xl mx-auto leading-relaxed">
            A timeline of my professional roles, highlighting my growth, impact, and the technologies mastered along the way.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto py-6" ref={containerRef}>
          {/* Animated Timeline Progress Line (Desktop) */}
          <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-[var(--border)] transform -translate-x-1/2 overflow-hidden">
            <motion.div 
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute inset-0 bg-gradient-to-b from-[var(--accent)] via-[var(--accent-glow)] to-[var(--secondary)]"
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
