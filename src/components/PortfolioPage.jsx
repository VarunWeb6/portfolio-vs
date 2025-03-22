import React from "react";
import profileImage from "../assets/images/profile.png";

const AboutMe = () => {
  return (
    <section
      className="about-section bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white py-16 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-2xl">
          <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
            Hello! I’m Varun from Rohtak, Haryana, a passionate full-stack developer
            currently working in the AI field to enhance my tech journey. I specialize in
            creating innovative web solutions and exploring cutting-edge technologies like
            AI, cybersecurity, and blockchain. My focus is on building secure, scalable, and
            intelligent applications that push the boundaries of modern development. As a
            lifelong learner and innovator, I strive to contribute to the tech community by
            developing tools and solutions that drive real-world impact.
          </p>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
