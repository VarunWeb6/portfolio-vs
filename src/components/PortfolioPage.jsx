import React from "react";
import Statistics from "./Statistics";
import Certifications from "./Certifications";
import Timeline from "./Timeline";
import GitHubActivity from "./GitHubActivity";

const AboutMe = () => {
  return (
    <section
      className="about-section bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white py-16 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-3xl">
          <h2 className="text-[#4ECCA3] text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Hello! I'm <span className="text-[#4ECCA3] font-semibold">Varun Sharma</span>, a Software Engineer from Rohtak, Haryana, with <span className="text-[#4ECCA3] font-semibold">2 years of professional experience</span> building innovative web solutions and AI-powered applications.
            </p>
            <p>
              Currently working as an <span className="text-[#4ECCA3] font-semibold">Associate Software Engineer</span> at Nervesparks, I specialize in developing AI solutions using LangChain, LangGraph, and custom LLM implementations. My expertise spans the entire development stack—from crafting beautiful, responsive frontends with React and Next.js to building robust, scalable backends with Node.js, Python, and modern databases.
            </p>
            <p>
              What sets me apart is my ability to <span className="text-[#4ECCA3] font-semibold">bridge the gap between AI innovation and practical application</span>. I've built production-ready systems that reduce costs by 40%, improved performance by 35-45%, and increased user engagement by 50%. My projects range from enterprise knowledge management systems with RAG architecture to real-time dashboards and multi-tenant SaaS platforms.
            </p>
            <p>
              As a <span className="text-[#4ECCA3] font-semibold">lifelong learner</span>, I'm constantly exploring cutting-edge technologies like AI/ML, cybersecurity, and cloud infrastructure. I believe in writing clean, maintainable code and contributing to the developer community through open-source projects and knowledge sharing.
            </p>
            <p className="pt-4">
              <span className="text-[#4ECCA3] font-semibold">Let's build something amazing together!</span> 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const PortfolioPage = () => {
  return (
    <>
      <AboutMe />
      <Statistics />
      <Timeline />
      <Certifications />
      <GitHubActivity />
    </>
  );
};

export default PortfolioPage;
