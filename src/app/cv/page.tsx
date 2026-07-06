import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { Download, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "CV — Weiting Tan",
};

export default function CVPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-text)]">
            Curriculum Vitae
          </h1>
          <p className="text-sm text-[var(--color-text-secondary)] mt-1">
            Last updated: January 2026
          </p>
        </div>
        <a
          href="/cv.pdf"
          download
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--color-accent)] bg-[var(--color-accent)] text-white text-sm font-medium hover:bg-[var(--color-accent-hover)] transition-colors"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </a>
      </div>

      {/* Personal Information */}
      <section className="mb-10">
        <h2 className="section-title text-lg">Personal Information</h2>
        <div className="card p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-xs text-[var(--color-text-secondary)]">
            <p><span className="font-medium text-[var(--color-text)]">Name:</span> Weiting Tan (谭维庭)</p>
            <p><span className="font-medium text-[var(--color-text)]">Gender:</span> Male</p>
            <p><span className="font-medium text-[var(--color-text)]">DOB:</span> December 2005</p>
            <p><span className="font-medium text-[var(--color-text)]">Major:</span> Physics (Elite Program)</p>
            <p><span className="font-medium text-[var(--color-text)]">Email:</span> {profile.contact.email}</p>
            <p><span className="font-medium text-[var(--color-text)]">Phone:</span> {profile.contact.phone}</p>
            <p className="sm:col-span-2"><span className="font-medium text-[var(--color-text)]">WeChat:</span> {profile.contact.wechat}</p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-10">
        <h2 className="section-title text-lg">Education</h2>
        <div className="space-y-4">
          <div className="card p-5">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-text)]">
                  B.Sc. in Physics (Elite Program / 拔尖班)
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  East China Normal University (ECNU), School of Physics and Electronic Science
                </p>
              </div>
              <span className="text-xs font-mono text-[var(--color-muted)] shrink-0">
                2024 — Present
              </span>
            </div>
            <ul className="mt-2 space-y-0.5 text-xs text-[var(--color-text-secondary)] list-disc list-inside">
              <li>GPA 4.0 in first-year core courses; full marks in Academic English Writing & Speaking</li>
              <li>IELTS 7.5; Academic advisor: Prof. Ya Cheng (程亚), former Dean of the School of Physics and Electronic Science</li>
              <li>CUPT Team Captain — led ECNU to national 2nd place; Best Opponent Debater at Shanghai Regionals</li>
              <li>Outstanding Communist Youth League Member (优秀团员); Activist for Party Membership (入党积极分子)</li>
              <li>Member of ECNU football team & School of Physics football team; electric guitarist in self-formed band</li>
            </ul>
          </div>

          <div className="card p-5">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-text)]">
                  UC Berkeley Extension — Visiting Student (CSC Scholarship)
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Physics, Electrical Engineering & Biomedical Engineering
                </p>
              </div>
              <span className="text-xs font-mono text-[var(--color-muted)] shrink-0">
                Jan — Jun 2026
              </span>
            </div>
            <p className="text-xs text-[var(--color-text-secondary)] mt-2">
              Awarded the prestigious China Scholarship Council (CSC) national scholarship for international exchange.
            </p>
          </div>

          <div className="card p-5">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-text)]">
                  Singapore NTU — Winter Research Program
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Nanyang Technological University, Singapore
                </p>
              </div>
              <span className="text-xs font-mono text-[var(--color-muted)] shrink-0">
                Winter 2025
              </span>
            </div>
            <p className="text-xs text-[var(--color-text-secondary)] mt-2">
              14-day research study program. Selected via ECNU卓越学院. Awarded NTU Outstanding Student Certificate.
            </p>
          </div>

          <div className="card p-5">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-text)]">
                  Shanghai Qibao High School (理科实验5班)
                </h3>
              </div>
              <span className="text-xs font-mono text-[var(--color-muted)] shrink-0">
                2021 — 2024
              </span>
            </div>
            <ul className="mt-2 space-y-0.5 text-xs text-[var(--color-text-secondary)] list-disc list-inside">
              <li>Class Monitor (班长); Gaokao total score 572; Physics 70/70 (A+)</li>
              <li>IELTS 7.0; 2023 Shanghai Youth Science & Technology Innovation Contest — 1st Prize (市一等奖)</li>
              <li>2024 Shanghai High School Mathematical Modeling Contest — 3rd Prize (市三等奖)</li>
              <li>Outstanding Student Leader (优秀学生干部); inducted to Minhang District "青马工程"</li>
              <li>2021 Northern Olympiad Mathematics Contest — 1st Prize (一等奖)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Research Experience */}
      <section className="mb-10">
        <h2 className="section-title text-lg">Research Experience</h2>
        <div className="space-y-4">
          <div className="card p-5">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-text)]">
                  Femtosecond Laser Biomedical Organoid-on-Chip Fabrication
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  ECNU Extreme Opto-electromechanical Laboratory (极端光机电实验室)
                </p>
              </div>
              <span className="text-xs font-mono text-[var(--color-muted)] shrink-0">
                2024 — Present
              </span>
            </div>
            <p className="text-xs text-[var(--color-text-secondary)] mt-2">
              Developing femtosecond laser-based fabrication techniques for biomedical organoid-on-chip platforms, bridging ultrafast optics with biomedical microdevice engineering.
            </p>
          </div>

          <div className="card p-5">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-text)]">
                  FPGA-Based Feedback Control for Optical Phase-Locking
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  ECNU State Key Laboratory of Precision Spectroscopy (精密光谱科学与技术国家重点实验室)
                </p>
              </div>
              <span className="text-xs font-mono text-[var(--color-muted)] shrink-0">
                2024
              </span>
            </div>
            <p className="text-xs text-[var(--color-text-secondary)] mt-2">
              Short-term research on constructing FPGA-based feedback control systems for precision optical phase-locking applications in quantum optics.
            </p>
          </div>

          <div className="card p-5">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-text)]">
                  Liver Organoids-on-Chips: Literature Review & Biological Studies
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Shanghai University of Traditional Chinese Medicine (上海中医药大学) — Drug Metabolism & Pharmacokinetics Research Center
                </p>
              </div>
              <span className="text-xs font-mono text-[var(--color-muted)] shrink-0">
                2024 — Present
              </span>
            </div>
            <ul className="mt-2 space-y-0.5 text-xs text-[var(--color-text-secondary)] list-disc list-inside">
              <li>Comprehensive literature review: Liver Organoids-on-Chips as high-fidelity platforms for human liver physiology, pathology, and toxicology modeling</li>
              <li>Co-authored review manuscript with Baoao Tan and Zhaobin Guo</li>
              <li>Conducting biological validation studies of liver organoid-on-chip platforms for drug metabolism and pharmacokinetics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Honors & Awards */}
      <section className="mb-10">
        <h2 className="section-title text-lg">Honors & Awards</h2>
        <div className="card p-5">
          <ul className="space-y-1 text-xs text-[var(--color-text-secondary)] list-disc list-inside">
            <li><span className="font-medium text-[var(--color-text)]">2026:</span> CSC National Scholarship — UC Berkeley Extension Visiting Program</li>
            <li><span className="font-medium text-[var(--color-text)]">2025:</span> CUPT National Finals — 2nd Place, Team Captain; Best Opponent Debater (Shanghai Regionals)</li>
            <li><span className="font-medium text-[var(--color-text)]">2025:</span> NTU Outstanding Student Certificate — Singapore Winter Research Program</li>
            <li><span className="font-medium text-[var(--color-text)]">2025:</span> Outstanding Communist Youth League Member (优秀团员)</li>
            <li><span className="font-medium text-[var(--color-text)]">2023:</span> Shanghai Youth Science & Technology Innovation Contest — 1st Prize (市一等奖)</li>
            <li><span className="font-medium text-[var(--color-text)]">2024:</span> Shanghai High School Mathematical Modeling Contest — 3rd Prize (市三等奖)</li>
            <li><span className="font-medium text-[var(--color-text)]">2024:</span> Outstanding Student Leader (优秀学生干部)</li>
            <li><span className="font-medium text-[var(--color-text)]">2021:</span> Northern Olympiad Mathematics Contest — 1st Prize (一等奖)</li>
            <li><span className="font-medium text-[var(--color-text)]">2016:</span> National-Level-2 Football Athlete (足球国家二级运动员); Pudong Best Athlete (2015)</li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-10">
        <h2 className="section-title text-lg">Technical Skills</h2>
        <div className="card p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <h4 className="font-semibold text-[var(--color-text)] mb-1">Experimental</h4>
              <ul className="space-y-0.5 text-[var(--color-text-secondary)] list-disc list-inside">
                <li>Femtosecond laser systems & ultrafast optics</li>
                <li>Optical alignment & beam diagnostics</li>
                <li>FPGA development (Verilog/VHDL)</li>
                <li>Precision optical phase-locking</li>
                <li>Organoid culture & biological assays</li>
                <li>Microfluidic device fabrication</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[var(--color-text)] mb-1">Computational & Other</h4>
              <ul className="space-y-0.5 text-[var(--color-text-secondary)] list-disc list-inside">
                <li>Python (NumPy, SciPy, matplotlib)</li>
                <li>MATLAB</li>
                <li>Data analysis & visualization</li>
                <li>Scientific writing (LaTeX, academic English)</li>
                <li>Git version control</li>
                <li>Drug metabolism & PK analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="mb-10">
        <h2 className="section-title text-lg">Languages</h2>
        <div className="card p-5">
          <div className="text-xs space-y-1 text-[var(--color-text-secondary)]">
            <p>
              <span className="font-medium text-[var(--color-text)]">Chinese (Mandarin)</span> — Native
            </p>
            <p>
              <span className="font-medium text-[var(--color-text)]">English</span> — Advanced (IELTS 7.5; full marks in Academic English Writing & Speaking at ECNU)
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <div className="border-t border-[var(--color-border)] pt-8">
        <p className="text-xs text-[var(--color-text-secondary)] flex items-center gap-2">
          <Mail className="w-3.5 h-3.5" />
          For references or inquiries, contact{" "}
          <a href={`mailto:${profile.contact.email}`} className="content-link">
            {profile.contact.email}
          </a>
        </p>
      </div>
    </div>
  );
}