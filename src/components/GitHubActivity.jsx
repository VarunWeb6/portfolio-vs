import React from "react";
import { Calendar, ExternalLink, Github, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const GitHubActivitySection = () => {
  // GitHub username - update this with your actual GitHub username
  const githubUsername = "VarunWeb6";
  const githubUrl = `https://github.com/${githubUsername}`;

  const stats = [
    {
      label: "Total Contributions",
      value: "500+",
      icon: Github,
      color: "text-[var(--secondary)]",
      bgColor: "bg-[var(--secondary)]/20",
    },
    {
      label: "Repositories",
      value: "50+",
      icon: TrendingUp,
      color: "text-[var(--accent)]",
      bgColor: "bg-[var(--accent)]/20",
    },
    {
      label: "This Year",
      value: "365+",
      icon: Calendar,
      color: "text-[var(--secondary)]",
      bgColor: "bg-[var(--secondary)]/20",
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
            GitHub Activity
          </h2>
          <p className="text-[var(--text-secondary)] font-body text-lg max-w-2xl mx-auto">
            My coding journey visualized through contributions and open-source work
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[var(--bg-secondary)]/80 backdrop-blur-sm border border-[var(--border)] rounded-lg p-6 hover:border-[var(--accent)]/50 transition-all duration-300 hover:scale-105"
            >
              <div className={`inline-flex p-3 rounded-lg ${stat.bgColor} mb-4`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-display font-extrabold text-white">{stat.value}</h3>
                <p className="text-[var(--text-secondary)] font-body text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-[var(--bg-secondary)]/80 backdrop-blur-sm border border-[var(--border)] rounded-lg p-6 hover:border-[var(--secondary)]/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Github className="w-6 h-6 text-[var(--secondary)]" />
                Contribution Graph
              </h3>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Varun Sharma GitHub profile"
                className="text-[var(--secondary)] hover:text-white text-sm flex items-center gap-2 transition-colors"
              >
                View Profile
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="bg-[var(--bg-primary)]/70 rounded-lg p-4 overflow-hidden border border-[var(--border)]">
              {/* GitHub Contribution Graph Image */}
              <img
                src={`https://ghchart.rshah.org/${githubUsername}`}
                alt="GitHub Contribution Graph"
                className="w-full h-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div style={{ display: 'none' }} className="text-center text-[var(--text-secondary)] py-8">
                <p>GitHub contribution graph will appear here</p>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--secondary)] hover:text-white mt-2 inline-block"
                >
                  Visit my GitHub profile
                </a>
              </div>
            </div>
            <p className="text-[var(--text-secondary)] font-body text-sm mt-4 text-center">
              This graph shows my coding activity over the past year. Each square represents a day of contributions.
            </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Explore Varun Sharma GitHub profile"
            className="inline-flex items-center gap-3 bg-[var(--accent)] px-8 py-4 rounded-lg font-semibold text-white hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-[0_0_24px_var(--accent-muted)]"
          >
            <Github className="w-5 h-5" />
            <span>Explore My GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubActivitySection;
