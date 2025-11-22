import React from "react";
import { Briefcase, GraduationCap, Award, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const TimelineItem = ({ icon: Icon, title, subtitle, period, description, achievements, color, isLast, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative flex gap-6 pb-8"
    >
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent" />
      )}

      {/* Icon */}
      <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full ${color} flex items-center justify-center shadow-lg`}>
        <Icon className="w-6 h-6 text-white" />
      </div>

      {/* Content */}
      <div className="flex-1 pt-1">
        <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
              <p className="text-blue-400 font-semibold">{subtitle}</p>
            </div>
            <span className="text-sm text-gray-400 font-mono bg-gray-800/50 px-3 py-1 rounded-full mt-2 md:mt-0">
              {period}
            </span>
          </div>
          <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
          {achievements && achievements.length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-800">
              <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Achievements:</h4>
              <ul className="space-y-1.5">
                {achievements.slice(0, 3).map((achievement, idx) => (
                  <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const TimelineSection = () => {
  const timelineItems = [
    {
      icon: Briefcase,
      title: "Associate Software Engineer",
      subtitle: "Nervesparks",
      period: "Nov 2024 - Present",
      description: "Developed and customized AI solutions including offline LLMs, AI agents (LangChain, LangGraph), and proof-of-concepts like NLP translation tools and AI-powered QBMS.",
      achievements: [
        "Built 3+ AI-powered proof-of-concepts using LangChain and LangGraph",
        "Implemented offline LLM solutions reducing API costs by 40%",
        "Developed NLP translation tools supporting 5+ languages"
      ],
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      icon: Briefcase,
      title: "Web Developer",
      subtitle: "Manav Rachna University",
      period: "Sept 2024 - Nov 2024",
      description: "Built and optimized the Student Welfare Department website using SvelteJS, implemented a feedback module to boost teacher–student engagement, and improved SEO/AEO performance.",
      achievements: [
        "Improved website performance by 35% through optimization",
        "Increased teacher-student engagement by 50% with feedback module",
        "Enhanced SEO rankings resulting in 25% more organic traffic"
      ],
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      icon: Briefcase,
      title: "Full Stack Developer Intern",
      subtitle: "Cognifyz",
      period: "June 2024 - Aug 2024",
      description: "Developed a full-stack Learning Management System (LMS) with Node.js, React.js, MongoDB, Express, and Redis for caching, increasing visibility of training modules.",
      achievements: [
        "Built scalable LMS serving 1000+ users with Redis caching",
        "Reduced page load time by 45% through optimization",
        "Implemented RESTful APIs handling 10K+ requests daily"
      ],
      color: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
    {
      icon: GraduationCap,
      title: "Master's in Computer Application",
      subtitle: "Manav Rachna International University",
      period: "2023-2025",
      description: "Advanced studies in software development, web technologies, and cybersecurity, with a focus on practical projects and emerging technologies like AI and blockchain.",
      achievements: ["GPA: 8.0", "Subject: Computer Application"],
      color: "bg-gradient-to-br from-orange-500 to-red-500",
    },
    {
      icon: GraduationCap,
      title: "Bachelor's of Computer Application",
      subtitle: "Maharshi Dayanand University",
      period: "2020-2023",
      description: "Built a strong foundation in programming, computer graphics, and software engineering, developing problem-solving skills and hands-on experience with core technologies.",
      achievements: ["GPA: 7.1", "Subject: Computer Application"],
      color: "bg-gradient-to-br from-indigo-500 to-purple-500",
      isLast: true,
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
            Career Timeline
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A visual journey through my professional and academic milestones
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {timelineItems.map((item, index) => (
            <TimelineItem
              key={index}
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
              period={item.period}
              description={item.description}
              achievements={item.achievements}
              color={item.color}
              isLast={item.isLast || index === timelineItems.length - 1}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
    </section>
  );
};

export default TimelineSection;

