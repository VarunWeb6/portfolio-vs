import React from "react";
import { Code2, FolderOpen, Users, TrendingUp, Award, Github, Calendar, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import ScrollTilt3D from "./ScrollTilt3D";
import AnimatedCounter from "./AnimatedCounter";

const StatCard = ({ icon: Icon, value, label, delay = 0 }) => {
  return (
    <ScrollTilt3D intensity={8}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group"
      >
        <div className="inline-flex p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--accent)] mb-4 group-hover:border-[var(--accent)]/30 group-hover:shadow-[0_0_20px_var(--accent-muted)] transition-all">
          <Icon className="w-5 h-5" />
        </div>
        <div className="space-y-1.5">
          <AnimatedCounter
            target={value}
            className="text-3xl md:text-4xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] block"
          />
          <p className="text-[var(--text-secondary)] text-sm font-body font-medium">{label}</p>
        </div>
      </motion.div>
    </ScrollTilt3D>
  );
};

const StatisticsSection = () => {
  const githubUsername = "VarunWeb6";
  const githubUrl = `https://github.com/${githubUsername}`;

  const stats = [
    { icon: FolderOpen, value: "12+", label: "Projects Completed" },
    { icon: Code2, value: "20+", label: "Core Technologies" },
    { icon: TrendingUp, value: "2", label: "Years Experience" },
    { icon: Users, value: "3", label: "Companies Worked With" },
    { icon: Github, value: "50+", label: "GitHub Repositories" },
    { icon: Award, value: "100%", label: "Delivery Focus" },
  ];

  const githubStats = [
    { label: "Total Contributions", value: "500+", icon: Github },
    { label: "Repositories", value: "50+", icon: TrendingUp },
    { label: "This Year", value: "365+", icon: Calendar },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden py-32 bg-[var(--bg-primary)] text-white">
      <div className="absolute inset-0 neon-glow-bg pointer-events-none opacity-30 mix-blend-screen" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 stagger-in"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-[var(--text-primary)] mb-4 text-glow">
            Impact & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] via-[var(--accent-glow)] to-[var(--secondary)]">Achievements</span>
          </h2>
          <p className="text-[var(--text-secondary)] font-body text-lg max-w-2xl mx-auto">
            Quantifying the work, open-source activity, and engineering outcomes behind my portfolio.
          </p>
        </motion.div>

        {/* Impact Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* GitHub Contribution Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-8 hover:border-[var(--accent)]/30 transition-all duration-500"
        >
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <h3 className="text-2xl font-display font-bold text-white flex items-center gap-3">
              <Github className="w-6 h-6 text-[var(--accent)]" />
              GitHub Open Source Activity
            </h3>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Varun Sharma GitHub profile"
              className="text-[var(--accent)] hover:text-white text-sm font-mono flex items-center gap-2 transition-colors"
            >
              View Profile
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {githubStats.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[var(--bg-primary)]/80 border border-[var(--border)]">
                <div className="flex items-center gap-3 text-[var(--text-secondary)] font-body text-xs mb-1">
                  <item.icon className="w-4 h-4 text-[var(--accent)]" />
                  {item.label}
                </div>
                <div className="text-2xl font-display font-bold text-white">{item.value}</div>
              </div>
            ))}
          </div>

          <div className="bg-[var(--bg-primary)]/80 rounded-xl p-4 overflow-hidden border border-[var(--border)]">
            <img
              src={`https://ghchart.rshah.org/${githubUsername}`}
              alt="GitHub Contribution Graph"
              className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default StatisticsSection;
