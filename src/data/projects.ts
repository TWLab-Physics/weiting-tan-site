export interface Project {
  id: string;
  title: string;
  keywords: string[];
  description: string;
  focus: string[];
  status: "active" | "completed" | "planned";
  image?: string;
  institution?: string;
}

export const projects: Project[] = [
  {
    id: "femtosecond-hydrogel",
    title: "Femtosecond Laser-Based Biomedical Organoid-on-Chip Fabrication",
    keywords: [
      "ultrafast optics",
      "femtosecond laser",
      "organoid-on-chip",
      "biomedical engineering",
    ],
    description:
      "Developing femtosecond laser techniques for fabricating biomedical organoid-on-chip devices. This project bridges ultrafast optics with biomedical engineering, focusing on precision microfabrication for organoid culture platforms at the ECNU Extreme Opto-electromechanical Laboratory under Prof. Ya Cheng (程亚).",
    focus: [
      "Femtosecond laser precision microfabrication",
      "Biomedical organoid-on-chip device engineering",
      "Hydrogel-based scaffold fabrication",
      "Integration of optical systems with microfluidic platforms",
    ],
    status: "active",
    institution: "ECNU Extreme Opto-electromechanical Laboratory (极端光机电实验室)",
    image: "/images/projects/femtosecond-setup.jpg",
  },
  {
    id: "fpga-optical-control",
    title: "FPGA-Based Feedback Control for Precision Optical Phase-Locking",
    keywords: ["FPGA", "optics", "laser stabilization", "control systems", "phase-locking"],
    description:
      "Digital control implementation for precision optical phase-locking systems using FPGA. Conducted at the State Key Laboratory of Precision Spectroscopy (量子光学实验室), ECNU. Designing real-time feedback control architectures for optical cavity stabilization.",
    focus: [
      "FPGA-based digital PID control implementation",
      "Real-time optical phase-locking system construction",
      "Low-latency signal processing pipelines",
      "Integration with precision optical systems",
    ],
    status: "active",
    institution: "ECNU State Key Laboratory of Precision Spectroscopy (精密光谱科学与技术国家重点实验室)",
    image: "/images/projects/fpga-hardware.jpg",
  },
  {
    id: "liver-organoids-review",
    title: "Liver Organoids-on-Chips (LoOCs) Review",
    keywords: ["organoids", "microfluidics", "liver disease", "DILI", "MPS"],
    description:
      "Comprehensive review of liver organoids-on-chips as high-fidelity platforms for modeling human liver physiology, pathology, and toxicology. Co-authored with Baoao Tan and Zhaobin Guo at Shanghai University of Traditional Chinese Medicine.",
    focus: [
      "Organoid generation from ASC and iPSC sources",
      "Liver-on-a-chip fabrication methods",
      "Hybrid OrgOC platform construction and failure modes",
      "Disease modeling: MASLD/MASH, ALD, DILI, fibrosis, HCC, viral hepatitis",
      "Integrated biosensing and analytical frameworks",
      "Translational prospects and regulatory barriers",
    ],
    status: "active",
    institution: "Shanghai University of Traditional Chinese Medicine (上海中医药大学)",
    image: "/images/projects/microscope.jpg",
  },
  {
    id: "liver-organoid-biology",
    title: "Biological Studies of Liver Organoids-on-Chips",
    keywords: ["organoids", "biology", "drug metabolism", "pharmacokinetics"],
    description:
      "Experimental biological validation of liver organoid-on-chip platforms at the Drug Metabolism & Pharmacokinetics Research Center, Shanghai University of Traditional Chinese Medicine. Investigating organoid viability, functional benchmarking, and drug response profiles.",
    focus: [
      "Liver organoid culture and biological characterization",
      "Drug metabolism and pharmacokinetic profiling",
      "Functional benchmarking (albumin, urea, CYP activity)",
      "Integration with microfluidic perfusion systems",
    ],
    status: "active",
    institution: "Shanghai University of Traditional Chinese Medicine (上海中医药大学) — Drug Metabolism & Pharmacokinetics Research Center",
    image: "/images/projects/microscope.jpg",
  },
];