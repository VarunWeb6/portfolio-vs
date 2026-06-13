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
} from "lucide-react";
import Hero from "./Hero";
import JobTracker from "../assets/images/job-tracker.png";
import KBHUB from "../assets/images/kb-hub.png";
import Dashboard from "../assets/images/dashboard.png";

const stats = [
  { value: "12+", label: "Shipped projects", icon: Code2 },
  { value: "3", label: "Professional roles", icon: Briefcase },
  { value: "40%", label: "AI cost reduction", icon: TrendingUp },
  { value: "1K+", label: "Users served", icon: Users },
];

const featuredProjects = [
  {
    title: "AI Knowledge Hub",
    description:
      "RAG platform that turns private knowledge bases into fast, citable answers for teams.",
    image: KBHUB,
    tags: ["Next.js", "pgvector", "RAG"],
    demo: "https://knowledge-hub-frontend-rh7e.vercel.app/",
  },
  {
    title: "Job Tracker with AI",
    description:
      "Application workflow dashboard with AI assistance for tracking opportunities and next steps.",
    image: JobTracker,
    tags: ["React", "MongoDB", "OpenAI"],
    demo: "https://job-tracker-khaki.vercel.app/",
  },
  {
    title: "AI Executive Dashboard",
    description:
      "Market dashboard with real-time stock views and AI-powered news summaries.",
    image: Dashboard,
    tags: ["AI", "Dashboard", "Real-time"],
    demo: "https://dashboard-frontend-beta-three.vercel.app",
  },
];

const experienceHighlights = [
  "Built LangChain and LangGraph proof-of-concepts for AI workflows.",
  "Implemented offline LLM solutions that reduced API costs by 40%.",
  "Developed full-stack LMS workflows with Redis-backed performance gains.",
];

const SectionHeading = ({ eyebrow, title, children }) => (
  <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
    <div>
      <p className="mb-3 font-body text-sm uppercase tracking-[0.18em] text-[var(--secondary)]">
        {eyebrow}
      </p>
      <h2 className="max-w-3xl font-display text-3xl font-extrabold leading-tight text-[var(--text-primary)] md:text-5xl">
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
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
          <div className="absolute inset-0 neon-glow-bg opacity-30 pointer-events-none" />
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {stats.map(({ value, label, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)]/80 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/50"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-primary)] text-[var(--secondary)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="font-display text-3xl font-extrabold text-white">{value}</p>
                  <p className="mt-1 font-body text-sm text-[var(--text-secondary)]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Featured Work"
              title="AI products and full-stack systems with clear user value."
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-5 py-3 font-body text-sm font-semibold text-[var(--text-primary)] transition-all hover:border-[var(--accent)] hover:bg-[var(--accent)]/10"
              >
                View all projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </SectionHeading>

            <div className="grid gap-6 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <article
                  key={project.title}
                  className="group overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--secondary)]/50"
                >
                  <div className="aspect-[16/10] overflow-hidden border-b border-[var(--border)] bg-[var(--bg-primary)]">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-[var(--border)] bg-[var(--bg-primary)] px-2 py-1 font-body text-xs text-[var(--text-secondary)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">{project.title}</h3>
                    <p className="mt-3 font-body text-sm leading-relaxed text-[var(--text-secondary)]">
                      {project.description}
                    </p>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} live demo`}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--secondary)] transition-colors hover:text-white"
                    >
                      Live demo
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="mb-3 font-body text-sm uppercase tracking-[0.18em] text-[var(--secondary)]">
                Experience
              </p>
              <h2 className="font-display text-3xl font-extrabold leading-tight text-white md:text-5xl">
                Practical AI engineering backed by production web development.
              </h2>
              <p className="mt-5 font-body text-lg leading-relaxed text-[var(--text-secondary)]">
                I focus on turning useful AI ideas into working products, APIs, dashboards, and internal tools.
              </p>
              <Link
                to="/experience"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-3 font-body text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-[0_0_24px_var(--accent-muted)]"
              >
                View experience
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)]/80 p-6 backdrop-blur-md">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-primary)] text-[var(--accent)]">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">Recent impact</h3>
                  <p className="font-body text-sm text-[var(--text-secondary)]">Nervesparks, MRU, Cognifyz</p>
                </div>
              </div>
              <div className="space-y-4">
                {experienceHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-[var(--border)] bg-[var(--bg-primary)]/70 p-4 font-body text-sm leading-relaxed text-[var(--text-secondary)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)]/80 p-8 backdrop-blur-md md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="mb-3 font-body text-sm uppercase tracking-[0.18em] text-[var(--secondary)]">
                  Contact
                </p>
                <h2 className="font-display text-3xl font-extrabold text-white md:text-4xl">
                  Have a role, product idea, or AI workflow to build?
                </h2>
                <p className="mt-4 max-w-2xl font-body text-[var(--text-secondary)]">
                  Reach me directly or use the contact form. The fastest route is usually email or LinkedIn.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:vvarunsharma64@gmail.com"
                  aria-label="Email Varun Sharma"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-3 text-sm font-semibold text-white transition-all hover:border-[var(--accent)] hover:bg-[var(--accent)]/10"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>
                <a
                  href="https://www.linkedin.com/in/varun-sharma-155a17225"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Varun Sharma LinkedIn profile"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-3 text-sm font-semibold text-white transition-all hover:border-[var(--secondary)] hover:bg-[var(--secondary)]/10"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/VarunWeb6"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Varun Sharma GitHub profile"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-3 text-sm font-semibold text-white transition-all hover:border-[var(--secondary)] hover:bg-[var(--secondary)]/10"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
