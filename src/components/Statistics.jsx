import React from "react";
import { Code2, FolderOpen, Users, TrendingUp, Award, Github } from "lucide-react";
import { motion } from "framer-motion";

const StatCard = ({ icon: Icon, value, label, color, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
        <div className={`inline-flex p-3 rounded-lg ${color} mb-4`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="space-y-2">
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {value}
          </h3>
          <p className="text-gray-400 text-sm font-medium">{label}</p>
        </div>
      </div>
    </motion.div>
  );
};

const StatisticsSection = () => {
  const stats = [
    {
      icon: FolderOpen,
      value: "10+",
      label: "Projects Completed",
      color: "bg-blue-500/20 text-blue-400",
    },
    {
      icon: Code2,
      value: "20+",
      label: "Technologies Mastered",
      color: "bg-green-500/20 text-green-400",
    },
    {
      icon: TrendingUp,
      value: "2",
      label: "Years of Experience",
      color: "bg-purple-500/20 text-purple-400",
    },
    {
      icon: Users,
      value: "3",
      label: "Companies Worked With",
      color: "bg-orange-500/20 text-orange-400",
    },
    {
      icon: Github,
      value: "50+",
      label: "GitHub Repositories",
      color: "bg-pink-500/20 text-pink-400",
    },
    {
      icon: Award,
      value: "100%",
      label: "Client Satisfaction",
      color: "bg-teal-500/20 text-teal-400",
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
            Impact & Achievements
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Quantifying my journey through metrics that matter
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
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
            <span className="text-gray-300 text-sm">
              🚀 Continuously learning and building innovative solutions
            </span>
          </div>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
    </section>
  );
};

export default StatisticsSection;

