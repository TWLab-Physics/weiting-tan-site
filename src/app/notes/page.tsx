import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes — Weiting Tan",
};

const notes = [
  {
    date: "2026-01",
    title: "Notes on Cavitation Memory in Viscoelastic Materials",
    preview:
      "Exploring the physical mechanisms behind cavitation-memory effects in hydrogels during repeated femtosecond laser exposure. Observations from high-speed imaging experiments.",
    tags: ["optics", "hydrogel", "cavitation"],
  },
  {
    date: "2025-12",
    title: "FPGA PID Control for Optical Cavities: Implementation Notes",
    preview:
      "Design considerations for implementing digital PID controllers on FPGA for optical cavity lock stabilization — latency budgets, filter architectures, and integrator anti-windup.",
    tags: ["FPGA", "control systems", "optics"],
  },
  {
    date: "2025-10",
    title: "Organ-on-Chip Microfabrication: A Reading List",
    preview:
      "Curated bibliography of key papers on hydrogel-based microfabrication for organ-on-chip platforms, with annotations on fabrication techniques and biological validation.",
    tags: ["organoids", "microfluidics", "literature"],
  },
  {
    date: "2025-08",
    title: "Ultrafast Optics Fundamentals — Study Notes",
    preview:
      "Personal notes on ultrafast optics fundamentals: dispersion management, nonlinear pulse propagation, and measurement techniques. Compiled during self-study and coursework.",
    tags: ["optics", "ultrafast", "notes"],
  },
];

export default function NotesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-text)] mb-4">
        Notes
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-10 max-w-xl">
        Reading notes, experimental observations, and technical write-ups.
        These are informal and primarily for personal reference.
      </p>

      <div className="space-y-4">
        {notes.map((note, i) => (
          <div key={i} className="card p-5 group cursor-pointer">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[var(--color-muted)] shrink-0">
                  {note.date}
                </span>
                <h3 className="text-sm font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors font-[family-name:var(--font-heading)]">
                  {note.title}
                </h3>
              </div>
              <p className="text-xs leading-relaxed text-[var(--color-text-secondary)]">
                {note.preview}
              </p>
              <div className="flex flex-wrap gap-1 mt-1">
                {note.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2 py-0.5 rounded-full border border-[var(--color-border)] text-[var(--color-muted)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t border-[var(--color-border)] pt-8">
        <p className="text-xs text-[var(--color-muted)]">
          More detailed notes and full write-ups will be added over time. This
          section is meant to be an informal technical journal rather than a
          polished publication list.
        </p>
      </div>
    </div>
  );
}