import React, { useState } from "react";
import EducationLoader from "./ui/EducationLoader";
import {
  Star,
  Award,
  Calendar,
  BookOpen,
  GraduationCap,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "Master's in Computer Application",
      university: "Manav Rachna International University",
      mascot: "🎓",
      year: "2023-2025",
      achievements: ["GPA: 8.0", "Subject: Computer Application"],
      skills: ["C++", "Python", "Web", "Cyber security"],
      description:
        "Advanced studies in software development, web technologies, and cybersecurity, with a focus on practical projects and emerging technologies like AI and blockchain.",
    },
    {
      degree: "Bachelor's of Computer Application",
      university: "Maharshi Dayanand University",
      mascot: "💻",
      year: "2020-2023",
      achievements: ["GPA: 7.1", "Subject: Computer Application"],
      skills: ["Computer Graphics", "LOC", "C", "Java"],
      description:
        "Built a strong foundation in programming, computer graphics, and software engineering, developing problem-solving skills and hands-on experience with core technologies.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-32 bg-[var(--bg-primary)] select-none">
      {/* Background Textures */}
      <div className="absolute inset-0 neon-glow-bg pointer-events-none opacity-40 mix-blend-screen"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-20 stagger-in"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-[var(--text-primary)] mb-6">
            Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)]">Journey</span>
          </h2>
          <p className="text-[var(--text-secondary)] font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Discover how academic excellence shapes innovative thinking and professional growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`group relative glass-card p-8 sm:p-10 transition-all duration-500 ${
                hoveredIndex === index
                  ? "border-[var(--accent)]/50 shadow-[0_16px_48px_-12px_rgba(99,102,241,0.25)] -translate-y-2"
                  : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

              <div className="relative z-10 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl p-4 bg-[var(--bg-primary)] border border-[var(--border)] rounded-2xl group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                      {edu.mascot}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-[var(--secondary)] transition-colors">
                      {edu.degree}
                    </h3>
                  </div>
                  <div className="space-y-2 pt-2">
                    <p className="text-[var(--text-secondary)] font-body flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-[var(--accent)]" />
                      <span className="font-medium">{edu.university}</span>
                    </p>
                    <p className="text-gray-400 font-body flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-[var(--secondary)]" />
                      <span className="text-sm tracking-wide uppercase">{edu.year}</span>
                    </p>
                  </div>
                </div>

                <p className="text-[var(--text-primary)] font-body leading-relaxed border-l-2 border-[var(--secondary)]/50 pl-4 py-1 italic">
                  "{edu.description}"
                </p>

                <div className="space-y-4">
                  <h4 className="text-sm font-display font-semibold text-[var(--text-primary)] tracking-wider uppercase flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-[var(--accent)]" />
                    Key Achievements
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="px-4 py-2 rounded-full bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-secondary)] flex items-center gap-2 text-sm font-body group-hover:border-[var(--secondary)]/30 transition-colors"
                      >
                        <Award className="w-4 h-4 text-[var(--secondary)]" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[var(--border)] flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-body tracking-wider uppercase rounded-md bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;