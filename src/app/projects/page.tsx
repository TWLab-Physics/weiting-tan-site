import type { Metadata } from "next";
import { projects } from "@/data/projects";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects — Weiting Tan",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-text)] mb-4">
        Projects
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-10 max-w-xl">
        Active research and engineering projects across ultrafast optics,
        organoid-on-chip technology, and biomedical instrumentation — conducted at
        ECNU and Shanghai University of Traditional Chinese Medicine.
      </p>

      <div className="space-y-10">
        {projects.map((project, idx) => (
          <section
            key={project.id}
            id={project.id}
            className={`${idx > 0 ? "border-t border-[var(--color-border)] pt-10" : ""}`}
          >
            <div className="flex flex-col gap-4">
              <div>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h2 className="section-title mb-0 text-xl">
                    {project.title}
                  </h2>
                  <span className="tag shrink-0 mt-1 capitalize">
                    {project.status}
                  </span>
                </div>
                {project.institution && (
                  <p className="text-xs text-[var(--color-muted)] font-mono">
                    {project.institution}
                  </p>
                )}
              </div>

              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {project.description}
              </p>

              <div>
                <h3 className="text-xs font-semibold text-[var(--color-text)] uppercase tracking-wide mb-2">
                  Focus Areas
                </h3>
                <ul className="space-y-1">
                  {project.focus.map((f) => (
                    <li
                      key={f}
                      className="text-xs text-[var(--color-text-secondary)] flex items-start gap-2"
                    >
                      <span className="text-[var(--color-accent)] shrink-0 mt-0.5">
                        ▸
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {project.keywords.map((kw) => (
                  <span key={kw} className="tag">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 border-t border-[var(--color-border)] pt-8">
        <p className="text-sm text-[var(--color-text-secondary)]">
          Interested in collaboration or have questions about any of these
          projects?{" "}
          <Link href="/" className="content-link">
            Get in touch
          </Link>
          .
        </p>
      </div>
    </div>
  );
}