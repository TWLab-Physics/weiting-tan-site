import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications — Weiting Tan",
};

const manuscripts = [
  {
    title:
      "Liver Organoids-on-Chips (LoOCs): High-Fidelity Platforms for Modeling Human Liver Physiology, Pathology, and Toxicology",
    authors: "WeiTing Tan, Baoao Tan, Zhaobin Guo",
    status: "Manuscript in preparation (2026)",
    journal: "",
    year: 2026,
    tags: ["organoids", "microfluidics", "liver disease", "DILI", "MPS", "review"],
    abstract:
      "Liver diseases together cause close to two million deaths a year and account for a disproportionate share of drug-development failures driven by unforeseen hepatotoxicity. This review summarizes current progress in liver organoid generation, liver-on-a-chip fabrication, and their integration into OrgOC platforms. It covers organoid assembly from ASC and iPSC sources, microfluidic fabrication from soft lithography through additive manufacturing, OrgOC construction and failure modes, and applications across MASLD, ALD, DILI, fibrosis, HCC, viral hepatitis, and autoimmune conditions.",
  },
  {
    title:
      "Femtosecond Laser-Based Fabrication of Biomedical Organoid-on-Chip Devices",
    authors: "W. Tan, et al.",
    status: "In preparation",
    journal: "",
    year: 2026,
    tags: ["femtosecond laser", "organoid-on-chip", "biomedical engineering", "microfabrication"],
  },
];

export default function PublicationsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-text)] mb-4">
        Publications
      </h1>

      <div className="card p-5 mb-8 border-l-4 border-l-[var(--color-accent)]">
        <p className="text-xs leading-relaxed text-[var(--color-text-secondary)]">
          This section contains works in preparation. No fake or fabricated
          publications are listed. All entries reflect genuine ongoing research
          and writing efforts at ECNU and Shanghai University of Traditional Chinese Medicine.
        </p>
      </div>

      <div className="space-y-6">
        {manuscripts.map((pub, i) => (
          <div key={i} className="card p-5">
            <div className="flex flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-semibold text-[var(--color-text)] leading-snug font-[family-name:var(--font-heading)]">
                  {pub.title}
                </h3>
                <span className="tag shrink-0 text-[10px]">{pub.status}</span>
              </div>
              <p className="text-xs text-[var(--color-text-secondary)]">
                {pub.authors}
              </p>
              {pub.abstract && (
                <p className="text-xs leading-relaxed text-[var(--color-text-secondary)] italic border-l-2 border-[var(--color-border)] pl-3">
                  {pub.abstract}
                </p>
              )}
              {pub.journal && (
                <p className="text-xs italic text-[var(--color-muted)]">
                  {pub.journal} ({pub.year})
                </p>
              )}
              <div className="flex flex-wrap gap-1">
                {pub.tags.map((t) => (
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

      {/* Affiliations */}
      <section className="mt-10 border-t border-[var(--color-border)] pt-8">
        <h2 className="section-title text-lg">Research Affiliations</h2>
        <div className="card p-5">
          <ul className="space-y-2 text-xs text-[var(--color-text-secondary)]">
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-accent)] mt-0.5">▸</span>
              <span>
                <strong className="text-[var(--color-text)]">ECNU Extreme Opto-electromechanical Laboratory (极端光机电实验室)</strong> — Advisor: Prof. Ya Cheng (程亚)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-accent)] mt-0.5">▸</span>
              <span>
                <strong className="text-[var(--color-text)]">Shanghai University of Traditional Chinese Medicine (上海中医药大学)</strong> — Drug Metabolism & Pharmacokinetics Research Center
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-accent)] mt-0.5">▸</span>
              <span>
                <strong className="text-[var(--color-text)]">ECNU State Key Laboratory of Precision Spectroscopy (精密光谱科学与技术国家重点实验室)</strong> — Quantum Optics Lab
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Open Science */}
      <section className="mt-8 border-t border-[var(--color-border)] pt-8">
        <h2 className="section-title text-lg">Open Science</h2>
        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
          I am committed to open and reproducible research. Code, data, and
          protocols associated with my publications will be made available
          through{" "}
          <a
            href="https://github.com/weiting-tan"
            className="content-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          upon publication.
        </p>
      </section>
    </div>
  );
}