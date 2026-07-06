import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Github,
  GraduationCap,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="flex flex-col sm:flex-row gap-8 items-start mb-16">
        {/* Photo */}
        <div className="shrink-0">
          <img
            src="/images/portrait.jpg"
            alt="Weiting Tan"
            className="w-36 h-40 sm:w-40 sm:h-48 rounded-md border-2 border-[var(--color-border)] object-cover"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-text)] tracking-tight">
              {profile.name}
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] mt-1 font-[family-name:var(--font-heading)]">
              {profile.nameZh}
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <p className="text-sm text-[var(--color-text-secondary)] flex items-center gap-2">
              <GraduationCap className="w-4 h-4 shrink-0" />
              {profile.title} — {profile.affiliation}
            </p>
            <p className="text-sm text-[var(--color-text-secondary)] flex items-center gap-2">
              <MapPin className="w-4 h-4 shrink-0" />
              {profile.exchange}
            </p>
          </div>

          <div className="flex gap-3 mt-2">
            <a
              href={`mailto:${profile.contact.email}`}
              className="p-2 rounded-md border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/30 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`https://${profile.contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/30 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`https://${profile.contact.scholar}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/30 transition-colors"
              title="Google Scholar"
            >
              <BookOpen className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="mb-16">
        <div className="prose-custom space-y-3 text-sm leading-relaxed text-[var(--color-text-secondary)] max-w-2xl">
          {profile.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* Research Interests */}
      <section className="mb-16">
        <h2 className="section-title">Research Interests</h2>
        <div className="flex flex-wrap gap-2">
          {profile.researchInterests.map((interest) => (
            <span key={interest} className="tag">
              {interest}
            </span>
          ))}
        </div>
      </section>

      {/* Research Highlights */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-title mb-0">Research Highlights</h2>
          <Link
            href="/research"
            className="text-sm text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] flex items-center gap-1 transition-colors"
          >
            View all <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.slice(0, 4).map((project) => (
            <Link
              key={project.id}
              href={`/projects#${project.id}`}
              className="highlight-card group"
            >
              <h3 className="group-hover:text-[var(--color-accent)] transition-colors">
                {project.title}
              </h3>
              {project.institution && (
                <p className="text-xs text-[var(--color-muted)] -mt-1">
                  {project.institution}
                </p>
              )}
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.keywords.slice(0, 3).map((kw) => (
                  <span
                    key={kw}
                    className="text-[10px] px-2 py-0.5 rounded-full border border-[var(--color-border)] text-[var(--color-muted)]"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-16">
        <h2 className="section-title">Timeline</h2>
        <div className="relative pl-6 space-y-6">
          {[
            {
              year: "2026",
              title: "UC Berkeley Extension Visiting Student (CSC Scholarship)",
              desc: "Jan–Jun: Physics, Electrical Engineering & Biomedical Engineering. CSC national scholarship recipient.",
            },
            {
              year: "2025",
              title: "Singapore NTU Research Program",
              desc: "14-day research study at Nanyang Technological University. Awarded NTU Outstanding Student Certificate.",
            },
            {
              year: "2025",
              title: "CUPT — National 2nd Place, Team Captain",
              desc: "Led ECNU CUPT team to national 2nd place; Best Opponent Debater at Shanghai Regionals. Shanghai, East China, National tournaments.",
            },
            {
              year: "2024",
              title: "Began Research at ECNU & Shanghai UTCM",
              desc: "Optical phase-locking (FPGA) at State Key Lab of Precision Spectroscopy. Organoid-on-chip research at Extreme Opto-electromechanical Lab & Shanghai UTCM Drug Metabolism Center.",
            },
            {
              year: "2024 — Present",
              title: "B.Sc. Physics (Elite Program), ECNU",
              desc: "GPA 4.0 in core courses; full marks in Academic English. Advisor: Prof. Ya Cheng (程亚).",
            },
            {
              year: "2023",
              title: "Shanghai Youth Science & Technology Innovation Contest",
              desc: "1st Prize (市一等奖), Shanghai Municipal Level.",
            },
            {
              year: "2022",
              title: "Graduated Qibao High School (理科实验5班)",
              desc: "班长; scored 70/70 (A+) in Physics on Gaokao; IELTS 7.0; total Gaokao score 572.",
            },
          ].map((item, i) => (
            <div key={i} className="relative pl-8">
              <div className="timeline-dot" />
              <div className="text-xs font-medium text-[var(--color-muted)] font-mono mb-1">
                {item.year}
              </div>
              <div className="text-sm font-semibold text-[var(--color-text)]">
                {item.title}
              </div>
              <div className="text-xs text-[var(--color-text-secondary)] mt-0.5">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="section-title">Contact</h2>
        <p className="text-sm text-[var(--color-text-secondary)]">
          I am actively looking for PhD positions in biomedical optics,
          biophotonics, and organ-on-chip engineering. Feel free to reach out via{" "}
          <a
            href={`mailto:${profile.contact.email}`}
            className="content-link"
          >
            email
          </a>{" "}
          or WeChat: {profile.contact.wechat}.
        </p>
      </section>
    </div>
  );
}