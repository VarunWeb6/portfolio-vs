import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./components/Home";
import "./assets/css/index.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Statistics from "./components/Statistics";
import Certifications from "./components/Certifications";
import Timeline from "./components/Timeline";
import GitHubActivity from "./components/GitHubActivity";

const PageWrapper = ({ children }) => {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  const location = useLocation();

  return (
    <>

      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
          <Route path="/experience" element={<PageWrapper><Experience /></PageWrapper>} />
          <Route path="/education" element={<PageWrapper><Education /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
          <Route path="/statistics" element={<PageWrapper><Statistics /></PageWrapper>} />
          <Route path="/timeline" element={<PageWrapper><Timeline /></PageWrapper>} />
          <Route path="/github" element={<PageWrapper><GitHubActivity /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
