import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import Hero from "./Hero";
import AnimatedCounter from "./AnimatedCounter";
import JobTracker from "../assets/images/job-tracker.png";
import KBHUB from "../assets/images/kb-hub.png";
import Dashboard from "../assets/images/dashboard.png";
import EcomImg from "../assets/images/ecom.png";
import Gaming from "../assets/images/gaming.png";
import Blog from "../assets/images/blog.png";

const stats = [
  { value: "12+", label: "Shipped projects", icon: Code2 },
  { value: "3", label: "Professional roles", icon: Briefcase },
  { value: "40%", label: "AI cost reduction", icon: TrendingUp },
  { value: "1K+", label: "Users served", icon: Users },
];

const featuredProjects = [
  {
    title: "Shoekart",
    description:
      "E-commerce platform dedicated to buying shoes with catalog, cart handling, and Stripe payments.",
    image: EcomImg,
    tags: ["React", "Express", "MongoDB", "Stripe"],
    demo: "https://shoekart-shopping-app.vercel.app/",
  },
  {
    title: "Gaming Website with Search",
    description:
      "An immersive gaming platform featuring search functionality and detailed game catalogs.",
    image: Gaming,
    tags: ["React", "API", "Search"],
    demo: "https://gaming-site-coral.vercel.app/",
  },
  {
    title: "Modern Blog App",
    description:
      "A sleek, responsive blog platform with smooth animations and an intuitive user experience.",
    image: Blog,
    tags: ["React", "Framer Motion", "Tailwind"],
    demo: "https://blog-front-end-v3k9.vercel.app/",
  },
];

const experienceHighlights = [
  {
    text: "Built LangChain and LangGraph proof-of-concepts for AI workflows.",
    icon: Sparkles,
  },
  {
    text: "Implemented offline LLM solutions that reduced API costs by 40%.",
    icon: TrendingUp,
  },
  {
    text: "Developed full-stack LMS workflows with Redis-backed performance gains.",
    icon: Zap,
  },
];

const SectionHeading = ({ eyebrow, title, children }) => (
  <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
    <div>
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="max-w-3xl font-display text-3xl font-extrabold leading-tight text-[var(--text-primary)] md:text-5xl text-glow">
        {title}
      </h2>
    </div>
    {children}
  </div>
);

export default function Home() {
  return (
    <>
      <Hero />

      <main className="bg-[var(--bg-primary)] text-[var(--text-primary)]">
        {/* ── Stats Section ────────────────────────────────── */}
        <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
          <div className="absolute inset-0 neon-glow-bg opacity-20 pointer-events-none" />
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {stats.map(({ value, label, icon: Icon }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-primary)] text-[var(--accent)] group-hover:border-[var(--accent)]/30 group-hover:shadow-[0_0_20px_var(--accent-muted)] transition-all duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <AnimatedCounter
                    target={value}
                    className="font-display text-3xl font-extrabold text-white"
                  />
                  <p className="mt-1.5 font-body text-sm text-[var(--text-secondary)]">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Featured Work ────────────────────────────────── */}
        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Featured Work"
              title="AI products and full-stack systems with clear user value."
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] px-5 py-3 font-body text-sm font-semibold text-[var(--text-primary)] transition-all hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 hover:shadow-[0_0_20px_var(--accent-muted)]"
              >
                View all projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </SectionHeading>

            <div className="grid gap-6 lg:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group overflow-hidden glass-card transition-all duration-500 hover:-translate-y-2 hover:border-[var(--accent)]/40 hover:shadow-[0_20px_60px_-20px_var(--accent-muted)] card-shine"
                >
                  <div className="aspect-[16/10] overflow-hidden border-b border-[rgba(255,255,255,0.08)] bg-[var(--bg-primary)]/50">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-[var(--border)] bg-[var(--bg-primary)] px-2.5 py-1 font-mono text-xs text-[var(--text-secondary)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white group-hover:text-[var(--accent)] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="mt-3 font-body text-sm leading-relaxed text-[var(--text-secondary)]">
                      {project.description}
                    </p>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} live demo`}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] transition-all hover:text-white hover:gap-3"
                    >
                      Live demo
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Experience Highlights ────────────────────────── */}
        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                Experience
              </p>
              <h2 className="font-display text-3xl font-extrabold leading-tight text-white md:text-5xl text-glow">
                Practical AI engineering backed by production web development.
              </h2>
              <p className="mt-5 font-body text-lg leading-relaxed text-[var(--text-secondary)]">
                I focus on turning useful AI ideas into working products, APIs,
                dashboards, and internal tools.
              </p>
              <Link
                to="/experience"
                className="mt-8 inline-flex items-center gap-2 btn-primary group"
              >
                <span className="relative z-10">View experience</span>
                <ArrowRight className="h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-2xl p-7"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-primary)] text-[var(--accent)] animate-pulse-glow">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">
                    Recent impact
                  </h3>
                  <p className="font-body text-sm text-[var(--text-secondary)]">
                    Nervesparks, MRU, Cognifyz
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {experienceHighlights.map(({ text, icon: ItemIcon }, i) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.2 + i * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group/item flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--bg-primary)]/70 p-4 transition-all duration-300 hover:border-[var(--accent)]/20 hover:bg-[var(--accent)]/5"
                  >
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--accent)]/10 text-[var(--accent)]">
                      <ItemIcon className="h-4 w-4" />
                    </div>
                    <p className="font-body text-sm leading-relaxed text-[var(--text-secondary)] group-hover/item:text-[var(--text-primary)] transition-colors">
                      {text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Contact CTA ─────────────────────────────────── */}
        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-7xl overflow-hidden rounded-2xl glass-panel gradient-border-card"
          >
            <div className="p-8 md:p-12">
              <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                    Contact
                  </p>
                  <h2 className="font-display text-3xl font-extrabold text-white md:text-4xl text-glow">
                    Have a role, product idea, or AI workflow to build?
                  </h2>
                  <p className="mt-4 max-w-2xl font-body text-[var(--text-secondary)]">
                    Reach me directly or use the contact form. The fastest route
                    is usually email or LinkedIn.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {[
                    {
                      href: "mailto:vvarunsharma64@gmail.com",
                      icon: Mail,
                      label: "Email",
                      external: false,
                    },
                    {
                      href: "https://www.linkedin.com/in/varun-sharma-155a17225",
                      icon: Linkedin,
                      label: "LinkedIn",
                      external: true,
                    },
                    {
                      href: "https://github.com/VarunWeb6",
                      icon: Github,
                      label: "GitHub",
                      external: true,
                    },
                  ].map(({ href, icon: Icon, label, external }) => (
                    <a
                      key={label}
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      aria-label={`${label} — Varun Sharma`}
                      className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 hover:shadow-[0_0_20px_var(--accent-muted)] hover:-translate-y-0.5"
                    >
                      <Icon className="h-4 w-4" />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
