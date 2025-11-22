import React from "react";
import { Github, Calendar, TrendingUp } from "lucide-react";
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
      color: "text-green-400",
      bgColor: "bg-green-500/20",
    },
    {
      label: "Repositories",
      value: "50+",
      icon: TrendingUp,
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
    },
    {
      label: "This Year",
      value: "365+",
      icon: Calendar,
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
    },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden py-20 bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
            GitHub Activity
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
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
              className="bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className={`inline-flex p-3 rounded-lg ${stat.bgColor} mb-4`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
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
          <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Github className="w-6 h-6 text-gray-400" />
                Contribution Graph
              </h3>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-2 transition-colors"
              >
                View Profile
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 overflow-hidden">
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
              <div style={{ display: 'none' }} className="text-center text-gray-400 py-8">
                <p>GitHub contribution graph will appear here</p>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 mt-2 inline-block"
                >
                  Visit my GitHub profile
                </a>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4 text-center">
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
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-xl font-semibold text-white hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-blue-500/50"
          >
            <Github className="w-5 h-5" />
            <span>Explore My GitHub</span>
          </a>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
    </section>
  );
};

export default GitHubActivitySection;

