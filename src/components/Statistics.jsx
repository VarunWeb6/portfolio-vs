import React from "react";
import { Code2, FolderOpen, Users, TrendingUp, Award, Github } from "lucide-react";
import { motion } from "framer-motion";
import ScrollTilt3D from "./ScrollTilt3D";

const StatCard = ({ icon: Icon, value, label, color, delay = 0 }) => {
  return (
    <ScrollTilt3D intensity={10}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-[var(--secondary)]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative bg-[var(--bg-secondary)]/80 backdrop-blur-sm border border-[var(--border)] rounded-lg p-6 hover:border-[var(--accent)]/50 transition-all duration-300 hover:scale-105">
        <div className={`inline-flex p-3 rounded-lg ${color} mb-4`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="space-y-2">
          <h3 className="text-3xl md:text-4xl font-display font-extrabold bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] bg-clip-text text-transparent">
            {value}
          </h3>
          <p className="text-[var(--text-secondary)] text-sm font-body font-medium">{label}</p>
        </div>
      </div>
      </motion.div>
    </ScrollTilt3D>
  );
};

const StatisticsSection = () => {
  const stats = [
    {
      icon: FolderOpen,
      value: "12+",
      label: "Projects Completed",
      color: "bg-[var(--accent)]/20 text-[var(--accent)]",
    },
    {
      icon: Code2,
      value: "20+",
      label: "Core Technologies",
      color: "bg-[var(--secondary)]/20 text-[var(--secondary)]",
    },
    {
      icon: TrendingUp,
      value: "2",
      label: "Years of Experience",
      color: "bg-[var(--accent)]/20 text-[var(--accent)]",
    },
    {
      icon: Users,
      value: "3",
      label: "Companies Worked With",
      color: "bg-[var(--secondary)]/20 text-[var(--secondary)]",
    },
    {
      icon: Github,
      value: "50+",
      label: "GitHub Repositories",
      color: "bg-[var(--accent)]/20 text-[var(--accent)]",
    },
    {
      icon: Award,
      value: "100%",
      label: "Delivery Focus",
      color: "bg-[var(--secondary)]/20 text-[var(--secondary)]",
    },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden py-32 bg-[var(--bg-primary)] text-white">
      <div className="absolute inset-0 neon-glow-bg pointer-events-none opacity-40 mix-blend-screen" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-[var(--text-primary)] mb-4">
            Impact & Achievements
          </h2>
          <p className="text-[var(--text-secondary)] font-body text-lg max-w-2xl mx-auto">
            Quantifying the work, systems, and outcomes behind my portfolio.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              color={stat.color}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--bg-secondary)]/80 border border-[var(--border)] backdrop-blur-sm">
            <span className="text-[var(--text-secondary)] font-body text-sm">
              Continuously building AI products, dashboards, and production-ready web applications.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatisticsSection;
