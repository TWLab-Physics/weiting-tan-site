import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research — Weiting Tan",
};

export default function ResearchPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-text)] mb-4">
        Research
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-4 max-w-xl">
        My research bridges ultrafast optics, biomedical engineering, and organoid-on-chip
        technology, aiming to develop enabling platforms for liver disease modeling
        and drug discovery.
      </p>

      {/* Research Institutions */}
      <div className="flex flex-wrap gap-2 mb-10">
        <span className="tag">ECNU Extreme Opto-electromechanical Lab</span>
        <span className="tag">ECNU Precision Spectroscopy Lab</span>
        <span className="tag">Shanghai UTCM Drug Metabolism Center</span>
      </div>

      <section className="space-y-10">
        {/* Femtosecond Laser */}
        <div>
          <h2 className="section-title">
            Femtosecond Laser Biomedical Organoid-on-Chip Fabrication
          </h2>
          <p className="text-xs text-[var(--color-muted)] mb-3 font-mono">
            ECNU Extreme Opto-electromechanical Laboratory (极端光机电实验室) · Advisor: Prof. Ya Cheng (程亚)
          </p>
          <div className="space-y-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
            <p>
              The core of my experimental work involves developing femtosecond
              laser-based fabrication techniques for biomedical organoid-on-chip
              platforms. This research leverages ultrafast laser pulses to create
              microscale structures and patterns in biomaterials—enabling
              high-precision fabrication of microfluidic devices designed for
              organoid culture and drug screening applications.
            </p>
            <p>
              The work bridges <strong className="text-[var(--color-text)]">ultrafast optics</strong> with{" "}
              <strong className="text-[var(--color-text)]">biomedical microdevice engineering</strong>,
              focusing on hydrogel-based scaffold fabrication, nonlinear energy
              deposition in viscoelastic biomaterials, and process optimization
              for reproducible device manufacturing under the guidance of
              Prof. Ya Cheng, a leading expert in femtosecond laser
              microfabrication.
            </p>

            <div>
              <h3 className="text-sm font-semibold text-[var(--color-text)] mb-2 mt-4">
                Key Techniques
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Femtosecond laser systems",
                  "Nonlinear optics",
                  "Hydrogel microfabrication",
                  "Microfluidic device design",
                  "High-precision laser writing",
                ].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--color-border)] pt-8">
          <h2 className="section-title">
            Liver Organoids-on-Chips (LoOCs) — Review & Biological Studies
          </h2>
          <p className="text-xs text-[var(--color-muted)] mb-3 font-mono">
            Shanghai University of Traditional Chinese Medicine (上海中医药大学) · Drug Metabolism & Pharmacokinetics Research Center
          </p>
          <div className="space-y-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
            <p>
              I am conducting a comprehensive review of liver organoids-on-chips
              as high-fidelity platforms for modeling human liver physiology,
              pathology, and toxicology. The review (co-authored with Baoao Tan
              and Zhaobin Guo) covers organoid generation from adult stem cell
              and iPSC sources, liver-on-a-chip fabrication methods, hybrid
              OrgOC construction strategies, current failure modes, and
              applications across major liver diseases including MASLD/MASH,
              ALD, DILI, fibrosis, HCC, and viral hepatitis.
            </p>
            <p>
              Complementing the review, I am also conducting experimental
              biological studies of liver organoid-on-chip platforms, focusing
              on organoid viability characterization, functional benchmarking
              (albumin and urea secretion, CYP enzyme activity), and drug
              metabolism/pharmacokinetic profiling under microfluidic
              perfusion.
            </p>

            <div>
              <h3 className="text-sm font-semibold text-[var(--color-text)] mb-2 mt-4">
                Key Techniques
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Organoid culture",
                  "Microfluidic perfusion",
                  "Drug metabolism assays",
                  "CYP activity profiling",
                  "Literature review",
                  "Pharmacokinetics",
                ].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--color-border)] pt-8">
          <h2 className="section-title">
            FPGA-Based Feedback Control for Precision Optical Phase-Locking
          </h2>
          <p className="text-xs text-[var(--color-muted)] mb-3 font-mono">
            ECNU State Key Laboratory of Precision Spectroscopy (精密光谱科学与技术国家重点实验室)
          </p>
          <div className="space-y-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
            <p>
              I conducted short-term research on constructing FPGA-based digital
              feedback control systems for precision optical phase-locking at the
              State Key Laboratory of Precision Spectroscopy. This work involved
              implementing real-time control algorithms on FPGA hardware for
              stabilizing optical cavity systems used in quantum optics
              experiments.
            </p>

            <div>
              <h3 className="text-sm font-semibold text-[var(--color-text)] mb-2 mt-4">
                Key Techniques
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "FPGA (Verilog/VHDL)",
                  "Digital PID control",
                  "Optical phase-locking",
                  "Laser stabilization",
                  "Quantum optics",
                ].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Directions */}
      <section className="mt-12 border-t border-[var(--color-border)] pt-8">
        <h2 className="section-title">Future Directions</h2>
        <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent)] mt-1">→</span>
            Multi-photon 3D patterning for vascularized organoid-on-chip scaffolds
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent)] mt-1">→</span>
            Integration of optical sensing with microfluidic organoid culture platforms
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent)] mt-1">→</span>
            Closed-loop optofluidic systems for real-time organoid monitoring
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent)] mt-1">→</span>
            High-throughput organoid-on-chip platforms for drug screening and DILI prediction
          </li>
        </ul>
      </section>
    </div>
  );
}