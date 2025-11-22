import React from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const CertificationCard = ({ title, issuer, date, credential, link, color, delay = 0 }) => {
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
        <div className="flex items-start justify-between mb-4">
          <div className={`inline-flex p-3 rounded-lg ${color} mb-2`}>
            <Award className="w-6 h-6" />
          </div>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-3">{issuer}</p>
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          {credential && (
            <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded">
              {credential}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const CertificationsSection = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      credential: "CLF-C01",
      link: "#", // Add your certification link
      color: "bg-orange-500/20 text-orange-400",
    },
    {
      title: "Full Stack Web Development",
      issuer: "Cognifyz Technologies",
      date: "2024",
      credential: "Internship Certificate",
      link: "#",
      color: "bg-blue-500/20 text-blue-400",
    },
    {
      title: "React - The Complete Guide",
      issuer: "Udemy",
      date: "2024",
      credential: "Course Completion",
      link: "#",
      color: "bg-cyan-500/20 text-cyan-400",
    },
    {
      title: "Node.js - The Complete Guide",
      issuer: "Udemy",
      date: "2024",
      credential: "Course Completion",
      link: "#",
      color: "bg-green-500/20 text-green-400",
    },
    // Add more certifications as you get them
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
            Certifications & Learning
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Continuous learning and professional development credentials
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              credential={cert.credential}
              link={cert.link}
              color={cert.color}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
            <span className="text-gray-300 text-sm">
              📚 Always learning and expanding my skill set
            </span>
          </div>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
    </section>
  );
};

export default CertificationsSection;

